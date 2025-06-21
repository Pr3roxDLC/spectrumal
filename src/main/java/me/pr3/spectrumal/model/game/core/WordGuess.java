package me.pr3.spectrumal.model.game.core;

import java.util.UUID;

public class WordGuess {
    public UUID id;
    public String word;

    public WordGuess(UUID id, String word) {
        this.id = id;
        this.word = word;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }
}
