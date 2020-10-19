/*
Leetcode
188 Best time to buy and sell stock IV
hard

You are given an integer array prices where prices[i] is the price of a given 
stock on the ith day.

Design an algorithm to find the maximum profit. You may complete at most k 
transactions.

Notice that you may not engage in multiple transactions simultaneously 
(i.e., you must sell the stock before you buy again).

Example 1:
Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.

Example 2:
Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), 
profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), 
profit = 3-0 = 3.
*/

/*
First check problem
Best time to buy and sell stock I (see 121)

*/
var maxProfit1 = function(prices) {
  let max = 0;
  let sofarMin = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > sofarMin) {
      max = Math.max(max, prices[i] - sofarMin);
    } else {
      sofarMin = prices[i];
    }
  }

  return max;
};

// DP Approach
var maxProfitUseDP1 = function(prices) {
  let dp = new Array(prices.length).fill(0)
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    dp[i] = Math.max(dp[i-1], prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return Math.max(...dp);
};
//console.log('maxprofit', maxProfitUseDP1([7,1,5,3,6,4]));

/*
Approach DP

Dynamic programming (dp) is a popular method among hard-level problems. Its basic 
idea is to store the previous result to reduce redundant calculations. However, 
it is hard for beginners to think of the dp method.

Generally, there are two ways to come up with a dp solution. One way is to start 
with a brute force approach and reduce unnecessary calculations. Another way is
to treat the stored results as "states", and try to jump from the starting state 
to the ending state.

For beginners, it is recommended to start with the brute force approach. So, 
how to brute force to solve this problem?

Back to (part of) the question:

Say you have an array for which the i-th element is the price of a given stock 
on day i.

Design an algorithm to find the maximum profit. You may complete at most k 
transactions.

Cool, looks like we need to arrange at most k transactions. A natural idea is to 
iterate all the possible combinations of k transactions, and then find the best 
combination. As for those with less than k transactions, they are similar and 
can be considered later. A transaction consists of two parts: buying and selling. 
Therefore, we need to find 2k points in the stock line, k points for buying, and 
k points for selling.
...
todo

*/

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  if (prices.length === 0) return 0;

  // todo
  if ( k > (prices.length / 2)) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] > prices[i-1]) {
        maxProfit += prices[i] - prices[i-1];
      }
    }
    return maxProfit;
  } else {
    let dp = new Array(prices.length).fill(0);
    const size = prices.length;
    for (let i = 1; i <= k; i++) {
      let min = prices[0];
      let max = 0;
      for (let i = 0; i < size; i++) {
        min = Math.min(min, prices[i] - dp[i]);
        max = Math.max(max, prices[i] - min);
        dp[i] = max
      }
    }

    // todo ?
    return dp.pop();
  }
};

console.log('max profit', maxProfit(2, [2,4,1])) 
console.log('max profit', maxProfit(2, [3,2,6,5,0,3])) 
