package me.pr3.spectrumal.service.game.websocket;

import java.util.Map;
import java.util.Objects;

public class Message {

    public Type type;
    public Map<String, String> data;

    public Message(Type type, Map<String, String> data) {
        this.type = type;
        this.data = data;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public Map<String, String> getData() {
        return data;
    }

    public void setData(Map<String, String> data) {
        this.data = data;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Message message = (Message) o;
        return type == message.type && Objects.equals(data, message.data);
    }

    @Override
    public int hashCode() {
        return Objects.hash(type, data);
    }

    public enum Type{
        LOBBY_PLAYER_JOIN,
        LOBBY_PLAYER_LEAVE,
        LOBBY_GAME_START,
        SHOW_GIVE_CLUE_SCREEN,
        SHOW_GUESS_CLUE_SCREEN,
        SHOW_SCORE_SCREEN,
        SHOW_GAME_FINISHED_SCREEN,
    }
}
