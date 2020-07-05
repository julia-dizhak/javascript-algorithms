/*
Leetocode
191 Number of bits
easy

the Hamming weight
Brian Kernigans Algorithm to count set bits in an integer.

Write a function that takes an unsigned integer and return the number of '1'
bits it has (also known as the Hamming weight).

Example 1:
Input: 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total
of three '1' bits.

Example 2:
Input: 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total
of one '1' bit.

Example 3:
Input: 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total
of thirty one '1' bits.

Example 4:
n = -1 (11..111111)
Output: the number of set bits is 32

Example: 5
n = 16, (00001000)
Output is 1


Note:
Note that in some languages such as Java, there is no unsigned integer type.
In this case, the input will be given as signed integer type and should not
affect your implementation, as the internal binary representation of the integer
is the same whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement
notation. Therefore, in Example 3 above the input represents the signed
integer -3.
*/

/*
Approach Loop and flip

Algorithm
The solution is straight-forward. We check each of the 32 bits of the number.
If the bit is 1, we add one to the number of 1-bits.

We can check the i-th bit of a number using a bit mask. We start with a mask
m=1, because the binary representation of 1 is,
00000000000000000000000000000001 Clearly, a logical AND between any number and
the mask 1 gives us the least significant bit of this number. To check the next
bit, we shift the mask to the left by one.
00000000000000000000000000000010

And so on.

Complexity Analysis
The run time depends on the number of bits in n. Because n in this piece of
code is a 32-bit integer, the time complexity is O(1).

The space complexity is O(1), since no additional space is allocated.
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeightLoopFlip = function(n) {
  let bits = 0;
  let mask = 1;

  for (let i = 0; i < 32; i++) {
    if ((n & mask ) !== 0) {
      bits++;
    }
    mask = mask << 1 // mask <<= 1;
    //console.log('mask', mask.toString(2))
  }
  return bits;
};

/*
Approach 2 Bit Manipulation Trick

Algorithm
We can make the previous algorithm simpler and a little faster. Instead of
checking every bit of the number, we repeatedly flip the least-significant
1-bit of the number to 0, and add 1 to the sum. As soon as the number
becomes 0, we know that it does not have any more 1-bits, and we return the sum.

The key idea here is to realize that for any number n, doing a bit-wise AND
of n and n−1 flips the least-significant 1-bit in n to 0. Why?
Consider the binary representations of n and n−1.

In the binary representation, the least significant 1-bit in n always corresponds
to a 0-bit in n−1. Therefore, adding the two numbers n and n−1 always flips the
least significant 1-bit in n to 0, and keeps all other bits the same.
Using this trick, the code becomes very simple.

We know that expression
n = 100000, then n-1 = 011111 and n&(n-1) = 000000
will turn off the least significant (last) set bit of given number
(n-1) will have all the bits flipped after the least significant set bit of n

Complexity Analysis
The run time depends on the number of 1-bits in n. In the worst case, all bits
in n are 1-bits. In case of a 32-bit integer, the run time is O(1).
Method goes through as many iteration as there are sets bits.
So if we have 32-bit world with only one the high bit set, then it will only
go once through the loop

The space complexity is O(1), since no additional space is allocated.

*/

var hammingWeight = function(n) {
  let count = 0;

  while (n !== 0) {
    n = n & (n-1);
    count++;
  }
  return count;
};

// tests
// console.log('hammingWeightLoopFlip', hammingWeightLoopFlip(5));
// console.log('hammingWeight', hammingWeight(5));

export {
  hammingWeight,
  hammingWeightLoopFlip
}
