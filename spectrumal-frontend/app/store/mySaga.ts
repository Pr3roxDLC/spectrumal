import { takeEvery, call, put } from 'redux-saga/effects';
import { createNewLobbyAction, setLobbyCodeAction, setLobbyIdAction, setListOfUsersAction } from './lobbySlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { CreateLobbyResponse, DefaultApi } from '../api';
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

function* appSaga() {
    yield takeEvery(createNewLobbyAction.type,
        createNewLobbySaga
    )
    yield(takeEvery(joinLobbyAction.type, joinLobbySaga))
}

export default appSaga