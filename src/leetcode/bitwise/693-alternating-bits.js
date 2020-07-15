/*
Leetcode
693 Binary Number of Alternating Bits

Given a positive integer, check whether it has alternating bits: namely, if two
adjacent bits will always have different values.

Example 1:
Input: 5 Output: True
Explanation:
The binary representation of 5 is: 101

Example 2:
Input: 7 Output: False
Explanation:
The binary representation of 7 is: 111.

Example 3:
Input: 11 Output: False
Explanation:
The binary representation of 11 is: 1011.

Example 4:
Input: 10 Output: True
Explanation:
The binary representation of 10 is: 1010.
*/

/*
Approach Convert to String
Let's convert the given number into a string of binary digits. Then, we should
simply check that no two adjacent digits are the same.

Time Complexity: O(1). For arbitrary inputs, we do O(w) work, where w is the
number of bits in n. However, w ≤ 32.

Space complexity: O(1), or alternatively O(w).
*/
/**
 * @param {number} n
 * @return {boolean}
*/
var hasAlternatingBitsUseToString = function(n) {
  const arr = n.toString(2).split('');
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) === Number(arr[i+1])) return false
  }
  return true
};

/*
Approach Divide by Two

Intuition and Algorithm

We can get the last bit and the rest of the bits via n % 2 and n // 2 operations.
Let's remember cur, the last bit of n. If the last bit ever equals the last
bit of the remaining, then two adjacent bits have the same value, and the answer
is False. Otherwise, the answer is True.

Also note that instead of n % 2 and n // 2, we could have used operators n & 1
and n >>= 1 instead.

Time Complexity: O(1). For arbitrary inputs, we do O(w) work, where w is the
number of bits in n. However, w ≤ 32.

Space complexity: O(1), or alternatively O(w).
*/

// todo doesn't work
var hasAlternatingBitsDivideByTwo = function(n) {
  let current = n % 2;
  n /= 2;

  while (n > 0) {
    if (current == n % 2) return false;
    current = n % 2;
    n /= 2;
  }
  return true;
};

/*
Approach Previous and XOR

*/
var hasAlternatingBits = function(n) {
  let prev = n & 1;
  n = n >> 1;

  while (n > 0) {
    if( ((n & 1) ^ prev) === 0) return false;
    prev = n & 1;
    n >>= 1;
  }
  return true;
};

/*
Approach XOR
If x is alternating, then x ^ (x>>1) will be 111...11. So adding 1 to it will
be 100..0. Do that and check that at most one bit is set.
*/

var hasAlternatingBitsXOR = function(n) {
  let t = (n ^ (n >> 1)) + 1;
  return (t & (t-1)) === 0;
}

// tests
// console.log('hasAlternatingBits', hasAlternatingBits(5))
// console.log('hasAlternatingBits', hasAlternatingBits(7))
// console.log('hasAlternatingBits', hasAlternatingBits(11))
// console.log('hasAlternatingBits', hasAlternatingBits(10))

export {
  hasAlternatingBits,
  hasAlternatingBitsUseToString,
  hasAlternatingBitsDivideByTwo,
  hasAlternatingBitsXOR
}
