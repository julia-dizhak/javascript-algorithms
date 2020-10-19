/*
Leetcode
121 Best time to buy and sell stock
easy

Say you have an array for which the ith element is the price of a given stock on
day i.

If you were only permitted to complete at most one transaction (i.e., buy one and
sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6),
profit = 6-1 = 5. Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

/*
Approach Brute force

Intuition
example [7,1,5,3,6,4]
If buy stock in first day for 7$ and sell on next day for 1$. It means we are
losing 6$. It is terrible algorithm. Want we want to do, buy stock for 1$ and sell it
for next maximum value. We can't sell for 7$ because it was day before we bought
and we can't go back in time.

Input: [7,6,4,3,1] in descending order => profit does not exist

Explanation
We need to find out the maximum difference (which will be the maximum profit)
between two numbers in the given array. Also, the second number (selling price)
must be larger than the first one (buying price).

In formal terms, we need to find max(prices[j] − prices[i]), for every i and j such
that j > i.

Complexity Analysis
Time complexity: O(n^2). Loop runs n(n−1)/2 times
Space complexity: O(1). Only two variables - maxprofit and profit are used.
*/

/**
 * @param {number[]} prices
 * @return {number}
*/
var maxProfitUseBruteForce = function(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i+1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      if (profit > maxProfit) maxProfit = profit;
    }
  }

  return maxProfit;
};
//console.log('maxprofit', maxProfitUseBruteForce([7,1,5,3,6,4]));

/*
Algorithm One pass

Say the given array is: [7, 1, 5, 3, 6, 4]

If we plot the numbers of the given array on a graph (days - x, profit - y),
we get:
The points of interest are the peaks and valleys in the given graph.
We need to find the largest peak following the smallest valley.
We can maintain two variables - minprice and maxprofit corresponding to the
smallest valley and maximum profit (maximum difference between selling price and
minprice) obtained so far respectively.

Complexity Analysis
Time complexity: O(n). Only a single pass is needed.
Space complexity: O(1). Only two variables are used.
*/
var maxProfitOnePass = function(prices) {
  let minPrice = +Infinity;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    let profit = prices[i] - minPrice;
    if (profit > max) max = profit;    
  }
  return max;
};

var maxProfitOnePass1 = function(prices) {
  let minPrice = +Infinity;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i]; 
    max = Math.max(max, prices[i] - minPrice)
  }
  return max;
};

/* 
the same approach
works as well
*/
var maxProfit = function(prices) {
  // always set min to max value initially and max to min value
  let minPrice = +Infinity; // smallest valley
  let maxProfit = 0; // max difference between selling price and minprice
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}
//console.log('maxprofit', maxProfitOnePass([7,1,5,3,6,4]));

/*
Approach find so far min price
The idea is to find so far min price.

time is O(n)
space is O(1)
*/
var maxProfit1 = function(prices) {
  if (prices.length === 0) return 0;

  let max = 0;
  let sofarMin = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > sofarMin) {
      max = Math.max(max, prices[i] - sofarMin)
    } else {
      // prices[i] < sofarMin
      sofarMin = prices[i];
    }
  }
  return max;
}

/*
Approach

time is O(n)
space is O(1)
*/
var maxProfitFindMinPrice = function(prices) {
  if (prices.length === 0 || prices.length === 1) return 0;
  let minPrice = +Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit
}

/*
Approach DP

Dynamic programming (dp) is a popular method among hard-level problems. Its 
basic idea is to store the previous result to reduce redundant calculations.

There's is a clear formula expression here, where dp[i] denotes the max profit
on ith day.

We should get the max profit on (i + 1)th day from profit from previous days, or
profit gained on this day (current price - minimum price before)
And only after this, we can update the minimum price.

Then, according this 'naive' DP solution, we can see there's only one variable
needed for memorization. So we change the array dp[] to a variable, and thus
change the space from O(n) to O(1).

todo
(A good example of doing this reducing space would be knapsack problem. We can
change the space complexity from O(mn) to O(n). I think you can discover that
by yourself.)

time is O(n)
space is O(n) create auxillary array
*/
var maxProfitDP = function(prices) {
  let dp = new Array(prices.length).fill(0);
  dp[0] = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    dp[i] = Math.max(dp[i-1], prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i])
  }
  return Math.max(...dp);
}

//console.log('maxProfitDP', maxProfitDP([7,1,5,3,6,4]))



var maxProfit2 = function(prices){
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
todo

It's kinda the same approach compared to the Kadane's Algorithm on maximum subarray.
When iterating the array you consider to sell on day i what would be the best profit against
its current minimum buying price while updating minimum buying price.

https://hackernoon.com/kadanes-algorithm-explained-50316f4fd8a6
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/39038/Kadane's-Algorithm-Since-no-one-has-mentioned-about-this-so-far-%3A)-(In-case-if-interviewer-twists-the-input)

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/712254/simple-2-approaches-DP-and-Recursion-Time-O(n)-Space-O(1)

*/

export {
  maxProfit, 
  maxProfitOnePass, maxProfitOnePass1,
  maxProfitUseBruteForce,
  maxProfit1,
  maxProfitFindMinPrice,
  maxProfitDP,
}
