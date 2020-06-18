/*

Q. Are numbers are integer?
Q. Could numbers be negative?

Intuition
youtube google https://www.youtube.com/watch?v=XKu_SEDAykw
3-44
Q. Are numbers are integer?
Q. Could numbers be negative?

Simplest solution to compare every possible pair
I could just have 2 For loops.
One scanning a whole thing from i and the second one
starting from j = i+1

two sum with duplicates
 expect(twoSumSorted([1, 2, 4, 4], 8)).toEqual([2, 3]);
*/


/*

Leetcode
167
easy

Given an array of integers that is already sorted in ascending order,
find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers
such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution
and you may not use the same element twice.
Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

todo
1 Take an arr
2 sort all the items
3 just do a binary search there

follow up design two sum data structure
*/

// todo
// 2 pointers
// can use the same approach as with hash, space is O(n)

// todo check
function findValue(nums, target, start = 0, end = nums.length - 1) {
  while (start <= end) {
    let mid = Math.floor(start + (end - start)/2);
    if (target === nums[mid]) return mid;
    else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return (start === end && nums[start] === target) ? start : -1;
}

function twoSumBinarySearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    // bsRecursive(arr, target, start, end)
    // todo rename stop to end
    const j = findValue(arr, complement, i+1, arr.length);
    if (j !== -1) {
      return [i+1, j+1]
    }
  }
  throw new Error('No two sum solution')
}

//console.log('twoSumBinarySearch', twoSumBinarySearch([2,7,11,15], 9))
//twoSumBinarySearch([2, 7, 11, 15], 9);
//twoSumBinarySearch([2,3,4,3,6,7], 6);

/*
Approach 2 pointers

Let’s assume we have two indices pointing to the i-th and j-th elements,
Ai and Aj respectively. The sum of Ai and Aj could only fall into one of these three possibilities:

1. Ai + Aj > target. Increasing i isn’t going to help us, as it makes the sum even
bigger. Therefore we should decrement j.

2. Ai + Aj < target. Decreasing j isn’t going to help us, as it makes the sum even
smaller. Therefore we should increment i.

3. Ai + Aj == target. We have found the answer.

*/

// [2,7,11,15], sum is 9
// 2 + 15  - 1 iteration
// 2 + 11 - 2
// 2 + 7
function twoSumTwoPointers(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      // becasue the indexes are not zero base, check thorugh leetcode
      //return [left+1, right+1]
      return [left, right]
    }
  }

  throw new Error('No two sum solution')
}

//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/discuss/51287/JavaScript-simple-solution
// var twoSumTwoPointers = function(numbers, target) {
//   var l=numbers.length, i=0, j=l-1;
//   while (numbers[i]+numbers[j] !== target) {
//     numbers[i]+numbers[j] < target ? i++ : j--;
//   }
//   return [i+1, j+1];
// };

//console.log('twoSumTwoPointers', twoSumTwoPointers([2,7,11,15], 9))
//console.log('twoSumTwoPointers', twoSumTwoPointers([2,7,11,15], 13))


function twoSumSorted(arr, target) {
  return [];
}

export { twoSumSorted }
