import Immutable from 'immutable';

import alt from './alt';
import MyActions from './actions';

class MyStore {

  constructor() {
    this.bindListeners({
      handleAddThing: MyActions.addThing,
    });

    this.state = {
      things: Immutable.List(),
    };
  }

  handleAddThing(name) {
    this.setState({
      things: this.state.things.push(name),
    });
  }

}

export default alt.createStore(MyStore, 'MyStore');
