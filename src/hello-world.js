var React = require("react");
var ReactDOM = require("react-dom");

require('!style!css!./style/hello-world.css');

ReactDOM.render(
  React.createElement('h1', null, 'Hello, world!'),
  document.getElementById('example')
);
