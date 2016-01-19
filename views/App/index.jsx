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

/**
 * Recursively create children and return a "root" item to add to the DOM.
 *
 * @param {string} itemType Type of items to create (e.g. 'components' or 'elements').
 * @param {number} index Index of the item, used for generating keys.
 * @param {number} nestLevel How many total children to nest.
 * @param {object|undefined} children Children to add; generally will begin empty.
 * @returns {object} A "root" item, with children.
 */
function getItem(itemType, index, nestLevel, children) {
  if (nestLevel > 0) {
    children = getItem(itemType, index, nestLevel - 1, children);
  }

  var key = index;

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
