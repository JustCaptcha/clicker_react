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