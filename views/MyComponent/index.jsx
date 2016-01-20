import React from 'react';

class MyComponent extends React.Component {

  static someMethod() {
    let foo = 1+1;
  }

  constructor(props) {
    super(props);

    this.state = {
      california: 'CA',
    };
  }

  componentWillMount() {
    let foo = 1+1;
  }

  componentDidMount() {
    let foo = 1+1;
  }

  componentWillUpdate() {
    let foo = 1+1;
  }

  componentDidUpdate() {
    let foo = 1+1;
  }

  render() {
    return (
      <div key={this.props.key}>
        Component
        {this.props.children}
      </div>
    );
  }

}

MyComponent.randomObject = {
  foo: 'bar',
  baz: 'qux',
  prettyLongString: 'asdfasdfasdfadsfadfadfadfadsfadsfasdfasdfasdfasdf',
};

export default MyComponent;
