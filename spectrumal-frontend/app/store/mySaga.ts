import { takeEvery, call, put } from 'redux-saga/effects';
import { createNewLobbyAction, setLobbyCodeAction, setLobbyIdAction, setListOfUsersAction, joinLobbyAction } from './lobbySlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { CreateLobbyResponse, DefaultApi, JoinLobbyResponse } from '../api';
import { openTabOnTopAction, TabType } from './navigationSlice';

function* createNewLobbySaga(action: PayloadAction<{ id: string; name: string }>) {
  const { id, name } = action.payload;

  try {
    const response: CreateLobbyResponse = yield call(() => 
      new DefaultApi().create({ createLobbyRequest: { user: { id, name } } })
    );
  
    yield put(setLobbyCodeAction(response.code ?? ""));
    yield put(setLobbyIdAction(response.lobbyId ?? ""));
    yield put(setListOfUsersAction([{ id, name }]));
    yield put(openTabOnTopAction({ type: TabType.START_LOBBY }));

  } catch (error) {
    console.error("Error creating lobby:", error);
  }
}

function* joinLobbySaga(action: PayloadAction<{ id: string; name: string; code: string }>) {
  const { id, name, code } = action.payload;

   try {
    const response: JoinLobbyResponse = yield call(() => 
      new DefaultApi().joinLobby({ joinLobbyRequest: { id, name }, code })
    );
    console.log(response)
  
    yield put(setLobbyCodeAction(action.payload.code))
    yield put(setLobbyIdAction(response.lobbyId ?? ""))
    yield put(setListOfUsersAction(response.users ?? []))
    yield put(openTabOnTopAction({ type: TabType.JOIN_LOBBY }));

  } catch (error) {
    console.error("Error joining lobby:", error);
  }
}

function* appSaga() {
    yield takeEvery(createNewLobbyAction.type,
        createNewLobbySaga
    )
    yield takeEvery(joinLobbyAction.type,
      joinLobbySaga
    )
}

export default appSaga