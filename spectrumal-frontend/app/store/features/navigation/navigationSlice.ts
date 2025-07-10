import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum TabType {
  GIVE_CLUE = "GIVE_CLUE",
  GUESS_CLUE = "GUESS_CLUE",
  HOW_TO_PLAY = "HOW_TO_PLAY",
  JOIN_LOBBY = "JOIN_LOBBY",
  MAIN_MENU = "MAIN_MENU",
  PLAY = "PLAY",
  SETTINGS_PAGE = "SETTINGS_PAGE",
  START_LOBBY = "START_LOBBY",
  WAITING_FOR_OTHERS = "WAITING_FOR_OTHERS",
  LEADERBOARD = "LEADERBOARD",
  GAME_STARTING = "GAME_STARTING",
  SETTINGS = "SETTINGS",
  LEADERBOARD_PAGE_TEST = "LEADERBOARD_PAGE_TEST"
}

export class TabData {
  type?: TabType;
  data?: Record<string, any>;
}

const navigationSlice = createSlice({
  name: "navigation",
  initialState: { tabStack: [{ type: TabType.MAIN_MENU, data: {} } as TabData] }, 
  reducers: {
    changeTabAction: (state, action: PayloadAction<TabData>) => {
      state.tabStack = [action.payload];
    },
        openTabOnTopAction: (state, action: PayloadAction<TabData>) => {
      state.tabStack = state.tabStack.concat([action.payload]);
    },
    goBackToPreviousTabAction: (state, action: PayloadAction<void>) => {
      state.tabStack.splice(-1);
    },
  },
});

export const { changeTabAction, openTabOnTopAction, goBackToPreviousTabAction } = navigationSlice.actions;
export const navigationReducer = navigationSlice.reducer;

export default navigationSlice.reducer;