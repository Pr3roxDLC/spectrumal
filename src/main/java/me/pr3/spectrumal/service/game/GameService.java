package me.pr3.spectrumal.service.game;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import me.pr3.spectrumal.model.game.*;
import me.pr3.spectrumal.model.game.core.Dimension;
import me.pr3.spectrumal.model.game.core.Point;
import me.pr3.spectrumal.model.game.core.WordGuess;
import me.pr3.spectrumal.model.game.round.*;
import me.pr3.spectrumal.model.user.User;
import me.pr3.spectrumal.service.ai.SpectrumGenerator;
import me.pr3.spectrumal.service.game.websocket.GameStateBroadcaster;
import me.pr3.spectrumal.service.game.websocket.Message;
import me.pr3.spectrumal.service.lobby.LobbyCache;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.function.Function;
import java.util.stream.Collectors;

@ApplicationScoped
public class GameService {

    @Inject
    private GameCache gameCache;

    @Inject
    private LobbyCache lobbyCache;

    @Inject
    private GameStateBroadcaster broadcaster;

    @Inject
    private ScoreService scoreService;

    public RoundInfoResponse getRoundInfo(UUID id, int roundNumber, UUID player) {
        GameState state = gameCache.getCache().getIfPresent(id);
        assert state != null;
        Round round = state.getRounds().get(roundNumber - 1);
        if (round.roundState == Round.RoundState.FIND_CLUE) {
            RoundInfo roundInfo = new RoundInfo(round.roundState, round.spectrum, roundNumber, round.userTargets.get(player));
            RoundInfoResponse roundInfoResponse = new RoundInfoResponse();
            roundInfoResponse.setRound(roundInfo);
            roundInfoResponse.setRoundNumber(roundNumber);
            roundInfoResponse.setGameId(id);
            return roundInfoResponse;
        } else if (round.roundState == Round.RoundState.FIND_POINT) {
            WordGuess wordGuess = round.userWords.get(round.userForCurrentPointGuess.getId());
            RoundInfo roundInfo = new RoundInfo(round.roundState, round.spectrum, roundNumber, wordGuess);
            RoundInfoResponse roundInfoResponse = new RoundInfoResponse();
            roundInfoResponse.setRound(roundInfo);
            roundInfoResponse.setRoundNumber(roundNumber);
            roundInfoResponse.setGameId(id);
            return roundInfoResponse;
        }else {
            RoundInfoResponse roundInfoResponse = new RoundInfoResponse();
            roundInfoResponse.round = new RoundInfo();
            roundInfoResponse.round.roundState = Round.RoundState.OVER;
            return roundInfoResponse;
        }

    }

    public CreateGameResponse createGame(UUID lobbyId) {

        if(gameCache.getCache().asMap().values().stream().anyMatch(game -> game.getLobbyOrigin().equals(lobbyId))) {
            throw new IllegalStateException("Game has already been created from lobby");
        }

        CopyOnWriteArrayList<User> users = lobbyCache.getIdCache().getIfPresent(lobbyId).users;
        GameState gameState = new GameState();
        UUID id = UUID.randomUUID();
        gameState.lobbyOrigin = lobbyId;
        gameState.setUsers(users);
        gameState.setRound(1);
        gameState.setRounds(new CopyOnWriteArrayList<>());
        gameState.getRounds().add(createRound(gameState));
        gameCache.getCache().put(id, gameState);
        scoreService.initGameScore(id);
        CreateGameResponse createGameResponse = new CreateGameResponse();
        createGameResponse.setId(id);
        createGameResponse.setUsers(users);
        broadcaster.notify(users, new Message(Message.Type.LOBBY_GAME_START, Map.of("id", id.toString())));
        return createGameResponse;
    }

    private Round createRound(GameState gameState) {
        Round round = new Round();
        round.roundState = Round.RoundState.FIND_CLUE;
        round.spectrum = new Spectrum(List.of(new Dimension("Hot", "Ick"), new Dimension("Useful", "Useless")), "A Skill to have");

        for (User user : gameState.getUsers()) {
            Random random = new Random();
            float dim1 = random.nextFloat() * 2 - 1;
            float dim2 = random.nextFloat() * 2 - 1;
            Point point = new Point(dim1, dim2);
            round.userTargets.put(user.getId(), point);
        }

        return round;
    }

    public WordGuessResponse wordGuess(UUID gameId, UUID player, WordGuessRequest wordGuessRequest) {
        GameState state = gameCache.getCache().getIfPresent(gameId);
        assert state != null;
        Round round = state.getRounds().get(state.getRound() - 1);
        assert round.roundState == Round.RoundState.FIND_CLUE;
        round.userWords.put(player, new WordGuess(player, wordGuessRequest.getWord()));

        boolean foundMissingWord = false;
        for (User user : state.getUsers()) {
            if (!round.userWords.containsKey(user.getId())) {
                foundMissingWord = true;
                break;
            }
        }

        if (!foundMissingWord) {
            round.roundState = Round.RoundState.FIND_POINT;
            round.userForCurrentPointGuess = state.users.getFirst();
            round.userPointGuesses = new ConcurrentHashMap<>(
                    state.users
                            .stream()
                            .map(User::getId)
                            .collect(Collectors.
                                    toMap(Function.identity(), (id) -> new ConcurrentHashMap<>())));
            broadcaster.notify(state.users, new Message(Message.Type.SHOW_GUESS_CLUE_SCREEN, Map.of()));
        }

        WordGuessResponse wordGuessResponse = new WordGuessResponse();
        wordGuessResponse.setShowWaitingScreen(foundMissingWord);

        return wordGuessResponse;
    }

    public ScoreResponse getScores(UUID gameId) {
        return scoreService.getScores(gameId);
    }

    public void pointGuess(UUID gameId, UUID player, PointGuessRequest pointGuessRequest) {
        GameState state = gameCache.getCache().getIfPresent(gameId);
        assert state != null;
        Round round = state.getRounds().get(state.getRound() - 1);
        assert round.roundState == Round.RoundState.FIND_POINT;
        round.userPointGuesses.get(round.userForCurrentPointGuess.getId()).put(player, pointGuessRequest.getGuess());

        boolean foundMissingPlayers = false;
        for (User user : state.users) {
            if(!round.userPointGuesses.get(round.userForCurrentPointGuess.getId()).containsKey(user.getId())) {
                foundMissingPlayers = true;
                break;
            }
        }

        if(!foundMissingPlayers) {
            //Select Next user;
            int nextUserIndex = state.users.indexOf(round.userForCurrentPointGuess) + 1;
            if(nextUserIndex < state.users.size()) {
                scoreService.recalculateScores(gameId);
                round.userForCurrentPointGuess =  state.users.get(nextUserIndex);
                broadcaster.notify(state.users, new Message(Message.Type.SHOW_SCORE_SCREEN, Map.of()));
                new Timer().schedule(new TimerTask() {
                    @Override
                    public void run() {
                        broadcaster.notify(state.users, new Message(Message.Type.SHOW_GUESS_CLUE_SCREEN, Map.of()));
                    }
                }, 10000);
            }else {
                scoreService.recalculateScores(gameId);
                round.roundState = Round.RoundState.OVER;
                state.getRounds().add(createRound(state));
                state.setRound(state.getRound() + 1);
                broadcaster.notify(state.users, new Message(Message.Type.SHOW_SCORE_SCREEN, Map.of()));
                new Timer().schedule(new TimerTask() {
                    @Override
                    public void run() {
                        broadcaster.notify(state.users, new Message(Message.Type.SHOW_GIVE_CLUE_SCREEN, Map.of()));
                    }
                }, 10000);            }
        }
    }

}
