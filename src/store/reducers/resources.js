const resources = {
    wood: 0,
    food: 0,
    stone: 0,
    buildings: {
        tower: {
            title: 'Wooden tower',
            count: 0,
            show: false,
            cost: {
                wood: 30
            }
        }
    }
}

export default (state = resources, action) => {
    switch (action.type) {
      case 'WOOD_INC':
        if (state.wood === 10) {
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
        }
        state = {
          ...state,
          wood: resources.wood += 1
        }
        break;
      case 'WOOD_DEC':
        break;
    }
    return state
  };