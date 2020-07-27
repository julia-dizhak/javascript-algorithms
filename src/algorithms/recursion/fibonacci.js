// Recursion explanation
let countDownFrom = (num) => {
  if (num === 0) return;
  countDownFrom(num - 1);
}
countDownFrom(10);
//console.log('countDownFrom', countDownFrom(10))

/*
  leetcode
  509. Fibonacci Number
  easy

  1,1,2,3,5,8 ...
  The Fibonacci numbers, commonly denoted F(n) form a sequence,
  called the Fibonacci sequence, such that each number is the sum of the two preceding ones,
  starting from 0 and 1. That is,

  F(0) = 0,
  F(1) = 1
  F(N) = F(N - 1) + F(N - 2), for N > 1.
  Given N, calculate F(N).

  Example 1:

  Input: 2
  Output: 1
  Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.


  Example 2:

  Input: 3
  Output: 2
  Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

  Example 3:

  Input: 4
  Output: 3
  Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

  Note:
  0 ≤ N ≤ 30.
*/

/*
  Approach Recursion (inefficient solution)

  Use recursion to compute the Fibonacci number of a given integer.

  Algorithm
  Check if the provided input value, N, is less than or equal to 1. If true, return N.

  Otherwise, the function fib(int N) calls itself, with the result of the 2 previous numbers being
  added to each other, passed in as the argument.
  This is derived directly from the recurrence relation: F_{n} = F_{n-1} + F_{n-2}

  Do this until all numbers have been computed, then return the resulting answer.

  Complexity Analysis
  Time complexity: O(2^n)
  This is the slowest way to solve the Fibonacci Sequence because it takes exponential time.
  The amount of operations needed, for each level of recursion, grows exponentially as the depth approaches N.

  T(1) = 1
  T(n) = T(n-1) + T(n-2) + T(1)
  a^n == a^(n-1) + a^(n-2)
  divide through by a^(n-2): a^2 == a + 1
  (1+sqrt(5))/2 = 1.6180339887 --> golden ratio, so it takes exponential time.

  Space complexity: O(N).
  We need space proportionate to N to account for the max size of the stack, in memory.
  This stack keeps track of the function calls to fib(N).
  This has the potential to be bad in cases
  hat there isn't enough physical memory to handle the increasingly growing stack,
  leading to a StackOverflowError.
*/
/**
 * @param {number} N
 * @return {number}
 */
let fib = (N) => {
  if (N === 0) return 0;
  if (N === 1) return 1;

  if (N > 1) {
    return fib(N-1) + fib(N-2)
  }
};

/*
  Approach: Iterative solution
  use for loop

  time - O(n)
  space - O(1)
*/
function fibIterative(N) {
  let arr = [0, 1];

  for (let i = 2; i <= N; i++) {
    arr.push(arr[i-2] + arr[i-1])
  }

  return arr[N]
}

// todo Approach 4: Iterative Top-Down Approach
/*

*/
// Here is a O(1) memory solution:

// function fibIterative(n) {
//     if (n === 0) return 0

//     let prevPrev = 0
//     let prev = 1
//     n -= 1

//     while (n > 0) {
//         let current = prev + prevPrev
//         prevPrev = prev
//         prev = current
//         n--
//     }

//     return prev
// }

/*
  Approach 2: Memoized Solution
  todo

*/

// const fib1 = (N, memo) => {
//   memo = memo || {};

//   if (memo(N)) return memo[N];
//   if (N > 2) return N;

//   return memo[N] = fib1(N-1, memo) + fib1(N-2, memo);
// }

/*
  Approach 2: Bottom-Up Approach using Memoization


*/


export { fib, fibIterative }

