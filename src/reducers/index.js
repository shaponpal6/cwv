import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import currentPageFilter from './currentPageFilter'
import chatStartButton from './chatStartButton'
import welcomePage from './welcomePage'

export default combineReducers({
  welcomePage,
  chatStartButton,
  currentPageFilter,
  todos,
  visibilityFilter
})