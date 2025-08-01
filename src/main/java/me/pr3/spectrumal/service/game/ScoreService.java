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
        List<ScoringEntry> sortedUsers = getUsersSortedByDistanceToTarget(userGuesses, targetPoint);
        for (ScoringEntry user : sortedUsers) {
            int gainedScore = user.score();
            score.getGainedScores().put(user.userId(), gainedScore);
            int previousScore = score.getNewScores().get(user.userId());
            score.getPreviousScores().put(user.userId(), previousScore);
            score.getNewScores().put(user.userId(), previousScore + gainedScore);
        }
    }

    private void resetGainedScores(Score score) {
        score.getGainedScores().clear();
        for (UUID userId : score.getPreviousScores().keySet()) {
            score.getGainedScores().put(userId, 0);
        }
    }

    private List<ScoringEntry> getUsersSortedByDistanceToTarget(
            Map<UUID, Point> userGuesses,
            Point targetPoint
    ) {
        return userGuesses.entrySet().stream()
                .map(entry -> new ScoringEntry(entry.getKey(), calculateScore(entry.getValue(), targetPoint)))
                .sorted(Comparator.comparingDouble(ScoringEntry::score))
                .toList();
    }

    private int calculateScore(Point value, Point targetPoint) {
        double dx = value.dim1 - targetPoint.dim1;
        double dy = value.dim2 - targetPoint.dim2;
        double distance = Math.sqrt(dx * dx + dy * dy); // max. Distanz ist ca. 2.828
        double normalized = distance / Math.sqrt(8); // Normierung auf [0,1]
        return (int)(1000 * Math.exp(-4 * normalized)); // Dropoff-Faktor anpassbar
    }

    public record ScoringEntry(UUID userId, int score) {}

}
