import Immutable from 'immutable';

import { ADD_THING } from './actions';

const initialState = {
  things: Immutable.List(),
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_THING:
      return {
        ...state,
        things: state.things.push(action.name),
      };

    default:
      return state;
  }
}

export default reducer;
