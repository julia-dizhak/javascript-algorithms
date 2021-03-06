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
Approach Store prev max and min

The intuition is that we store the information about our previous maximum product, 
and as we iterate through the array, we keep using our previous maximum to calculate 
the new maximum product.

The tricky part of this problem is that negative numbers exist in the input array. 
This causes situations where the smallest previous product (a negative number) 
can become the largest product if the next number in line is also a negative number.
So that's the intuition behind the question - you must keep hope on both the positive 
and negative side.
And in some cases, maybe the current number is the best you'll ever get.

Since the minimum product may have a chance to become the maximum, we need to store 
the information about the previous minimum as well and take it into account when 
we are calculating our maximum product.

time is O(n)
space is O(1)
*/

var maxProduct2 = function(nums) {
  const n = nums.length;
  if (n === 1) return nums[0];
  // store the results we have found so far
  let prevMax = nums[0];
  let prevMin = nums[0];
  let maxSoFar = nums[0];

  for (let i = 1; i < n; i++) {
    // given the new number, the new max can have 3 conditions
    // 1. number(+) * prevMax(+) is the largest
    // 2. number(+) it self is the largest
    // 3. number(-) * prevMin(-) is the largest 
    let curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
    let curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

    // updating the prevMax & prevMin, these two may swap locations
    // max and min could have swapped
    prevMax = Math.max(curMax, curMin);
    prevMin = Math.min(curMax, curMin);
    
    maxSoFar = Math.max(maxSoFar, prevMax);
  }

  return maxSoFar;
};

/*
Approach DP

time is O(n)
space is O(1)
*/
let maxProductUseDP = function(nums) {
  const n = nums.length;
  if (n === 1) return nums[0];

  let prevMax = nums[0];
  let prevMin = nums[0];
  let max = nums[0];

  for (let i = 1; i < n; i++) {
    let curMax = Math.max(nums[i] * prevMax, Math.max(nums[i], nums[i] * prevMin));
    let curMin = Math.min(nums[i] * prevMin, Math.min(nums[i], nums[i] * prevMax));

    prevMax = curMax;
    prevMin = curMin;
    max = Math.max(max, curMax);
  }

  return max;
}

// /*
// Approach DP

// time is O(n)
// space is O(n)
// */

// let maxProductUseDP1= function(nums) {
//   const n = nums.length;
//   if (n === 1) return nums[0];



// }

// tests
// console.log('maxProduct', maxProductUseDP1([2,3,-2,4]))
// console.log('maxProduct', maxProductUseDP1([-2,0,-1]))

export {
  maxProduct, maxProduct1,
  maxProduct2,
  maxProductUseDP
}