
/*
Leetcode
Minimum Cost For Tickets
medium

In a country popular for train travel, you have planned some train travelling one
year in advance.  The days of the year that you will travel is given as an array
days.  Each day is an integer from 1 to 365.

Train tickets are sold in 3 different ways:
a 1-day pass is sold for costs[0] dollars;
a 7-day pass is sold for costs[1] dollars;
a 30-day pass is sold for costs[2] dollars.

The passes allow that many days of consecutive travel.  For example, if we get
a 7-day pass on day 2, then we can travel for 7 days: day 2, 3, 4, 5, 6, 7, and 8.

Return the minimum number of dollars you need to travel every day in the given
list of days.

Example 1:
Input: days = [1,4,6,7,8,20], costs = [2,7,15]
Output: 11
Explanation:
For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.
On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.
On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.
In total you spent $11 and covered all the days of your travel.

Example 2:
Input: days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]
Output: 17
Explanation:
For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 30-day pass for costs[2] = $15 which covered days 1, 2, ..., 30.
On day 31, you bought a 1-day pass for costs[0] = $2 which covered day 31.
In total you spent $17 and covered all the days of your travel.


Note:
1 <= days.length <= 365
1 <= days[i] <= 365
days is in strictly increasing order.
costs.length == 3
1 <= costs[i] <= 1000
*/

/*
Approach DP

you can immediatelly thinks about DP because they ask min costs.
Sub problems

example
[1]
[1,2,3]
day costs can be  [25, 15, 5]
Similiar problem: coin change

DP is just an optimized way of solving any problem which can also be solved using recursive method.
Just create a recursive solution and then analyze your algorithm where it is repeating itself. And then just create one more array to store any value it solves. And check the same array before repeating your function. If you can get answer to something using an array then why to solve it again.

todo
task number to find
update a leetcode
second solution with saving days
draw an excel table
https://leetcode.com/problems/minimum-cost-for-tickets/discuss/226659/Two-DP-solutions-with-pictures
https://leetcode.com/problems/minimum-cost-for-tickets/discuss/518772/Javascript-Solution-with-comments

*/

/*
Approach DP
dp[i] means overall costs until i-th day (included)
we have to check 2 conditions:

1 i in day list
we have 3 options and in order to avoid negative indexes (because we would have i = 1
and i-1, i-7, i-30):
a) 1 pass: dp[i] = dp[i-1] + costs[0] = dp[max(0, i-1)] + costs[0];
b) 7 pass: dp[i] = dp[i-7] + costs[1] = dp[max(0, i-7)] + costs[0];
c) 30 pass: dp[i] = dp[i-30] + costs[2] = dp[max(0, i-30)] + costs[0];

2 i not in days (means travel days?)
dp[i] = dp[i-1]
which simply means we don't have to spend money, and total costs remains same

time is O(n)
space is O(n)
n last day in days list + 1, time and space O(366)

todo
I don't understand:
- Initialize dp array to be the size of the last day plus 1

*/
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {

  // Initialize dp array to be the size of the last day plus 1
  let dp = new Array(days[days.length - 1] + 1);
  // Base case
  dp[0] = 0;

  console.log('days', days)
  console.log('dp', dp)
  // Loop through all the days
  for (let i = 1; i < dp.length; i++) {
    // If 'i' isn't in the days array we let it equal to the previous day because
    // we don't need to buy a ticket for that day
    console.log('i=', i)
    if (!days.includes(i)) {
      dp[i] = dp[i-1];
    } else {
      // if dp[i] is in the days array we find the min value between our 3 cost possibilities
      dp[i] = Math.min(
        dp[Math.max(0, i-1)] + costs[0],
        dp[Math.max(0, i-7)] + costs[1],
        dp[Math.max(0, i-30)] + costs[2]
      )
    }
  }

  console.log('dp', dp)
  // last element of dp will be our answer
  return dp[dp.length - 1]
};
const days = [1,4,6,7,8,20];
const costs = [2,7,15]
console.log('mincostTickets', mincostTickets(days, costs));

/*
coin change 322
amount = 5, coins = [1, 2, 5]
*/
// var coinChange2 = function(coins, amount) {
//   if (amount < 0) return 1;
//   let combinations = new Array(amount + 1).fill(0);
//   combinations[0] = 1;

//   for (const coin of coins) {
//     for (let i = 0; i < combinations.length; i++) {
//       if (i >= coin) {
//         combinations[i] += combinations[i - coin];
//       }

//     }
//   }

// };

export {
  mincostTickets
}
