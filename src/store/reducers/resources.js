import resources from '../data/resources'

export default (state = resources, action) => {
    switch (action.type) {
        case 'CREDITS_INC':
            /*         if (state.wood === 10) {
                        state = {
                            ...state,
                            buildings: {
                                tower: {
                                    title: 'Wooden tower',
                                    count: 0,
                                    show: true,
                                    cost: {
                                        wood: 30
                                    }
                                }
                            }
                        }
                    } */
            state = {
                ...state,
                credits: resources.credits += 0.0000001

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
        case 'CREDITS_DEC':
            break;
        default: {
            break
        }
    }
    return state
};