// Note: Normalize must come before any components.
import 'normalize.css/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App/App';
import DevTools from './DevTools';
import configureStore from '../../redux/configureStore';

// This store is used for regular rendering, but a different object is injected
// when building statically.
const store = configureStore();

const rootComponent = (
  <div>
    <Provider store={store}>
      <div>
        <App />
        <DevTools />
      </div>
    </Provider>
  </div>
);

ReactDOM.render(rootComponent, document.getElementById('appContainer'));
