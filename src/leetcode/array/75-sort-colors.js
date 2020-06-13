/*
Leetcode
75 Sort colors

Given an array with n objects colored red, white or blue,
sort them in-place so that objects of the same color are adjacent,
with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Follow up:
A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's,
then overwrite array with total number of 0's, then 1's and followed by 2's.

Could you come up with a one-pass algorithm using only constant space?
*/


/*
Approach 2 Pointers

The idea is to sweep all 0s to the left
and all 2s to the right,
then all 1s are left in the middle.

The situation when nums[index] === 2, it does not increment index.
Because if both index and end are 2,
when you swap them and increment the index, the first two will be missed.

It is hard to define what is a "one-pass" solution but this algorithm
is bounded by O(2n), meaning that at most each element will be seen and
operated twice (in the case of all 0s).
You may be able to write an algorithm which goes through the list only once,
but each step requires multiple operations,
leading the total operations larger than O(2n).

Time is O(n)
Space is O(1)
*/

var sortColors = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  let index = 0;

  while (index <= end) {
    if (nums[index] === 0) {
      // swap nums[index] and nums[start] and start, index both ++
      let temp = nums[index];
      nums[index] = nums[start];
      nums[start] = temp; // without temp can equal to 0;
      start++;
      index++;
    } else if (nums[index] === 2) {
      // swap nums[index] and nums[end] and end--;
      let temp = nums[index];
      nums[index] = nums[end];
      nums[end] = temp; // without temp can equal to 2
      end--;
    } else {
      index++;
    }
  }
}

/*
Approach first what was in my head

time is O(n)
space is O(1)
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColorsVariant2 = function(nums) {
  if (nums.length === 0 || nums.length === 1) return;

  let countRed = 0;
  let countWhite = 0;
  let countBlue = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) { countRed++ }
    if (nums[i] === 1) { countWhite++ }
    if (nums[i] === 2) { countBlue++ }
  }

  for (let i = 0; i < nums.length; i++) {
    if (countRed > 0) {
      nums[i] = 0;
      countRed--;
    } else if (countRed === 0 && countWhite > 0) {
      nums[i] = 1;
      countWhite--;
    }
    else {
      nums[i] = 2;
      countBlue--;
    }
  }
};

export {
  sortColors,
  sortColorsVariant2
}
