package me.pr3.spectrumal.model.game;

import me.pr3.spectrumal.model.game.core.Point;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class Score {
    Map<UUID, Integer> previousScores = new HashMap<>();
    Map<UUID, Integer> gainedScores = new HashMap<>();
    Map<UUID, Integer> newScores = new HashMap<>();
    Map<UUID, Point> userGuesses = new HashMap<>();


    public Map<UUID, Integer> getPreviousScores() {
        return previousScores;
    }

    public void setPreviousScores(Map<UUID, Integer> previousScores) {
        this.previousScores = previousScores;
    }

    public Map<UUID, Integer> getGainedScores() {
        return gainedScores;
    }

    public void setGainedScores(Map<UUID, Integer> gainedScores) {
        this.gainedScores = gainedScores;
    }

    public Map<UUID, Integer> getNewScores() {
        return newScores;
    }

    public void setNewScores(Map<UUID, Integer> newScores) {
        this.newScores = newScores;
    }

    public Map<UUID, Point> getUserGuesses() {
        return userGuesses;
    }

    public void setUserGuesses(Map<UUID, Point> userGuesses) {
        this.userGuesses = userGuesses;
    }
}
