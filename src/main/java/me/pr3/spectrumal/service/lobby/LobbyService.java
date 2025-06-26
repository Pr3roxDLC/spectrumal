package me.pr3.spectrumal.service.lobby;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import me.pr3.spectrumal.model.lobby.CreateLobbyResponse;
import me.pr3.spectrumal.model.lobby.JoinLobbyRequest;
import me.pr3.spectrumal.model.lobby.JoinLobbyResponse;
import me.pr3.spectrumal.model.lobby.Lobby;
import me.pr3.spectrumal.model.user.User;
import me.pr3.spectrumal.service.game.websocket.GameStateBroadcaster;
import me.pr3.spectrumal.service.game.websocket.Message;
import org.apache.commons.lang3.RandomStringUtils;

import java.util.Map;
import java.util.Random;
import java.util.UUID;

@ApplicationScoped
public class LobbyService {
    @Inject
    private LobbyCache lobbyCache;

    @Inject
    private GameStateBroadcaster broadcaster;

    public CreateLobbyResponse create(User initiator) {
        CreateLobbyResponse createLobbyResponse = new CreateLobbyResponse();
        createLobbyResponse.lobbyId = UUID.randomUUID();
        createLobbyResponse.code = RandomStringUtils.random(6, 0, 0, true, true, null, new Random()).toUpperCase();
        Lobby lobby = new Lobby();
        lobby.users.add(initiator);
        lobby.lobbyId = createLobbyResponse.lobbyId;
        lobby.code = createLobbyResponse.code;
        lobbyCache.getCodeCache().put(lobby.code, lobby);
        lobbyCache.getIdCache().put(lobby.lobbyId, lobby);
        return createLobbyResponse;
    }

    public JoinLobbyResponse joinLobby(String code, JoinLobbyRequest request) {
        Lobby lobby = lobbyCache.getCodeCache().getIfPresent(code);
        broadcaster.notify(lobby.users, new Message(Message.Type.LOBBY_PLAYER_JOIN, Map.of("id", request.id.toString(), "name", request.name)));
        lobby.users.add(new User(request.id, request.name));
        JoinLobbyResponse joinLobbyResponse = new JoinLobbyResponse();
        joinLobbyResponse.setLobbyId(lobby.lobbyId);
        joinLobbyResponse.setUsers(lobby.users);
        return joinLobbyResponse;
    }
}
