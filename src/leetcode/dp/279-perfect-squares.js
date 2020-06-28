/*
Leetcode
279 Perfect Square
medium

Given a positive integer n, find the least number of perfect square numbers
(for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:
Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.

Example 2:
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
*/


/*
Approach DP

Build the DP array as we iterate
For a given index, the result always depend on previous results.

dp[n] indicates that the perfect squares count of the given n, and we have:
dp[0] = 0
*/
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let dp = new Array(n+1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  
  console.log('dp', dp)
};
