import React from 'react';

require('../style/hello-world.css');

var HelloWorld = React.createClass({

  render: function() {
    return (
      <h1>Hello, world!</h1>
    );
  },

});

export default HelloWorld;
