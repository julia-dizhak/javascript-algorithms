/*
Say you have an array for which the ith element is the price of a given stock on
day i.

If you were only permitted to complete at most one transaction (i.e., buy one and
sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

/*
Approach Brute force

Explanation
We need to find out the maximum difference (which will be the maximum profit)
between two numbers in the given array. Also, the second number (selling price)
must be larger than the first one (buying price).

In formal terms, we need to find max(prices[j] − prices[i]), for every i and j such
that j > i.

Complexity Analysis
Time complexity: O(n2). Loop runs n(n−1)/2 times
Space complexity: O(1). Only two variables - maxprofit and profit are used.
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitUseBruteForce = function(prices) {
  //debugger
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i+1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      if (profit > maxProfit) {
        maxProfit = profit
      }
    }
  }

  return maxProfit;
};

/*
One pass

*/
var maxProfit = function(prices) {
  let minPrice = +Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit
}

var maxProfit1 = function(prices){
  if (prices == null || prices.length <= 1) return 0;

  let b0 = -prices[0], b1 = b0;
  let s0 = 0, s1 = 0, s2 = 0;

  for(let i = 1; i < prices.length; i++) {
    b0 = Math.max(b1, s2 - prices[i]);
    s0 = Math.max(s1, b1 + prices[i]);
    b1 = b0; s2 = s1; s1 = s0;
  }
  return s0;
}

/*
It's kinda the same approach compared to the Kadane's Algorithm on maximum subarray.
When iterating the array you consider to sell on day i what would be the best profit against
its current minimum buying price while updating minimum buying price.

https://hackernoon.com/kadanes-algorithm-explained-50316f4fd8a6
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/39038/Kadane's-Algorithm-Since-no-one-has-mentioned-about-this-so-far-%3A)-(In-case-if-interviewer-twists-the-input)
*/

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/712254/simple-2-approaches-DP-and-Recursion-Time-O(n)-Space-O(1)
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
console.log('maxProfit', maxProfit([7,1,5,3,6,4]))

export {
  maxProfit,
  maxProfitUseBruteForce
}
