package me.pr3.spectrumal.api.lobby;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import me.pr3.spectrumal.model.lobby.*;
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

    @POST
    @Consumes("application/json")
    @Path("leave")
    public void leaveLobby(LeaveLobbyRequest request) {
        lobbyService.leaveLobby(request);
    }

    @DELETE
    @Consumes("application/json")
    @Path("delete")
    public void deleteLobby(DeleteLobbyRequest request) {
        lobbyService.deleteLobby(request);
    }


}
