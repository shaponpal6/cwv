import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import Header from '../Header';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import './app.module.css';

export class App extends Component {
  // static propTypes = {

  // }

  render() {
    return (
      <div className="container">
        <h2 className="title">React Redux App</h2>
        {/* <Header /> */}
        {/* <VisibleTodoList /> */}
        <AddTodo />
      </div>
    );
  }
}

export default App;
