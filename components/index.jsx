// Note: Normalize must come before any components.
import 'normalize.css/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import reducer from '../redux/reducers';
import App from './App';

const store = compose(
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions.
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)(reducer);

const rootComponent = (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>
);

ReactDOM.render(rootComponent, document.getElementById('appContainer'));
