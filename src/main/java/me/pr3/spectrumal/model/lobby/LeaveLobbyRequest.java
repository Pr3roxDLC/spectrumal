package me.pr3.spectrumal.model.lobby;

import java.util.UUID;

public class LeaveLobbyRequest {
    UUID userId;
    UUID lobbyId;

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public UUID getLobbyId() {
        return lobbyId;
    }

    public void setLobbyId(UUID lobbyId) {
        this.lobbyId = lobbyId;
    }
}
