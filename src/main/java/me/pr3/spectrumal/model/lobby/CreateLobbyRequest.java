package me.pr3.spectrumal.model.lobby;

import me.pr3.spectrumal.model.user.User;

public class CreateLobbyRequest {
    public User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
