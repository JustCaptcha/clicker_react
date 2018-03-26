import resources from '../data/resources'

export default (state = resources, action) => {
    switch (action.type) {
      case 'WOOD_INC':
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
          wood: resources.wood += 1
        }
        break;
      case 'WOOD_DEC':
        break;
      default: {
          break
      }
    }
    return state
  };