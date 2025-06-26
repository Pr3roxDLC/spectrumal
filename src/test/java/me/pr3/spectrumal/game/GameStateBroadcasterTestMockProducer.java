package me.pr3.spectrumal.game;

import jakarta.enterprise.inject.Produces;
import jakarta.inject.Singleton;
import me.pr3.spectrumal.service.game.websocket.GameStateBroadcaster;

import static org.mockito.Mockito.*;

public class GameStateBroadcasterTestMockProducer {

    public static final GameStateBroadcaster mockBroadcaster = mock(GameStateBroadcaster.class);

    @Produces
    @Singleton
    public GameStateBroadcaster produceMock() {
        return mockBroadcaster;
    }
}