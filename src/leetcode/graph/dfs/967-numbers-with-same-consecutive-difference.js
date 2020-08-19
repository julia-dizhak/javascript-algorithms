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

  1 dfs(2, 2, 1)
  |
  3 dfs(N-1 = 1, 2, 13)
 / \
5   1 dfs(N-2 = 0, 2, 135) or dfs(N-2 = 0, 7, 131)

For instance, in the example, where N=3 and K=2, and there is a moment
we would invoke DFS(1, K=2, 13) which is to add another digit to the existing number
13 so that the final number meets the requirements. If the DFS function works
properly, we should have the numbers of 135 and 131 as results after the invocation.

We could implement the recursive function in the following steps:

- As a base case, when N=0 i.e. no more remaining digits to complete, we could
return the current num as the result.

- Otherwise, there are still some remaining digits to be added to the current
number, e.g. 13. There are two potential cases to explore, based on the last
digit of the current number which we denote as tail_digit.

  -- Adding the difference K to the last digit, i.e. tail_digit + K.
  -- Deducting the difference K from the last digit, i.e. tail_digit - K.

- If the result of either above case falls into the valid digit range
(i.e. [0,9]), we then continue the exploration by invoking the function itself.

Once we implement the DFS(N, num) function, we then simply call this function
over the scope of [1, 9], i.e. the valid digits for the highest position.

Note: If we are asked to return numbers of a single digit (i.e. N=1), then
regardless of K, all digits are valid, including zero. We treat this as a special
case in the code, since in our implementation of DFS function, we will never return
zero as the result.


Complexity Analysis

Let N be the number of digits for a valid combination, and K be the difference
between digits.

First of all, let us estimate the number of potential solutions. For the highest
digit, we could have 9 potential candidates. Starting from the second highest
position, we could have at most 2 candidates for each position. Therefore, at most,
we could have 9*2^(N-1) for N>1.

Time Complexity: O(N * 2^N)
- For each final combination, we would invoke the recursive function N times.
The operations within each invocation takes a constant time O(1).

- Therefore, for a total 9*2^(N-1) number of potential combinations, a loose
upper-bound on the time complexity of the algorithm would be O(N* 9*2^(N-1)) =
= O(N* 2^N),since different combinations could share some efforts during the construction.

- Note that, when K=0, at each position, there is only one possible candidate,
e.g. 333. In total, we would have 9 numbers in the result set, and each number
is of N digits. The time complexity would then be reduced down to O(N).

Space complexity is O(2^N)
- Since we adopt a recursive solution, we would have some additional memory
consumption on the function call stack. The maximum number of consecutive calls
on the recursion function is N. Hence, the space complexity for the call stack
is O(N).

- We use a list to keep all the solutions, which could amount to 9*2^(N-1) number of elements.

- To sum up, the overall space complexity of the algorithm is
O(N) + O(9*2^(N-1)) = O(2^N)
*/

// example N = 3, k = 2
var numsSameConsecDiff = function(N, K) {
  if (N === 1) return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let results = [];
  console.log('results', results)
  for (let num = 1; num < 10; num++) {
    dfs(N - 1, K, num, results);
  }

  console.log('results', results)
  return [...results];
}

function dfs(N, K, num, results) {
  if (N === 0) {
    results.push(num);
    return;
  }

  let newValues = [];
  let lastDigit = num % 10;
  newValues.push(lastDigit + K);

  // check case if k!== 0
  if (K !== 0) {
    newValues.push(lastDigit - K);
  }

  for (const newValue of newValues) {
    if (newValue >=0 && newValue < 10) {
      let newNum = 10*num + newValue;
      dfs(N-1, K, newNum, results);
    }
  }
}

/*
Approach: DFS (the same)
*/

// tests
// example (3,7) -> [181,292,707,818,929]
console.log(numsSameConsecDiff(2,1))
//console.log(numsSameConsecDiff(2,0))
//console.log('numsSameConsecDiff', numsSameConsecDiff(3,7))

/*
Approach BFS
approach looping
*/

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

/*
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
