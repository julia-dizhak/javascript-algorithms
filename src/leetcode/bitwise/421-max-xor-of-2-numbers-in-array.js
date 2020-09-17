/*
Leetcode
421 Maximum xor of 2 numbers in array
medium

Given an integer array nums, return the maximum result of nums[i] XOR nums[j], 
where 0 ≤ i ≤ j < n.

Follow up: Could you do this in O(n) runtime?

Example 1:
Input: nums = [3,10,5,25,2,8]
Output: 28
Explanation: The maximum result is 5 XOR 25 = 28.

Example 2:
Input: nums = [0]
Output: 0

Example 3:
Input: nums = [2,4]
Output: 6

Example 4:
Input: nums = [8,10,2]
Output: 10

Example 5:
Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]
Output: 127

Constraints:
1 <= nums.length <= 2 * 104
0 <= nums[i] <= 231 - 1

*/

/* 
Approach 2 loops

time is n^2
*/
var findMaximumXOR1 = function(nums) {
  let max = 0;
  for (let item of nums) {
    for (let i=0; i < nums.length; i++){
      max = Math.max(max, item ^ nums[i]);
    }
  }
  return max;
};

/*
The same approach

time is n^2
time limit exceed
*/ 
var findMaximumXOR2 = function(nums) {
  const n = nums.length;
  if (n === 1) return nums[0];
  let output = [];

  for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
      let x = nums[i] ^ nums[j];
      output.push(x);
    }
  }

  return Math.max(...output);
}

/*
Approach Bit manipulation

Lets write a binary representation of each number
[3, 10, 5, 25, 2, 8]
3 -> 00011
10 -> 01010
5 -> 00101
25 -> 11001
2 -> 00010
8 -> 01000

0 ^ 0 = 0
*/
var findMaximumXOR = function(nums) {

}

export {
  findMaximumXOR1, 
  findMaximumXOR
}