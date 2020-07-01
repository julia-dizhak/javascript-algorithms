/*
Leetocde
215 Find the kth largest element in an unsorted array. Note that it is the
kth largest element in the sorted order, not the kth distinct element.
medium

Example 1:
Input: [3,2,1,5,6,4] and k = 2
Output: 5

Example 2:
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4

Note:
You may assume k is always valid, 1 ≤ k ≤ array's length
*/

/*
Approach

sort
and find
or it's about only median?

*/

/*
Approach iterative

quick-select

The average case for quick select is O(n) while the worst case is
O(n2).

*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let start = 0;
  let end = nums.length - 1;
  let index = nums.length - k;

  // while (start < end) {
  //   let pivot = partition(nums, start, end);
  //   if (pivot < index) start = pivot + 1
  // }


};
