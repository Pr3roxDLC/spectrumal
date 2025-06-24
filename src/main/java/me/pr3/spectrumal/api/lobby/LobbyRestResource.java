package me.pr3.spectrumal.api.lobby;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import me.pr3.spectrumal.model.lobby.CreateLobbyRequest;
import me.pr3.spectrumal.model.lobby.CreateLobbyResponse;
import me.pr3.spectrumal.model.lobby.JoinLobbyRequest;
import me.pr3.spectrumal.model.lobby.JoinLobbyResponse;
import me.pr3.spectrumal.service.lobby.LobbyService;

@Path("/lobby")
public class LobbyRestResource {

    @Inject
    private LobbyService lobbyService;

    @POST
    @Consumes("application/json")
    @Produces("application/json")
    @Path("create")
    public CreateLobbyResponse create(CreateLobbyRequest request) {
        return lobbyService.create(request.user);
    }

    @POST
    @Consumes("application/json")
    @Produces("application/json")
    @Path("join/{code}")
    public JoinLobbyResponse joinLobby(@PathParam("code") String code, JoinLobbyRequest request){
        return lobbyService.joinLobby(code, request);
    }

}
