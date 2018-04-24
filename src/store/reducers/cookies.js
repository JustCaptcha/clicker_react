import Cookies from 'js-cookie'

// import state_all from '../data'
import {resourcesNames} from '../data/resources'

export default (state, action) => {
    switch(action.type) {
        case 'COOKIES_SAVE': {
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
    console.log('Cookies saved!')
    let resNames = getResNames(resourcesNames)
    // Names array
    let i = 0
    Object.keys(state.resources).map(key => {
        const item = state.resources[key]
        Cookies.set(resNames[i], item)
        i += 1
    })
    Cookies.set('global_time_seconds', state.global.time_seconds)
}

function removeCookies(state) {
    // let resNames = getResNames()
    Object.keys(resourcesNames).map(key => {
        const item = resourcesNames[key]
        Cookies.remove(item)
    })
    Cookies.remove('global_time_seconds')
}

function getResNames(element) {
    let array = []
    Object.keys(element).map(key => {
        const item = element[key]
        array.push(item)
    })
    return array
}