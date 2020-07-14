/*
Leetcode
190 Reverse bits
easy

Reverse bits of a given 32 bits unsigned integer.

Example 1:
Input: 00000010100101000001111010011100
Output: 00111001011110000010100101000000
Explanation: The input binary string 00000010100101000001111010011100 represents
the unsigned integer 43261596, so return 964176192 which its binary representation
is 00111001011110000010100101000000.

Example 2:
Input: 11111111111111111111111111111101
Output: 10111111111111111111111111111111
Explanation: The input binary string 11111111111111111111111111111101 represents
the unsigned integer 4294967293, so return 3221225471 which its binary representation
is 10111111111111111111111111111111.


Note:
Note that in some languages such as Java, there is no unsigned integer type.
In this case, both input and output will be given as signed integer type and
should not affect your implementation, as the internal binary representation of
the integer is the same whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation.
Therefore, in Example 2 above the input represents the signed integer -3 and the
output represents the signed integer -1073741825.


Follow up:
If this function is called many times, how would you optimize it?
*/

/*
Approach Bit by bit

Intuition
Though the question is not difficult, it often serves as a warm-up question to
kick off the interview. The point is to test one's basic knowledge on data type
and bit operations.

As one of the most intuitive solutions that one could come up during an interview,
one could reverse the bits one by one.

As easy as it sounds, the above intuition could lead to quite some variants
of implementation. For instance, to retrieve the least significant bit in an integer
n, one could either apply the modulo operation (i.e. n % 2) or the bit AND operation
(i.e. n & 1).
Another example would be that in order to combine the results of
reversed bits (e.g. 2^a, 2^b2) one could either use the addition operation
(i.e. 2^a + 2^b2
or again the bit OR operation (i.e. 2^a | 2^b2)

The key idea is that for a bit that is situated at the index i, after the
reversion, its position should be 31-i (note: the index starts from zero).

1) We iterate through the bit string of the input integer, from right to left
(i.e. n = n >> 1). To retrieve the least-significant bit of an integer, we apply the
bit AND operation (n & 1).

2) For each bit, we reverse it to the correct position (i.e. (n & 1) << power).
Then we accumulate this reversed bit to the final result.

3) When there is no more bits of one left (i.e. n == 0), we terminate the iteration.

Complexity
Time Complexity: O(1). Though we have a loop in the algorithm, the number of
iteration is fixed regardless the input, since the integer is of fixed-size (32-bits)
in our problem.

Space Complexity: O(1), since the consumption of memory is constant regardless the input.
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let ret = 0;
  let power = 31;

  while (n !== 0) {
    ret += (n & 1) << power;
    n = n >> 1;
    power -= 1;
  }
  return ret;
}

console.log('reverseBits', reverseBits('01000000'))



var reverseBits1 = function(n) {
  let mask = 1;
  let reverse = 0;

  for (let i = 0; i < 32; i++) {
    reverse = reverse << 1;
    if (mask & n) reverse = reverse | 1;
    mask = mask << 1;
  }
  return reverse
}

/*
Reverse Bits
*/
// todo https://leetcode.com/problems/reverse-bits/discuss/55011/JavaScript-solution
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  console.log('n', n.toString(2))
  //debugger
  let reverse = 0;
  let count = 32;

  while (count--) {
    reverse *= 2;
    reverse += n & 1;
    n = n >> 1;
  }

  return reverse

};

// var reverseBits = function (n) {
//   return parseInt(('0'.repeat(32 - n.toString(2).length) + n.toString(2)).split('').reverse().join(''), 2)
// };

//console.log('reverseBits', reverseBits('00000010100101000001111010011100'))
// output 00111001011110000010100101000000
//console.log('reverseBits', reverseBits('00000010100101000001111010011100'))
//console.log('reverseBits', reverseBits('11111111111111111111111111111101'))
// 10111111111111111111111111111111


export {
  reverseBits
}
