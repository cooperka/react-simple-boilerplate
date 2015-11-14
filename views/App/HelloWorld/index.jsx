import React, { PropTypes } from 'react';
import connectToStores from 'alt/utils/connectToStores';

import MyStore from '../../../flux/store';
import MyActions from '../../../flux/actions';

import './HelloWorld.scss';

class HelloWorld extends React.Component {

  static getStores() {
    return [MyStore];
  }

  static getPropsFromStores() {
    const storeState = MyStore.getState();
    return {
      things: storeState.things,
    };
  }

  buttonWasClicked() {
    MyActions.addThing();
  }

  render() {
    let { things } = this.props;

    let numThings = 0;
    const thingsToRender = (things || []).map(name => {
      return <div className="thing" key={numThings++}>Thing {name}</div>;
    });

    return (
      <div>
        <h1>Hello, world!</h1>
        <button className="thing-generator" onClick={this.buttonWasClicked.bind(this)}>Add a thing</button>
        { thingsToRender }
      </div>
    );
  }

}

HelloWorld.propTypes = {
  things: PropTypes.object.isRequired,
};

export default connectToStores(HelloWorld);
