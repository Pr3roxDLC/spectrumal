import { configureStore } from "@reduxjs/toolkit";
import { navigationReducer } from "./features/navigation/navigationSlice";
import { lobbyReducer } from "./features/lobby/lobbySlice";
import { gameReducer } from "./features/game/gameSlice";
import rootSaga from "./rootSaga";

const createSagaMiddleware = require("redux-saga").default;
const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
    reducer: { 
        navigation: navigationReducer,
        lobby: lobbyReducer,
        game: gameReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)

})

sagaMiddleware.run(rootSaga)


export type State = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;