import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dimension, Point, Spectrum } from "../../../api";

interface GameState {
  gameId?: string;
  playerId?: string;
  spectrum?: Spectrum;
  target: Point
}

const initialState: GameState = {
  gameId: undefined,
  target: {dim1: 0, dim2: 0}
};


const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameIdAction: (state, action: PayloadAction<string>) => {
      state.gameId = action.payload
    },
    startGameAction: (state, action: PayloadAction<void> ) => {},
    fetchRoundInfoAction: (state, action: PayloadAction<string>) => {},
    setPlayerIdAction: (state, action: PayloadAction<string>) => {
      state.playerId = action.payload
    },
    setSpectrumAction: (state, action: PayloadAction<Spectrum | undefined>) => {
      state.spectrum = action.payload
    },
    setTargetAction: (state, action: PayloadAction<Point>) => {
      state.target = action.payload
    },
    submitClueAction: (state, action: PayloadAction<string>) => {

    }
  }
});

export const {
    setGameIdAction,
    startGameAction,
    fetchRoundInfoAction,
    setPlayerIdAction,
    setSpectrumAction,
    setTargetAction,
    submitClueAction
} = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
export default gameSlice.reducer;