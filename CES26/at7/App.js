import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducer';
import Calculadora from './src/Calculadora.js';

var store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Calculadora />
    </Provider>
  );
}
