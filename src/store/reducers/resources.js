import resources from '../data/resources'

export default (state = resources, action) => {
    switch (action.type) {
        case 'CREDITS_INC':
            state = {
                ...state,
                credits: state.credits + action.payload.value

            }
            break;
        case 'ELECTRICITY_INC':
            state = {
                ...state,
                electricity: state.electricity + action.payload.value
            };
            break;
        case 'DRILL_METAL':
            if (state.electricity >= action.payload.consume) {
                state = {
                    ...state,
                    electricity: state.electricity - action.payload.consume,
                    rawMetal: state.rawMetal + action.payload.value,
                };
            }
            break;
        case 'DRILL_COPPER':
            if (state.electricity >= action.payload.consume) {
                state = {
                    ...state,
                    electricity: state.electricity - action.payload.consume,
                    rawCopper: state.rawCopper + action.payload.value,
                };
            }
            break;
        case 'DRILL_GOLD':
            if (state.electricity >= action.payload.consume) {
                state = {
                    ...state,
                    electricity: state.electricity - action.payload.consume,
                    rawGold: state.rawGold + action.payload.value,
                }
            }
            break;
        case 'MELT_METAL':
            if (state.rawMetal >= action.payload.consume) {
                state = {
                    ...state,
                    rawMetal: state.rawMetal - action.payload.consume,
                    metal: state.metal + action.payload.value,
                };
            }
            break;
        case 'MELT_COPPER':
            if (state.rawCopper >= action.payload.consume) {
                state = {
                    ...state,
                    rawCopper: state.rawCopper - action.payload.consume,
                    copper: state.copper + action.payload.value,
                };
            }
            break;
        case 'MELT_GOLD':
            if (state.rawGold >= action.payload.consume) {
                state = {
                    ...state,
                    rawGold: state.rawGold - action.payload.consume,
                    gold: state.gold + action.payload.value
                }
            }
            break;
        default: {
            break
        }
    }
    return state
};