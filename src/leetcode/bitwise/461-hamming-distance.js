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
Approach
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
console.log('hammingDistance1', hammingDistance1(1,4))

export {
  hammingDistance1,
  hammingDistance2
}
