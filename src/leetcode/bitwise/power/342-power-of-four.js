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
Approach: Bit manipulation trick + 1 bit should be on odd position

Example:
4 = 100
16 = 1 00 00
64 = 1 000 000
256 = 1 0000 0000
for example 8 = 1 000, 8 is not power of 4, 1 is not in odd position

It's easy to find that power of 4 numbers have those 3 common features.
First, greater than 0.
Second, only have one '1' bit in their binary notation, so we use x & (x-1)
to delete the lowest '1', and if then it becomes 0,it prove that there is only one '1' bit.
Third, the only '1' bit should be locate at the odd location, for example, 16.
It's binary is 00010000.S o we can use '0x55555555' to check if the '1' bit is
in the right place.

'0x55555555' it's hexadecimal representation of 0101 0101 0101 0101 0101 0101 0101 0101 (=32),
is to get rid of those power of 2 but not power of 4
so that the single 1 bit always appears at the odd position
*/
var isPowerOfFour = function(num) {
  debugger
  return (num > 0 && (num & (num - 1)) === 0 && (num & 0x55555555) !== 0);
}

/*
Approach: Bit trick + toString

time is O(1)
space is O(1)
*/
var isPowerOfFourVariant2 = function(num) {
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
  isPowerOfFourIterative,
  isPowerOfFourVariant2
}
