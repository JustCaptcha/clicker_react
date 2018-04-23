import resourcesReducer from '../reducers/resources';
import buildingsReducer from '../reducers/buildings';

export default (state, action) => {
    switch (action.type) {
        case 'ACTIVATE_ACTION':
            return {
                ...state,
                actions: {
                    ...state.actions,
                    [action.payload.key]: {
                        ...state.actions[action.payload.key],
                        isActive: true,
                        startTime: action.payload.time
                    }
                }
            };
        case 'UPDATE_ACTIONS':
            let resources = {...state.resources};

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
                }),
                buildings

            };
        default:
            return state
    }
}
