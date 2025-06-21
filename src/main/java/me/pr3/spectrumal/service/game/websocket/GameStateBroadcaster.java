package me.pr3.spectrumal.service.game.websocket;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.websocket.Session;
import me.pr3.spectrumal.model.user.User;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@ApplicationScoped
public class GameStateBroadcaster {

    private final Map<UUID, Session> sessionMap = new ConcurrentHashMap<>();

    public void register(UUID userId, Session session) {
        sessionMap.put(userId, session);
    }

    public void unregister(Session session) {
        sessionMap.entrySet().removeIf(entry -> entry.getValue().equals(session));
    }

    public void notify(List<User> recipients, Message message) {
        for (User recipient : recipients) {
            Session session = sessionMap.get(recipient.getId());
            if (session != null && session.isOpen()) {
                try {
                    session.getBasicRemote().sendText(encodeMessage(message));
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    private String encodeMessage(Message message) {
        StringBuilder sb = new StringBuilder();
        sb.append(message.type.name());
        sb.append('[');
        for (Iterator<Map.Entry<String, String>> iterator = message.data.entrySet().iterator(); iterator.hasNext(); ) {
            Map.Entry<String, String> entry = iterator.next();
            sb.append(entry.getKey());
            sb.append('=');
            sb.append(entry.getValue());
            if(iterator.hasNext()) {
                sb.append(',');
            }
        }
        sb.append(']');
        return sb.toString();
    }


}
