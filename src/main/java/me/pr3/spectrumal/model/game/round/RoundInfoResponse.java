package me.pr3.spectrumal.model.game.round;

import java.util.UUID;

public class RoundInfoResponse {
    public UUID gameId;
    public int roundNumber;
    public RoundInfo round;

    public RoundInfoResponse(){

    }

    public RoundInfoResponse(UUID gameId, int roundNumber, RoundInfo round) {
        this.gameId = gameId;
        this.roundNumber = roundNumber;
        this.round = round;
    }

    public UUID getGameId() {
        return gameId;
    }

    public void setGameId(UUID gameId) {
        this.gameId = gameId;
    }

    public int getRoundNumber() {
        return roundNumber;
    }

    public void setRoundNumber(int roundNumber) {
        this.roundNumber = roundNumber;
    }

    public RoundInfo getRound() {
        return round;
    }

    public void setRound(RoundInfo round) {
        this.round = round;
    }
}
