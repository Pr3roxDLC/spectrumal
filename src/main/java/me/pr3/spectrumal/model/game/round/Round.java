package me.pr3.spectrumal.model.game.round;

import me.pr3.spectrumal.model.game.core.Dimension;
import me.pr3.spectrumal.model.game.core.Point;
import me.pr3.spectrumal.model.game.core.WordGuess;
import me.pr3.spectrumal.model.user.User;

import java.util.List;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

public class Round {
    public int round;
    public List<Dimension> dimensions;
    public RoundState roundState;
    //The location on the spectrum users are supposed to find a word for
    public ConcurrentHashMap<UUID, Point> userTargets = new ConcurrentHashMap<>();
    //The word each user came up with for their point
    public ConcurrentHashMap<UUID, WordGuess> userWords = new ConcurrentHashMap<>();
    //Map<userWordGuessId, Map<userId, pointGuess>>
    public ConcurrentHashMap<UUID, ConcurrentHashMap<UUID, Point>> userPointGuesses = new ConcurrentHashMap<>();
    public User userForCurrentPointGuess;

    public enum RoundState{
        FIND_CLUE,
        FIND_POINT,
        SHOW_RESULTS,
        OVER
    }

}
