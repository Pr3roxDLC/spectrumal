package me.pr3.spectrumal.api.game;


import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.websocket.*;
import jakarta.websocket.server.ServerEndpoint;
import me.pr3.spectrumal.cdi.CDIConfigurator;
import me.pr3.spectrumal.service.game.websocket.GameStateBroadcaster;

import java.io.IOException;
import java.util.UUID;
import java.util.concurrent.CopyOnWriteArraySet;

@ApplicationScoped
@ServerEndpoint(value = "/ws/game", configurator = CDIConfigurator.class)
public class GameStateWebSocket {

    @Inject
    private GameStateBroadcaster broadcaster;

    @OnOpen
    public void onOpen(Session session) {
        String query = session.getQueryString(); // e.g., userId=abc-123
        UUID userId = extractUserId(query);
        if (userId != null) {
            broadcaster.register(userId, session);
            System.out.println("User " + userId + " connected.");
        } else {
            try {
                session.close(new CloseReason(CloseReason.CloseCodes.CANNOT_ACCEPT, "Missing or invalid userId"));
            } catch (Exception ignored) {}
        }
    }

    @OnClose
    public void onClose(Session session) {
        broadcaster.unregister(session);
    }

    @OnError
    public void onError(Session session, Throwable throwable) {
        System.err.println("WebSocket error: " + throwable.getMessage());
    }

    private UUID extractUserId(String query) {
        try {
            if (query == null) return null;
            for (String pair : query.split("&")) {
                String[] parts = pair.split("=");
                if (parts.length == 2 && parts[0].equals("userId")) {
                    return UUID.fromString(parts[1]);
                }
            }
        } catch (IllegalArgumentException ignored) {}
        return null;
    }
}
