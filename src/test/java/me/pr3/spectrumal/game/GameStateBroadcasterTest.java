package me.pr3.spectrumal.game;

import jakarta.inject.Inject;
import me.pr3.spectrumal.AbstractWeldTest;
import me.pr3.spectrumal.model.game.CreateGameResponse;
import me.pr3.spectrumal.model.game.core.Point;
import me.pr3.spectrumal.model.game.round.*;
import me.pr3.spectrumal.model.lobby.CreateLobbyResponse;
import me.pr3.spectrumal.model.lobby.JoinLobbyRequest;
import me.pr3.spectrumal.model.user.User;
import me.pr3.spectrumal.service.game.GameService;
import me.pr3.spectrumal.service.game.websocket.GameStateBroadcaster;
import me.pr3.spectrumal.service.game.websocket.Message;
import me.pr3.spectrumal.service.lobby.LobbyService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

import static org.mockito.Mockito.*;

public class GameStateBroadcasterTest extends AbstractWeldTest {

    @Inject
    private GameService gameService;

    @Override
    protected Class<?>[] getMockProducerClasses() {
        return new Class<?>[]{GameStateBroadcasterTestMockProducer.class};
    }

    @Override
    protected Set<Class<?>> getExcludedBeanClasses() {
        return Set.of(GameStateBroadcaster.class);
    }

    @Inject
    private LobbyService lobbyService;

    @Test
    public void testGameStateBroadcaster() {

        //Create Lobby and Users
        UUID user1Id = UUID.randomUUID();
        User user1 = new User(user1Id, "User1");
        UUID user2Id = UUID.randomUUID();
        User user2 = new User(user2Id, "User2");

        CreateLobbyResponse response = lobbyService.create(user1);

        //Join Lobby with User2
        JoinLobbyRequest request = new JoinLobbyRequest();
        request.setId(user2Id);
        request.setName(user2.getName());

        lobbyService.joinLobby(response.code, request);

        //Verify that users were notified of the lobby join
        verify(GameStateBroadcasterTestMockProducer.mockBroadcaster, times(1)).notify(anyList(), eq(new Message(Message.Type.LOBBY_PLAYER_JOIN, Map.of(
                "name", user2.getName(),
                "id", user2Id.toString()
        ))));

        //Create Game
        CreateGameResponse createGameResponse = gameService.createGame(response.lobbyId);
        UUID gameId = createGameResponse.getId();

        //Verify that users were notified of the game creation
        verify(GameStateBroadcasterTestMockProducer.mockBroadcaster, times(1))
                .notify(anyList(), eq(new Message(Message.Type.LOBBY_GAME_START, Map.of("id", gameId.toString()))));

        //Get the round info for the first round
        RoundInfoResponse findClueRoundInfo = gameService.getRoundInfo(gameId, 1, user1Id);

        // Verify that the round info is correct
        Assertions.assertEquals(Round.RoundState.FIND_CLUE, findClueRoundInfo.getRound().getRoundState());
        Assertions.assertEquals(1, findClueRoundInfo.getRoundNumber());
        Assertions.assertNotNull(findClueRoundInfo.getRound().getTarget());

        //Users guess words
        WordGuessRequest wordGuessRequest1 = new WordGuessRequest();
        String testWord1 = "TestWord1";
        wordGuessRequest1.setWord(testWord1);
        gameService.wordGuess(gameId, user1Id, wordGuessRequest1);
        WordGuessRequest wordGuessRequest2 = new WordGuessRequest();
        String testWord2 = "TestWord2";
        wordGuessRequest2.setWord(testWord2);
        gameService.wordGuess(gameId, user2Id, wordGuessRequest2);

        //Verify that the users were notified that all guesses were made
        verify(GameStateBroadcasterTestMockProducer.mockBroadcaster, times(1))
                .notify(anyList(), eq(new Message(Message.Type.SHOW_GUESS_CLUE_SCREEN, Map.of())));

        //Get the round info after word guesses
        RoundInfoResponse findPointRoundInfo1 = gameService.getRoundInfo(gameId, 1, user1Id);

        // Verify that the round info is correct after word guesses
        Assertions.assertEquals(Round.RoundState.FIND_POINT, findPointRoundInfo1.getRound().getRoundState());
        Assertions.assertEquals(1, findPointRoundInfo1.getRoundNumber());
        Assertions.assertTrue(Set.of(testWord1, testWord2).contains(findPointRoundInfo1.getRound().getWordGuess().getWord()));

        //Users guess points
        PointGuessRequest pointGuessRequest1 = new PointGuessRequest();
        pointGuessRequest1.guess = new Point(0,0);
        gameService.pointGuess(gameId, user1Id, pointGuessRequest1);
        PointGuessRequest pointGuessRequest2 = new PointGuessRequest();
        pointGuessRequest2.guess = new Point(1,1);
        gameService.pointGuess(gameId, user2Id, pointGuessRequest2);

        //Verify that the users were notified that all users made their point guesses
        verify(GameStateBroadcasterTestMockProducer.mockBroadcaster, times(1))
                .notify(anyList(), eq(new Message(Message.Type.SHOW_SCORE_SCREEN, Map.of())));

        //Verify that after the 10-second delay, the users were notified to show the next screen
        try {
            Thread.sleep(12000);

            verify(GameStateBroadcasterTestMockProducer.mockBroadcaster, times(2))
                    .notify(anyList(), eq(new Message(Message.Type.SHOW_GUESS_CLUE_SCREEN, Map.of())));

        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        //Get the round info after point guesses
        RoundInfoResponse findPointRoundInfo2= gameService.getRoundInfo(gameId, 1, user1Id);

        //Verify that the new word to guess the points for is different
        Assertions.assertNotEquals(findPointRoundInfo1.getRound().getWordGuess().word, findPointRoundInfo2.getRound().getWordGuess().word);

        //Verify that the round info is correct after point guesses
        Assertions.assertEquals(Round.RoundState.FIND_POINT, findPointRoundInfo1.getRound().getRoundState());
        Assertions.assertEquals(1, findPointRoundInfo1.getRoundNumber());
        Assertions.assertTrue(Set.of(testWord1, testWord2).contains(findPointRoundInfo1.getRound().getWordGuess().getWord()));

        //Users guess points again
        PointGuessRequest pointGuessRequest3 = new PointGuessRequest();
        pointGuessRequest3.guess = new Point(0,0);
        gameService.pointGuess(gameId, user1Id, pointGuessRequest3);
        PointGuessRequest pointGuessRequest4 = new PointGuessRequest();
        pointGuessRequest4.guess = new Point(1,1);
        gameService.pointGuess(gameId, user2Id, pointGuessRequest4);

        //Verify that the users were notified to show the score screen
        verify(GameStateBroadcasterTestMockProducer.mockBroadcaster, times(2))
                .notify(anyList(), eq(new Message(Message.Type.SHOW_SCORE_SCREEN, Map.of())));

        //Verify that after the 10-second delay the users were notified to show the give clue screen
        try {
            Thread.sleep(12000);

            verify(GameStateBroadcasterTestMockProducer.mockBroadcaster, times(1))
                    .notify(anyList(), eq(new Message(Message.Type.SHOW_GIVE_CLUE_SCREEN, Map.of())));

        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        //Get round 1 info again
        RoundInfoResponse roundOverRoundInfo = gameService.getRoundInfo(gameId, 1, user1Id);

        //Assert that round 1 is now over
        Assertions.assertEquals(Round.RoundState.OVER, roundOverRoundInfo.getRound().getRoundState());

        //Get round 2 info
        RoundInfoResponse round2RoundInfo = gameService.getRoundInfo(gameId, 2, user1Id);

        //Assert round info is correct
        Assertions.assertEquals(Round.RoundState.FIND_CLUE, round2RoundInfo.getRound().getRoundState());
        Assertions.assertEquals(2, round2RoundInfo.getRoundNumber());
        Assertions.assertNotNull(round2RoundInfo.getRound().getTarget());



    }


}
