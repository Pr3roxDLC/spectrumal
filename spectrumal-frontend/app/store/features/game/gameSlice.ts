import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dimension, Point } from "../../../api";

interface GameState {
  gameId?: string;
  playerId?: string;
  dim1?: Dimension;
  dim2?: Dimension;
  target: Point
}

const initialState: GameState = {
  gameId: undefined,
  dim1: undefined,
  dim2: undefined,
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
    setDim1Action: (state, action: PayloadAction<Dimension>) => {
      state.dim1 = action.payload
    },
    setDim2Action: (state, action: PayloadAction<Dimension>) => {
      state.dim2 = action.payload
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
    setDim1Action,
    setDim2Action,
    setTargetAction,
    submitClueAction
} = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
export default gameSlice.reducer;