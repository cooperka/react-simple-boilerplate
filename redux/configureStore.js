import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';

import reducer from './reducers';
import DevTools from '../client/components/DevTools';

const finalCreateStore = compose(
  // Middleware can also be applied here.

  // Required! Enable Redux DevTools with the monitors you set up in DevTools.
  DevTools.instrument(),

  persistState(getDebugSessionKey())
)(createStore);

/**
 * Lets you write ?debug_session=<name> in address bar to persist debug sessions.
 * @returns {string|null} The debug session key.
 */
function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);

  // Hot reload reducers
  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers') /* .default if you use Babel 6+ */)
    );
  }

  return store;
}
