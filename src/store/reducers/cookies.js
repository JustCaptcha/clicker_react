import Cookies from 'js-cookie'

import state_all from '../data'
export default (state = state_all, action) => {
    switch(action.type) {
        case 'COOKIES_SAVE': {
            Cookies.set('wood', state.resources.wood)
            break
        }
        case 'COOKIES_LOAD': {
            break
        }
        case 'COOKIES_DELETE': {
            Cookies.remove('wood')
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