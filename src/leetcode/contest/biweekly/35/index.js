/*
Biweekly 35 19.09

3914 / 8750


*/


function test() {
  console.log('biweekly 35')
}

console.log('test', test());

/*
1 problem

subarrays
count i and j specifically
*/

var sumOddLengthSubarrays = function(arr) {
  const n = arr.length;
  let totalSum = 0;
  if (n === 1) {
    totalSum =  arr[1];
  } 
  let output = [];

  for (let i = 0; i < n; i++) {
    for (let j = i+1; j <= n; j += 2) {
      let res = arr.slice(i,j);
      console.log('res', res)
      let sum = res.reduce((acc, val) => acc + val, 0); 
      output.push(sum);
    }
  }

  console.log('output', output);
  totalSum = output.reduce((acc, val) => acc + val, 0); 
  return totalSum;
};
console.log('sum', sumOddLengthSubarrays([1]));
console.log('sum', sumOddLengthSubarrays([1,4,2,5,3]));
console.log('sum', sumOddLengthSubarrays([1,2]));
console.log('sum', sumOddLengthSubarrays([10,11,12]));

/*
permutations

FATAL ERROR: Scavenger: semi-space copy Allocation failed - JavaScript heap out of memory
*/
/**
 * @param {number[]} nums
 * @param {number[][]} requests
 * @return {number}
 */

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

var maxSumRangeQuery = function(nums, requests) {
  let output = [];
  if (nums.length === 1) output = nums;
  helper(nums, 0, output)
  
  console.log('output', output);
  
  let totalSum = 0;
  for (const permutation of output) {
    console.log('permutation', permutation);
    let requestSum = 0;
    for (const request of requests) {
      console.log('request', request);
      let [start, end] = request;
      let permute = permutation.slice(start, end+1);
      console.log(permute)
      let sum = permute.reduce((acc, val) => acc+val, 0);
      console.log('sum', sum);
      requestSum += sum;
    }
    console.log('requestSum', requestSum)
    if (requestSum > totalSum) totalSum = requestSum
  }
  console.log('totalSum', totalSum);

  //return totalSum % Math.pow(10,9) + 7; 
  return totalSum % (1e9 + 7);
};

function helper(nums, pos, res) {
  if (pos === nums.length) {
    res.push(nums.slice());
  } else {
    for (let i = pos; i < nums.length; i++) {
      swap(nums, i, pos);
      helper(nums, pos+1, res);
      swap(nums, i, pos); // reset
    }
  }
}

console.log('max', maxSumRangeQuery([1,2,3,4,5], [[1,3],[0,1]]));
//console.log('max', maxSumRangeQuery([1,2,3,4,5,6], [[0,1]]));
// console.log('max', maxSumRangeQuery([1,2,3,4,5,10], [[0,2],[1,3],[1,1]]));
// console.log('max', maxSumRangeQuery([2,5,3,0,3,5,0,2], [[0,2],[5,5],[1,5],[1,1],[4,4],[1,7],[3,6],[6,6]]));

/*
Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p. It is not allowed to remove the whole array.

Return the length of the smallest subarray that you need to remove, or -1 if it's impossible.

A subarray is defined as a contiguous block of elements in the array.

Input: nums = [6,3,5,2], p = 9
Output: 2
Explanation: We cannot remove a single element to get a sum divisible by 9. 
The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.

*/
var minSubarray = function(nums, p) {
  let sum = nums.reduce((acc, val) => acc+val, 0);
  if (sum < p) return -1;
  let remain = sum % p;
  console.log('remain', remain);
  if ( remain === 0) return 0;

  // subarray
  let subArrays = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      subArrays.push(nums.slice(i,j))
    }
  }
  console.log('subArrays', subArrays);
  

  // while (remain > 0) {
  //   let t = nums.filter(item => item === remain);
  // }



  console.log('sum', sum);
    
};

//console.log('minSubarray', minSubarray([1,2,3], 7));
console.log('minSubarray', minSubarray([3,1,4,2], 6));
//console.log('minSubarray', minSubarray([1,2,3], 6));

export {
  test
}