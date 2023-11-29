import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

//This is the reducer
const catcherList = (state=['Roy Campanella', 'Elston Howard', 'Kenji Jojima'], action) => {
    if(action.type === 'ADD_NEW_CATCHER') {
        const newCatcher = action.payload
        return [...state, newCatcher]
    }
    return state;
}

const pitcherList = (state=['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'], action) => {
    if(action.type === 'ADD_NEW_PITCHER') {
        const newPitcher = action.payload
        return [...state, newPitcher]
    }
    return state;
}

//This is the store
const reduxStore = createStore(
    combineReducers({
        catcherList,
        pitcherList
    })
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>
);
