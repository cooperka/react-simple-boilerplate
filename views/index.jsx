import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

/** Total number of "root" items to add. */
const NUM_ITEMS = 1000;

/** Number of recursively nested items to add to each "root" item. */
const NEST_LEVEL = 5;

/**
 * Perform a benchmark of the callback method.
 * Results will be logged to the console.
 *
 * @param {string} name Name of the benchmark.
 * @param {function} cb Callback to perform benchmarking on.
 */
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
