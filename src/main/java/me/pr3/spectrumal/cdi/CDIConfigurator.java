package me.pr3.spectrumal.cdi;

import jakarta.enterprise.inject.spi.CDI;
import jakarta.websocket.server.ServerEndpointConfig;

//WebSocket endpoints are not CDI-managed by default, so we need this to allow injecting
// into the websockets
public class CDIConfigurator extends ServerEndpointConfig.Configurator {
    public <T> T getEndpointInstance(Class<T> clazz) throws InstantiationException {
        return CDI.current().select(clazz).get();
    }
}
