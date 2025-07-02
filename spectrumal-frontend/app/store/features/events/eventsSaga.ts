import { PayloadAction } from "@reduxjs/toolkit";
import { call, take, put, cancelled, takeEvery } from "redux-saga/effects";
import { DefaultApi, Configuration } from "../../../api";
import { connectToWebSocketAction, handleMessageAction } from "./eventsSlice";
import { EventChannel, eventChannel } from "redux-saga";
import { setGameIdAction, fetchRoundInfoAction } from "../game/gameSlice";
import { addUserAction } from "../lobby/lobbySlice";
import { openTabOnTopAction, TabType } from "../navigation/navigationSlice";

const HOST = "localhost:8080";

const API_BASE_URL = "http://" + HOST + "/api";
const WEBSOCKET_BASE_URL = "ws://" + HOST + "/ws";
const API = new DefaultApi(new Configuration({ basePath: API_BASE_URL }));


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

function* onHandleMessageSaga(action: PayloadAction<{ type: string; payload: Record<string, string> }>) {
  const { type, payload } = action.payload;

  switch (type) {
    case 'LOBBY_PLAYER_JOIN':
      yield put(addUserAction({ id: payload.id, name: payload.name }));
      console.log(action.payload)
      break;
    case "LOBBY_GAME_START":
      yield put (openTabOnTopAction({type: TabType.GIVE_CLUE}))
       yield put(setGameIdAction(payload.id))
       yield put(fetchRoundInfoAction(payload.id))
      console.log(payload)
      break
    default:
      console.warn(`Unhandled message type: ${type}`);
  }

}


export function* watchEvents() {
  yield takeEvery(connectToWebSocketAction.type, connectToWebSocketSaga);
  yield takeEvery(handleMessageAction.type,
    onHandleMessageSaga
  )
}