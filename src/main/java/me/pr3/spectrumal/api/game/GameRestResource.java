package me.pr3.spectrumal.api.game;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import me.pr3.spectrumal.model.game.CreateGameResponse;
import me.pr3.spectrumal.model.game.ScoreResponse;
import me.pr3.spectrumal.model.game.round.PointGuessRequest;
import me.pr3.spectrumal.model.game.round.WordGuessRequest;
import me.pr3.spectrumal.model.game.round.WordGuessResponse;
import me.pr3.spectrumal.model.game.round.RoundInfoResponse;
import me.pr3.spectrumal.service.game.GameService;

import java.util.UUID;

@Path("/game")
public class GameRestResource {

    @Inject
    private GameService gameService;

    @POST
    @Produces("application/json")
    @Path("/create/{lobbyId}")
    public CreateGameResponse createGame(@PathParam("lobbyId") UUID lobbyId){
        return gameService.createGame(lobbyId);
    }

    @GET
    @Produces("application/json")
    @Path("/{id}/round/{round}/{player}")
    public RoundInfoResponse getRoundInfo(@PathParam("id") UUID id, @PathParam("round") int round, @PathParam("player") UUID player) {
        return gameService.getRoundInfo(id, round, player);
    }

    @POST
    @Produces("application/json")
    @Consumes("application/json")
    @Path("/{id}/guess/word/{player}")
    public WordGuessResponse guessWord(@PathParam("id") UUID id, @PathParam("player") UUID player, WordGuessRequest request) {
        return gameService.wordGuess(id, player, request);
    }

    @POST
    @Consumes("application/json")
    @Path("/{id}/guess/point/{player}")
    public void guessPoint(@PathParam("id") UUID id, @PathParam("player") UUID player, PointGuessRequest request) {
        gameService.pointGuess(id, player, request);
    }

    @GET
    @Produces("application/json")
    @Path("/{id}/score")
    public ScoreResponse getScore(@PathParam("id") UUID id) {
        return gameService.getScores(id);
    }

}
