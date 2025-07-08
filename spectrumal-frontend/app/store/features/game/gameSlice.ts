import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dimension, Point, Spectrum } from "../../../api";

interface GameState {
  gameId?: string;
  playerId?: string;
  spectrum?: Spectrum;
  target: Point;
  currentClue?: string;
  selectedPoint?: Point
}

const initialState: GameState = {
  gameId: undefined,
  target: {dim1: 0, dim2: 0},
  currentClue: ""
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
    },
    setCurrentClueAction: (state, action: PayloadAction<string>) => {
     state.currentClue = action.payload
    },
    setSelectedPointAction: (state, action: PayloadAction<Point> ) => {
    state.selectedPoint = action.payload
    },
    submitPointAction: (state, action: PayloadAction<void>) => {
      
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
    submitClueAction,
    setCurrentClueAction,
    submitPointAction,
    setSelectedPointAction
} = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
export default gameSlice.reducer;