/*
Leetcode
41 First missing positive
hard

Given an unsorted integer array, find the smallest missing positive integer.

Example 1: Input: [1,2,0] Output: 3
Example 2: Input: [3,4,-1,1] Output: 2
Example 3: Input: [7,8,9,11,12] Output: 1

Follow up
Your algorithm should run in O(n) time and uses constant extra space

Hint 1
Think about how you would solve the problem in non-constant space. 
Can you apply that logic to the existing space?

Hint 2 
We don't care about duplicates or non-positive integers

Hint 3
Remember that O(2n) = O(n)

*/


/*
Approach Use hash

They are looking for the first positive integer, of ALL positive integers, that 
does not exist in the given array.
This implies that the first missing number can be in range from 1 to N (size of 
the input).
Now we only have to figure out which one is the first in the sequence that is 
not present in the array.

Time is O(n)
Space is O(n) here while creating a hashmap.
*/

/**
 * @param {number[]} nums
 * @return {number}
*/
var firstMissingPositiveUseHash = function(nums) {
  let hash = {};
  let max = 0;

  // or
  // nums.map(item => {
  //   hash[item] ? hash[item]++ : hash[item] = 1;
  //   max = Math.max(max, item);
  // });

  for (const num of nums) {
    // hash[num] = (hash[num] || 0) + 1;
    hash[num] ? hash[num]++ : hash[num] = 1;
    max = Math.max(max, num);
  }
  //console.log('max');
  if (max <= 0) return 1; 

  for (let i = 1; i <= max + 1; i++) {
    if (!hash[i]) return i;
  }
}

/*
Approach Use Array

Solution
Create a new array of input size, with all values set to -1.

For each value in the original array, set newArray[value - 1] to 1, if the value 
is within the 1 - N range.

Now we go through the new array and look for the first -1 value. The missing 
number is index + 1, since we are looking only for positive numbers and we start count from 1, while index is zero based.

time is O(n)
space is O(n)
*/
var firstMissingPositiveUseArr = function(nums) {
  const n = nums.length;
  let arr = new Array(n).fill(-1); // Init array with same size to all -1s
  for (let i = 0; i < n; i++) {
    //console.log('nums[i]', nums[i])
    if (nums[i] > 0 && nums[i] <= n) {
      arr[nums[i] - 1] = 1; // Set numbers at indices to positive
    }
  }

  //console.log('arr', arr);

  // First that has value -1 is the missing one
  for (let i = 0; i < n; i++) {
    if (arr[i] === -1) return i + 1;
  }

  return n + 1;
}

// Approach Use Array
var firstMissingPositiveUseArr1 = function(nums) {
  let minPositive = Number.MAX_SAFE_INTEGER;
  let maxPositive = 1;

  const n = nums.length;
  let arr = new Array(n); 

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      if (nums[i] < minPositive) minPositive = nums[i];
      if (nums[i] > maxPositive) maxPositive = nums[i];
      arr[nums[i]] = true;
    }
  }

  if (minPositive > 1) return 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === undefined) return i;
  }

  return maxPositive + 1;
}

/*
todo Approach constant space
https://leetcode.com/discuss/explore/september-leetcoding-challenge/871646/First-Missing-Positive-or-C%2B%2B-Two-Solutions-O(N)-Time-100
https://leetcode.com/problems/first-missing-positive/discuss/17071/My-short-c%2B%2B-solution-O(1)-space-and-O(n)-time

*/

// var firstMissingPositive = function(nums) {

// }

// tests
//console.log('firstMissingPositive', firstMissingPositiveUseArr1([1,3]));
//console.log('firstMissingPositive', firstMissingPositiveUseArr1([1,2,0]));
// console.log('firstMissingPositive', firstMissingPositiveUseArr1([7,8,9,11,12]))
// console.log('firstMissingPositive', firstMissingPositiveUseHash([3,4,-1,1]))
// console.log('firstMissingPositive', firstMissingPositiveUseHash([-2,-1,-3, -5]))

export {
  firstMissingPositiveUseHash,
  firstMissingPositiveUseArr,
  firstMissingPositiveUseArr1
}
