package me.pr3.spectrumal.game;

import jakarta.inject.Inject;
import me.pr3.spectrumal.AbstractWeldTest;
import me.pr3.spectrumal.service.game.websocket.GameStateBroadcaster;
import org.junit.jupiter.api.Test;

public class GameStateBroadcasterTest extends AbstractWeldTest {
    @Inject
    private GameStateBroadcaster gameStateBroadcaster;

    @Test
    public void testJoinGameStateBroadcaster(){
    }
}
