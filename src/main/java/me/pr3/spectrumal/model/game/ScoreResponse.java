package me.pr3.spectrumal.model.game;

import java.util.Map;
import java.util.UUID;

public class ScoreResponse {
    public Score score;

    public ScoreResponse(Score score) {
        this.score = score;
    }

    public Score getScore() {
        return score;
    }

    public void setScore(Score score) {
        this.score = score;
    }
}
