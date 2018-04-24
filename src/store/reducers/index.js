import { combineReducers } from 'redux'

import cookies from './cookies'
import global from './global'
import resources from './resources'
// import buildings from './buildings'
import actions from './actions'
import defaultState from '../data/index'
import defaultActions from '../data/actions';
import defaultBuildings from '../data/buildings'
import events from './events'

export const paths = {
    // Global
    'global.time_seconds': {name: 'global_time_seconds'},
    'global.game_over': {name: 'global_game_over'},
    // Resources
    'resources.electricity': {name: 'electricity'},
    'resources.credits': {name: 'credits'},
    'resources.rawMetal': {name: 'rawMetal'},
    'resources.rawCopper': {name: 'rawCopper'},
    'resources.rawGold': {name: 'rawGold'},
    'resources.metal': {name: 'metal'},
    'resources.copper': {name: 'copper'},
    'resources.gold': {name: 'gold'}
}

export const allReducers = (state, action) => (
    combineReducers({
        actions: (state) => state || defaultActions,
        cookies: cookies(state, action),
        global: global,
        resources: resources,
        buildings: (state) => state || defaultBuildings,
        events: events,

    })(actions(state, action), action)
    //   (buildings(state, action), action)
);
