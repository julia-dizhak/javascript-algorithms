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
  if (n <= 0) return false;

  n = n.toString(2);
  //debugger
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    if (Number(n[i]) === 1) {
      count++;
    }
  }

  const isPowerOfTwo = (count <= 1) ? true : false;
  console.log('isPowerOfTwo', isPowerOfTwo);

  return isPowerOfTwo
};

/*
Approach iterative

*/

var isPowerOfTwoIterative = function(n) {
  if (n <= 0) return false;
  debugger
  while (n % 2 === 0) n /= 2;
  return n === 1;
};


console.log(isPowerOfTwoIterative(6));
// isPowerOfTwoIteratvie(2);
// isPowerOfTwoIteratvie(4);
// isPowerOfTwo(6);
// isPowerOfTwo(16);
isPowerOfTwo(-16);
// todo case with 0

export {
  isPowerOfTwo,
  isPowerOfTwoIterative
}
