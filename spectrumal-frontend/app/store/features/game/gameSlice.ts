import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Point, Spectrum } from "../../../api";

type ScoreMap = { [key: string]: number };

interface GameState {
  gameId?: string;
  playerId?: string;
  spectrum?: Spectrum;
  target: Point;
  currentClue?: string;
  selectedPoint?: Point;
  gainedScore?: ScoreMap,
  newScore?: ScoreMap,
  previousScore?: ScoreMap,
  roundNumber: number,
  numberOfRounds: number,
  guesses: Point[]
}

const initialState: GameState = {
  gameId: undefined,
  target: { dim1: 0, dim2: 0 },
  currentClue: "",
  roundNumber: 1,
  numberOfRounds: 5,
  guesses: []
};


const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameIdAction: (state, action: PayloadAction<string>) => {
      state.gameId = action.payload
    },
    startGameAction: (state, action: PayloadAction<void>) => { },
    fetchRoundInfoAction: (state, action: PayloadAction<string>) => { },
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
    setSelectedPointAction: (state, action: PayloadAction<Point>) => {
      state.selectedPoint = action.payload
    },
    submitPointAction: (state, action: PayloadAction<void>) => { },
    fetchScoreAction: (state, action: PayloadAction<void>) => { },
    setGainedScoreAction: (state, action: PayloadAction<ScoreMap>) => {
      state.gainedScore = action.payload
    },
    setNewScoreAction: (state, action: PayloadAction<ScoreMap>) => {
      state.newScore = action.payload
    },
    setPreviousScoreAction: (state, action: PayloadAction<ScoreMap>) => {
      state.previousScore = action.payload
    },
    increaseRoundAction: (state, action: PayloadAction<void>) => {
      state.roundNumber += 1
    },
    setNumberOfRoundsAction: (state, action: PayloadAction<number>) => {
      state.numberOfRounds = action.payload
    },
    clearSelectedPointAction: (state) => {
      state.selectedPoint = undefined;
    },
    setUserGuessesAction: (state, action: PayloadAction<Point[]>) => {
state.guesses = action.payload
    }
  },
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
  setSelectedPointAction,
  fetchScoreAction,
  setPreviousScoreAction,
  setNewScoreAction,
  setGainedScoreAction,
  increaseRoundAction,
  clearSelectedPointAction,
  setUserGuessesAction,
  setNumberOfRoundsAction
} = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
export default gameSlice.reducer;