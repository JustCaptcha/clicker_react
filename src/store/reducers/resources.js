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
              electricity: state.electricity + 1
          };
          break;
      case 'DRILL':
          if (state.electricity >= 10) {
              state = {
                  ...state,
                  electricity: state.electricity - 10,
                  metal: state.metal + 1,
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