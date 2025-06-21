package me.pr3.spectrumal.model.game.round;

import me.pr3.spectrumal.model.game.core.Dimension;
import me.pr3.spectrumal.model.game.core.Point;
import me.pr3.spectrumal.model.game.core.WordGuess;

import java.util.List;

public class RoundInfo {
    public int round;
    public List<Dimension> dimensions;
    public Round.RoundState roundState;
    public Point target;
    public WordGuess wordGuess;

    public RoundInfo() {
    }

    public RoundInfo(Round.RoundState roundState, List<Dimension> dimensions, int round, Point target) {
        this.roundState = roundState;
        this.dimensions = dimensions;
        this.round = round;
        this.target = target;
    }

    public RoundInfo(Round.RoundState roundState, List<Dimension> dimensions, int round,  WordGuess wordGuess) {
        this.roundState = roundState;
        this.dimensions = dimensions;
        this.round = round;
        this.wordGuess = wordGuess;
    }

    public int getRound() {
        return round;
    }

    public void setRound(int round) {
        this.round = round;
    }

    public List<Dimension> getDimensions() {
        return dimensions;
    }

    public void setDimensions(List<Dimension> dimensions) {
        this.dimensions = dimensions;
    }

    public Round.RoundState getRoundState() {
        return roundState;
    }

    public void setRoundState(Round.RoundState roundState) {
        this.roundState = roundState;
    }

    public Point getTarget() {
        return target;
    }

    public void setTarget(Point target) {
        this.target = target;
    }

    public WordGuess getWordGuess() {
        return wordGuess;
    }

    public void setWordGuess(WordGuess wordGuess) {
        this.wordGuess = wordGuess;
    }
}
