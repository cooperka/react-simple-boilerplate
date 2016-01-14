import React from 'react';

import MyComponent from '../MyComponent';
import MyElement from '../MyElement';

import './App.scss';

class App extends React.Component {

  render() {
    const components = <MyComponent number={10}></MyComponent>;
    const elements = <MyElement number={10}></MyElement>;

    return (
      <div>
        {components}
        {elements}
      </div>
    );
  }

}

export default App;
