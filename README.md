# Computer Science in JavaScript
The repo contains JavaScript implementations of different famous computer science algorithms.

As well below you will find solution for [leetcode](https://leetcode.com/) problems
divided by dependency of topic relation.

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

* ### Bitwise
    * [Common bit tasks](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/bitwise/common-bit-tasks.js)

    | Approaches:        | Time    | Space    |
    | :---               | :---    | :---     |
    | getBit(num, i)        | O()  | O()     |
    | testBit(num, i)  | O()    | O()     |
    |   | O()    | O()     |

* Number (General)

* String manipulation
    * [Reverse a string (swap, recursion, 2 pointers)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/array/reverse-a-string.js)

* Array
    * [Clone arrays](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/array/clone.js)
    * [Merge arrays](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/array/merge-sorted-arrays.js)

* ### Hash
    * [1. Two sum](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/hash/two-sum.js)

    | Approaches:        | Time    | Space    |
    | :---               | :---    | :---     |
    | Brute force        | O(n^2)  | O(1)     |
    | 2-pass Hash table  | O(n)    | O(n)     |
    | 1-pass Hash table  | O(n)    | O(n)     |

* Search: linear and binary
    * [Linear search](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/search/linear/find-index.js)
    * [Binary search (iterative, recursion)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/search/binary/binary-search.js)

| Search name       | O          | Ω      | Space  |
| :---              | :---       | :---   | :---   |
| Linear Search     | O(n)       | Ω(1)   | O(1)   |
| Binary Search     | O(log n)   | Ω(1)   | O(1)   |

* Sorting
    * [Bubble sort](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/sorting/bubble-sort.js)
    * [Selection sort](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/sorting/selection-sort.js)
    * [Insertion sort](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/sorting/insertion-sort.js)
    * [Shell sort](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/sorting/shell-sort.js)
    * [Merge sort](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/sorting/merge-sort.js)
    * Quick sort

| Sort name       | O           | Ω          | Space     |
| :---            | :---        | :---       | :---      |
| Bubble sort     | O(n^2)      | Ω(n)       | O(1)      |
| Selection sort  | O(n^2)      | Ω(n^2)     | O(1)      |
| Insertion sort  | O(n^2)      | Ω(n)       | O(1)      |
| Shell sort      | O(n^2)      | Ω(n)       | O(1)      |
| Merge sort      | O(n log n)  | Ω(n log n) | O(n)      |
| Quick sort      | O(n log n)  | Ω(n log n) | O(log n)  |

* ### Linked Lists
    * [Singly-linked List](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/linked-lists/singly-linked-list.js)

* ### Stack implementation
    * [Stack via Array](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/stack-queue/stack/stack-use-array.js)

    * [Stack via Singly Linked List](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/stack-queue/stack/stack-use-linked-list.js)

    | Complexity:        | Time         | Space   |
    | :---               | :---         | :---    |
    | All operations     | O(1)         | 0(N)?   |

    * [Stack via String](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/stack-queue/stack/stack-use-string.js)

* ### Queue implementation
    * [Queue via Array](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/stack-queue/queue/queue-use-array.js)

    * [Queue via Singly Linked List](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/stack-queue/queue/queue-use-linked-list.js)

    | Complexity Time:            | enqueue      | dequeue   |
    | :---                        | :---         | :---      |
    | 1 Pointer (head)            | O(n)         | 0(1)      |
    | 2 Pointers (head and tail)  | O(1)         | 0(1)      |

* Recursion
    * [Factorial](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/recursion/factorial.js)
    * [Fibonacci Number (recursion, iterative)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/algorithms/recursion/fibonacci.js)


## Leetcode

* ### Bitwise operators
    * [476. Number complement / 1009. Complement of Base 10 Integer](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/bitwise/476-number-complement.js)

    | Approaches:        | Time         | Space  |
    | :---               | :---         | :---   |
    | Bit                | O(?)         | 0(?)   |

    * [231. Power of two (and more approaches)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/bitwise/231-power-of-two.js)

    | Approaches:                  | Time         | Space  |
    | :---                         | :---         | :---   |
    | Iterative: keep divide by 2  | O(log n)     | 0(1)   |
    | Math + toString              | O(n)         | O(1)   |
    | Bit Manipulation Trick       | O(1)         | O(1)   |

    * [136 Single Number](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/bitwise/136-single-number.js)

    | Approaches:    | Time     | Space  |
    | :---           | :---     | :---   |
    | Bitwise XOR    | O(n)     | 0(1)   |
    | Hash           | O(n)     | O(n)   |

* ### String manipulation
    * [541. Reverse a string II (2 pointers depends on k)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/string-manipulation/541-reverse-string2.js)

    * [392. Is subsequence](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/string-manipulation/392-is-subsequence.js)

    | Approaches:              | Time         | Space  |
    | :---                     | :---         | :---   |
    | Two pointers             | O(n)         | 0(1)   |
    | Recursion                | O(n)         | 0(n)   |

    * [468. Validate IP address](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/string-manipulation/468-validate-ip-address.js)

    | Approaches:        | Time     | Space  |
    | :---               | :---     | :---   |
    | Regex              | O(1)     | 0(1)   |
    | Divide and Conquer | O(n)     | 0(1)   |

    * [3. Longest substring without repeating characters](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/string-manipulation/3-longest-substring-without-repeating-characters.js)

    | Approaches:            | Time         | Space        |
    | :---                   | :---         | :---         |
    | Brute force            | O(n^3)       | O(min(n,m))  |
    | Sliding window + Hash  | O(2n)=O(n)   | O(min(n,m))  |


    * [383. Ransom Note]
    * [387. First Unique Character in a String]
    * [771. Jewels and Stones]
    * [438. Find all anagrams](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/string-manipulation/438-find-all-anagrams.js)
    * [387. First Unique Character in a String]
    * [771. Jewels and Stones]

* ### Array
    * [268. Missing number (approach: Gauss, sorting, hash)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/268-missing-number.js)
    * [26. Remove duplicates from sorted array (Two pointers: slow and fast runner)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/26-remove-duplicates-from-sorted-array.js)
    * [540. Single element in sorted array (approach: Brute force, binary search, BS only on even indexes)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/540-single-element-in-sorted-array.js)

    * [169. Majority element](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/169-majority-element.js)

    | Approaches:  | Time       | Space       |
    | :---         | :---       | :---        |
    | Brute force  | O(n^2)     | 0(1)        |
    | Hash         | O(n)       | O(n)        |
    | Sorting      | O(nlogn)   | O(1) / O(n) |
    | Voting       | O(n)       | O(1)        |

    * [229. Majority element II](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/229-majority-element-2.js)

    | Approaches:     | Time    | Space  |
    | :---            | :---    | :---   |
    | Hash            | O(n)    | O(n)   |
    | Voting          | O(?)    | 0(?)   |

    * [997. Find the Judge in the town](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/997-find-judge.js)
    * [53. Maximum subarray: approach ...](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/53-max-contiguous-subarray-sum.js)

    * [75. Sort colors](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/75-sort-colors.js)

    | Approach:       | Time    | Space  |
    | :---            | :---    | :---   |
    | 2 pointers      | O(n)    | O(1)   |

* Hash
    * [380. Insert Delete GetRandom O(1)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/hash/380-insert-delete-getrandom-constant-time.js)

    | Approach           | Time   | Space   |
    | :---               | :---   | :---    |
    | Array + Map: init  |        | O(m+n)  |
    | insert             | O(1)   | O(1)    |
    | remove             | O(1)   | O(1)    |
    | getRandom          | O(1)   | O(1)    |

* Binary Search
    * [278. First Bad version](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/search/binary-search/278-first-bad-version.js)

    * [35. Search insert position](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/search/binary-search/35-search-insert-position.js)

    | Approaches:              | Time         | Space  |
    | :---                     | :---         | :---   |
    | Binary search            | O(log n)     | 0(1)   |
    | Linear Search            | O(n)         | O(1)   |

    * [528. Random pick with weight (accumulation sum + binary search)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/search/binary-search/528-random-pick-with-weight.js)

* Linked Lists
    * [237. Delete node in linked list (swap with next node))](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/linked-lists/singly-linked-list/237-delete-node-in-linked-list.js)

* Stack
    * [155. Min Stack](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/stack/155-min-stack.js)

    | Approaches:           | Time     | Space  |
    | :---                  | :---     | :---   |
    | 2 Stacks              | O(1)     | 0(n)   |
    | 1 Stack + min pairs   | O(1)     | O(n)   |
    | Improved 2 Stacks     | O(1)     | O(n)   |

    * [716. Max Stack](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/stack/716-max-stack.js)

    | Approach: 2 Stacks    | Time     | Space  |
    | :---                  | :---     | :---   |
    | popMax()              | O(n)     | 0(n)   |
    | other operations      | O(1)     | O(n)   |

* Tree
    * [226. Invert a Binary Tree (recursive)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/tree/binary-tree/226-invert-binary-tree.js)

* ### BST (Binary Search Tree)
    * [700. Search in BST](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/tree/bst/search/200-search-in-bst.js)

    | Approaches:   | Time             | Space  |
    | :---          | :---             | :---   |
    | Recursion     | O(log n) / O(n)  | 0(h)   |
    | Iterative     | O(log n) / O(n)  | 0(1)   |

* ### Graph
    * [733. Flood Fill](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/graph/dfs/733-flood-fill.js)

    | Approaches:                    | Time    | Space  |
    | :---                           | :---    | :---   |
    | DFS (recursion + visited flag) | O(N)    | 0(N)   |


* Greedy
    * [1029. Two city Scheduling](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/greedy/1029-two-city-scheduling.js)

* DP[dynamic programming]
    * [518. Coin change 2 ](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/dp/518-coin-change-2.js)



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
