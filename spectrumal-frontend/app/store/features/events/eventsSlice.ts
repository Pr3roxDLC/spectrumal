import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface EventsState {
    connected: boolean
    connectedAs?: string;
}

const initialState: EventsState = {
    connected: false,
};

const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        connectToWebSocketAction: (state, action: PayloadAction<{ userId: string }>) => { },
        setConnectedAction: (state, action: PayloadAction<boolean>) => {
            state.connected = action.payload;
        },
        setConnectedAsAction: (state, action: PayloadAction<string | undefined>) => {
            state.connectedAs = action.payload;
        },
        handleMessageAction: (state, action: PayloadAction<{ type: string; payload: Record<string, string> }>) => {}
    }
});

export const {
    connectToWebSocketAction,
    setConnectedAction,
    setConnectedAsAction,
    handleMessageAction
} = eventsSlice.actions;

export const lobbyReducer = eventsSlice.reducer;
export default eventsSlice.reducer;
