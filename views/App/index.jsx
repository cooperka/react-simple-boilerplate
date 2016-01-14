import React from 'react';

import MyComponent from '../MyComponent';
import MyElement from '../MyElement';

import './App.scss';

class App extends React.Component {

  render() {
    let items = [];
    for (let i = 0; i < this.props.numItems; i++) {
      let item = getItem(this.props.itemType, i);
      items.push(item);
    }

    return (
      <div>
        {items}
      </div>
    );
  }

}

function getItem(itemType, index) {
  switch(itemType) {
    case 'components':
      return <MyComponent key={index}></MyComponent>;
    case 'elements':
      return MyElement({key: index});
    default:
      return null;
  }
}

export default App;
