/*
Leetcode
229 Majority element II
medium

Given an integer array of size n,
find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:
Input: [3,2,3]
Output: [3]

Example 2:
Input: [1,1,1,3,3,2,2,2]
Output: [1,2]


Hint
How many majority elements could it possibly have?
Do you have a better hint? Suggest it!
*/

// todo approach moore
// check a test
// https://leetcode.com/problems/majority-element-ii/discuss/63520/boyer-moore-majority-vote-algorithm-and-my-elaboration
// https://gregable.com/2013/10/majority-vote-algorithm-find-majority.html

/*
Approach use hash(objects)
easiest way

time is O(n)
space is O(n)
*/
/**
 * @param {number[]} nums
 * @return {number[]}
*/
var majorityElementUseHash = function(nums) {
  if (nums.length === 0) return -1;
  var hash = {};
  var res = [];

  if (nums.length === 0) {
    return [];
  }

  if (nums.length === 1) {
    return nums[0];
  }

  for (const num of nums) {
    hash[num] = (hash[num] || 0) + 1
  }

  for (let key in hash) {
    if (hash[key] > nums.length/3) res.push(Number(key));
  };

  return res;
};

export {
  majorityElementUseHash
}
