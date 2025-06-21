package me.pr3.spectrumal.model.lobby;

import me.pr3.spectrumal.model.user.User;

import java.util.List;
import java.util.UUID;

public class JoinLobbyResponse {
    UUID lobbyId;
    List<User> users;

    public UUID getLobbyId() {
        return lobbyId;
    }

    public void setLobbyId(UUID lobbyId) {
        this.lobbyId = lobbyId;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
