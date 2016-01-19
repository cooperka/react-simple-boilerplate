import React from 'react';

class MyComponent extends React.Component {

  render() {
    return (
      <div key={this.props.key}>
        Component
        {this.props.children}
      </div>
    );
  }

}

export default MyComponent;
