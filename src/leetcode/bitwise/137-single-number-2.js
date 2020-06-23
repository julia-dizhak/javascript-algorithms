/*
Leetcode
137 Single Number II
Given a non-empty array of integers, every element appears three times except
for one, which appears exactly once. Find that single one.

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

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber1 = function(nums) {
  let hash = {};
  for (const num of nums) {
    hash[num] = (hash[num] || 0) + 1;
  }

  for (const key in hash) {
    if (hash[key] === 1) {
      return key
    }
  }

  //console.log('hash', hash);
};

var singleNumber = function(nums) {
  const n = nums.length;
  let i = 0;
  let j = 0;

  let count = 0;


  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i+1]) {
      return nums[i+1]
    }

  }
}

/*
Approach
xor
*/

// public int singleNumber(int[] nums)

// {

//     int result = 0;

//     for (int value: nums)

//     {

//         result ^= value;

//     }

//     return result;

// }

// 2^2^1=1
// 4^1^2^1^2=4

// xor is a great hint here


//console.log('singleNumber', singleNumber([2,2,3,2]))
console.log('singleNumber', singleNumber([0,1,0,1,0,1,99]))
