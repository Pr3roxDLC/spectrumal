package me.pr3.spectrumal.service.game.websocket;

import java.util.Map;

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

    public enum Type{
        LOBBY_PLAYER_JOIN,
        LOBBY_PLAYER_LEAVE,
        LOBBY_GAME_START,
        GAME_START,
        GAME_NEXT_ROUND,
        GAME_END,
        ROUND_USERS_CREATED_ALL_CLUES,
        ROUND_USERS_CREATED_ALL_POINTS
    }
}
