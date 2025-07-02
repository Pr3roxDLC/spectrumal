import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, take, takeEvery } from "redux-saga/effects";
import { Configuration, CreateLobbyResponse, DefaultApi, JoinLobbyResponse } from "../../../api";
import { connectToWebSocketAction } from "../events/eventsSlice";
import { openTabOnTopAction, TabType } from "../navigation/navigationSlice";
import { setLobbyCodeAction, setLobbyIdAction, setListOfUsersAction, createNewLobbyAction, joinLobbyAction } from "./lobbySlice";

const HOST = "localhost:8080";

const API_BASE_URL = "http://" + HOST + "/api";
const API = new DefaultApi(new Configuration({ basePath: API_BASE_URL }));

function* createNewLobbySaga(action: PayloadAction<{ id: string; name: string }>) {
  const { id, name } = action.payload;

  try {
    const response: CreateLobbyResponse = yield call(() =>
      API.create({ createLobbyRequest: { user: { id, name } } })
    );

    yield put(setLobbyCodeAction(response.code ?? ""));
    yield put(setLobbyIdAction(response.lobbyId ?? ""));
    yield put(setListOfUsersAction([{ id, name }]));
    yield put(connectToWebSocketAction({ userId: id }));
    yield put(openTabOnTopAction({ type: TabType.START_LOBBY }));

  } catch (error) {
    console.error("Error creating lobby:", error);
  }
}

function* joinLobbySaga(action: PayloadAction<{ id: string; name: string; code: string }>) {
  const { id, name, code } = action.payload;

   try {
    const response: JoinLobbyResponse = yield call(() => 
      API.joinLobby({ joinLobbyRequest: { id, name }, code })
    );
    console.log(response)

    yield put(setLobbyCodeAction(action.payload.code))
    yield put(setLobbyIdAction(response.lobbyId ?? ""))
    yield put(setListOfUsersAction(response.users ?? []))
    yield put (connectToWebSocketAction({userId: id}))
    yield put(openTabOnTopAction({ type: TabType.JOIN_LOBBY }));

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