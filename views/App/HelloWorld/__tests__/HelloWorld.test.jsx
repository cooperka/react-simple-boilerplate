import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import HelloWorld from '../index';

describe('HelloWorld component', function() {
  beforeEach(() => {
    this.component = TestUtils.renderIntoDocument(<HelloWorld />);
    this.renderedDOM = () => ReactDOM.findDOMNode(this.component);
  });

  it('says hello to the world', () => {
    const helloWorldNode = this.renderedDOM();
    const helloWorldText = helloWorldNode.innerHTML;
    expect(helloWorldText).to.contain('Hello');
    expect(helloWorldText).to.contain('world');
  });
});
