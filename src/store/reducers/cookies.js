import Cookies from 'js-cookie'

import state_all from '../data'
import global from '../data/global'

export default (state = state_all, action) => {
    switch(action.type) {
        case 'COOKIES_SAVE': {
            // Cookies.set('wood', state.resources.wood)
            addCookies(state)
            return state
            break
        }
        case 'COOKIES_LOAD': {
            break
        }
        case 'COOKIES_DELETE': {
            removeCookies(state)
            return state
            break
        }
        case 'COOKIES_GET': {
            break
        }
        default: {
            return state
        }
    }
}

function addCookies(state) {
    Cookies.set('global_time_seconds', state.global.time_seconds)
    Cookies.set('resources.credits', state.resources.credits)
    Cookies.set('stone', state.resources.stone)
}

function removeCookies(state) {
    Cookies.remove('global_time_seconds')
    Cookies.remove('resources.credits')
    Cookies.remove('stone')
}