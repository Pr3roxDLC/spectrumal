import { takeEvery, call, put, take, cancelled } from 'redux-saga/effects';
import { EventChannel, eventChannel } from 'redux-saga';
import { createNewLobbyAction, setLobbyCodeAction, setLobbyIdAction, setListOfUsersAction, joinLobbyAction, addUserAction } from './lobbySlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { Configuration, CreateLobbyResponse, DefaultApi, DefaultConfig, JoinLobbyResponse } from '../api';
import { openTabOnTopAction, TabType } from './navigationSlice';
import { connectToWebSocketAction, handleMessageAction, setConnectedAction } from './eventsSlice';

const HOST = "localhost:9980";

const API_BASE_URL = "http://" + HOST + "/api";
const WEBSOCKET_BASE_URL = "ws://" + HOST + "/ws";
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

function* connectToWebSocketSaga(action: PayloadAction<{ userId: string }>): Generator<any, void, any> {
  const { userId } = action.payload;
  const socket = new WebSocket(WEBSOCKET_BASE_URL + `/game?userId=${userId}`);

  const channel: ReturnType<typeof createWebSocketChannel> = yield call(
    createWebSocketChannel,
    socket
  );

  try {
    while (true) {
      const action = yield take(channel);
      yield put(action); // dispatch action to Redux
    }
  } finally {
    if (yield cancelled()) {
      socket.close();
    }
  }
}

export function createWebSocketChannel(socket: WebSocket): EventChannel<any> {
  return eventChannel((emit) => {
    const handleMessage = (event: WebSocketMessageEvent) => {
      try {
        const type = (event.data as string).slice(0, event.data.indexOf('['));
        const payloadString = (event.data as string).slice(event.data.indexOf('[') + 1, event.data.indexOf(']'));
        const payload: Record<string, string> = {};
        payloadString.split(',').forEach(pair => {
          const [key, value] = pair.split('=');
          if (key) payload[key.trim()] = value?.trim() ?? '';
        });

        emit(handleMessageAction({ type: type, payload: payload }));
      } catch (err) {
        console.error("Error parsing WebSocket message:", err);
        emit(handleMessageAction({ type: 'ERROR', payload: { message: 'Failed to parse message' } }));
      }
    };

    const handleClose = () => emit({ type: 'WEBSOCKET_CLOSED' });

    socket.addEventListener('message', handleMessage);
    socket.addEventListener('close', handleClose);

    // Unsubscribe function
    return () => {
      socket.removeEventListener('message', handleMessage);
      socket.removeEventListener('close', handleClose);
    };
  });
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

function* onHandleMessageSaga(action: PayloadAction<{ type: string; payload: Record<string, string> }>) {
  const { type, payload } = action.payload;

  switch (type) {
    case 'LOBBY_PLAYER_JOIN':
      yield put(addUserAction({ id: payload.id, name: payload.name }));
      break;
    default:
      console.warn(`Unhandled message type: ${type}`);
  }

}

function* appSaga() {
  yield takeEvery(createNewLobbyAction.type,
    createNewLobbySaga
  )
  yield takeEvery(connectToWebSocketAction.type, connectToWebSocketSaga)

  yield takeEvery(joinLobbyAction.type,
    joinLobbySaga
  )
  yield takeEvery(handleMessageAction.type,
    onHandleMessageSaga
  )
}

export default appSaga