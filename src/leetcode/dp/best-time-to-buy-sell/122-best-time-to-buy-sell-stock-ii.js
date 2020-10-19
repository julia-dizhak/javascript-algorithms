/*
Leetcode
122 Best time to buy and sell stock II
easy

Say you have an array prices for which the ith element is the price of a given 
stock on day i.

Design an algorithm to find the maximum profit. You may complete as many 
transactions as you like (i.e., buy one and sell one share of the stock multiple 
times).

Note: You may not engage in multiple transactions at the same time (i.e., you 
must sell the stock before you buy again).

Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), 
profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

Example 2:
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), 
profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
engaging multiple transactions at the same time. You must sell before buying again.

Example 3:
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

*/

/*
Approach Brute force

first check 121?

Summary 
We have to determine the maximum profit that can be obtained by making the 
transactions (no limit on the number of transactions done). For this we need 
to find out those sets of buying and selling prices which together lead to 
the maximization of profit.

In this case, we simply calculate the profit corresponding to all the possible 
sets of transactions and find out the maximum profit out of them.

backtracking?
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitBruteForce = function(prices) {
  if (prices.length === 0) return 0;

  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      let profit = prices[j] - prices[i];
      if (profit > maxProfit) maxProfit = profit;
      
    }
    
  }
  return maxProfit
};

/*
Greedy 

The profit is the sum of sub-profits. Each sub-profit is the difference between 
selling at day j, and buying at day i (with j > i). The range [i, j] should be 
chosen so that the sub-profit is maximum:

sub-profit = prices[j] - prices[i]

We should choose j that prices[j] is as big as possible, and choose i that 
prices[i] is as small as possible (of course in their local range).

Time is O(n)
space is O(1)

todo
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/discuss/208241/Explanation-for-the-dummy-like-me.
*/
var maxProfit = function(prices) {
  let i = 0, buy, sell, profit = 0, N = prices.length - 1;

  while (i < N) {
    while (i < N && prices[i+1] <= prices[i]) i++;
    buy = prices[i];

    while (i < N && prices[i+1] >= prices[i]) i++;
    sell = prices[i];

    profit += sell - buy;
  }
  return profit;
}

//console.log('maxProfit', maxProfitBruteForce([7,1,5,3,6,4]));
console.log('maxProfit', maxProfit([7,1,5,3,6,4]));

export {
  maxProfit
}