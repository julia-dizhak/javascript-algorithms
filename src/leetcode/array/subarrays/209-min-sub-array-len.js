/* 
Leetcode 
209 Minimum Size Subarray Sum
medium

Given an array of n positive integers and a positive integer s, find the minimal 
length of a contiguous subarray of which the sum ≥ s. If there isn't one, 
return 0 instead.

Example: 
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.

Follow up:
If you have figured out the O(n) solution, try coding another solution of which 
the time complexity is O(n log n). 

*/

/*
Approach brute force

what is the smallest subarray means? size or sum

FATAL ERROR: Scavenger: semi-space copy Allocation failed - JavaScript heap out 
of memory

time is O(n^2)
*/
var minSubArrayLen1 = function(s, nums) {
  const n = nums.length;
  let res = [];
  let minLength = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    for (let j = i+1; j <= n; j++) {
      res.push(nums.slice(i,j));
    }
  }

  let len = 0;
  res.map(item => {
    //console.log('item',item);
    let sum = item.reduce((acc, currentVal) => acc + currentVal, 0);
    if (sum >= s) {
      len = item.length;
      if (len < minLength) minLength = len;
    } 
  });

  return len > 0 ? minLength : 0;
};

/*
Approach Shrink Sliding window

Sliding Window pattern: Sliding window size is not fixed.

In some problems, the size of the sliding window is not fixed. We have to expand 
or shrink the window based on the problem constraints.

Problem statement 
Given an array of positive numbers and a positive number ‘S’, find the length 
of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. 
Return 0, if no such subarray exists.

minSubArrayLen(7, [2, 1, 5, 2, 3, 2])

This problem follows the Sliding Window pattern but in this problem, the size 
of the sliding window is not fixed. Here is how we will solve this problem:

- First, we will add-up elements from the beginning of the array until their sum 
becomes greater than or equal to ‘S’.

- These elements will constitute our sliding window. We are asked to find the 
smallest such window having a sum greater than or equal to ‘S’. We will remember 
the length of this window as the smallest window so far.

- After this, we will keep adding one element in the sliding window (i.e. slide 
the window ahead), in a stepwise fashion.

In each step, we will also try to shrink the window from the beginning. We will 
shrink the window until the window’s sum is smaller than ‘S’ again. This is needed 
as we intend to find the smallest window. This shrinking will also happen in 
multiple steps; in each step we will do two things:

- Check if the current window length is the smallest so far, and if so, remember 
its length.

- Subtract the first element of the window from the running sum to shrink the 
sliding window.

The time complexity of the above algorithm will be O(N). The outer for loop runs 
for all elements and the inner while loop processes each element only once, 
therefore the time complexity of the algorithm will be O(N+N) which is 
asymptotically equivalent to O(N).

The algorithm runs in constant space O(1).
*/
var minSubArrayLen = function(s, nums) {
  const n = nums.length;
  
  let windowSum = 0;
  let minLength = Infinity;
  let start = 0;
  for (let end = 0; end < n; end++) {
    windowSum += nums[end]; // add the next element
    // shrink the window as small as possible until the 'window_sum' is smaller than 's'
    while (windowSum >= s) {
      minLength = Math.min(minLength, end - start + 1);
      windowSum -= nums[start];
      start++;
    }
  }

  if (minLength === Infinity) return 0;

  return minLength;
}

// tests
console.log('minSubArrayLen', minSubArrayLen(6, [1,2,3]));
//console.log('minSubArrayLen', minSubArrayLen(7, [1,2,3]));
// console.log('minSubArrayLen', minSubArrayLen(7, [2, 1, 5, 2, 3, 2]));
// console.log('minSubArrayLen', minSubArrayLen(7, [2, 1, 5, 2, 8]));
// console.log('minSubArrayLen', minSubArrayLen(8, [3, 4, 1, 1, 6]));


export {
  minSubArrayLen,
  minSubArrayLen1
}