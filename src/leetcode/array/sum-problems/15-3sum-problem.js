// 3 sum



// 3 sum closest
// 2 sum sorted

/*
Leetcode
15 3Sum
medium

Given an array nums of n integers, are there elements a, b, c
in nums such that a + b + c = 0?
Find all unique triplets in the array which gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.

Example:
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

Hint 1
*/

/*
Princeton

3-SUM. Given N distinct integers, how many triples sum to exactly zero?
Context. Deeply related to problems in computational geometry.
*/

/*
todo
sorted

video
https://www.youtube.com/watch?v=qJSPYnS35SE


*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // use sort
  nums = nums.sort((a, b) => a - b);
  let result = [];

  // we have to chance to look at the 2 last numbers
  for (let i = 0; i < nums.length - 2; i++) {
    // skip duplicates
    if (i === 0 || (i > 0 && nums[i] !== nums[i-1])) {
      // next index
      let lo = i + 1
      let hi = nums.length - 1;
      let sum = 0 - nums[i];
      while (lo < hi) {
        if (nums[lo] + nums[hi] === sum) {
          result.push([nums[i], nums[lo], nums[hi]]);
          while(lo < hi && nums[lo] === nums[lo+1]) lo++;
          while(lo < hi && nums[hi] === nums[hi-1]) hi--;
          lo++;
          hi--;
        } else if (nums[lo] + nums[hi] > sum) {
          hi--;
        } else {
          lo++;
        }
      }
    }
  }

  return result

};

// nums =  [-4, -1, -1, 0, 1 , 2 ]
console.log('threeSum', threeSum([-1, 0, 1, 2, -1, -4]));

/*
Interview Questions: Analysis of Algorithm
3-SUM in quadratic time. Design an algorithm for the 3-SUM problem that takes
time proportional to n^2
in the worst case. You may assume that you can sort the n integers
in time proportional to n^2n or better.

Note: these interview questions are ungraded and purely for your own enrichment.
To get a hint, submit a solution.

answer?
https://www.coursera.org/learn/algorithms-part1/discussions/weeks/1/threads/xNMKv2ehEeeIegp6BprSRg
*/

export {
  threeSum
}
