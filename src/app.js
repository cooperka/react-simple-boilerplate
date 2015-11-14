import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello-world';

require('./style/app.scss');

class App extends React.Component {

  render() {
    return (
      <HelloWorld />
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
