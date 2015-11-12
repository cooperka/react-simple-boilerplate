import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

jest.dontMock('../../src/components/hello-world');
const HelloWorld = require('../../src/components/hello-world');

describe('HelloWorld component', () => {

  it('says hello to the world', () => {
    const helloWorld = TestUtils.renderIntoDocument(
      <HelloWorld />
    );

    const helloWorldNode = ReactDOM.findDOMNode(helloWorld);
    const helloWorldText = helloWorldNode.innerHTML;
    expect(helloWorldText).toContain('Hello');
    expect(helloWorldText).toContain('world');
  });

});
