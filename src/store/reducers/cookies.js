import Cookies from 'js-cookie'

import state_all from '../data'
export default (state = state_all, action) => {
    switch(action.type) {
        case 'COOKIES_SAVE': {
            Cookies.set('userState', state)
        }
        case 'COOKIES_LOAD': {
            
        }
        case 'COOKIES_DELETE': {

        }
        case 'COOKIES_GET': {

        }
        default: {
            return state
        }
    }
}