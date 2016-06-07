import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import HelloWorld from './HelloWorld/HelloWorld';
import { addThing } from '../../../redux/actions';

import './App.scss';

class App extends React.Component {

  thingButtonWasClicked() {
    const name = (new Date()).getSeconds();
    this.props.dispatch(addThing(name));
  }

  render() {
    let { things } = this.props;

    return (
      <HelloWorld things={things} clickHandler={this.thingButtonWasClicked.bind(this)} />
    );
  }

}

App.propTypes = {
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

export default connect(select)(App);
