import { currentPageFilters } from '../actions'

const currentPageFilter = (state = currentPageFilters.SHOW_WIDGET, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER': 
      return action.filter
    default:
      return state
  }
}

export default currentPageFilter