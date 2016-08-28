import { createStore, compose } from 'redux';

import reducer from '../../redux/reducers';
import DevTools from '../components/DevTools';

const finalCreateStore = compose(
  // Middleware can also be applied here.

  // Required! Enable Redux DevTools with the monitors you set up in DevTools.
  DevTools.instrument()
)(createStore);

export default finalCreateStore(reducer);
