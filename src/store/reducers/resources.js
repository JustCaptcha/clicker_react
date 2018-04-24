import resources from '../data/resources'

export default (state = resources, action) => {
    switch (action.type) {
        case 'CHANGE_RESOURCE':
            state = {
                ...state,
                [action.payload.resource]: state[action.payload.resource] + action.payload.value

            }
            break;
        default: {
            break
        }
    }
    return state
};