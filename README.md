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
started on 12/21/17

## Main Data Structures implementations by Javascript

* ### Strings manipulation
    * [Get all substrings](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/string-manipulation/get-all-substr.js)

    | Complexity:             | Time         | Space   |
    | :---                    | :---         | :---    |
    | iterative, 2 loops      | O(n^2)       | 0(?)    |

* ### Array
    ...

* ### Linked Lists
    * [Singly Linked List Implementation](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/linked-lists/singly/singly-linked-list.js)

    | Complexity:             | Time         | Space   |
    | :---                    | :---         | :---    |
    | get(index)              | O(n)         | 0(1)    |
    | addAtHead(val)          | O(1)         | 0(1)    |
    | addAtTail(val)          | O(n)         | 0(1)    |
    | addAtIndex(index, val)  | O(n)         | 0(1)    |
    | deleteAtIndex(index)    | O(n)         | 0(1)    |

* ### Stack implementation
    * [Stack via Array](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/stack/stack-use-array.js)

    * [Stack via Singly Linked List](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/stack/stack-use-linked-list.js)

    | Complexity:        | Time         | Space   |
    | :---               | :---         | :---    |
    | All operations     | O(1)         | 0(N)?   |

    * [Stack via String](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/stack/stack-use-string.js)

* ### Queue implementation
    * [Queue via Array](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/queue/queue-use-array.js)

    * [Queue via Singly Linked List](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/queue/queue-use-linked-list.js)

    | Complexity Time:            | enqueue      | dequeue   |
    | :---                        | :---         | :---      |
    | 1 Pointer (head)            | O(n)         | 0(1)      |
    | 2 Pointers (head and tail)  | O(1)         | 0(1)      |

* ### Hash implementation
    * [HashSet via object](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/hash/hashSet/hashSet-use-object.js)

    | Complexity:       | time      | space     |
    | :---              | :---      | :---      |
    | add               | O(1)      | 0(1)      |
    | remove            | O(1)      | 0(1)      |
    | contains          | O(1)      | 0(1)      |

* ### Binary Tree (BT)
    * [BT](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/tree/bt/bt.js)

    | Complexity:               | Time      |  Space    |
    | :---                      | :---      | :---      |
    | insert iterative + Queue  | O(log n)  | 0(1)      |
    | insert(node) recursion    | O(?)      | 0(?)      |
    | ...                       |           |           |

* ### Binary Tree Traversal
    * [Depth-first search: Preorder](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/tree/bt/traversal/preorder.js)

    | Approaches:         | Time     | Space  |
    | :---                | :---     | :---   |
    | DFS+ Stack          | O(n)     | 0(h)   |
    | Recursion           | O(n)     | 0(n)   |

    * [BFS: Level order and bottom traversal](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/tree/bt/traversal/level-order-traversal.js)

    | Approaches:          | Time     | Space      |
    | :---                 | :---     | :---       |
    | Iterative + Queue    | O(n)     | 0(n/2 = n) |

    * [Level order zigzag traversal](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/tree/bt/traversal/103-level-order-zigzag-traversal.js)

    | Approaches:     | Time     | Space      |
    | :---            | :---     | :---       |
    | BFS + Queue     | O(n)     | 0(n)       |
    | Recursion       | O(n)     | 0(n)       |

* ### Binary Search Tree (BST) Implementation
    * [BST implementation](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/tree/bst/api.js)

    | Complexity:                      | Time       |  Space         |
    | :---                             | :---       | :---           |
    | Insert Recursive / iterative   | O(log n)   | 0(n) / O(1)    |
    | ...                 |            |            |

* ### Heap
    * [Max Binary Heap](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/heap/max-binary-heap.js)

    | Complexity:   | Time      |  Space    |
    | :---          | :---      | :---      |
    | insert(val)   | O(log n)  | 0(1)      |
    | deleteMax     | O(log n)  | O(1)      |
    | max           | O(1)      | O(1)      |

## Bitwise operator in JS

* ### Common bit operations
    * [Common bit tasks: getBit(n,i), setBit(n,i), toggleBit(n,i)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/bitwise/common-bit-tasks.js)

    | Bit task              | Approach      | Time/Space    |
    | :---                  | :---          | :---          |
    | getBit(num, i)        | mask + AND    | O(1)          |
    | setBit(num, i)        | mask + OR     | O(1)          |
    | clearBit(num, i)      | ~mask + AND   | O(1)          |
    | toggleBit(num, i)     | XOR           | O(1)          |

## Searching and Sorting

* ### Search: linear and binary
    * [Linear search](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/search/linear/find-index.js)

    * [Binary search (iterative, recursion)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/search/binary/binary-search.js)

    | Search name       | O          | Ω      | Space  |
    | :---              | :---       | :---   | :---   |
    | Linear Search     | O(n)       | Ω(1)   | O(1)   |
    | Binary Search     | O(log n)   | Ω(1)   | O(1)   |

* ### Sorting
    * [Bubble sort](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/sorting/bubble-sort.js)
    * [Selection sort](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/sorting/selection-sort.js)
    * [Insertion sort](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/sorting/insertion-sort.js)
    * [Shell sort](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/sorting/shell-sort.js)
    * [Merge sort](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/sorting/merge-sort.js)
    * [Quick sort: Hoare and Lomuto partition schema](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/sorting/quick-sort.js)
    * [Heapsort](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/sorting/heap-sort.js)


    | Sort name       | Ω           | θ          | O         | Space     | Stable  | Adaptive  |
    | :---            | :---        | :---       | :---      | :---      | :---    | :---      |
    | Bubble sort     | Ω(n)        | θ(n^2)     | O(n^2)    | O(1)      | +       | +         |
    | Selection sort  | Ω(n^2)      | θ(n^2)     | O(n^2)    | O(1)      | -       | -         |
    | Insertion sort  | Ω(n)        | θ(n^2)     | O(n^2)    | O(1)      | +       | +         |
    | Shell sort      | Ω(n)        | θ(n^2)     | O(n^2)    | O(1)      |         |           |
    | Merge sort      | Ω(NlogN)    | θ(NlogN)   | O(NlogN)  | O(N)      | +       | -         |
    | Quick sort      | Ω(NlogN)    | θ(NlogN)   | O(n^2)    | O(NlogN)  | -       | -         |
    | Heapsort        | Ω(NlogN)    | θ(NlogN)   | O(NlogN)  | O(1)      | -       | -         |

## Problem solving on leetcode

* ### Bitwise operators
    * [Check if number is even or odd](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/bitwise/check-if-number-even-or-odd.js)

    | Approaches:       | Time    | Space    |
    | :---              | :---    | :---     |
    | AND               | O(1)    | O(1)     |
    | XOR               | O(1)    | O(1)     |

    * [476. Number complement / 1009. Complement of Base 10 Integer](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/bitwise/476-number-complement.js)

    | Approaches:                | Time          | Space      |
    | :---                       | :---          | :---       |
    | Bit Shift + xor (2)        | O(1)          | 0(1)       |
    | toString and parseInt      | O(1)          | 0(1)       |
    | decimal to Binary + Stack  | O(log n)      | 0(log n)   |

    * [231. Power of two](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/bitwise/power/231-power-of-two.js)

    | Approaches:                  | Time         | Space  |
    | :---                         | :---         | :---   |
    | Iterative: keep divide by 2  | O(log n)     | 0(1)   |
    | Math + toString              | O(n)         | O(1)   |
    | Bit Manipulation Trick       | O(1)         | O(1)   |

    * [326. Power of three](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/bitwise/power/326-power-of-three.js)

    | Approaches:                  | Time          | Space  |
    | :---                         | :---          | :---   |
    | Iterative: keep divide by 3  | O(log_3n)     | 0(1)   |
    | Integer limitations          | O(1)          | 0(1)   |

    * [342. Power of four](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/bitwise/power/342-power-of-four.js)

    | Approaches:                  | Time         | Space  |
    | :---                         | :---         | :---   |
    | Iterative: keep divide by 4  | O(log_4n)    | 0(1)   |
    | Bit Manipulation Trick       | O(1)         | O(1)   |
    | Divisible by 3               | O(1)         | O(1)   |
    | Ends with 4 or 6             | O(1)         | O(1)   |

    * [693. Binary Number of Alternating Bits](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/bitwise/693-alternating-bits.js)

    | Approaches:       | Time      | Space  |
    | :---              | :---      | :---   |
    | Convert to Sting  | O(1)      | 0(1)   |
    | Prev + XOR        | O(1)      | O(1)   |
    | XOR               | O(1)      | O(1)   |

    * [136. Single Number](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/bitwise/single-number/136-single-number.js)

    | Approaches:    | Time     | Space  |
    | :---           | :---     | :---   |
    | Bitwise XOR    | O(n)     | 0(1)   |
    | Hash           | O(n)     | O(n)   |
    | Brute force    | O(n^2)   | O(1)   |

    * [260. Single Number III](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/bitwise/single-number/260-single-number-3.js)

    | Approaches:    | Time     | Space  |
    | :---           | :---     | :---   |
    | Bitwise XOR    | O(n)     | 0(1)   |

    * [191. Number of bits](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/bitwise/191-number-of-bits.js)

    | Approaches:             | Time     | Space  |
    | :---                    | :---     | :---   |
    | Loop + Flip             | O(1)     | 0(1)   |
    | Bit trick manipulation  | O(1)     | O(1)   |

    * [461. Hamming distance](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/bitwise/461-hamming-distance.js)

    | Approaches:             | Time     | Space  |
    | :---                    | :---     | :---   |
    | Bit trick manipulation  | O(1)     | O(1)   |
    | XOR + toString          | O(n)     | O(1)   |

    * [190. Reverse bits](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/bitwise/190-reverse-bits.js)

    | Approaches:       | Time      | Space  |
    | :---              | :---      | :---   |
    | Bit by bit        | O(1)      | O(1)   |
    | Memoization       | O(1)      | O(1)   |
    | Mask and shift    | O(1)      | O(1)   |

* ### Math / Number
    * [171. Excel sheet column number](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/math/171-excel-sheet-column-number.js)

    | Approaches:      | Time         | Space     |
    | :---             | :---         | :---      |
    | Math + loop      | O(n)         | 0(1)      |
    | Recursion        | O(n)         | 0(n)      |

    * [1103. Distribute candies to people](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/math/1103-distribute-candies-to-people.js)

    | Approaches:      | Time              | Space              |
    | :---             | :---              | :---               |
    | Iterative        | O(n)              | 0(num_people)      |
    | Loop + min       | O(sqrt n)         | 0(num_people)      |
    | Math (Gauss)     | O(sqrt n)         | 0(num_people)      |

    * [263. Ugly number](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/math/ugly-number/263-ugly-number.js)

    | Approaches:                 | Time         | Space     |
    | :---                        | :---         | :---      |
    | Recursion                   | O(log N)     | 0(log N)? |
    | Greatest divide by [2,3,4]  | O(log N)     | 0(1)      |

    * [264. Ugly number II](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/math/ugly-number/264-ugly-number-2.js)

    | Approaches:                 | Time           | Space     |
    | :---                        | :---           | :---      |
    | Brute force                 | O(n)           | 0(1)      |
    | Generate all ugly numbers   | O(n log n)     | 0(n)      |
    | DP                          | O(n)           | 0(n)      |

    * [1344. Angle between hands of clock](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/math/1344-angle-between-hands-of-clock.js)

    | Approach:   | Time      | Space     |
    | :---        | :---      | :---      |
    | Math        | O(1)      | 0(1)      |

    * [258. Add digits](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/math/258-add-digits.js)

    | Approach:     | Time      | Space     |
    | :---          | :---      | :---      |
    | Recursion     | O(n)      | 0(n)      |
    | Iteration     | O(n)      | 0(1)      |
    | Math          | O(1)      | 0(1)      |

    * [1041. Robot bounded in circle](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/math/1041-robot-bounded-in-circle.js)

    | Approach:         | Time      | Space     |
    | :---              | :---      | :---      |
    | Math + rotation   | O(n)      | 0(1)      |
    | Math              | O(n)      | 0(1)      |


* ### String manipulation
    * [Reverse a string (swap, recursion, 2 pointers)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/array/reverse-a-string.js)

    * [541. Reverse a string II (2 pointers depends on k)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/string-manipulation/541-reverse-string2.js)

    * [392. Is subsequence](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/string-manipulation/392-is-subsequence.js)

    | Approaches:              | Time         | Space  |
    | :---                     | :---         | :---   |
    | Two pointers             | O(n)         | 0(1)   |
    | Recursion                | O(n)         | 0(n)   |

    * [520. Detect capital](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/string-manipulation/520-detect-capital.js)

    | Approaches:             | Time            | Space  |
    | :---                    | :---            | :---   |
    | Use substr              | O(n)            | 0(1)   |
    | Character by character  | O(n)            | 0(1)   |
    | Regex                   | O(n) / O(2^n)   | 0(1)   |

    * [125. Valid palindrome](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/string-manipulation/palindrome/125-valid-palindrome.js)

    | Approaches:             | Time     | Space  |
    | :---                    | :---     | :---   |
    | 2 pointers              | O(n)     | 0(1)   |
    | Use reverse             | O(n)     | 0(1)   |

    * [406 Longest palindrome](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/string-manipulation/palindrome/406-longest-palindrome.js)

    | Approaches:       | Time     | Space         |
    | :---              | :---     | :---          |
    | Hash              | O(n)     | 0(n)/O(1)     |
    | Greedy            | O(n)     | 0(n)/O(1)     |

    * [459. Repeated substr pattern](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/string-manipulation/459-repeated-substr-pattern.js)

    | Approaches:       | Time     | Space      |
    | :---              | :---     | :---       |
    | Loop              | O(n)     | O(1)       |

    * [468. Validate IP address](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/string-manipulation/468-validate-ip-address.js)

    | Approaches:        | Time     | Space  |
    | :---               | :---     | :---   |
    | Regex              | O(1)     | 0(1)   |
    | Divide and Conquer | O(n)     | 0(1)   |

    * [58. Length of last word](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/string-manipulation/58-length-of-last-word.js)

    | Approaches:            | Time     | Space  |
    | :---                   | :---     | :---   |
    | Loop backward + tail   | O(n)     | 0(1)   |
    | Regex                  | O(1)     | 0(1)   |

    * [3. Longest substring without repeating characters](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/string-manipulation/3-longest-substring-without-repeating-characters.js)

    | Approaches:            | Time         | Space        |
    | :---                   | :---         | :---         |
    | Brute force            | O(n^3)       | O(min(n,m))  |
    | Sliding window + Hash  | O(2n)=O(n)   | O(min(n,m))  |

    * [151 Reverse words in string](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/string-manipulation/151-reverse-words.js)

    | Approaches:              | Time         | Space    |
    | :---                     | :---         | :---     |
    | Two pointers (in-place)  | O(n)         | O(1)     |
    | Two pointers + trim      | O(n)         | O(n))    |
    | reverse, split, trim     | O(n)         | O(n))    |

    * [383. Ransom Note]
    * [387. First Unique Character in a String]
    * [771. Jewels and Stones]

    * [438. Find all anagrams](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/string-manipulation/438-find-all-anagrams.js)
    * [387. First Unique Character in a String]
    * [771. Jewels and Stones]

* ### Array
    * [Clone arrays](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/array/clone.js)
    * [Merge arrays](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/array/merge-sorted-arrays.js)

    * [268. Missing number (approach: Gauss, sorting, hash)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/268-missing-number.js)

    * [26. Remove duplicates from sorted array (Two pointers: slow and fast runner)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/duplicates/26-remove-duplicates-from-sorted-array.js)

    * [540. Single element in sorted array (approach: Brute force, binary search, BS only on even indexes)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/540-single-element-in-sorted-array.js)

    * [169. Majority element](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/majority/169-majority-element.js)

    | Approaches:           | Time              | Space       |
    | :---                  | :---              | :---        |
    | Brute force           | O(n^2)            | 0(1)        |
    | Hash                  | O(n)              | O(n)        |
    | Sorting               | O(nlogn)          | O(1) / O(n) |
    | Voting                | O(n)              | O(1)        |
    | Randomization index   | O(infinite)/O(n)  | O(1)        |

    * [229. Majority element II](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/majority/229-majority-element-2.js)

    | Approaches:         | Time    | Space  |
    | :---                | :---    | :---   |
    | Hash                | O(n)    | O(n)   |
    | Boyer-Moore Voting  | O(n)    | 0(1)   |

    * [118. Pascals triangle](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/pascals-triangle/118-pascals-triangle.js)

    | Approaches:     | Time             | Space           |
    | :---            | :---             | :---            |
    | Array (loop)    | O(numsRows^2)    | O(numsRows^2)   |

    * [119. Pascals triangle II](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/pascals-triangle/118-pascals-triangle-ii.js)

    | Approaches:     | Time             | Space      |
    | :---            | :---             | :---       |
    | Array (loop)    | O(rowIndex^2)    | O(k)       |


    * [997. Find the Judge in the town](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/997-find-judge.js)

    * [66 Plus one](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/66-plus-one.js)

    | Approach:    | Time    | Space   |
    | :---         | :---    | :---    |
    | Loop         | O(n)    | O(n)    |
    | Math.pow     | O(n)    | O(n)?   |

    * [422 Find all duplicates in Array](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/duplicates/422-find-all-duplicates.js)

    | Approach:                        | Time          | Space   |
    | :---                             | :---          | :---    |
    | Hash                             | O(n)          | O(n)    |
    | Sort + 2 pointers                | O(n log n)    | O(1)    |
    | Use Array                        | O(n)          | O(n)    |
    | Mutate Array (negative indexes)  | O(n)          | O(1)    |

* ### Array Sorting

    * [75. Sort colors](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/75-sort-colors.js)

    | Approach:       | Time    | Space  |
    | :---            | :---    | :---   |
    | 2 pointers      | O(n)    | O(1)   |

    * [969. Pancake sorting](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/sorting/969-pancake-sorting.js)

    | Approach:               | Time      | Space  |
    | :---                    | :---      | :---   |
    | Find max + 2 flips      | O(n^2)    | O(n)   |
    | Like a bubble sort      | O(n^2)    | O(n)   |


* ### Intervals (Array, sort)

    * [57. Insert interval](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/intervals/57-insert-interval.js)

    | Approach:       | Time    | Space  |
    | :---            | :---    | :---   |
    | Iterative       | O(n)    | O(1)   |

    * [Car pooling](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/array/intervals/car-pooling.js)

    | Approach:               | Time      | Space         |
    | :---                    | :---      | :---          |
    | Bucket sort             | O(n)      | O(m = 1001)   |
    | Same timestamp as Hash  | O(n)      | O(n)          |


* ### Singly Linked List
    * [237. Delete node in Linked List](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/linked-list/singly/237-delete-node-in-linked-list.js)

    | Approach             | Time    | Space   |
    | :---                 | :---    | :---    |
    | Swap with next node  | O(1)    | O(1)    |
    | Usual way: find prev | O(n)    | O(1)    |

    * [206. Reverse Linked List](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/linked-list/singly/206-reverse-linked-list.js)

    | Approach       | Time      | Space   |
    | :---           | :---      | :---    |
    | Iterative      | O(n)      | O(1)    |

    * [143. Reorder Linked List](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/linked-list/singly/143-reorder-linked-list.js)

    | Approach             | Time      | Space   |
    | :---                 | :---      | :---    |
    | Brute force          | O(n^2)    | O(1)    |

* ### Doubly Linked List
    * [430. Flatten a multilevel Doubly Linked List](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/linked-list/doubly/430-flatten-multilevel-doubly-linked-list.js)

    | Approach        | Time     | Space   |
    | :---            | :---     | :---    |
    | Iterative       | O(n)?    | O(1)    |
    | Use stack       | O(?)     | O(?)    |

* ### Stack
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

* ### Queue
    * [232. Queue use 2 stacks](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/queue/232-queue-with-2-stacks.js)

    | Complexity:  | Time      |  Space    |
    | :---         | :---      | :---      |
    | enqueue      | O(1)      | 0(1)      |
    | dequeue      | O(n)      | 0(1)      |

* ### Hash
    * [1. Two sum](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/hash/two-sum.js)

    | Approaches:        | Time    | Space    |
    | :---               | :---    | :---     |
    | Brute force        | O(n^2)  | O(1)     |
    | 2-pass Hash table  | O(n)    | O(n)     |
    | 1-pass Hash table  | O(n)    | O(n)     |

    * [380. Insert Delete GetRandom O(1)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/hash/380-insert-delete-getrandom-constant-time.js)

    | Approach           | Time   | Space   |
    | :---               | :---   | :---    |
    | Array + Map: init  |        | O(m+n)  |
    | insert             | O(1)   | O(1)    |
    | remove             | O(1)   | O(1)    |
    | getRandom          | O(1)   | O(1)    |

    * [957. Prison Cells After N Days](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/hash/957-prison-cells-after-N-days.js)

    | Approach            | Time    | Space   |
    | :---                | :---    | :---    |
    | Hash + catch cycle  | O(1)    | O(1)    |

* ### Tree, Binary Tree
    * [226. Invert a Binary Tree (recursive)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/tree/binary-tree/226-invert-binary-tree.js)

    | Approaches:   | Time     | Space  |
    | :---          | :---     | :---   |
    | Recursion     | O(n)     | 0(n)   |

    * [104. Maximum depth of binary tree](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/tree/binary-tree/104-maximum-depth-of-binary-tree.js)

    | Approaches:    | Time     | Space  |
    | :---           | :---     | :---   |
    | Recursion      | O(n)     | 0(n)   |

    * [100. Same Tree ](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/tree/binary-tree/100-same-tree.js)

    | Approaches:      | Time     | Space        |
    | :---             | :---     | :---         |
    | Recursion        | O(n)     | 0(logn)/O(n) |
    | Iterative DFS    | O(n)     | 0(logn)/O(n) |

    * [106. Construct BT from inorder, preorder ](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/tree/binary-tree/traversal/106-construct-bt-from-postorder-inorder-traversal.js)

    | Approaches:                          | Time       | Space        |
    | :---                                 | :---       | :---         |
    | Recursion                            | O(n^2)     | 0(n^2)       |
    | Hash indexes from inorder            | O(n)       | O(n)         |
    | Map indexes from inorder without pop | O(n)       | O(n)         |

    * [222. Count complete tree nodes](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/tree/binary-tree/22-count-complete-tree-modes.js)

    | Approaches:   | Time         | Space  |
    | :---          | :---         | :---   |
    | Recursion     | O(log(n)^2)  | 0(n)   |

* ### BST (Binary Search Tree)
    * [700. Search in BST](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/tree/bst/search/200-search-in-bst.js)

    | Approaches:   | Time            | Space  |
    | :---          | :---            | :---   |
    | Recursion     | O(logn) / O(n)  | 0(h)   |
    | Iterative     | O(logn) / O(n)  | 0(1)   |

* ### Graph
    * [733. Flood Fill](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/graph/dfs/733-flood-fill.js)

    | Approaches:                    | Time    | Space  |
    | :---                           | :---    | :---   |
    | DFS (recursion + visited flag) | O(N)    | 0(N)   |
    | BFS (queue + visited flag)     | O(N)    | 0(N)   |

    * [967. Numbers With Same Consecutive Differences](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/graph/dfs/967-numbers-with-same-consecutive-difference.js)

    | Approaches:        | Time           | Space  |
    | :---               | :---           | :---   |
    | DFS (+last digit)  |  O(N * 2^N)    | O(2^N) |

    * [994. Rotting oranges](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/graph/bfs/994-rotting-oranges.js)

    | Approaches:     | Time            | Space  |
    | :---            | :---            | :---   |
    | BFS + Hashes    | O(n*m)            | O(n)   |
    | BFS (Queue)     | O(n*m)            | O(n)   |

    * [797. All paths from source target](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/graph/bfs/797-all-paths-from-source-target.js)

    | Approaches:   | Time            | Space  |
    | :---          | :---            | :---   |
    | BFS+Queue     | O(n^2 * 2^n)    | O(2^n) |


## Programming methods/paradigms

* ### Recursion
    * [Factorial](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/recursion/factorial.js)

    * [Fibonacci Number (recursion, iterative)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/ds/recursion/fibonacci.js)

    | Approaches:         | O         | T        |  Space |
    | :---                | :---      | :---     | :---   |
    | Recursion           | O(2^n)    | 0(?)     | 0(n)   |
    | Iterative           | O(n)      | 0(?)     | 0(1)   |
    | Iterative Top-Down  | O(n)      | 0(?)     | 0(1)   |


* ### Divide & Conquer
    * [215. Find the kth largest element ](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/divide-conquer/215-k-th-largest-element.js)

    | Approaches:    | O         | T        |  Space |
    | :---           | :---      | :---     | :---   |
    | Sort           | O(log n)  | 0(log n) | 0(1)   |
    | Quick-select   | O(n^2)    | 0(n)     | 0(1)   |

* ### Binary Search
    * [278. First Bad version](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/search/binary-search/278-first-bad-version.js)

    * [35. Search insert position](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/search/binary-search/35-search-insert-position.js)

    | Approaches:              | Time         | Space  |
    | :---                     | :---         | :---   |
    | Binary search            | O(log n)     | 0(1)   |
    | Linear Search            | O(n)         | O(1)   |

    * [441. Search insert position](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/search/binary-search/35-arranging-coins.js)

    | Approaches:     | Time         | Space  |
    | :---            | :---         | :---   |
    | Binary search   | O(log n)     | 0(1)   |
    | Math            | O(1)         | O(1)   |

    * [153 Find minimum in rotated sorted array](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/search/binary-search/153-find-min-in-rotated-sorted-arr.js)

    | Approaches:     | Time         | Space  |
    | :---            | :---         | :---   |
    | Brute force     | O(n)         | O(1)   |
    | Binary search   | O(log n)     | 0(1)   |

    * [154. Find minimum in rotated sorted array](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/search/binary-search/154-find-min-in-rotated-sorted-arr-2.js)

    | Approaches:     | Time         | Space  |
    | :---            | :---         | :---   |
    | Brute force     | O(n)         | 0(1)   |
    | Binary search   | O(log n)     | 0(1)   |

    * [528. Random pick with weight (accumulation sum + binary search)](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/search/binary-search/528-random-pick-with-weight.js)


* ### Greedy
    * [1029. Two city Scheduling](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/greedy/1029-two-city-scheduling.js)

    | Approaches:    | Time      | Space  |
    | :---           | :---      | :---   |
    | Greedy         | O(nlogn)  | 0(1)   |

    * [621. Task scheduler](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/greedy/621-task-scheduler.js)

    | Approaches:    | Time      | Space  |
    | :---           | :---      | :---   |
    | Greedy + map   | O(n)      | 0(1)   |
    | Greedy + hash  | O(n)      | 0(n)   |

* ### DP [dynamic programming]
    * [53. Maximum subarray](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/dp/subarrays/53-max-contiguous-subarray-sum.js)

    | Approaches:                   |  Time       | Space      |
    | :---                          | :---        | :---       |
    | Brute force + sliding window  | O(n^3)      | O(1)       |

    * [152. Max product subarray](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/dp/subarrays/152-max-product-subarray.js)

    | Approaches:                   |  Time       | Space      |
    | :---                          | :---        | :---       |
    | Brute force + sliding window  | O(n^3)      | O(1)       |
    | Store prev max and min        | O(n)        | O(1)       |
    | DP                            | O(n)        | O(1)       |
   
    * [518. Coin change 2](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/dp/518-coin-change-2.js)

    * [96. Unique binary search trees](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/dp/96-unique-binary-search-trees.js)

    | Approaches:   | Time      | Space  |
    | :---          | :---      | :---   |
    | DP            | O(n^2)    | 0(n)   |

    * [121. Best time to buy and sell stock](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/dp/121-best-time-to-buy-sell-stock.js)

    | Approaches:                | Time      | Space  |
    | :---                       | :---      | :---   |
    | Brute force                | O(n^2)    | 0(1)   |
    | One pass                   | O(n)      | 0(1)   |
    | Find min price so far      | O(n)      | 0(1)   |
    | DP                         | O(n)      | 0(n)   |

    * [70 Climbing stairs](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/dp/70-climbing-stairs.js)

    | Approaches:   | Time      | Space  |
    | :---          | :---      | :---   |
    | Brute force   | O(^2n)    | 0(n)   |
    | DP: bottom-up | O(n)      | 0(n)   |

* ### Backtracking
    * [46. Print all permutations](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/backtracking/46-print-all-permutations.js)

    | Approaches:         | Time      | Space  |
    | :---                | :---      | :---   |
    | Backtracking        | O(n!)     | 0(?)   |

    * [216. Combination sum III](https://github.com/julia-dizhak/javascript-algorithms/blob/master/src/leetcode/backtracking/combination/216-combination-sum.js)

    | Approaches:         | Time                 | Space  |
    | :---                | :---                 | :---   |
    | Backtracking        | O(9!* K / (9-K)!)    | 0(k)   |


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

* `src/ds` - the implementation source code
* `src/ds/***.spec.js` - tests for the implementation source code


### TODO:
  * scrollTo works with bug
  * details toggle works with bug (sometimes)
  * display level: beginner, medium, ... (like corners)
  * generate test coverage
  * performance test
  * seo
