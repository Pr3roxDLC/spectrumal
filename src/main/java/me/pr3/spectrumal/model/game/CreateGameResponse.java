package me.pr3.spectrumal.model.game;

import me.pr3.spectrumal.model.user.User;

import java.util.List;
import java.util.UUID;

public class CreateGameResponse {
    UUID id;
    List<User> users;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
