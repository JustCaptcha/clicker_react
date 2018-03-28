import global from '../data/global'


export default (state = global, action) => {
  switch (action.type) {

  case 'TIME_INC':
    return {
      ...state,
      time_seconds: state.time_seconds += 1
    }

  default:
    return state
  }
}
