import React, { PropTypes } from 'react';

import './HelloWorld.scss';

// eslint-disable-next-line react/prefer-stateless-function
class HelloWorld extends React.Component {

  render() {
    const { things, clickHandler } = this.props;

    let numThings = 0;
    const thingsToRender = (things || []).map((name) => {
      numThings += 1;
      return <div className="thing" key={numThings}>Thing {name}</div>;
    });

    return (
      <div>
        <h1>Hello, world!</h1>
        <button className="thing-generator" onClick={clickHandler}>Add a thing</button>
        { thingsToRender }
      </div>
    );
  }

}

HelloWorld.propTypes = {
  things: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default HelloWorld;
