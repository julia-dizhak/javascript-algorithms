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
console.log('findMaxAverage', findMaxAverageBruteForce([1,12,-5,-6,50,3], 4));


/*
Approach Sliding window
Can we find a better solution? Do you see any inefficiency in the above approach?

Think about Kadans max contigiuos subarray

The inefficiency is that for any two consecutive subarrays of size ‘5’, the 
overlapping part (which will contain four elements) will be evaluated twice. 
For example, take the above-mentioned input:

As you can see, there are four overlapping elements between the subarray
(indexed from 0-4) and the subarray (indexed from 1-5). Can we somehow reuse the
sum we have calculated for the overlapping elements?

The efficient way to solve this problem would be to visualize each contiguous 
subarray as a sliding window of ‘5’ elements. This means that when we move on to 
the next subarray, we will slide the window by one element. So, to reuse the sum 
from the previous subarray, we will subtract the element going out of the window 
and add the element now being included in the sliding window. This will save us 
from going through the whole subarray to find the sum and, as a result, the 
algorithm complexity will reduce to O(N)

Time is O(n)
*/

function findAverages(K, arr) {
  const n = arr.length;
  let result = [];
  let windowSum = 0.0, windowStart = 0;

  for (let windowEnd = 0; windowEnd < n; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element;
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (windowEnd >= K - 1) {
      result.push(windowSum / K); // calculate average
      // subtract the element going out
      windowSum -= arr[windowStart];
      // slide the window ahead
      windowStart += 1; 
    }
  }

  console.log('result', result);
  return result;
}

//console.log('findAverage', findAveragesOfSubarrays(4, [1, 2, 3, 4]));
console.log('findAverage', findAverages(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]));


export {
  findMaxAverageBruteForce,
  //findAverages
}