/*
Leetcode
342 Power of four
easy

Given an integer (signed 32 bits), write a function to check whether it is a
power of 4.

Example 1:
Input: 16
Output: true

Example 2:
Input: 5
Output: false

Follow up: Could you solve it without loops/recursion?
*/

/*
Approach iterative

time is O(log n)
space is O(1)
*/
/**
 * @param {number} num
 * @return {boolean}
*/
var isPowerOfFourIterative = function(n) {
  if (n <= 0) return false;
  //if (n === 1) return true;

  while (n % 4 === 0) {
    n = n / 4
  }
  return n === 1
}

/*

*/

var isPowerOfFour = function(num) {
  if (num <= 0) return false;
  if (num === 1) return true;

  let minusOne = num - 1;
  const n = minusOne.toString(2).length;
  return ( num > 0 &&  (num & minusOne) === 0 && n % 2 === 0);
};

// tests
console.log('isPowerOfFour', isPowerOfFour(4))

export {
  isPowerOfFour,
  isPowerOfFourIterative
}
