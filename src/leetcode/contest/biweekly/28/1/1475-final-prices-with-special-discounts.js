/*
Leetcode Contest Biweekly 28, first problem
1475 Final prices with special discounts in a shop
easy

Array

Given the array prices where prices[i] is the price of the ith item in a shop.
There is a special discount for items in the shop, if you buy the ith item,
then you will receive a discount equivalent to prices[j] where j is the
minimum index such that j > i and prices[j] <= prices[i], otherwise,
you will not receive any discount at all.

Return an array where the ith element is the final price you will pay for the
ith item of the shop considering the special discount.

Example 1:
Input: prices = [8,4,6,2,3]
Output: [4,2,4,2,3]

Explanation:
For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4,
therefore, the final price you will pay is 8 - 4 = 4.

For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2,
therefore, the final price you will pay is 4 - 2 = 2.

For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.

For items 3 and 4 you will not receive any discount at all.

Example 2:
Input: prices = [1,2,3,4,5]
Output: [1,2,3,4,5]
Explanation: In this case, for all items, you will not receive any discount at all.
Example 3:

Input: prices = [10,1,1,6]
Output: [9,0,1,6]

Hint
Use brute force: For the ith item in the shop with a loop find the first
position j satisfying the conditions and apply the discount, otherwise,
the discount is 0.
*/

/*
Approach brute force

time is O(n^2)
space is O(1)
*/

// todo added contest to wiki
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
  let result = [];
  for (let i = 0; i < prices.length; i++) {
    result[i] = prices[i];
    for (let j = i+1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        result[i] = prices[i] - prices[j];
        break;
      }
    }
  }
  return result
}

// todo stack solution
// var finalPrices = function(prices) {
//   const stack = [];
//   const res = [];
//   for(let i = 0; i <prices.length; i++){
//       res[i] = prices[i]
//       while(stack.length && prices[stack[stack.length - 1]] >= prices[i]){
//           const j = stack.pop();
//           res[j] = prices[j] - prices[i];
//       }
//       stack.push(i);
//   }
//   return res;
// };
//console.log('finalPrices', finalPrices([8,4,6,2,3]))

export {
  finalPrices
}
