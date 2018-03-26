import { combineReducers } from 'redux'

import cookies from './cookies'
import global from './global'
import resources from './resources'
import buildings from './buildings'
import events from './events'

export const paths = {
    'global.time_seconds': {name: 'global_time_seconds'},
    'global.game_over': {name: 'global_game_over'},
    'resources.wood': {name: 'wood'},
    'resources.food': {name: 'food'},
    'resources.stone': {name: 'stone'},
    'resources.manpower': {name: 'manpower'},
    'buildings.tower.title': {name: 'tower_title'},
    'buildings.tower.show': {name: 'tower_show'},
    'buildings.tower.cost': {name: 'tower_cost'},
    'buildings.tower.count': {name: 'tower_count'},
}

export const allReducers = combineReducers({
    cookies: cookies,
    global: global,
    resources: resources,
    buildings: buildings,
    events: events,

})
