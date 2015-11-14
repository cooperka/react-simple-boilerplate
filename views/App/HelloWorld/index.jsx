import React from 'react';

import './HelloWorld.scss';

class HelloWorld extends React.Component {

  buttonWasClicked() {
    //
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <button className="thing-generator" onClick={this.buttonWasClicked}>Does nothing</button>
      </div>
    );
  }

}

export default HelloWorld;
