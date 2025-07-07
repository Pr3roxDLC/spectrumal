import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { CreateGameResponse, RoundInfoResponse, WordGuessResponse } from "../../../api";
import { appSelect, useAppSelector } from "../../hooks";
import { changeTabAction, openTabOnTopAction, TabType } from "../navigation/navigationSlice";
import { setGameIdAction, fetchRoundInfoAction, startGameAction, setTargetAction, submitClueAction, setSpectrumAction } from "./gameSlice";
import { API } from "../../api";


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

function* fetchRoundInfoSaga (action: PayloadAction<string>) {
    let playerId: string = yield appSelect(state => state.game.playerId)
try {
    const response: RoundInfoResponse = yield call(() => 
      API.getRoundInfo({id: action.payload, round: 1, player: playerId})
    );
    console.log(response)
    yield put (setTargetAction(response.round?.target ?? {dim1: 0, dim2: 0}))
    yield put(setSpectrumAction(response.round?.spectrum))
  
  } catch (error) {
    console.error("Error fetching:", error);
  }
}

function* submitClueSaga (action: PayloadAction<string>) {
let gameId: string = yield appSelect(state => state.game.gameId)
let playerId: string = yield appSelect(state => state.game.playerId)

try {
 const response: WordGuessResponse =  yield call (() => 
  API.guessWord({id: gameId, player: playerId, wordGuessRequest: {word: action.payload}}))

 if(response.showWaitingScreen){
  yield put (changeTabAction({type: TabType.WAITING_FOR_OTHERS}))
 }else {
    yield put (changeTabAction({type: TabType.GUESS_CLUE}))
 }

} catch(error){
  console.error("Error:", error);
}
}

export function* watchGame() {
  yield takeEvery(startGameAction.type,
    startGameSaga
  )
  yield takeEvery(fetchRoundInfoAction.type,
    fetchRoundInfoSaga
  )
  yield takeEvery(submitClueAction.type,
    submitClueSaga
  )
}