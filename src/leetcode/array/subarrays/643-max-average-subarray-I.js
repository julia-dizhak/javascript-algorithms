/*
Leetcode
643 Maximum Average Subarray I
easy

Given an array consisting of n integers, find the contiguous subarray of given 
length k that has the maximum average value. And you need to output the maximum 
average value.

Example 1:
Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12 - 5 - 6 + 50)/4 = 51/4 = 12.75

Note:
1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000].
*/


/*
Approach brute force
(solution was accepted on Leetcode)

Here, we are asked to find the average of all contiguous subarrays of size ‘5’ 
in the given array. Let’s solve this:

For the first 5 numbers (subarray from index 0-4), the average is: 
(1+3+2+6-1)/5 => 2.2(1+3+2+6−1)/5=>2.2
The average of next 5 numbers (subarray from index 1-5) is: 
(3+2+6-1+4)/5 => 2.8(3+2+6−1+4)/5=>2.8
For the next 5 numbers (subarray from index 2-6), the average is: 
(2+6-1+4+1)/5 => 2.4(2+6−1+4+1)/5=>2.4
…
Here is the final output containing the averages of all contiguous subarrays of 
size 5: Output: [2.2, 2.8, 2.4, 3.6, 2.8]

A brute-force algorithm will be to calculate the sum of every 5-element contiguous 
subarray of the given array and divide the sum by ‘5’ to find the average. 

Time complexity: Since for every element of the input array, we are calculating 
the sum of its next ‘K’ elements, the time complexity of the above algorithm 
will be O(N*K) where ‘N’ is the number of elements in the input array.

space is O(1)
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverageBruteForce = function(nums, K) {
  const n = nums.length;
  if (n === 0) return 0;
  let result = [];

  // possible as well i <= n - K
  for (let i = 0; i < n - K + 1; i++) {
    // find sum of next 'K' elements
    let sum = 0.0;
    for (let j = i; j < i + K; j++) {
      sum += nums[j];
    }
    let average = sum / K;
    result.push(average);
  }

  return Math.max(...result);
}

/*
Approach Sliding window
Can we find a better solution? Do you see any inefficiency in the above approach?

Think about Kadans max contigiuos subarray

The inefficiency is that for any two consecutive subarrays of size ‘5’, the 
overlapping part (which will contain four elements) will be evaluated twice. 
Can we somehow reuse the sum we have calculated for the overlapping elements?

The efficient way to solve this problem would be to visualize each contiguous 
subarray as a sliding window of ‘5’ elements. This means that when we move on to 
the next subarray, we will slide the window by one element. So, to reuse the sum 
from the previous subarray, we will subtract the element going out of the window 
and add the element now being included in the sliding window. 

This will save us from going through the whole subarray to find the sum and, 
as a result, the algorithm complexity will reduce to O(N)

Time is O(n)
*/
function findMaxAverage(nums, K) {
  const n = nums.length;
  if (n === 0) return 0;

  let result = [];
  let windowSum = 0.0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < n; windowEnd++) {
    windowSum += nums[windowEnd]; // add the next element;
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (windowEnd >= K-1) {
      result.push(windowSum/K); // calculate average
      windowSum -= nums[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }

  //console.log('result', result);
  return Math.max(...result);
}

/* 
Approach sliding window (the same)

Typical Sliding window problem. The key to these types of problem is we first 
need to calculate our initial window, then build off that window by sliding it 
through our input. In this case we simply modify the sum and re-calculate the 
new average. Notice how we don't have to do an inner loop to calculate the sum 
at each window.

time is O(n)
space is O(1)
*/
function findMaxAverageUseSlidingWindow(nums, K) {
  const n = nums.length;
  if (n === 0) return 0;

  let left = 0;
  let right = K;
  let max = 0;
  let sum = 0;
  for (let i = 0;  i < K; i++) {
    sum += nums[i];  
  }

  let average = sum / K;
  max = average;

  while (right < n) {
    sum += nums[right];
    sum -= nums[left];
    average = sum / K;
    max = Math.max(max, average);
    left++;
    right++;
  }

  return max;
}

/*
Approach Cumulative sum

Algorithm
We know that in order to obtain the averages of subarrays with length k, we need 
to obtain the sum of these k length subarrays. One of the methods of obtaining 
this sum is to make use of a cumulative sum array, sum, which is populated only 
once. Here, sum[i] is used to store the sum of the elements of the given nums 
array from the first element upto the element at the ith index.

Once the sum array has been filled up, in order to find the sum of elements from 
the index i to i+k, all we need to do is to use: sum[i] - sum[i-k]. 
Thus, now, by doing one more iteration over the sum array, we can determine 
the maximum average possible from the subarrays of length kk.

The following animation illustrates the process for a simple example.
nums = 1 12 -5 -6 50 3  -30 25, k = 4
sum =  1 13  8  2 52 55 25  50
res = 2/4 = 0.5
res = max(0.5, (52 - 1)/4)) = 12.75
res = max(12.75, (55 - 13)/4)) = 12.75 
res = max(12.75, (25 - 8)/4)) = 12.75
res = max(12.75, (50 - 2)/4)) = 12.75
res = 12.75
*/
function findMaxAverageCumulativeSum(nums, k) {
  const n = nums.length;
  if (n === 0) return 0;

  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];  
  }
  let max = sum;
  for (let i = k; i < n; i++) {
    sum += nums[i] - nums[i - k];
    max = Math.max(max, sum);
  }

  return max / 1.0 / k;
  //return max / k;
}

// tests
//console.log('findAverages', findMaxAverage([1, 2, 3, 4], 4));
//console.log('findAverages', findMaxAverage([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
console.log('findMaxAverage', findMaxAverageCumulativeSum([1,12,-5,-6,50,3], 4));

export {
  findMaxAverageBruteForce,
  findMaxAverage,
  findMaxAverageUseSlidingWindow,
  findMaxAverageCumulativeSum
}