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
reversed bits (e.g. 2^a, 2^b) one could either use the addition operation
(i.e. 2^a + 2^b) or again the bit OR operation (i.e. 2^a | 2^b)

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
    ret += (n & 1) << power; // (n & 1) ^ 31, 2^0 + 2^1 + ... 2^31 = (n & 1) * 2^ 31
    n = n >> 1;
    power -= 1;
  }
  return ret;
}

// tests
console.log('reverseBits', reverseBits('11111111111111111111111111111101'))

/*
Approach

Shift the results 1 bit leftwards; shift n 1 bit right wards, and bit AND with
1. Every time you will get the last bit as 0 or 1; if last bit is 1, add 1 to result.
Get ready for next iteration.

Note: in JS, you have to result>>>0 in order to get the result to be unsigned.

*/
var reverseBits3 = function(n) {
  if (n === 0) return 0;
  let result = 0;

  for (let i = 0; i < 32; i++) {
    result = result << 1;
    if ((n & 1) === 1) {
      result += 1
    }
    n = n >> 1;
  }

  return result >>> 0;
}


/*
Approach toString + parseInt
*/
var reverseBitsToString = function(n) {
  return parseInt(('0'.repeat(32 - n.toString(2).length) + n.toString(2)).split('').reverse().join(''), 2)
};

// tests
//console.log('reverseBitsToString', reverseBitsToString('01000000'))

var reverseBitsSum = function(n) {
  if (n === 0) return 0;

  let result = 0;

  for (let i = 0; i < 32; i++) {
    result = result << 1;
    if ((n & 1) === 1) result++;
    n = n >> 1;
  }
  // for js only
  return result >>> 0
}

/*
Reverse Bits
*/
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits2 = function(n) {
  let reverse = 0;
  let count = 32;

  while (count--) {
    reverse *= 2;
    reverse += n & 1;
    n = n >> 1;
  }

  return reverse
};

/*
Approach Byte by byte Memoization

Someone might argument it might be more efficient to reverse the bits, per byte,
which is an unit of 8 bits. Though it is not necessarily true in our case, since
the input is of fixed-size 32-bit integer, it could become more advantageous when
dealing with the input of long bit stream.

Another implicit advantage of using byte as the unit of iteration is that we
could apply the technique of memoization, which caches the previously calculated
values to avoid the re-calculation.

The application of memoization can be considered as a response to the follow-up
question posed in the description of the problem, which is stated as following:
If this function is called many times, how would you optimize it?

To reverse bits for a byte, one could apply the same algorithm as we show in
the above approach. Here we would like to show a different algorithm which is
solely based on the arithmetic and bit operations without resorting to any loop statement,
as following:
def reverseByte(byte):
    return (byte * 0x0202020202 & 0x010884422010) % 1023

The algorithm is documented as "reverse the bits in a byte with 3 operations"
on the online book called Bit Twiddling Hacks by Sean Eron Anderson, where one
can find more details:
http://graphics.stanford.edu/~seander/bithacks.html#ReverseByteWith64BitsDiv

Reverse the bits in a byte with 3 operations (64-bit multiply and modulus division):
unsigned char b; // reverse this (8-bit) byte
b = (b * 0x0202020202ULL & 0x010884422010ULL) % 1023;

The multiply operation creates five separate copies of the 8-bit byte pattern to
fan-out into a 64-bit value. The AND operation selects the bits that are in the
correct (reversed) positions, relative to each 10-bit groups of bits. The multiply
and the AND operations copy the bits from the original byte so they each appear
in only one of the 10-bit sets. The reversed positions of the bits from the original
byte coincide with their relative positions within any 10-bit set. The last step,
which involves modulus division by 2^10 - 1, has the effect of merging together
each set of 10 bits (from positions 0-9, 10-19, 20-29, ...) in the 64-bit value.
They do not overlap, so the addition steps underlying the modulus division behave
like or operations.

Algorithm

- We iterate over the bytes of an integer. To retrieve the right-most byte in an
integer, again we apply the bit AND operation (i.e. n & 0xff) with the bit mask of 11111111.

- For each byte, first we reverse the bits within the byte, via a function called
reverseByte(byte). Then we shift the reversed bits to their final positions.

- With the function reverseByte(byte), we apply the technique of memoization,
which caches the result of the function and returns the result directly for the
future invocations of the same input.

Note that, one could opt for a smaller unit rather than byte, e.g. a unit of
4 bits, which would require a bit more calculation in exchange of less space for
cache. It goes without saying that, the technique of memoization is a trade-off
between the space and the computation.

Complexity

Time Complexity:O(1). Though we have a loop in the algorithm, the number of iteration
is fixed regardless the input, since the integer is of fixed-size (32-bits) in our problem.

Space Complexity: O(1). Again, though we used a cache keep the results of reversed
bytes, the total number of items in the cache is bounded to 2^8 = 256
*/

// no code


/*
Approach Mask and Shift (Divide and Conquer)

Intuition
We have shown in Approach #2 (memoization) an example on how to reverse the bits in a byte without
resorting to the loop statement. During the interview, one might be asked to
reverse the entire 32 bits without using loop. Here we propose one solution that
utilizes only the bit operations.

The idea can be considered as a strategy of divide and conquer, where we divide
the original 32-bits into blocks with fewer bits via bit masking, then we reverse
each block via bit shifting, and at the end we merge the result of each block to
obtain the final result.

In the following graph, we demonstrate how to reverse two bits with the above-mentioned idea.
As one can see, the idea could be applied to blocks of bits.

b1b2
mask 10 - 01
shift b10 - 0b2 => 0b1 - b20
combine b2b1

Algorithm

We can implement the algorithm in the following steps:

1). First, we break the original 32-bit into 2 blocks of 16 bits, and switch them.

2). We then break the 16-bits block into 2 blocks of 8 bits. Similarly, we switch
the position of the 8-bits blocks

3). We then continue to break the blocks into smaller blocks, until we reach the
level with the block of 1 bit.

4). At each of the above steps, we merge the intermediate results into a single
integer which serves as the input for the next step.

Time Complexity: O(1), no loop is used in the algorithm.
Space Complexity: O(1). Actually, we did not even create any new variable in the function.
*/

// example doesn't work with JS
var reverseBitsDivideConquer = function(n) {
  // this algorithm swaps the bits in the following steps:
  // 16 bits left and right swapped
  // every couple of 8 bits swapped (every other 8 bits are picked by AND operation
  // and 00ff and ff00 as masks equivalent to 0000000011111111 and 1111111100000000)
  // every couple of 4 bits are swapped like above using 0f0f and f0f0 as masks.
  // every couple of 2 bits are swapped using cc and 33 corresponding to 11001100 and 0011011
  // every couple of 1 bit are swapped using aa and 55 corresponding to 10101010 and 01010101
  // This results in log(D) time complexity in which D is the number of bits.
  n = (n >> 16 ) | ( n << 16);
  n = ((n & 0xff00ff00) >> 8) | ((n & 0x00ff00ff) << 8);
  n = ((n & 0xf0f0f0f0) >> 4) | ((n & 0x0f0f0f0f) << 4);
  n = ((n & 0xcccccccc) >> 2) | ((n & 0x33333333) << 2);
  n = ((n & 0xaaaaaaaa) >> 1) | ((n & 0x55555555) << 1);
  return n;
}

// tests
//console.log('reverseBits', reverseBits('00000010100101000001111010011100'))
// output 00111001011110000010100101000000
//console.log('reverseBits', reverseBits('00000010100101000001111010011100'))
//console.log('reverseBits', reverseBits('11111111111111111111111111111101'))
// 10111111111111111111111111111111

export {
  reverseBits,
  reverseBitsSum,
  reverseBits2,
  reverseBits3,
  reverseBitsToString,
  reverseBitsDivideConquer
}
