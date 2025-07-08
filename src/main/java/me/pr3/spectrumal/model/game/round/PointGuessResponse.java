package me.pr3.spectrumal.model.game.round;

public class PointGuessResponse {
     boolean showWaitingScreen;


    public PointGuessResponse() {
    }

    public PointGuessResponse(boolean showWaitingScreen) {
        this.showWaitingScreen = showWaitingScreen;
    }

    public boolean isShowWaitingScreen() {
        return showWaitingScreen;
    }

    public void setShowWaitingScreen(boolean showWaitingScreen) {
        this.showWaitingScreen = showWaitingScreen;
    }
}
