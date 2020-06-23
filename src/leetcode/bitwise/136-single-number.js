/*
Leetcode
136 Single Number

Given a non-empty array of integers, every element appears twice except for one.
Find that single one.

Note:
Your algorithm should have a linear runtime complexity.
Could you implement it without using extra memory?

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4
*/

/*
Approach hash
but then you need to use extra memory
*/

/*
Approach bit manipulation

known that A ^ A = 0 and the XOR operator is commutative,
the solution will be very straightforward.
X ^ 0s = X

This XOR operation works because it's like XORing all the numbers by itself.
So if the array is [2,1,4,5,2,4,1] then it will be like we are performing this
operation
((2^2)^(1^1)^(4^4)^(5)) => (0^0^0^5) => 5.

Hence picking the odd one out (5 in this case).

time is O(n)
space is O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i]
  }

  return result;
};

function singleNumberVariant2(nums) {
	return nums.reduce((prev, curr) => prev ^ curr, 0);
}

export {
  singleNumber,
  singleNumberVariant2
}
