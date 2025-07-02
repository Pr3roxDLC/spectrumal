import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../api/models";


interface LobbyState {
  lobbyCode: string | null;
  lobbyId: string | null;
  users: User[];
}

const initialState: LobbyState = {
  lobbyCode: null,
  lobbyId: null,
  users: [],
};

const lobbySlice = createSlice({
  name: "lobby",
  initialState,
  reducers: {
    setLobbyCodeAction: (state, action: PayloadAction<string>) => {
      state.lobbyCode = action.payload;
    },
    setLobbyIdAction: (state, action: PayloadAction<string>) => {
      state.lobbyId = action.payload;
    },
    setListOfUsersAction: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    addUserAction: (state, action: PayloadAction<User>) => {
      if (!state.users.some(user => user.id === action.payload.id)) {
        state.users.push(action.payload);
      }
    },
    removeUserAction: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    createNewLobbyAction: (state, action: PayloadAction<{ id: string; name: string }>) => { },
    joinLobbyAction: (state, action: PayloadAction<{ id: string; name: string; code: string }>) => {
    },
  }
});

export const {
  setLobbyCodeAction,
  setLobbyIdAction,
  setListOfUsersAction,
  addUserAction,
  removeUserAction,
  createNewLobbyAction,
  joinLobbyAction
} = lobbySlice.actions;

export const lobbyReducer = lobbySlice.reducer;
export default lobbySlice.reducer;
