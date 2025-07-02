import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  gameId: string | null;
}

const initialState: GameState = {
  gameId: null,
};


const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameIdAction: (state, action: PayloadAction<string>) => {},
    startGameAction: (state, action: PayloadAction<void> ) => {},
    fetchRoundInfoAction: (state, action: PayloadAction<string>) => {}
  }
});

export const {
    setGameIdAction,
    startGameAction,
    fetchRoundInfoAction
} = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
export default gameSlice.reducer;