package me.pr3.spectrumal.model.lobby;

import java.util.UUID;

public class JoinLobbyRequest {
    public UUID userId;
    public String userName;

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
