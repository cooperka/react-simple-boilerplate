import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../../../../flux/store';
import HelloWorld from '../index';

describe('HelloWorld component', function() {
  beforeEach(() => {
    const store = createStore(reducer);

    this.component = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <HelloWorld />
      </Provider>
    );
    this.renderedDOM = () => ReactDOM.findDOMNode(this.component);
  });

  it('says hello to the world', () => {
    const helloWorldNode = this.renderedDOM();
    const helloWorldText = helloWorldNode.innerHTML;
    expect(helloWorldText).to.contain('Hello');
    expect(helloWorldText).to.contain('world');
  });

  it('adds a thing when you press the button', () => {
    const button = TestUtils.findRenderedDOMComponentWithClass(this.component, 'thing-generator');

    for (let i = 1; i <= 3; i++) {
      TestUtils.Simulate.click(button);
      const numDivs = TestUtils.scryRenderedDOMComponentsWithClass(this.component, 'thing').length;
      expect(numDivs).to.equal(i);
    }
  });
});
