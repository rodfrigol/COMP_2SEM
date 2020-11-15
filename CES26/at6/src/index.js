import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import calculadora from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css'

var store = createStore(calculadora);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

