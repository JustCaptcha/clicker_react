import { combineReducers } from 'redux'

import cookies from './cookies'
import global from './global'
import resources from './resources'
import buildings from './buildings'
import actions from './actions'
import defaultActions from '../data/actions';
import defaultBuildings from '../data/buildings'
import events from './events'

export const paths = {
    // Global
    'global.time_seconds': {name: 'global_time_seconds'},
    'global.game_over': {name: 'global_game_over'},
    // Resources
    'resources.credits': {name: 'resources.credits'},
    'resources.rawMetal': {name: 'resources.rawMetal'},
    'resources.rawCopper': {name: 'resources.rawCopper'},
    'resources.metal': {name: 'resources.metal'},
    'resources.copper': {name: 'resources.copper'},
/*     'resources.food': {name: 'food'},
    'resources.stone': {name: 'stone'},
    'resources.manpower': {name: 'manpower'},
    'buildings.tower.title': {name: 'tower_title'},
    'buildings.tower.show': {name: 'tower_show'},
    'buildings.tower.cost': {name: 'tower_cost'},
    'buildings.tower.count': {name: 'tower_count'}, */
}

export const allReducers = (state, action) => (
    combineReducers({
        actions: (state) => state || defaultActions,
        cookies: cookies,
        global: global,
        resources: resources,
        buildings: (state) => state || defaultBuildings,
        events: events,

    })(actions(state, action), action)
    //   (buildings(state, action), action)
);
