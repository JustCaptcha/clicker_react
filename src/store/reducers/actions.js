import resourcesReducer from '../reducers/resources';
import buildingsReducer from '../reducers/buildings';

const checkPreAction = {
    CHANGE_RESOURCE: ({resources}, {resource, value}) => !(value < 0 && resources[resource] + value < 0)
}

export default (state, action) => {
    let resources = state.resources;

    switch (action.type) {
        case 'ACTIVATE_ACTION':
            const item = state.actions[action.payload.key];

            if (item.isActive) {
                return state;
            }

            if (item.preAction) {
                if (!checkPreAction[item.preAction.type](state, item.preAction.payload)) {
                    return state;
                }

                resources = resourcesReducer(resources, item.preAction);
            }

            return {
                ...state,
                actions: {
                    ...state.actions,
                    [action.payload.key]: {
                        ...item,
                        isActive: true,
                        startTime: action.payload.time
                    }
                },
                resources
            };
        case 'UPDATE_ACTIONS':
            return {
                ...state,
                actions: Object.keys(state.actions).map(key => {
                    const item = state.actions[key];

                    if (item.isActive) {
                        const passedTime = action.payload.time - item.startTime;

                        if (passedTime >= item.time) {
                            resources = resourcesReducer(resources, item.action);

                            return {
                                ...item,
                                isActive: false,
                                completeValue: 0
                            };
                        }

                        return {
                            ...item,
                            completeValue: passedTime / item.time
                        };
                    }

                    return item;
                }),
                resources
            };
        case 'BUILDINGS_ACTION':
            let buildings = {...state.buildings};
            return {
                ...state,
                buildings: Object.keys(state.buildings).map(key => {
                    const item = state.buildings[key];
                    buildings = buildingsReducer(buildings, item.action);
/*                     return {
                        ...item,
                    } */
                    return item;
                })

            };
        default:
            return state
    }
}
