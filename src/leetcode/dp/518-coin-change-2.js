/*
Leetcode
518. Coin change 2 (Unbounded Knapsack)
medium

You are given coins of different denominations and a total amount of money.
Write a function to compute the number of combinations that make up that amount.
You may assume that you have infinite number of each kind of coin.

Example 1:
Input: amount = 5, coins = [1, 2, 5]
Output: 4

Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

Example 2:
Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.

Example 3:
Input: amount = 10, coins = [10]
Output: 1

Note: You can assume that
0 <= amount <= 5000
1 <= coin <= 5000
the number of coins is less than 500
the answer is guaranteed to fit into signed 32-bit integer
*/

/*
Approach Dynamic Programming

The idea is In order to know how many combinations there were for 12,
we needed to know how many combinations the previous numbers had.

Logic during each iteration
if amount >= coin then
  combinations[amount] += combinations[amount - coin]

time complexity is O(n*m), where n - coins, m - amount(combinations)
space is O(coins*amount)

*/

// todo check brute force https://leetcode.com/problems/coin-change-2/discuss/141076/Unbounded-Knapsack
// brute force https://leetcode.com/problems/coin-change-2/discuss/141076/Unbounded-Knapsack
// several methods https://leetcode.com/problems/coin-change-2/discuss/674977/100-Faster-or-Recursive-1-d-2-d-DP-or-Matrix-With-Example-or-Commented-Code-Video
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
*/
var change = function(amount, coins) {

  let combinations = new Array(amount+1).fill(0);
  // setup amount 0 with value equal to 1
  // this will never going to change,
  // because coin will never going to 0
  combinations[0] = 1;

  if (coins.length === 0) {
    if ( amount === 0) return 1;
    return 0;
 }

  for (const coin of coins) {
    // start from 1
    for (let i = 1; i < combinations.length; i++) {
      // i is amount
      if (i >= coin ) {
        console.log('coin', coin);
        combinations[i] += combinations[i - coin];
        console.log('combinations', combinations);

      }

    }
  }

  //console.log('combinations', combinations);
  return combinations[amount]
}

//change(12, [1,2,5])
//change(5, [1,2,5])
//change(3, [2])

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  let isPowerOfTwo = false;

  return isPowerOfTwo
};
//isPowerOfTwo(2);

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  num = num.toString(2);
  let str = ''
  for (let i = 0; i < num.length; i++) {
    str += Number(num[i]) === 0 ? 1 : 0;
  }
  return parseInt(str, 2)
}
console.log('findComplement', findComplement(5));



export { change }
