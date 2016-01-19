import React from 'react';

import MyComponent from '../MyComponent';
import MyElement from '../MyElement';

import './App.scss';

class App extends React.Component {

  render() {
    let items = [];
    for (let i = 0; i < this.props.numItems; i++) {
      let item = getItem(this.props.itemType, i, this.props.nestLevel);
      items.push(item);
    }

    return (
      <div>
        {items}
      </div>
    );
  }

}

function getItem(itemType, index, nestLevel, children) {
  if (nestLevel > 0) {
    children = getItem(itemType, index, nestLevel - 1, children);
  }

  var key = index + '-' + nestLevel;

  switch(itemType) {
    case 'components':
      return <MyComponent key={key}>{children}</MyComponent>;
    case 'elements':
      return MyElement({key: key, children: children});
    default:
      return null;
  }
}

export default App;
