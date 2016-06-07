import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../../../../redux/reducers';
import App from '../App';
import HelloWorld from '../HelloWorld/HelloWorld';

describe('App component', () => {
  let component;

  beforeEach(() => {
    const store = createStore(reducer);

    const rootComponent = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <App />
      </Provider>
    );
    component = TestUtils.findRenderedComponentWithType(rootComponent, App);
  });

  it('should contain a HelloWorld component', () => {
    const helloWorld = TestUtils.scryRenderedComponentsWithType(component, HelloWorld);
    expect(helloWorld.length).to.equal(1);
  });

  it('should add a thing when event is dispatched', () => {
    // Roundabout logic to get a reference to the click handler,
    // because App is wrapped by Connect (which does weird things).
    // Sort of makes sense though, this is fine for now.
    let helloWorld = TestUtils.findRenderedComponentWithType(component, HelloWorld);
    expect(helloWorld.props.things.size).to.equal(0);

    helloWorld.props.clickHandler();

    // Should have been re-rendered, so find the component again.
    helloWorld = TestUtils.findRenderedComponentWithType(component, HelloWorld);
    expect(helloWorld.props.things.size).to.equal(1);
  });
});
