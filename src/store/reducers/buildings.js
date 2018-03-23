const initialState = {
    tower: {
        id: 0
    }
}

export default (state = initialState, action) => {
  switch (action.type) {

  case 'INC':
    return { ...state }

  default:
    return state
  }
}
