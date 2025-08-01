package me.pr3.spectrumal.model.lobby;

import java.util.UUID;

public class DeleteLobbyRequest {
    private UUID lobbyId;

    public UUID getLobbyId() {
        return lobbyId;
    }

    public void setLobbyId(UUID lobbyId) {
        this.lobbyId = lobbyId;
    }
}
