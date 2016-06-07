import React, { PropTypes } from 'react';

import './HelloWorld.scss';

class HelloWorld extends React.Component {

  render() {
    let { things, clickHandler } = this.props;

    let numThings = 0;
    const thingsToRender = (things || []).map(name => {
      return <div className="thing" key={numThings++}>Thing {name}</div>;
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
