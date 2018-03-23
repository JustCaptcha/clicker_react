const initialState = {
    seconds: 0
}

export default (state = initialState, action) => {
  switch (action.type) {

  case 'TIME_INC':
    return {
      ...state,
      seconds: state.seconds += 1
    }

  default:
    return state
  }
}
