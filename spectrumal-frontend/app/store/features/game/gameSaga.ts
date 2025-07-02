import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { Configuration, CreateGameResponse, DefaultApi, RoundInfoResponse } from "../../../api";
import { appSelect } from "../../hooks";
import { openTabOnTopAction, TabType } from "../navigation/navigationSlice";
import { setGameIdAction, fetchRoundInfoAction, startGameAction } from "./gameSlice";

const HOST = "localhost:8080";

const API_BASE_URL = "http://" + HOST + "/api";
const WEBSOCKET_BASE_URL = "ws://" + HOST + "/ws";
const API = new DefaultApi(new Configuration({ basePath: API_BASE_URL }));


function* startGameSaga (action: PayloadAction<void>) {
  let lobbyId: string = yield appSelect(state => state.lobby.lobbyId)


  try {
    const response: CreateGameResponse = yield call(() => 
      API.createGame({lobbyId: lobbyId})
    );
    console.log(response)
  
    yield put(setGameIdAction(response.id ?? ""))
     yield put(openTabOnTopAction({ type: TabType.GIVE_CLUE }));
     yield put(fetchRoundInfoAction(response.id ?? ""))


  } catch (error) {
    console.error("Error starting game:", error);
  }
}

function* fetchRoundInfoSaga (action: PayloadAction<{ id: string  }>) {
try {
    const response: RoundInfoResponse = yield call(() => 
      API.getRoundInfo({id: "", round: 1, player: ""})
    );
    console.log(response)
  


  } catch (error) {
    console.error("Error fetching:", error);
  }
}

export function* watchGame() {
  yield takeEvery(startGameAction.type,
    startGameSaga
  )
  yield takeEvery(fetchRoundInfoAction.type,
    fetchRoundInfoSaga
  )
}