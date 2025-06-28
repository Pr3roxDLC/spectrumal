import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface User {
  id: string;
  name: string;
}

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
createNewLobbyAction: (state, action: PayloadAction<{ id: string; name: string }>) => {},
  },
});

export const {
  setLobbyCodeAction,
  setLobbyIdAction,
  setListOfUsersAction,
  createNewLobbyAction,
} = lobbySlice.actions;

export const lobbyReducer = lobbySlice.reducer;
export default lobbySlice.reducer;
