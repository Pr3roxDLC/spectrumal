package me.pr3.spectrumal.game;

import jakarta.inject.Inject;
import me.pr3.spectrumal.AbstractWeldTest;
import me.pr3.spectrumal.model.lobby.CreateLobbyResponse;
import me.pr3.spectrumal.model.lobby.JoinLobbyRequest;
import me.pr3.spectrumal.model.user.User;
import me.pr3.spectrumal.service.game.websocket.GameStateBroadcaster;
import me.pr3.spectrumal.service.lobby.LobbyService;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.Set;
import java.util.UUID;

import static org.mockito.Mockito.*;

public class GameStateBroadcasterTest extends AbstractWeldTest {

    @Override
    protected Class<?>[] getMockProducerClasses() {
        return new Class<?>[]{GameStateBroadcasterTestMockProducer.class};
    }

    @Override
    protected Set<Class<?>> getExcludedBeanClasses() {
        return Set.of(GameStateBroadcaster.class);
    }

    @Inject
    private LobbyService lobbyService;

    @Test
    public void testJoinGameStateBroadcaster() {
        UUID user1Id = UUID.randomUUID();
        User user1 = new User(user1Id, "User1");
        UUID user2Id = UUID.randomUUID();
        User user2 = new User(user2Id, "User2");

        CreateLobbyResponse response = lobbyService.create(user1);

        JoinLobbyRequest request = new JoinLobbyRequest();
        request.setId(user2Id);
        request.setName(user2.getName());

        lobbyService.joinLobby(response.code, request);

        // ✅ Verify interaction with the shared mock instance
        verify(GameStateBroadcasterTestMockProducer.mockBroadcaster, times(1)).notify(anyList(), any());
    }

}
