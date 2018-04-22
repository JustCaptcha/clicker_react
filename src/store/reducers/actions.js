import resourcesReducer from '../reducers/resources';

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
        default:
            return state
    }
}
