import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const NUM_ITEMS = 1000;
const NEST_LEVEL = 5;

function benchmark(name, cb) {
  console.time(name);
  cb();
  console.timeEnd(name);
}

ReactDOM.render(<p>Clear DOM!</p>, document.getElementById('appContainer'));

benchmark('Components', () => {
  ReactDOM.render(<App itemType={'components'} numItems={NUM_ITEMS} nestLevel={NEST_LEVEL} />, document.getElementById('appContainer'));
});

ReactDOM.render(<p>Clear DOM!</p>, document.getElementById('appContainer'));

benchmark('Elements', () => {
  ReactDOM.render(<App itemType={'elements'} numItems={NUM_ITEMS} nestLevel={NEST_LEVEL} />, document.getElementById('appContainer'));
});

ReactDOM.render(<p>Clear DOM!</p>, document.getElementById('appContainer'));

benchmark('Components', () => {
  ReactDOM.render(<App itemType={'components'} numItems={NUM_ITEMS} nestLevel={NEST_LEVEL} />, document.getElementById('appContainer'));
});

ReactDOM.render(<p>Clear DOM!</p>, document.getElementById('appContainer'));

benchmark('Elements', () => {
  ReactDOM.render(<App itemType={'elements'} numItems={NUM_ITEMS} nestLevel={NEST_LEVEL} />, document.getElementById('appContainer'));
});
