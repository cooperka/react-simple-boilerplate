import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello-world';

var App = React.createClass({

  render: function() {
    return (
      <HelloWorld />
    );
  },

});

ReactDOM.render(<App />, document.getElementById('app'));
