import resources from '../data/resources'
import buildings from '../data/buildings'

export default (state = resources, action) => {
  switch (action.type) {
    case 'BUILD_MELTER':
      console.log('Build melter')
      state = {
        ...state,
      }
      break;
    default: 
      return state
  }
  return state;
}
