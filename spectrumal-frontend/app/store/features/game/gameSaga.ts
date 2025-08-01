import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { CreateGameResponse, Point, PointGuessResponse, RoundInfoResponse, ScoreResponse, WordGuessResponse } from "../../../api";
import { appSelect, useAppSelector } from "../../hooks";
import { changeTabAction, openTabOnTopAction, TabType } from "../navigation/navigationSlice";
import { setGameIdAction, fetchRoundInfoAction, startGameAction, setTargetAction, submitClueAction, setSpectrumAction, setCurrentClueAction, submitPointAction, fetchScoreAction, setPreviousScoreAction, setNewScoreAction, setGainedScoreAction, userGuessesAction, setUserGuessesAction } from "./gameSlice";
import { API } from "../../api";


function* startGameSaga(action: PayloadAction<void>) {
  let lobbyId: string = yield appSelect(state => state.lobby.lobbyId)


  try {
    const response: CreateGameResponse = yield call(() =>
      API.createGame({ lobbyId: lobbyId })
    );
    console.log(response)

    yield put(setGameIdAction(response.id ?? ""))
    yield put(openTabOnTopAction({ type: TabType.GIVE_CLUE }));
    yield put(fetchRoundInfoAction(response.id ?? ""))

  } catch (error) {
    console.error("Error starting game:", error);
  }
}

function* fetchRoundInfoSaga(action: PayloadAction<string>) {
  let playerId: string = yield appSelect(state => state.game.playerId)
  let roundNumber: number = yield appSelect(state => state.game.roundNumber)
  try {
    const response: RoundInfoResponse = yield call(() =>
      API.getRoundInfo({ id: action.payload, round: roundNumber, player: playerId })
    );
    console.log(response)
    yield put(setTargetAction(response.round?.target ?? { dim1: 0, dim2: 0 }))
    yield put(setSpectrumAction(response.round?.spectrum))
    if (response.round?.roundState === 'FIND_POINT') {
      const currentClue = response.round?.wordGuess?.word ?? '';
      yield put(setCurrentClueAction(currentClue));
    }
  } catch (error) {
    console.error("Error fetching:", error);
  }
}

function* submitClueSaga(action: PayloadAction<string>) {
  let gameId: string = yield appSelect(state => state.game.gameId)
  let playerId: string = yield appSelect(state => state.game.playerId)

  try {
    const response: WordGuessResponse = yield call(() =>
      API.guessWord({ id: gameId, player: playerId, wordGuessRequest: { word: action.payload } }))

    if (response.showWaitingScreen) {
      yield put(changeTabAction({ type: TabType.WAITING_FOR_OTHERS }))
    } else {
      yield put(changeTabAction({ type: TabType.GUESS_CLUE }))
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

function* submitPointSaga(action: PayloadAction<void>) {
  const position: Point = yield appSelect(state => state.game.selectedPoint);
  let gameId: string = yield appSelect(state => state.game.gameId)
  let playerId: string = yield appSelect(state => state.game.playerId)

  try {
    const response: PointGuessResponse = yield call(() =>
      API.guessPoint({ id: gameId, player: playerId, pointGuessRequest: { guess: position } }))
    
    console.log('Selected Point:', position);

    if(response.showWaitingScreen){
    yield put(changeTabAction({ type: TabType.WAITING_FOR_OTHERS }))
    }
  }
  catch (error) {
    console.error('submitPointSaga error:', error);
  }

}

function* fetchScoreSaga (action: PayloadAction<void>) {
    let gameId: string = yield appSelect(state => state.game.gameId)

    try {
    const response: ScoreResponse = yield call(() =>
      API.getScore({ id: gameId }))

    let point1: Point = {dim1: 0.43, dim2: -0.7}
    let point2: Point = {dim1: 0.13, dim2: -0.4}
    let point3: Point = {dim1: 0.93, dim2: -0.1}

    console.log(response.score)
      yield put (setUserGuessesAction([point1, point2, point3]))
      yield put(setPreviousScoreAction(response.score?.previousScores ?? {}));
      yield put(setNewScoreAction(response.score?.newScores ?? {}));
      yield put(setGainedScoreAction(response.score?.gainedScores ?? {}));
    }

   catch (error) {
    console.error("Error getting score:", error);
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
  yield takeEvery(submitPointAction.type,
    submitPointSaga
  )
  yield takeEvery(fetchScoreAction.type,
    fetchScoreSaga
  )
}