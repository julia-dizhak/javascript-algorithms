/*
  Leetcode
  26 Remove duplicates from sorted array
  easy

  Given a sorted array nums, remove the duplicates in-place
  such that each element appear only once and return the new length.

  Do not allocate extra space for another array,
  you must do this by modifying the input array in-place with O(1) extra memory.

  Example 1:
  Given nums = [1,1,2],
  Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
  It doesn't matter what you leave beyond the returned length.

  Example 2:
  Given nums = [0,0,1,1,1,2,2,3,3,4],

  Your function should return length = 5, with the first five elements of nums being modified
  to 0, 1, 2, 3, and 4 respectively.
  It doesn't matter what values are set beyond the returned length.

  Clarification:

  Confused why the returned value is an integer but your answer is an array?
  Note that the input array is passed in by reference,
  which means modification to the input array will be known to the caller as well.

  Internally you can think of this:
  // nums is passed in by reference. (i.e., without making a copy)
  int len = removeDuplicates(nums);

  // any modification to nums in your function would be known by the caller.
  // using the length returned by your function, it prints the first len elements.
  for (int i = 0; i < len; i++) {
      print(nums[i]);
  }

  Hint 1
  In this problem, the key point to focus on is the input array being sorted.
  As far as duplicate elements are concerned, what is their positioning in the array
  when the given array is sorted? Look at the image above for the answer.
  1 1 2 3 4 4 4
  If we know the position of one of the elements,
  do we also know the positioning of all the duplicate elements?

  Hint 2
  We need to modify the array in-place and the size of the final array would potentially be smaller than the size of the input array.
  So, we ought to use a two-pointer approach here.
  One, that would keep track of the current element in the original array
  and another one for just the unique elements.

  Hint 3
  Essentially, once an element is encountered, you simply need to bypass its duplicates
  and move on to the next unique element.
*/

/*
  Easy solution but doesn't required condition:
  Do not allocate extra space for another array,
  you must do this by modifying the input array in-place with O(1) extra memory.
  There is extra space.
*/
var removeDuplicates = function(nums) {
  let uniqueArr = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i+1]) {
      uniqueArr.push(nums[i])
    }
  }

  return uniqueArr.length
};

/*
  Approach 2 Pointers: slow and fast runner

  Algorithm
  Since the array is already sorted, we can keep two pointers i and j,
  where i is the slow-runner while j is the fast-runner.
  As long as nums[i] = nums[j], we increment j to skip the duplicate.

  When we encounter nums[j] is not equal nums[i]
  the duplicate run has ended so we must copy its value to nums[i+1].
  i is then incremented and we repeat the same process again until j reaches the end of array.

  Complexity analysis
  Time complexity: O(n). Assume that nn is the length of array.
  Each of i and j traverses at most n steps.

  Space complexity: O(1).
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesTwoPointers = function(nums) {
  if (nums === undefined || nums.length === 0) {
    return -1;
  }

  if (nums.length === 1) {
    return nums.length;
  }

  // 2 pointers approach
  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    // if current element is not duplicate,
    // slow runner grows one step and copys the current value
    if (nums[slow] !== nums[fast]) {
      slow += 1;
      nums[slow] = nums[fast]
    }
  }

  return slow + 1;
};

// tests
// console.log('removeDuplicatesTwoPointers', removeDuplicatesTwoPointers([0,0,1,1,1,2,2,3,3,4]))

export {
  removeDuplicates,
  removeDuplicatesTwoPointers
}
