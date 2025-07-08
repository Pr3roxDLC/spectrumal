import { all } from 'redux-saga/effects';
import { watchLobby } from './features/lobby/lobbySaga';
import { watchEvents } from './features/events/eventsSaga';
import { watchGame } from './features/game/gameSaga';

export default function* rootSaga() {
  yield all([
   watchLobby(),
   watchEvents(),
   watchGame(),
  ]);
}