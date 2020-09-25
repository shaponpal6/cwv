import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
// import Route from './route';
import store from './store';

// const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
    {/* <Route/> */}
  </Provider>,
  document.getElementById('app')
)