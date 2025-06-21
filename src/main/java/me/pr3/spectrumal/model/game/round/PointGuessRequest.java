package me.pr3.spectrumal.model.game.round;

import me.pr3.spectrumal.model.game.core.Point;

public class PointGuessRequest {
    public Point guess;

    public Point getGuess() {
        return guess;
    }

    public void setGuess(Point guess) {
        this.guess = guess;
    }
}
