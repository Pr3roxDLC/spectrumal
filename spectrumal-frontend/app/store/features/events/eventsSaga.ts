import { PayloadAction } from "@reduxjs/toolkit";
import { call, take, put, cancelled, takeEvery } from "redux-saga/effects";
import { connectToWebSocketAction, handleMessageAction } from "./eventsSlice";
import { EventChannel, eventChannel } from "redux-saga";
import { setGameIdAction, fetchRoundInfoAction, fetchScoreAction, increaseRoundAction, clearSelectedPointAction } from "../game/gameSlice";
import { addUserAction } from "../lobby/lobbySlice";
import { changeTabAction, openTabOnTopAction, TabType } from "../navigation/navigationSlice";
import { WEBSOCKET_BASE_URL } from "../../api";
import { appSelect } from "../../hooks";


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
  const gameId: string = yield appSelect(state => state.game.gameId);


  switch (type) {
    case 'LOBBY_PLAYER_JOIN':
      yield put(addUserAction({ id: payload.id, name: payload.name }));
      console.log(action.payload)
      break;
    case "LOBBY_GAME_START":
      yield put(openTabOnTopAction({ type: TabType.GIVE_CLUE }))
      yield put(setGameIdAction(payload.id))
      yield put(fetchRoundInfoAction(payload.id))
      console.log(payload)
      break
    case "SHOW_GUESS_CLUE_SCREEN":
      yield put(fetchRoundInfoAction(gameId))
      yield put(changeTabAction({ type: TabType.GUESS_CLUE }))
      break
    case "SHOW_SCORE_SCREEN":
      yield put(clearSelectedPointAction());
      yield put(fetchScoreAction())
      yield put(changeTabAction({ type: TabType.LEADERBOARD }))
      break
    case "SHOW_GIVE_CLUE_SCREEN":
      const roundNumber: number = yield appSelect(state => state.game.roundNumber);
       if (roundNumber < 4) {
    yield put(increaseRoundAction());
    yield put(fetchRoundInfoAction(gameId));
    yield put(changeTabAction({ type: TabType.GIVE_CLUE }));
  } else {
    console.log("Maximum round reached (4)");
  }
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