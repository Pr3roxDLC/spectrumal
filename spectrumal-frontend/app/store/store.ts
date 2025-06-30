import { configureStore } from "@reduxjs/toolkit";
import { navigationReducer } from "./navigationSlice";
import { lobbyReducer } from "./lobbySlice";
import { gameReducer } from "./gameSlice";
import appSaga from "./mySaga";


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

sagaMiddleware.run(appSaga)


export type State = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;