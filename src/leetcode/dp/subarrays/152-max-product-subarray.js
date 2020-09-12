/*
Leetcode
152 Maximum product subarray
medium

Given an integer array nums, find the contiguous subarray within an array 
(containing at least one number) which has the largest product.

Example 1:
Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:
Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/


/*
Approach Brute force + Sliding window

time is o(n^3) TME
space is O(1)
*/
var maxProduct = function(nums) {
  const n = nums.length;
  if (n === 1) return nums[0];

  //let max = Number.NEGATIVE_INFINITY;
  let max = -Infinity;

  for (let left = 0; left < n; left++) {
    for (let right = left; right < n; right++) {
      let product = 1;     
      for (let k = left; k < right; k++) {
        product = product * nums[k];
        max = Math.max(product,max);
      }
    }
    
  }

  return max;
}

/*
the same Approach brute force

Find all contiguous sub arrays

time is o(n^3) TME
space is O(1)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct1 = function(nums) {
  const n = nums.length;
  if (n === 1) return nums[0];
  let subArrays = [];
    
  for (let i = 0; i < n; i++) {
    for (let j = i+1; j <= n; j++) {
      subArrays.push(nums.slice(i,j));
    }
  }
    
  let output = [];
  subArrays.map(arr => {
    let result = arr.reduce((acc, val) => acc * val, 1);
    output.push(result);
  });
  return Math.max(...output)
};

/*
Approach

time is O(n)
space is O(1)
*/

function swap(max, min) {
  let temp = max;
  max = min;
  min = temp;

  //return [max,min]
}

var maxProduct2 = function(nums) {
  debugger
  const n = nums.length;
  if (n === 1) return nums[0];
  // store the result that is the max we have found so far
  let max = nums[0];

  // maxSubArray/minSubarray stores the max/min product of
  // subarray that ends with the current number A[i]
  let maxSubArray = max;
  let minSubArray = max;   

  for (let i = 1; maxSubArray = max, minSubArray = max, i < n; i++) {
    // multiplied by a negative makes big number smaller, small number bigger
    // so we redefine the extremes by swapping them
    if (nums[i] < 0) {
      swap(maxSubArray, minSubArray);
    }   

    // max/min product for the current number is either the current number itself
    // or the max/min by the previous number times the current one
    maxSubArray = Math.max(nums[i], maxSubArray * nums[i]);
    minSubArray = Math.min(nums[i], minSubArray * nums[i]);

    // the newly computed max value is a candidate for our global result
    max = Math.max(max, maxSubArray);
  }

  return max;
};

console.log('maxProduct', maxProduct2([2,3,-2,4]))
//console.log('maxProduct2', maxProduct2([-2,0,-1]))

export {
  maxProduct, maxProduct1,
  maxProduct2
}