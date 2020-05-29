/*
  Leetcode
  540 Single element in sorted array
  medium

  You are given a sorted array consisting of only integers where every element appears exactly twice,
  except for one element which appears exactly once.
  Find this single element that appears only once.

  Example 1:
  Input: nums = [1,1,2,3,3,4,4,8,8]
  Output: 2

  Example 2:
  Input: nums = [3,3,7,7,10,11,11]
  Output: 10

  Note: Your solution should run in O(log n) time and O(1) space.

  Constraints:
  1 <= nums.length <= 10^5
  0 <= nums[i] <= 10^5
*/

// todo
// move to dictionares
// using binary search other this input
// condition even oder odd part of the array and exclude duplicates
//

/*
  Approach Brute force

  Intuition

  We can use a linear search to check every element in the array
  until we find the single element.

  Algorithm
  Starting with the first element, we iterate over every 2nd element,
  checking whether or not the next element is the same as the current.
  If it's not, then we know this must be the single element.

  If we get as far as the last element, we know that it must be the single element.
  We need to treat it as a special case after the loop,
  because otherwise we'll be going over the end of the array.
*/
var singleNonDuplicateBruteForce = function(nums) {
  for (let i = 1; i < nums.length; i += 2) {
    debugger
    if (nums[i] !== nums[i-1]) {
      return nums[i-1]
    }

  }
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  const len = nums.length;
  let restLen = 0;
  let left = 0;
  let right = len -1;
  let mid = Math.floor(left + (right - left))/2;

  //debugger
  //if ()
  // if (nums[mid] - 1 === nums[mid-1] && nums[mid]+1 === nums[mid+1]) {
  //   return nums[mid]
  // } else if (nums[mid -1] === nums[mid]) {
  //   restLen = mid - 1 - left;
  //   if (restLen % 2 !== 0) {
  //     left = mid -1
  //   } else {

  //   }
  // }
}

console.log('singleNonDuplicateBruteForce', singleNonDuplicateBruteForce([1,1,2,3,3,4,4,8,8]));
//console.log('singleNonDuplicate1', singleNonDuplicate([1,1,2,3,3]));

export {
  singleNonDuplicateBruteForce,
  singleNonDuplicate
}
