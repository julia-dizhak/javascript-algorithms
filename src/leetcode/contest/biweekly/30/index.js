/*
Leetcode Biweekly contest 30
11.07

https://leetcode.com/discuss/general-discussion/730487/biweekly-contest-30

rating 4038 / 8174

What i did wrong?
- keyboard speed to slow


*/

/*
Example 2:

Input: date = "6th Jun 1933"
Output: "1933-06-06"
Example 3:

Input: date = "26th May 1960"
Output: "1960-05-26"

test
"6th Jun 1933"
Output:
"1933-06-6"
Expected:
"1933-06-06"
*/
/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
  // const format1 = new Date(date);
  // format1.getMonth()
  //debugger
  var months = {
    'Jan' : '01',
    'Feb' : '02',
    'Mar' : '03',
    'Apr' : '04',
    'May' : '05',
    'Jun' : '06',
    'Jul' : '07',
    'Aug' : '08',
    'Sep' : '09',
    'Oct' : '10',
    'Nov' : '11',
    'Dec' : '12'
}

  const format = date.split(' ');
  const n = format.length;
  const year = format[n-1];
  const month = months[format[1]];
  let day = parseInt(format[0]);
  day = (day < 10) ? `0${day}` : day;


  const str = `${year}-${month}-${day}`;
  return str;

};
// input 2052-10-20
//console.log('reformatDate', reformatDate('6th Jun 1933'))

/*
5445. Range Sum of Sorted Subarray Sums
*/

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
  let result = [];
  let sum = 0;
  //let temp = 0;

  for (let i = 0; i < n; i++) {
    let temp = 0;
    for (let j = i; j < n; j++) {
      temp += nums[j];
      result.push(temp);
    }
  }

  result = result.sort((a, b) => a - b);
  result = result.slice(left-1, right);
  sum = result.reduce((acc, currentVal) => acc + currentVal);
  return sum
};

// console.log('result',rangeSum([1,2,3,4], 4, 1, 5))
// console.log('result',rangeSum([1,2,3,4], 4, 3, 4))
// console.log('result',rangeSum([1,2,3,4], 4, 1, 10))

/*
5446. Minimum Difference Between Largest and Smallest Value in Three Moves
Given an array nums, you are allowed to choose one element of nums and change
it by any value in one move.

Return the minimum difference between the largest and smallest value of nums after perfoming at most 3 moves.

Example 1:

Input: nums = [5,3,2,4]
Output: 0
Explanation: Change the array [5,3,2,4] to [2,2,2,2].
The difference between the maximum and minimum is 2-2 = 0.
Example 2:

Input: nums = [1,5,0,10,14]
Output: 1
Explanation: Change the array [1,5,0,10,14] to [1,1,0,1,1].
The difference between the maximum and minimum is 1-0 = 1.
Example 3:

Input: nums = [6,6,0,1,1,4,6]
Output: 2
Example 4:

Input: nums = [1,5,6,14,15]
Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var minDifference1 = function(nums) {
//   //debugger
//   let moves = 3;
//   nums = nums.sort((a, b) => a - b);
//   let minDifference = nums[nums.length - 1] - nums[0];

//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right && moves > 0) {
//     nums[right] = nums[left];
//     minDifference = Math.min(minDifference, nums[left+1] - nums[left])
//     right--;
//     moves--;
//   }

//   console.log('nums', nums)
//   return minDifference;
// };
var minDifference = function(nums) {
  //debugger
  let moves = 3;
  nums = nums.sort((a, b) => a - b);

  let left = 1
  while (moves > 0) {
    //debugger
    nums[left] = nums[left - 1];
    left++;
    moves--;
  }

  console.log('nums', nums)
  let minDifference = +Infinity;
  //debugger
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length - 1; j++) {
      if ( Math.abs(nums[i] - nums[j]) < minDifference) {
        minDifference = Math.abs(nums[i] - nums[j])
      }
    }
  }



  return minDifference;
};

// todo
// class Solution {
//   public int minDifference(int[] nums) {
//       int n=nums.length;
//       if(n<=4)
//           return 0;
//       Arrays.sort(nums);
//       int ans=Integer.MAX_VALUE;
//       for(int i=0,j=n-4;j<n;j++,i++)
//           ans=Math.min(ans,nums[j]-nums[i]);
//       return ans;
//   }
// }
// https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/discuss/730567/JavaC%2B%2BPython-Straight-Forward

console.log('minDifference', minDifference([5,3,2,4]))
console.log('minDifference', minDifference([1,5,0,10,14]))
// console.log('minDifference', minDifference([6,6,0,1,1,4,6]))

/*
Subsets

Difference between Subarray and Subset

A subarray is a slice from the array which is contiguous (i.e. occupy
consecutive positions) and inherently maintains the order of elements.
For example, the subarrays of the array
[1,2,3]
[1]
[1,2]
[1,2,3]
[2]
[2,3]
[3]

Please note that there are exactly n*(n + 1)/2  subarrays in an array of size n.
Also, there is no such thing as contiguous subarray. The prefix contiguous is
sometimes applied to make context more clear. So a contiguous subarray is
just an another name for a subarray.

A subset is any possible combination of the original set. The term subset is
often used for subsequence but this is wrong. A subsequence always maintain
the relative order of elements of the array (i.e. increasing index) but there
is no such restriction on a subset. For example,
[1,2,3]
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]

*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result = [[]];
  //debugger

  for (const num of nums) {
    let subsets = result.map(subset => subset.concat(num));
    for (const subset of subsets) {
      result.push(subset)
    }
  }

  // for (let i = 0; i < n; i++) {
  //   for (let j = i; j < n; j++) {
  //     //debugger
  //     subsets.push([nums[i]])
  //     subsets.push([nums[j+1]])

  //   }
  // }

  return result;
};

console.log('subsets', subsets([1,2,3]))

export {
  reformatDate,
  rangeSum,
  minDifference,
  subsets
}
