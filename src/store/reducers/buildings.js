import buildings from '../data/buildings'

export default (state = buildings, action) => {
  switch (action.type) {

  case 'INC':
    return { ...state }

  default:
    return state
  }
}
