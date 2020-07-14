/*
Leetcode
231 Power of two

Given an integer, write a function to determine if it is a power of two.

Example 1:
Input: 1
Output: true
Explanation: 20 = 1
Example 2:

Input: 16
Output: true
Explanation: 24 = 16
Example 3:

Input: 218
Output: false
*/

/*
Approach Math

Binary representation
2 -> 100
3 -> 11
4 -> 100
5 -> 101
6 -> 110
8 -> 1000
32 -> 100000

time is O(n)
space is O(1)
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n < 0) return false;

  n = n.toString(2);
  let count = 0;

  for (let i = 0; i < n.length; i++) {
    if (Number(n[i]) === 1) {
      count++;
    }
  }
  return (count === 1) ? true : false;
};

/*
Approach iterative: Keep dividing by 2

Check if n can be divided by 2.
If yes, divide n by 2 and check it repeatedly.

Time complexity = O(log n)
*/
var isPowerOfTwoIterative = function(n) {
  if (n <= 0) return false;
  while (n % 2 === 0) n /= 2;
  return n === 1;
};

/*
Approach iterative 2
*/
var isPowerOfTwoUseWhile = function(n) {
  let i = 1;
  while (i < n) i = i*2;
  return i === n;
};

/*
Approach bit manipulation (trick)

There is a question: explain what the following code does: n & (n-1) === 0.
What does it mean A & B === 0.
It means that A and B never have 1 bit in the same place. So if n & (n-1) === 0,
then n and n-1 never share 1.
The value n is therefore a power of two

Power of two means only one bit of n is 1.
And you can use trick n & (n-1) === 0 to judge
whether that is the case.

Example 1
n = 100000, then n - 1 = 011111 and n & (n-1) = 000000,
so if it's power of two, result is zero.

2
n = 101110, then n - 1 = 101101, and n & (n-1) = 101100,
number is not power of two and result is not zero.

Time is O(1), space is O(1)
*/
var isPowerOfTwoBitManipulation = function(n) {
  return (n > 0 && (n & (n - 1)) === 0);
};

/*
Approach use log, ceil, floor
*/
var isPowerOfTwoMath = function(n) {
  if (n <= 0) return false;
  return Math.floor(Math.log2(n)) ===  Math.ceil(Math.log2(n)) ? true : false;
};

/*
Approach bit shift

How to use bit shift in order to find if its power of two:
we will keep shifting unless we hit first set of bit.

if you remove all less significant bits then you value should be
equals to 1

how to find is bit equal to 1 -
you will take bitwise and operator: number & x where x=1
*/
var isPowerOfTwoShiftBit = function(n) {
  if ( n === 0 ) return false;

  while (n > 1 && (n & 1) === 0)  {
    n >>= 1
  }

  return n === 1
};

/*
Approach counting set bits
todo
*/

/*
Approach binary search
todo
*/

export {
  isPowerOfTwo,
  isPowerOfTwoIterative,
  isPowerOfTwoMath,
  isPowerOfTwoBitManipulation,
  isPowerOfTwoShiftBit
}
