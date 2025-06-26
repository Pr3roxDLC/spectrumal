package me.pr3.spectrumal.lobby;

import jakarta.inject.Inject;
import me.pr3.spectrumal.AbstractWeldTest;
import me.pr3.spectrumal.model.lobby.CreateLobbyResponse;
import me.pr3.spectrumal.model.lobby.Lobby;
import me.pr3.spectrumal.model.user.User;
import me.pr3.spectrumal.service.lobby.LobbyService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.UUID;

public class CreateLobbyTest extends AbstractWeldTest {

    @Inject
    private LobbyService lobbyService;

    void testCreateLobby(){
        UUID user1  = UUID.randomUUID();
        UUID user2  = UUID.randomUUID();

        CreateLobbyResponse createLobbyResponse1 = lobbyService.create(new User(user1, "User1"));
        CreateLobbyResponse createLobbyResponse2 = lobbyService.create(new User(user2, "User2"));
        Assertions.assertNotEquals(createLobbyResponse2.lobbyId, createLobbyResponse1.lobbyId);
        Assertions.assertNotEquals(createLobbyResponse2.code, createLobbyResponse1.code);
    }

}
