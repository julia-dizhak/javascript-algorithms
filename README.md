# Computer Science in JavaScript
The repo contains JavaScript implementations of different famous computer science algorithms.

## Description
Collection of classic computer science paradigms, algorithms, and approaches written in JavaScript.
As well contains description and characteristics: runtime or complexity.
Without using in-built methods of JavaScript, for example, sort(), reverse() and etc.
Solutions include as well measuring of time complexity.

## Demo
Hosted on GitHub Pages, [Demo](https://julia-dizhak.github.io/javascript-algorithms/)

## Development
Technology
[ES6](http://es6-features.org/), [Yarn](https://yarnpkg.com/), [Babel](https://babeljs.io/), [Jest](https://facebook.github.io/jest/) with a syntax highlighter [Highlightjs](https://highlightjs.org/).

Tests run by `npm test`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Author

by [Yuliia (Julia) Dizhak](https://github.com/julia-dizhak)

created on 12/21/17

## List of problems

* Number (General)
* Array
    * [Clone arrays](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/array/clone.js)
    * [Merge arrays](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/array/merge-sorted-arrays.js)

* String manipulation
* Recursion
    * [Factorial](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/recursion/factorial.js)
    * [Fibonacci Number (approaches recursion, iterative](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/recursion/fibonacci.js)
* Search
    * [Linear search](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/search/find-index.js)
    * [Binary search](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/search/binary-search.js)

| Search name       | O          | Ω      | Space  |
| :---              | :---       | :---   | :---   |
| Linear Search     | O(n)       | Ω(1)   | O(1)   |
| Binary Search     | O(log n)   | Ω(1)   | O(1)   |

* Sorting
    * [Bubble sort](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/sorting/bubble-sort.js)
    * [Selection sort](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/sorting/selection-sort.js)
    * [Insertion sort](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/sorting/insertion-sort.js)
    * Quick sort
    * [Merge sort](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/sorting/merge-sort.js)

| Sort name       | O           | Ω          | Space  |
| :---            | :---        | :---       | :---   |
| Bubble sort     | O(n^2)      | Ω(n)       | O(1)   |
| Selection sort  | O(n^2)      | Ω(n^2)     | O(1)   |
| Insertion sort  | O(n^2)      | Ω(n)       | O(1)   |
| Merge sort      | O(n log n)  | Ω(n log n) | O(n)   |

* Stack
    * [Stack implementation: use array](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/stack-queue/stack/stack-use-array.js)


## Leetcode

* Bitwise operators
    * [476. Number complement / 1009. Complement of Base 10 Integer]
* Array
    * [268. Missing number: approach Gauss, sorting](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/268-missing-number.js)
    * [169. Majority element / 229. Majority element II]
    * [997. Find the Judge in the town](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/997-find-judge.js)
    * [53. Maximum subarray: approach ...](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/53-max-contiguous-subarray-sum.js)
* Search
    * [278. First Bad version]

* String manipulation
    * [383. Ransom Note]
    * [387. First Unique Character in a String]
    * [771. Jewels and Stones]
    * [438. Find all anagrams](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/string-manipulation/438-find-all-anagrams.js)
    * [383. Ransom Note]
    * [387. First Unique Character in a String]
    * [771. Jewels and Stones]

* Stack
    * [155. Min Stack: approach 2 stacks, improved 2 stacks and stack of value (minimum pairs)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/stack/155-min-stack.js)
    * [716 Max Stack: 2 stacks approach](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/stack/716-max-stack.js)

* Graph
    * [773. Flood Fill](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/graph/dfs/773-flood-fill.js)


## OOP in JS

* Implementation
    * [Stop watch](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/oop/stop-watch.js)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Folder structure
The most recent packages are found in these directories:

* `src/algorithms` - the implementation source code
* `src/algorithms/***.spec.js` - tests for the implementation source code


### TODO:
  * scrollTo works with bug
  * details toggle works with bug (sometimes)
  * display level: beginner, medium, ... (like corners)
  * generate test coverage
  * performance test
  * seo
