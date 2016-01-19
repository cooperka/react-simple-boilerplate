import React from 'react';
import ReactDOM from 'react-dom';
import _union from 'lodash/union';
import _forOwn from 'lodash/forOwn';

import App from './App';

/** Total number of "root" items to add. */
const NUM_ITEMS = 1000;

/** Number of recursively nested items to add to each "root" item. */
const NEST_LEVEL = 5;

/** Number of iterations of testing, to generate averages. */
const NUM_BENCHMARKS = 3;

/** Map of timings, to generate averages at the end. */
let timeMap = {};

/** Map of time averages, to generate percent change at the end. */
let avgMap = {};

/**
 * Perform a benchmark of the callback method.
 * Results will be logged to the console.
 *
 * @param {string} name Name of the benchmark.
 * @param {function} cb Callback to perform benchmarking on.
 */
function benchmark(name, cb) {
  let start = performance.now();
  cb();
  let total = performance.now() - start;

  //console.log(name + ":", prettyNum(total), 'ms');

  timeMap[name] = _union(timeMap[name], [total]);
}

/**
 * @param {array} items
 * @returns {number} The average of all the items in the given array.
 */
function getAvg(items) {
  return items.reduce((prev, curr) => {
    return prev + curr;
  }) / items.length;
}

/**
 * @param {number} num
 * @returns {number} A number with only one decimal place.
 */
function prettyNum(num) {
  return parseFloat(num.toFixed(1));
}

console.log('Running ' + NUM_BENCHMARKS + ' benchmarks...');

for (let i = 0; i < NUM_BENCHMARKS; i++) {
  ReactDOM.render(<p>Clear DOM!</p>, document.getElementById('appContainer'));

  benchmark('Components', () => {
    ReactDOM.render(<App itemType={'components'} numItems={NUM_ITEMS} nestLevel={NEST_LEVEL} />, document.getElementById('appContainer'));
  });

  ReactDOM.render(<p>Clear DOM!</p>, document.getElementById('appContainer'));

  benchmark('Elements', () => {
    ReactDOM.render(<App itemType={'elements'} numItems={NUM_ITEMS} nestLevel={NEST_LEVEL} />, document.getElementById('appContainer'));
  });
}

_forOwn(timeMap, (value, key) => {
  let avg = getAvg(value);
  console.log('AVERAGE ' + key + ':', prettyNum(avg), 'ms');
  avgMap[key] = avg;
});

let firstItem;
_forOwn(avgMap, (value, key) => {
  if (!firstItem) {
    firstItem = key;
    return;
  }
  console.log('PERCENT FASTER for ' + key + ':', prettyNum(100 - value / avgMap[firstItem] * 100), '%');
});
