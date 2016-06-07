import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Immutable from 'immutable';

import HelloWorld from '../HelloWorld';

chai.use(sinonChai);

/**
 * Expect that there will be a given number of components with this className
 * under the root component.
 *
 * @param {Object} component
 * @param {string} className
 * @param {number} numExpected
 */
function expectNumberOfClassNames(component, className, numExpected) {
  const components = TestUtils.scryRenderedDOMComponentsWithClass(component, className);
  expect(components.length).to.equal(numExpected);
}

describe('HelloWorld component', () => {
  let component, renderedDOM, mockThings, mockClickHandler;

  beforeEach(() => {
    mockThings = Immutable.List();
    mockClickHandler = sinon.spy();

    component = TestUtils.renderIntoDocument(
      <HelloWorld things={mockThings} clickHandler={mockClickHandler} />
    );
    renderedDOM = () => ReactDOM.findDOMNode(component);
  });

  it('should say hello to the world', () => {
    const helloWorldNode = renderedDOM();
    const helloWorldText = helloWorldNode.innerHTML;
    expect(helloWorldText).to.contain('Hello');
    expect(helloWorldText).to.contain('world');
  });

  it('should call the click handler when you press the button', () => {
    const button = TestUtils.findRenderedDOMComponentWithClass(component, 'thing-generator');

    for (let i = 1; i <= 3; i++) {
      TestUtils.Simulate.click(button);
      expect(mockClickHandler).to.have.callCount(i);
    }
  });

  it('should render as many things as it\'s told to', () => {
    expectNumberOfClassNames(component, 'thing', 0);

    const oldProps = component.props;
    const newThings = mockThings.push('new thing');
    component = TestUtils.renderIntoDocument(
      <HelloWorld {...oldProps} things={newThings} />
    );

    expectNumberOfClassNames(component, 'thing', 1);
  });
});
