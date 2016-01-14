import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const NUM_ITEMS = 5000;

function benchmark(name, cb) {
  console.time(name);
  cb();
  console.timeEnd(name);
}

benchmark('Components', () => {
  ReactDOM.render(<App itemType={'components'} numItems={NUM_ITEMS} />, document.getElementById('appContainer'));
});

benchmark('Elements', () => {
  ReactDOM.render(<App itemType={'elements'} numItems={NUM_ITEMS} />, document.getElementById('appContainer'));
});

benchmark('Components', () => {
  ReactDOM.render(<App itemType={'components'} numItems={NUM_ITEMS} />, document.getElementById('appContainer'));
});

benchmark('Elements', () => {
  ReactDOM.render(<App itemType={'elements'} numItems={NUM_ITEMS} />, document.getElementById('appContainer'));
});
