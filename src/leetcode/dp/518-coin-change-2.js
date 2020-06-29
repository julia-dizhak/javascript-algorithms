/*
Leetcode
518. Coin change 2
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

Any DP problem should start from explanation of sub problems.
The idea is in order to know how many combinations there were for 5,
we needed to know how many combinations the previous numbers had.

Idea use coins as outer loop and amount of combinations as inner loop.
Otherwise below logic will not work.
And if you wanna use amount combination as outer loop,
you have to change logic.

Algorithm
1 Create a combinations arr with size amount + 1.
Each location of arr will be coordinated to amount of money loc 6 = money 6.
Setup amount 0 with value 1, this will never change,
because coin will never going to 0

2 Iterate through coins arr where each coin is a parameter as an outer loop
and combinations as inner loop (start iterate from 1).

3 Logic during each iteration
if amount >= coin THEN
  combinations[amount] += combinations[amount - coin]

Input: amount 12, coins [1,2,5], output should be 4
current coin is 1
0 1 2 3 4 5 6 7 8 9 10 11 12
1 1 1 1 1 1 1 1 1 1  1  1  1

current coin is 2
i=1
1 >= 2 false, skip amount 1

i=2
2 >= 2 true, 2-2 = 0
look at amount 0 which is equal to 1
current value is 1
1+1 = 2

i=3
3>=2 true, 3-2 = 1

and so on

0 1 2 3 4 5 6 7 8 9 10 11 12
1 1 2 2 3 3 4 4 5 5  6  6  7

current coin is 5
repeat algorithm
0 1 2 3 4 5 6 7 8 9 10 11 12
1 1 2 2 3 4 5 6 7 8 10 11 13

return combinations[amount] = combinations[12] = 13

Time complexity is O(n*m), where n - coins, m - amount(combinations)
Space is O(coins*amount)
*/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
*/
var change = function(amount, coins) {
  if (amount <= 0) return 1;

  let combinations = new Array(amount + 1).fill(0);
  // setup amount 0 with value equal to 1
  // this will never going to change,
  // because coin will never going to 0
  combinations[0] = 1;

  for (const coin of coins) {
    // start from 1
    for (let i = 1; i < combinations.length; i++) {
      // i is amount
      if (i >= coin ) {
        combinations[i] += combinations[i - coin];
      }

    }
  }

  return combinations[amount]
}

// tests
// console.log('change', change(5, [1,2,5]))

/*
Approach Brute force
todo
...
*/
// todo check brute force https://leetcode.com/problems/coin-change-2/discuss/141076/Unbounded-Knapsack
// brute force https://leetcode.com/problems/coin-change-2/discuss/141076/Unbounded-Knapsack
// several methods https://leetcode.com/problems/coin-change-2/discuss/674977/100-Faster-or-Recursive-1-d-2-d-DP-or-Matrix-With-Example-or-Commented-Code-Video
// outer loop iterating over amount and inner loop iterating over coins
// amount as the outer of loop

export { change }
