/*
Leetcode
967 Numbers With Same Consecutive Differences
medium

Return all non-negative integers of length N such that the absolute difference
between every two consecutive digits is K.

Note that every number in the answer must not have leading zeros except for the
number 0 itself. For example, 01 has one leading zero and is invalid, but 0 is valid.

You may return the answer in any order.

Example 1:
Input: N = 3, K = 7
Output: [181,292,707,818,929]
Explanation: Note that 070 is not a valid number, because it has leading zeroes.

Example 2:
Input: N = 2, K = 1
Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]


Note:
1 <= N <= 9
0 <= K <= 9
*/

/*
Overview

The problem asks us to come up a list of digit combinations that follow the defined
pattern. Before jumping to the implementation, it is always helpful to manually
deduce some examples.

Suppose that we have N=3 and K=2, i.e. we should come up a series of 3-digits numbers,
where for each number the difference between each adjacent digits is 2.

Let us try to build the number digit by digit. Starting from the highest digit,
we can pick the digit 1. Then for the next digit, we need to pick 3 (i.e. 1+2).
Finally, for the last digit, we could have two choices: 5 and 1 (i.e. 3+2, 3−2).
We illustrate the process in the following graph, where each node represents a
digit that we pick, and the level of the node corresponds to the position that
the digit situates in the final number.
  1         9
  |         |
  3         7
 / \       / \
5   1     5   9

e.g. 135, 131, ... , 975, 979

As one might notice that, we just converted the problem into a tree traversal problem,
where each path from the root to a leaf forms a solution for the problem.

As we know, the common algorithms for the tree traversal problem would be DFS
(Depth-First Search) and BFS (Breadth-First Search), which are exactly what
we will present in the following sections.
*/

/*
Approach DFS

If one is not familiar with the concepts of DFS and BFS, we have an Explore card
called Queue & Stack where we cover the DFS traversal as well as the BFS traversal.

In this section, we will start from the DFS strategy, which arguably is more
intuitive for this problem.

As we stated in the overview section, we could build a valid digit combination
digit by digit or (node by node in terms of tree).

For a number consisting of N digits, we start from the highest digit and walk
through to the lowest digit. At each step, we might have several candidates that
are eligible to be explored.

With the DFS strategy, we prioritize the depth over the breadth, i.e. we pick
one of the candidates and continue the exploration before moving on to the other
candidates that are of the same level.

Algorithm

Intuitively we could implement the DFS algorithm with recursion. Here we define
a recursive function DFS(N, num) whose goal is to come up the combinations for
the remaining N digits, starting from the current num.
...

Note: If we are asked to return numbers of a single digit (i.e. N=1), then
regardless of K, all digits are valid, including zero. We treat this as a special
case in the code, since in our implementation of DFS function, we will never return
zero as the result.


Complexity Analysis

Let N be the number of digits for a valid combination, and K be the difference
between digits.


brute force

[18, 29, 70, 81, 92]
181, 292, 707, 818, 929
18 + 1

DP subproblems
define a subproblem



Consecutive" digits when N == 1
Seems the answer for N == 1 and K > 0 should be []...
backtracing
dp?
*/

// example N = 3, k = 2
var numsSameConsecDiff = function(N, K) {
  if (N === 1) return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // ?
  let results = [];
  console.log('results', results)
  for (let num = 1; num < 10; num++) {
    dfs(N - 1, K, num, results);
  }

  return [...results];
}

function dfs(N, K, num, results) {
  //debugger
  if (N === 0) {
    //debugger
    results.push(num);
    return;
  }

  // can't be zero for loop starts from 1
  if (num === 0) return; // no leading zeros

  let newValues = [];
  let lastDigit = num % 10;
  // newValues.push(lastNumber + K);
  // newValues.push(lastNumber - K);
  newValues = [lastDigit + K, lastDigit - K];
  for (const newValue of newValues) {
    if (newValue >=0 && newValue < 10) {
      dfs(N-1, K, 10*num + newValue);
    } else continue;
  }

  //let nextDigits = [];
  // let tailDigit = num % 10; // last number
  // nextDigits.push(tailDigit + K);
  // if (K !== 0) {
  //   nextDigits.push(tailDigit - K);
  //   for (const nextDigit of nextDigits) {
  //     if (nextDigit >= 0 && nextDigit < 10) {
  //       let newNum = 10*num + nextDigit;
  //       dfs(N-1, K, newNum, results);
  //     }
  //   }
  // }

}

// tests
//console.log('numsSameConsecDiff', numsSameConsecDiff(3,7))

/*
looping

    if (N === 1) return [0,1,2,3,4,5,6,7,8,9];
    let output = [1,2,3,4,5,6,7,8,9];

    for (digits = 1; digits <= N - 1; digits++) {

        let new_output = [];

        for (const result of output) {

            let prev = result - 10 * Math.floor(result / 10); // get unit digit - could this be improved?

            for (let num = 1; num <= 10; num++) {
                let next = num % 10;
                if (Math.abs(prev - next) === K) new_output.push(result * 10 + next);
            }

        }

        output = new_output;
    }

    return output;
*/

/*
dfs
var numsSameConsecDiff = function(N, K) {
    const res = new Set();
    for (let i = 0; i <= 9; i += 1) {
        numsSameConsecDiffImpl(N - 1, K, res, i);
    }
    return [...res];
};

function numsSameConsecDiffImpl(n, k, res, acc) {
    if (n === 0) {
        res.add(acc);
        return;
    }
    if (acc === 0) {
        return; // No leading zeros
    }

    const lastNumber = acc % 10;
    const newValues = [
        lastNumber + k,
        lastNumber - k,
    ];
    for (const newValue of newValues) {
        if (newValue < 0 || newValue > 9) {
            continue;
        }
        numsSameConsecDiffImpl(n - 1, k, res, acc * 10 + newValue);
    }
}
*/

/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff1 = function(N, K) {
  let result = [];

  // there is no case N = 1, N>=1
  if (N === 1) return [0,1,2,3,4,5,6,7,8,9];

  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      if (Math.abs(i-j) === K) {
        //result.push(Number(''+i+j));
        result.push(''+i+j);
      }

    }
  }

  if (N > 2) {
    for (let i = 0; i < result.length; i++) {
      result[i] += result[i].slice(0, N-2);
    }
  }

  result = result.map(el => Number(el))

  return result;
};
// console.log('numsSameConsecDiff', numsSameConsecDiff(1,0))
// console.log('numsSameConsecDiff', numsSameConsecDiff(0,1))
// //console.log('numsSameConsecDiff', numsSameConsecDiff(2,1))
// console.log('numsSameConsecDiff', numsSameConsecDiff(3,7))
// console.log('numsSameConsecDiff', numsSameConsecDiff(4,7))

export {
  numsSameConsecDiff
}
