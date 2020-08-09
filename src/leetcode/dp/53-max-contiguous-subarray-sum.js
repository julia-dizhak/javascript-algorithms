//DP move to DP?
/**
 * Leetcode
 * 53 Maximum subarray
 * easy
 *
 * Given an integer array nums, find the contiguous subarray
 * (containing at least one number) which has the largest sum
 * and return its sum.
 *
 * Example:
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * If you have figured out the O(n) solution,
 * try coding another solution using the divide and conquer approach,
 * which is more subtle.
 *
 * Explanation:
 * input: Each number in the input array A could be positive, negative, or zero.[1]
 *
 * Some properties of this problem are:
 * 1 If the array contains all non-negative numbers, then the problem is trivial; a maximum subarray is the entire array.
 * 2 If the array contains all non-positive numbers, then a solution is any subarray of size 1 containing the maximal value of the array (or the empty subarray, if it is permitted)
 * 3 Several different sub-arrays may have the same maximum sum
 */

/*
Approach Brute Force cubic time

We will use these outer 2 for loops to investigate all windows of the array.

We plant at each 'left' value and explore every 'right' value from that 'left'
planting. These are our bounds for the window we will investigate.

Cubic solution will calculate sum of first subarray and
then going all way back to the left bound and calculate the sum of second subarray.

Do you see a problem here?
Whenever yo wanna optimize an algorithm think about BUD =
Bottlenecks
Unnecessary Work
Duplicate Work

We are doing duplicate work here and we can optimize it with eliminate inner most
loop, because we already know the subarray of previous window and we don't need
to calculate it again. See below.

time is O(n^3)
space O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
*/
var maxSubArrayBruteForceCubicTime = function(nums) {
  const len = nums.length;
  let maxSubArraySum = -Infinity;

  for (let left = 0; left < len; left++) {
    for (let right = left; right < len; right++) {
      // let's investigate this window
      let windowSum = 0;

      // add all items in the window
      for (let k = left; k <= right; k++) {
        windowSum += nums[k]

      }
      // Did we beat the best sum seen so far?
      if (windowSum > maxSubArraySum) maxSubArraySum = windowSum;
      // or maximumSubArraySum = Math.max(maximumSubArraySum, windowSum);
    }
  }

  return maxSubArraySum;
};

/*
Approach Brute Force quadratic time

The optimization is next, we don't need to make a duplicate work,
we already know the sum of previous window.
So we just need to add next element to previous sum = just add one item.

complexity time is O(n^2) because we eliminate inner most loop
*/
var maxSubArrayBruteForce = function(nums) {
  const len = nums.length;
  if (len === 1) return nums[0];

  let maximumSubArraySum = -Infinity;


  for (let left = 0; left < len; left++) {
    /*
      Reset our running window sum once we choose a new
      left bound to plant at. We then keep a new running
      window sum.
    */
    let runningWindowSum = 0;

    /*
      We improve by noticing we are performing duplicate
      work. When we know the sum of the subarray from
      0 to right - 1... why would we recompute the sum
      for the subarray from 0 to right?
      This is unnecessary. We just add on the item at
      nums[right].
    */
    for (let right = left; right < len; right++) {
      // We factor in the item at the right bound
      runningWindowSum += nums[right];

      // Does this window beat the best sum we have seen so far?
      maximumSubArraySum = Math.max(maximumSubArraySum, runningWindowSum);
    }
  }

  return maximumSubArraySum
}

/*
  Approach 3 Dynamic programming (Kadane's algorithm)

  linear time O(n)
*/
//console.log(maxSubArrayBruteForce([-2,1,-3,4,-1,2,1,-5,4]))
//console.log(maxSubArrayBruteForce([-2,1,-3]))

// https://github.com/bephrem1/backtobackswe/blob/master/Dynamic%20Programming%2C%20Recursion%2C%20%26%20Backtracking/MaxContiguousSubarraySum/LinearTime.java
// https://leetcode.com/problems/maximum-subarray/discuss/20193/DP-solution-and-some-thoughts

export {
  maxSubArrayBruteForceCubicTime,
  maxSubArrayBruteForce
}
