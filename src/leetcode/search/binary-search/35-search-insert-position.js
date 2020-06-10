/*
Leetocode
35 Search insert position
easy
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:
Input: [1,3,5,6], 5
Output: 2

Example 2:
Input: [1,3,5,6], 2
Output: 1

Example 3:
Input: [1,3,5,6], 7
Output: 4

Example 4:
Input: [1,3,5,6], 0
Output: 0
*/

/*
Approach binary search

It seems it works with duplicate as well

Time Complexity: O(log n)
Space Complexity: O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor(left + (right - left)/2);
    if (target === nums[mid]) return mid;
    else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1
    }
  }

  if (target > nums[left]) left += 1;
  return left;
};

/*
Approach linear search (brute force)

It seems it works with duplicate as well

Time Complexity: O(n)
Space Complexity: O(1)
*/

var searchInsertLinearSearch = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) return i;
  }

  return nums.length;
}

export {
  searchInsert,
  searchInsertLinearSearch
}
