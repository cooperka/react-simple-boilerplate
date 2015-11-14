// Note: Normalize must come before any components.
import 'normalize.css/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../flux/store';
import App from './App';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('appContainer')
);
