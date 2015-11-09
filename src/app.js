import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello-world';

class App extends React.Component {

  render() {
    return (
      <HelloWorld />
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
