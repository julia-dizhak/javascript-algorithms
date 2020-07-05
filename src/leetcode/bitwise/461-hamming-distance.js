/*
Leetcode
461 Hamming Distance
easy

The Hamming distance between two integers is the number of positions at which
the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:
Input: x = 1, y = 4

Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

/*
Approach xor and toString

time is O(n)?
*/
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance1 = function(x, y) {
  return (x^y).toString(2).split('').filter(num => num === '1').length;
}

/*
Approach Bit trick Manipulation

So the while works by turning off the right most bit in n in each iteration,
the details are as follows.

the "while(n)" par is equivalent to while there is a bit set go into the loop
when were in the loop the "++dist" just counts how may bits we have
turned off (set to 0) so far
the "n &= n-1" turns off (set to 0) the least most 1 bit, you can see this by
just trying a few examples.

so where we exit the loop we know that n must be zero and hence dist will
contain the number of bits set to one in x^y.
n = 100000, then n - 1 = 011111 and n & (n-1) = 000000,

Complexity Analysis
The run time depends on the number of 1-bits in n. In the worst case, all bits
in n are 1-bits. In case of a 32-bit integer, the run time is O(1).

The space complexity is O(1), since no additional space is allocated.
*/

var hammingDistance = function(x, y) {
  let distCounter = 0;
  if (x === y) return distCounter;

  const diffOfBits = x^y;
  return countOfOne(diffOfBits);
}

function countOfOne(n) {
  let count = 0;
  while (n !== 0) {
    n = n & (n-1);
    count++;
  }
  return count;
}

// the same realization
var hammingDistance1 = function(x,y) {
  let diff = 0;
  let n = x^y;

  while (n !== 0 ) {
    n = n & (n-1);
    diff++;
  }
  return diff;
}

/*
Approach other
*/
var hammingDistance2 = function(x, y) {
  let distCounter = 0;
  let bitxor = x^y;

  while (bitxor > 0) {
    if (bitxor % 2 === 1) distCounter++;
    bitxor = bitxor >> 1
  }

  return distCounter;
};

// tests
console.log('hammingDistance', hammingDistance(1,4))

export {
  hammingDistance,
  hammingDistance1,
  hammingDistance2
}
