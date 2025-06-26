import React from 'react'
import App from "./App";
import { Provider } from 'react-redux';
import store from './app/store/store';

const Index = () => {
    return (
        <Provider store={store}>
            <App>
            </App>
        </Provider>
    )
}

export default Index
