import { createStore, applyMiddleware } from 'redux'
import {allReducers, paths} from './reducers'
import reduxCookiesMiddleware from 'redux-cookies-middleware';
import { getStateFromCookies } from 'redux-cookies-middleware';

import state_all from './data'
let initialState = getStateFromCookies(state_all, paths);

const store = createStore (
    allReducers,
    initialState,
    // TODO: Delete it in production.
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware([
        reduxCookiesMiddleware(paths)
    ])
)

export default store

function update(time) {
    store.dispatch({
        type: 'UPDATE_ACTIONS',
        payload: {
            time: Date.now()
        }
    });

    setTimeout(update, 100);
}

function cookies__save() {
    store.dispatch({
        type: 'COOKIES_SAVE',
        payload: {
            time: Date.now()
        }
    })

    setTimeout(cookies__save, 10000)
}

update();
cookies__save();
