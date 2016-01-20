# React Perf

Basic performance testing for React, forked from
a much earlier version of [master](https://github.com/cooperka/react-simple-boilerplate).

## Usage

1. Clone the repo
2. `npm i`
3. `npm start`
4. Navigate to <http://localhost:8080>

## Results

Elements and components both seem to render in a similar amount of time,
regardless of how much nesting is being done.
Elements generally seem to be faster by about 5-15%, all other factors ignored.

Shorter, fully unique keys result in a significant performance gain as compared to longer keys.
Short numeric keys (such as a for-loop index) seem to be faster than long strings
(50-60 characters in this case) by roughly 30-40%!

Adding component lifecycle methods and extra class members doesn't seem to interfere very much;
elements still only seem to be performing about 5-15% faster.

Interestingly, the results vary wildly between each run.
It takes several test runs before any real trends can be confirmed.
It seems like React should be more deterministic than this;
I'm not sure what causes this variance.
