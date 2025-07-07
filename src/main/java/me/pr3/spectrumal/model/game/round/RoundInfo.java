package me.pr3.spectrumal.model.game.round;

import me.pr3.spectrumal.model.game.core.Point;
import me.pr3.spectrumal.model.game.core.WordGuess;

public class RoundInfo {
    public int round;
    public Spectrum spectrum;
    public Round.RoundState roundState;
    public Point target;
    public WordGuess wordGuess;

    public RoundInfo() {
    }

    public RoundInfo(Round.RoundState roundState, Spectrum spectrum, int round, Point target) {
        this.roundState = roundState;
        this.spectrum = spectrum;
        this.round = round;
        this.target = target;
    }

    public RoundInfo(Round.RoundState roundState, Spectrum spectrum, int round, WordGuess wordGuess) {
        this.roundState = roundState;
        this.spectrum = spectrum;
        this.round = round;
        this.wordGuess = wordGuess;
    }

    public int getRound() {
        return round;
    }

    public void setRound(int round) {
        this.round = round;
    }

    public Spectrum getSpectrum() {
        return spectrum;
    }

    public void setSpectrum(Spectrum spectrum) {
        this.spectrum = spectrum;
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
