import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ListContainer from '../../components/ListContainer';
import { toggleTodo, VisibilityFilters } from '../../actions'
import './style.css'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
} 


export const ChatBody = ({todos, toggleTodo}) => {
    return (
        <div className='wpcwv-chatBodyWraper'>
            <ListContainer todos={todos} toggleTodo={toggleTodo}/>
        </div>
    )
}


const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

ChatBody.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired
  }

export default connect(mapStateToProps, mapDispatchToProps)(ChatBody)