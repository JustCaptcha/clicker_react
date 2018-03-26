import { combineReducers } from 'redux'

import cookies from './cookies'
import global from './global'
import resources from './resources'
import buildings from './buildings'
import events from './events'

export const paths = {
    'global': {
        time_seconds: 0,
        game_over: false,
    },
    'resources': {
        wood: 0,
        food: 0,
        stone: 0,
        manpower: 0,
    },
    'buildings': {
        tower: {
            title: 'Wooden tower',
            show: false,
            cost: {
                wood: 100,
            },
            count: 0
        }
    },
}

export const allReducers = combineReducers({
    cookies: cookies,
    global: global,
    resources: resources,
    buildings: buildings,
    events: events,

})
