/*
Leetcode
326 Power of three
easy

Given an integer, write a function to determine if it is a power of three.

Example 1:
Input: 27
Output: true

Example 2:
Input: 0
Output: false

Example 3:
Input: 9
Output: true

Example 4:
Input: 45
Output: false

Follow up:
Could you do it without using any loop / recursion?
*/

/*
Approach iterative - Loop iteration

One simple way of finding out if a number n is a power of a number b is to keep
dividing n by b as long as the remainder is 0. This is because we can write
n = x^b
n = b * b * ... * b

Hence it should be possible to divide n by b x times, every time with a remainder
of 0 and the end result to be 1.

Notice that we need a guard to check that n != 0, otherwise the while loop will
never finish. For negative numbers, the algorithm does not make sense, so we will
include this guard as well.

Complexity Analysis
Time complexity: O(log_b(n)). In our case that is O(\log_3n)
The number of divisions is given by that logarithm.

Space complexity: O(1). We are not using any additional memory.
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThreeIterative = function(n) {
  if (n < 1) return false;
  while (n > 0 && n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
};

/*
Approach Integer Limitations = Math

An important piece of information can be deduced from the function signature
In particular, n is of type int. In Java, this means it is a 4 byte, signed
integer [ref]. The maximum value of this data type is 2147483647. Three ways of
calculating this value are

Google
System.out.println(Integer.MAX_VALUE);
MaxInt = 2^32/2 - 1
since we use 32 bits to represent the number, half of the range is used for
negative numbers and 0 is part of the positive numbers
Knowing the limitation of n, we can now deduce that the maximum value of n that
is also a power of three is 1162261467. We calculate this as: ... formula

Therefore, the possible values of n where we should return true are 3^0, 3^1,
... 3^{19}

Complexity Analysis
Time complexity: O(1). We are only doing one operation.
Space complexity: O(1). We are not using any additional memory.
*/

var isPowerOfThree = function(n) {
  return n > 0 && 1162261467 % n === 0;
};

var isPowerOfThreeVariant1 = function(n) {
  let maxNumber = Math.pow(3,19); // Power of Three
  if(n <= 0) return false; // Negative number
  return maxNumber % n === 0 ? true: false; //  Divide into three
};

/*
Approach allPowerOfThree
*/
var isPowerOfThreeVariant2 = function(n) {
  switch(n) {
    case 1:
    case 3:
    case 9:
    case 27:
    case 81:
    case 243:
    case 729:
    case 2187:
    case 6561:
    case 19683:
    case 59049:
    case 177147:
    case 531441:
    case 1594323:
    case 4782969:
    case 14348907:
    case 43046721:
    case 129140163:
    case 387420489:
    case 1162261467:
      return true;
    default: return false;
  }
};

// https://www.geeksforgeeks.org/swap-all-odd-and-even-bits/

export {
  isPowerOfThree,
  isPowerOfThreeIterative,
  isPowerOfThreeVariant1,
  isPowerOfThreeVariant2
}
