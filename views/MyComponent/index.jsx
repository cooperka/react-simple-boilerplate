import React from 'react';

class MyComponent extends React.Component {

  render() {
    let components = [];
    for (let i = 0; i < this.props.number; i++) {
      components.push(
        <p key={i}>
          Component
        </p>
      );
    }

    return (
      <div>
        {components}
      </div>
    );
  }

}

export default MyComponent;
