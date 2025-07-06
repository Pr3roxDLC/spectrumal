import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { CreateLobbyResponse, JoinLobbyResponse } from "../../../api";
import { connectToWebSocketAction } from "../events/eventsSlice";
import { openTabOnTopAction, TabType } from "../navigation/navigationSlice";
import { setLobbyCodeAction, setLobbyIdAction, setListOfUsersAction, createNewLobbyAction, joinLobbyAction } from "./lobbySlice";
import { setPlayerIdAction } from "../game/gameSlice";
import { API }  from "../../api"



function* createNewLobbySaga(action: PayloadAction<{ playerId: string; name: string }>) {
  const { playerId, name } = action.payload;

  try {
    const response: CreateLobbyResponse = yield call(() =>
      API.create({ createLobbyRequest: { user: { id: playerId, name: name } } })
    );

    yield put(setLobbyCodeAction(response.code ?? ""));
    yield put(setLobbyIdAction(response.lobbyId ?? ""));
    yield put(setListOfUsersAction([{ id: playerId, name: name }]));
    yield put(connectToWebSocketAction({ userId: playerId }));
    yield put(openTabOnTopAction({ type: TabType.START_LOBBY }));
    yield put(setPlayerIdAction(playerId))

  } catch (error) {
    console.error("Error creating lobby:", error);
  }
}

function* joinLobbySaga(action: PayloadAction<{ playerId: string; name: string; code: string }>) {
  const { playerId, name, code } = action.payload;

   try {
    const response: JoinLobbyResponse = yield call(() => 
      API.joinLobby({ joinLobbyRequest: { id: playerId, name: name }, code: code })
    );
    console.log(response)

    yield put(setLobbyCodeAction(action.payload.code))
    yield put(setLobbyIdAction(response.lobbyId ?? ""))
    yield put(setListOfUsersAction(response.users ?? []))
    yield put (connectToWebSocketAction({userId: playerId}))
    yield put(openTabOnTopAction({ type: TabType.JOIN_LOBBY }));
    yield put(setPlayerIdAction(action.payload.playerId))

  } catch (error) {
    console.error("Error joining lobby:", error);
  }
}

export function* watchLobby() {
  yield takeEvery(createNewLobbyAction.type, createNewLobbySaga);
  yield takeEvery(joinLobbyAction.type,
    joinLobbySaga
  )
}