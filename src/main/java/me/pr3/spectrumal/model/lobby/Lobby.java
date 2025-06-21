package me.pr3.spectrumal.model.lobby;

import me.pr3.spectrumal.model.user.User;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.CopyOnWriteArrayList;

public class Lobby {
    public UUID lobbyId;
    public String code;
    public CopyOnWriteArrayList<User> users = new CopyOnWriteArrayList<>();

}
