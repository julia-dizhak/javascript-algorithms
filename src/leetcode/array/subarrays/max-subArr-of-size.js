
/*
Maximum Sum Subarray of Size K
Given an array of positive numbers and a positive number ‘k’, find the maximum 
sum of any contiguous subarray of size ‘k’.

*/

/*
Approach brute force

The time complexity of the above algorithm will be O(N∗K), where ‘N’ is the 
total number of elements in the given array. Is it possible to find a better 
algorithm than this?

*/
const maxSubArrayOfSize1 = function(k, arr) {
  const n = arr.length;
  let maxSum = 0;

  for (let i = 0; i < n - k + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    maxSum = Math.max(maxSum,sum);
  }

  return maxSum;
}

/*
Approach Sliding window

A better approach 
If you observe closely, you will realize that to calculate the sum of a 
contiguous subarray we can utilize the sum of the previous subarray. For this, 
consider each subarray as a Sliding Window of size ‘k’. To calculate the sum of
the next subarray, we need to slide the window ahead by one element. So to 
slide the window forward and calculate the sum of the new position of the 
sliding window, we need to do two things:

Subtract the element going out of the sliding window i.e., subtract the first 
element of the window.
Add the new element getting included in the sliding window i.e., the element 
coming right after the end of the window.

The time complexity of the above algorithm will be O(N).

The algorithm runs in constant space O(1).
*/

const maxSubArrayOfSize = function(k, arr) {
  const n = arr.length;

  let max = 0;
  let windowSum = 0;
  let start = 0;
  let res = [];
  for (let end = 0; end < n; end++) {
    windowSum += arr[end];
    // console.log(end);
    // console.log('widowSum', windowSum);
    if (end >= k - 1 ) {
      res.push(windowSum);
      windowSum -= arr[start];
      start++;
    }
  }

  return Math.max(...res);
}

// tests
// output 9
console.log('max', maxSubArrayOfSize(3, [2, 1, 5, 1, 3, 2]))
//console.log('max', maxSubArrayOfSize(2, [2, 3, 4, 1, 5]))
