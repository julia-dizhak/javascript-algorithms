/*
Leetcode
368 Largest divisible subset
medium

*/

/*

1. Sort
2. Find the length of longest subset
3. Record the largest element of it.
4. Do a loop from the largest element to nums[0], add every element belongs to the longest subset.

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var largestDivisibleSubset = function(nums) {
  let result = [];
  if (nums === null || nums.length === 0) return result;
  nums = nums.sort((a,b) => a - b); // asc order?

  let dp = new Array(nums.length);
  dp[0] = 1;

  // for each element in nums, find the length of largest subset it has.

}

console.log('largestDivisibleSubset', largestDivisibleSubset([1,2,3]))
