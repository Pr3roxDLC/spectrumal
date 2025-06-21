package me.pr3.spectrumal.service.game;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.ApplicationScoped;
import me.pr3.spectrumal.model.game.GameState;

import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;


@ApplicationScoped
public class GameCache {
    private final Cache<UUID, GameState> cache = Caffeine.newBuilder().build();

    public Cache<UUID, GameState> getCache() {
        return cache;
    }

    @PostConstruct
    public void init() {
        try (ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1)) {

            Runnable invalidateTask = () -> {
                System.out.println("Running invalidation...");
                Set<UUID> keysToRemove = cache.asMap().entrySet().stream()
                        .filter(entry -> entry.getValue().isComplete()) // Your condition
                        .map(Map.Entry::getKey)
                        .collect(Collectors.toSet());

                cache.invalidateAll(keysToRemove);
                System.out.println("Invalidated keys: " + keysToRemove);
            };

            // Schedule every 5 minutes (initial delay 0, then every 5 minutes)
            scheduler.scheduleAtFixedRate(invalidateTask, 0, 5, TimeUnit.MINUTES);

            // Shutdown hook (optional)
            Runtime.getRuntime().addShutdownHook(new Thread(scheduler::shutdown));
        }
    }
}
