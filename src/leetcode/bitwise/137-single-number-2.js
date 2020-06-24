/*
Leetcode
137 Single Number II
Given a non-empty array of integers, every element appears three times except
for one, which appears exactly once. Find that single one.
medium

Note:
Your algorithm should have a linear runtime complexity.
Could you implement it without using extra memory?

Example 1:
Input: [2,2,3,2]
Output: 3

Example 2:
Input: [0,1,0,1,0,1,99]
Output: 99
*/

/*
Approach Hash

time is O(n)
space is O(n)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumberUseHash = function(nums) {
  let hash = {};
  for (const num of nums) {
    hash[num] = (hash[num] || 0) + 1;
  }

  for (const key in hash) {
    if (hash[key] === 1) {
      return key
    }
  }
};

/*
Approach Bitwise XOR

known that A ^ A = 0 and the XOR operator is commutative,
the solution will be very straightforward.
X ^ 0s = X

time is O(n)
space is O(1)
*/


var singleNumber = function(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i]
  }
}

console.log('singleNumber', singleNumber([2,2,3,2]))
//console.log('singleNumber', singleNumber([0,1,0,1,0,1,99]))

export {
  singleNumber,
  singleNumberUseHash
}
