/*
Leetcode
441 Arranging coins
easy

You have a total of n coins that you want to form in a staircase shape, where
every k-th row must have exactly k coins.

Given n, find the total number of full staircase rows that can be formed.

n is a non-negative integer and fits within the range of a 32-bit signed
integer.

Example 1: n = 5
The coins can form the following rows:
¤
¤ ¤
¤ ¤
Because the 3rd row is incomplete, we return 2.

Example 2: n = 8
The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤
Because the 4th row is incomplete, we return 3.

*/

/*
Approach Binary search

Assume that the answer is k, i.e. we've managed to complete k rows of coins
These completed rows contain in total
1 + 2 + ... + k = k*(k+1)/2 coins.

We could now reformulate the problem as follows:
find the maximum k such that k*(k+1)/2 <= N

The problem seems to be one of those search problems. And instead of naive
iteration, one could resort to another more efficient algorithm called binary
search, as we can find in another similar problem called
search insert position (Leetcode 35).

time is O(logn)
space is O(1)
*/

var arrangeCoins = function(n) {
  if (n === 1) return 1;

  let left = 0;
  let right = n;

  while (left <= right) {
    let mid = Math.floor(left + (right - left)/2);
    let current = mid * (mid + 1) / 2;

    if (current === n) return mid;
    if (current < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

/*
Approach 2
If we look deeper into the formula of the problem, we could actually solve it
with the help of mathematics, without using any iteration.

As a reminder, the constraint of the problem can be expressed as follows:
k*(k+1) <= 2*N

This could be solved by completing the square technique,
(k+ 1/2)^2 - 1/4 <= 2N
that results in the following answer:
k = [sqrt(2N + 1/4) - 1/2]

Or
n = (x + 1) * x / 2
x² + x = 2n
x² + x + 1/4 - 1/4 = 2n
(x + 1/2)² = 2n + 1 / 4
(x + 1/2)² = (8n + 1) / 4
x + 1/2 = sqrt(8n + 1) / 2
x = (sqrt(8n + 1) / 2) - (1 / 2)
x = (sqrt(8n + 1) - 1) / 2

Time complexity: O(1).
Space complexity: O(1).
*/

var arrangeCoinsMath = function(n) {
  return Math.floor(Math.sqrt(2*n + 0.25) - 0.5);
}

// another approach
function arrangeCoins1(n) {
  let k = 1;
  while (n >= k) {
    n -= k++
  }
  return k - 1
}

var arrangeCoins2 = function(n) {
  var rowsToPrint = 0;

  while(rowsToPrint < n) {
    n -= ++rowsToPrint;
  }

  return rowsToPrint;
};

export {
  arrangeCoins,
  arrangeCoinsMath,
  arrangeCoins1,
  arrangeCoins2
}


