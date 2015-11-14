import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { addThing } from '../../../redux/actions';

import './HelloWorld.scss';

class HelloWorld extends React.Component {

  buttonWasClicked() {
    this.props.dispatch(addThing());
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
  dispatch: PropTypes.func.isRequired,
  things: PropTypes.object.isRequired,
};

/**
 * @return {Object} The props we want to inject, given the global state.
 */
function select(state) {
  return {
    things: state.things,
  };
}

export default connect(select)(HelloWorld);
