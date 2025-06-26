package me.pr3.spectrumal.service.game;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import me.pr3.spectrumal.model.game.GameState;
import me.pr3.spectrumal.model.game.Score;
import me.pr3.spectrumal.model.game.ScoreResponse;
import me.pr3.spectrumal.model.game.core.Point;
import me.pr3.spectrumal.model.game.round.Round;
import me.pr3.spectrumal.model.user.User;

import java.util.*;

@ApplicationScoped
public class ScoreService {

    @Inject
    GameCache gameCache;

    public void initGameScore(UUID gameId) {
        GameState game = gameCache.getCache().getIfPresent(gameId);
        if (game.getScore() == null) {
            Score score = new Score();
            for (var user : game.getUsers()) {
                score.getPreviousScores().put(user.getId(), 0);
            }
            for (var user : game.getUsers()) {
                score.getNewScores().put(user.getId(), 0);
            }
            game.setScore(score);
        }
    }

    public ScoreResponse getScores(UUID gameId) {
        GameState game = gameCache.getCache().getIfPresent(gameId);
        return new ScoreResponse(game.getScore());
    }

    public void recalculateScores(UUID gameId) {
        GameState game = gameCache.getCache().getIfPresent(gameId);
        Score score = game.getScore();
        score.setPreviousScores(score.getNewScores());
        score.setNewScores(new HashMap<>(Map.copyOf(score.getPreviousScores())));
        resetGainedScores(score);
        Round currentRound = game.getRounds().get(game.getRound() - 1);
        User currentUser = currentRound.userForCurrentPointGuess;
        Point targetPoint = currentRound.userTargets.get(currentUser.getId());
        Map<UUID, Point> userGuesses = currentRound.userPointGuesses.get(currentUser.getId());
        List<UUID> sortedUsers = getUsersSortedByDistanceToTarget(userGuesses, targetPoint);
        if(!sortedUsers.isEmpty()) {
            score.getGainedScores().put(sortedUsers.get(0), 3);
            score.getNewScores().put(sortedUsers.get(0), score.getPreviousScores().get(sortedUsers.get(0)) + 3);
        }
        if(sortedUsers.size() > 1) {
            score.getGainedScores().put(sortedUsers.get(1), 2);
            score.getNewScores().put(sortedUsers.get(1), score.getPreviousScores().get(sortedUsers.get(1)) + 2);
        }
        if(sortedUsers.size() > 2) {
            score.getGainedScores().put(sortedUsers.get(2), 1);
            score.getNewScores().put(sortedUsers.get(2), score.getPreviousScores().get(sortedUsers.get(2)) + 1);
        }
    }

    private void resetGainedScores(Score score) {
        score.getGainedScores().clear();
        for (UUID userId : score.getPreviousScores().keySet()) {
            score.getGainedScores().put(userId, 0);
        }
    }

    private List<UUID> getUsersSortedByDistanceToTarget(
            Map<UUID, Point> userGuesses,
            Point targetPoint
    ) {
        return userGuesses.entrySet().stream()
                .sorted(Map.Entry.comparingByValue(
                        Comparator.comparingDouble(p -> p.distanceTo(targetPoint))
                ))
                .map(Map.Entry::getKey)
                .toList();
    }

}
