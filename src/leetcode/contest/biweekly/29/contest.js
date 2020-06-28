/*
Leetcode Biweekly contest 29




*/

// https://leetcode.com/discuss/general-discussion/708052/biweekly-contest-29
// video https://www.youtube.com/watch?v=DryjFN0w-lE

/*
Given an array of unique integers salary where salary[i] is the salary
of the employee i.

Return the average salary of employees excluding the minimum and maximum salary.

Constraints:

3 <= salary.length <= 100
10^3 <= salary[i] <= 10^6
salary[i] is unique.
Answers within 10^-5 of the actual value will be accepted as correct.
 */


/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  salary = salary.sort((a,b) => b - a);
  let sum = sum - salary[0] - salary[salary.length - 1]
  //sum / length - 2
  // salary.pop();
  // salary.shift()
  const len = salary.length;

  // const sum = salary.reduce((acc, currentVal) => {
  //   return acc + currentVal
  // }, 0);


  const average = (sum/len).toFixed(5)

  return average
};

  //debugger
  // todo toFixed
//   numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0)

// console.log(average([4000,3000,1000,2000]))
// console.log(average([8000,9000,2000,3000,6000,1000]))
// Expected:
//41111.11111
//console.log(average([48000,59000,99000,13000,78000,45000,31000,17000,39000,37000,93000,77000,33000,28000,4000,54000,67000,6000,1000,11000]))
//console.log(average([71000,46000,90000,64000,11000,45000,15000,60000,72000,97000,1000,87000,96000,94000,83000,5000,89000]))
//Output: 61866.66670
// expected 61866.66667


/*
Given two positive integers n and k.

A factor of an integer n is defined as an integer i where n % i == 0.

Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.

 Example
 Input: n = 12, k = 3
Output: 3
Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3
*/

// https://leetcode.com/problems/the-kth-factor-of-n/
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
  // todo
  let result = Array.from(Array(n), (_, i) => i + 1);
  let result1 = []
  // in-place
  for (let i = 0; i < result.length; i++) {
    //debugger
    if (n % result[i] === 0) {
      result1.push(result[i])
    }
  }

  if (result1.length < k) {
    return -1
  }

  return result1[k-1]
};

// console.log('kthFactor', kthFactor(12, 3))
// console.log('kthFactor', kthFactor(7, 2))
// console.log('kthFactor', kthFactor(4, 4))


/*
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array.

Return 0 if there is no such subarray.

Example 1:

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
Example 2:

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
Example 3:

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
Example 4:

Input: nums = [1,1,0,0,1,1,1,0,1]
Output: 4
Example 5:

Input: nums = [0,0,0]
Output: 0

related 53

https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/discuss/377397/Intuitive-Java-Solution-With-Explanation

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestSubarray = function(nums) {
//   const hash = {};
//   let result = 0;

//   for (const num of nums) {
//     hash[num] = (hash[num] || 0) + 1;
//     //if (hash[num] === 1) result++
//   }

//   for (const key in hash) {
//     //debugger
//     if (Number(key) === 1) {
//       result = hash[key]
//     }
//   }

//   console.log('hash', hash)
//   return result
// };

// https://leetcode.com/problems/maximum-subarray/discuss/20193/DP-solution-and-some-thoughts
// Maximum sum subarray removing at most one element
// https://tutorialspoint.dev/algorithm/dynamic-programming-algorithms/maximum-sum-subarray-removing-one-element
var longestSubarray = function(nums) {
  //debugger
  const n = nums.length;
  let forward = [];
  let backword = new Array(n-1).fill(0);

  // Initialize current max and max so far.
  let curMax = nums[0], maxSofar = nums[0];

  // calculating maximum sum subarrays in forward
  // direction
  forward[0] = nums[0];

  for (let i = 1; i < n; i++) {
    curMax = Math.max(nums[i], curMax + nums[i]);
    maxSofar = Math.max(maxSofar, curMax);

    // storing current maximum till ith, in
    // forward array
    forward[i] = curMax

  }

  // calculating maximum sum subarrays in backward
  // direction

  curMax = maxSofar = backword[n-1] = nums[n-1];

  for (let i = n-2; i > 0; i--) {
    curMax = Math.max(nums[i], curMax + nums[i]);
    maxSofar = Math.max(maxSofar, curMax);

    // storing current maximum from ith, in
            // backward array
    backword[i] = curMax
  }

  /* Initializing final ans by max_so_far so that,
        case when no element is removed to get max sum
        subarray is also handled */
  let fans = maxSofar;
  // choosing maximum ignoring ith element
  for (let i = 0; i < n - 1; i++) {
    fans = Math.max(fans, forward[i - 1] + backword[i + 1]);
  }

  return fans;



  // contains only 1 return -1
  // const n = nums.length;
  // let dp = new Array(n); //dp[i] means the maximum subarray ending with A[i];
  // dp[0] = nums[0];
  // let max = dp[0];

  // for (let i = 1; i < n; i++) {
  //   dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i-1] : 0);
  //   max = Math.max(max, dp[i])
  // }

  // return max
};

// console.log('longestSubarray', longestSubarray([1,1,0,1]))
// console.log('longestSubarray', longestSubarray([0,1,1,1,0,1,1,0,1]))
//console.log('longestSubarray', longestSubarray([0,1,1,1,0,1,1,0,1]))


/*
Given the integer n representing the number of courses at some university labeled from 1 to n, and the array dependencies where dependencies[i] = [xi, yi]  represents a prerequisite relationship, that is, the course xi must be taken before the course yi.  Also, you are given the integer k.

In one semester you can take at most k courses as long as you have taken all the prerequisites for the courses you are taking.

Return the minimum number of semesters to take all courses. It is guaranteed that you can take all courses in some way.
*/
export {
  average,
  kthFactor,
  longestSubarray
}
