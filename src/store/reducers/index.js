import { combineReducers } from 'redux'
import global from './global'
import resources from './resources'
import buildings from './buildings'

const allReducers = combineReducers({
    global: global,
    resources: resources,
    buildings: buildings,
})

export default allReducers