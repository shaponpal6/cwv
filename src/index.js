import React from 'react';
import { render } from 'react-dom';
import App from './App';
import  AppContextProvider  from './store';

render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById('app')
);
