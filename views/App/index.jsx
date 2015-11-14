import React from 'react';

import HelloWorld from './HelloWorld';

require('./App.scss');

class App extends React.Component {

  render() {
    return (
      <HelloWorld />
    );
  }

}

export default App;
