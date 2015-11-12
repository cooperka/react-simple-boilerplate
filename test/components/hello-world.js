import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

import HelloWorld from '../../src/components/hello-world';

const { expect } = chai;

describe('HelloWorld component', () => {

  it('says hello to the world', () => {
    const helloWorld = TestUtils.renderIntoDocument(
      <HelloWorld />
    );

    const helloWorldNode = ReactDOM.findDOMNode(helloWorld);
    const helloWorldText = helloWorldNode.innerHTML;
    expect(helloWorldText).to.contain('Hello');
    expect(helloWorldText).to.contain('world');
  });

});
