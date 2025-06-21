package me.pr3.spectrumal.service.lobby;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import jakarta.enterprise.context.ApplicationScoped;
import me.pr3.spectrumal.model.game.GameState;
import me.pr3.spectrumal.model.lobby.Lobby;

import java.util.UUID;

@ApplicationScoped
public class LobbyCache {
    private final Cache<UUID, Lobby> idCache = Caffeine.newBuilder().build();
    private final Cache<String, Lobby> codeCache = Caffeine.newBuilder().build();

    public Cache<UUID, Lobby> getIdCache() {
        return idCache;
    }

    public Cache<String, Lobby> getCodeCache() {
        return codeCache;
    }
}
