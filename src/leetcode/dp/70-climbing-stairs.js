/*
Leetcode
70 Climbing stairs
easy

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you
climb to the top?

Example 1:
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step


Constraints:
1 <= n <= 45

Possible questions to as the interviewer:
- Do I need to return the order of steps takes as well? (No, just count and return
the total number of unique ways)
- How many unique ways exists if N = 0? Conventionally we assume that as 1
- Are [1,1,2] and [1,2,1] considered unique or same? The orders of steps if different
but numbers are the same. Yes, these two will be considered unique
*/

/*
Approach Brute force - recursion
Retrieving answer for current step using answers of previous smaller steps.

If you see carefully, the answer for N = 1,2,3,4,5,... from a pattern

for n = 1, answer = 1
for n = 2, answer = 2
for n = 3, answer = 3
for n = 4, answer = 5
for n = 5, answer = 8
for n = 6, answer = 13
...
this is a Fibonacci sequence.

If you want to reach the nth step in the staircase, what will be your last second
step? If would be either the (n-1)th step or the (n-2)th step, because you can
jump only 1 or 2 steps at a time.

Total number of ways to reach nth stair = total number of ways to reach (n-1)th
stair + total number of ways to reach (n-2)th stair.

climbStairs(n) = climbStairs(n-1) + climbStairs(n-2)
This is also the relation followed by the Fibonacci sequence.

Complexity Analysis
Time complexity: O(2^n)
Space complexity: O(n), for recursion stack space

Recursion Tree
                      (0,5)
                  /        \
                (1,5)      (2,5)
                /  \        /  \
              (2,5) (3,5) (3,5) (4,5)
               /  \  /  \
      (3,5)(4,5) (4,5) (5,5) ...
number of nodes 2^n
*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairsBruteForce = function(n) {
  if (n < 2) return 1;
  else {
    return climbStairsBruteForce(n-1) + climbStairsBruteForce(n-2)
  }
}

console.log('climbStairsBruteForce', climbStairsBruteForce(3))

/*

*/

export {
  climbStairsBruteForce
}
