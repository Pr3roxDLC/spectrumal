import { configureStore } from "@reduxjs/toolkit";
import { navigationReducer } from "./navigationSlice";


//const createSagaMiddleWare = require('redux-saga').default;

export const store = configureStore({
    reducer: { 
        navigation: navigationReducer
    },

})


export type State = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;