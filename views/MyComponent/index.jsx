import React from 'react';

class MyComponent extends React.Component {

  render() {
    return (
      <div key={this.props.key}>
        Component
      </div>
    );
  }

}

export default MyComponent;
