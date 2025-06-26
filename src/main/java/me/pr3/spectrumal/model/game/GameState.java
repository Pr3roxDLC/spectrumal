package me.pr3.spectrumal.model.game;

import me.pr3.spectrumal.model.game.round.Round;
import me.pr3.spectrumal.model.user.User;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.CopyOnWriteArraySet;

public class GameState {
    boolean complete;
    int round;
    public CopyOnWriteArrayList<Round> rounds;
    public CopyOnWriteArrayList<User> users;
    public UUID lobbyOrigin;
    private Score score;

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(CopyOnWriteArrayList<User> users) {
        this.users = users;
    }

    public int getRound() {
        return round;
    }

    public void setRound(int round) {
        this.round = round;
    }

    public boolean isComplete() {
        return complete;
    }

    public void setComplete(boolean complete) {
        this.complete = complete;
    }

    public List<Round> getRounds() {
        return rounds;
    }

    public void setRounds(CopyOnWriteArrayList<Round> rounds) {
        this.rounds = rounds;
    }

    public UUID getLobbyOrigin() {
        return lobbyOrigin;
    }

    public void setLobbyOrigin(UUID lobbyOrigin) {
        this.lobbyOrigin = lobbyOrigin;
    }

    public Score getScore() {
        return score;
    }

    public void setScore(Score score) {
        this.score = score;
    }
}
