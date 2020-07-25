/*
Leetcode
153 Find Minimum in Rotated Sorted Array
medium

Suppose an array sorted in ascending order is rotated at some pivot unknown to
you beforehand.
(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.
You may assume no duplicate exists in the array.

Example 1:
Input: [3,4,5,1,2]
Output: 1

Example 2:
Input: [4,5,6,7,0,1,2]
Output: 0

Hint1
Array was originally in ascending order. Now that the array is rotated, there
would be a point in the array where there is a small deflection from the
increasing sequence. eg. The array would be something like [4, 5, 6, 7, 0, 1, 2].

Hint 2
You can divide the search space into two and see which direction to go. Can you
think of an algorithm which has O(logN) search complexity?

Hint 3
All the elements to the left of inflection point > first element of the array.
All the elements to the right of inflection point < first element of the array.
*/

/*
Approach Brute force

A very brute way of solving this question is to search the entire array and find
the minimum element. The time complexity for that would be O(N) given that N
is the size of the array.
*/

var findMinBruteForce = function(nums) {
  let min = nums[0];
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
  }
  return min;
}


/*
Approach Binary Search

A very cool way of solving this problem is using the Binary Search algorithm.
In binary search we find out the mid point and decide to either search on the
left or right depending on some condition.

Since the given array is sorted, we can make use of binary search. However,
the array is rotated. So simply applying the binary search won't work here.

In this question we would essentially apply a modified version of binary search
where the condition that decides the search direction would be different than
in a standard binary search.

We want to find the smallest element in a rotated sorted array. What if the
array is not rotated? How do we check that?

If the array is not rotated and the array is in ascending order, then
last element > first element.
2 3 4 5 6 7 => 7 < 2 This means that the array is still sorted and has no rotation.

4 5 6 7 2 3 => 3 < 4
Hence the array is rotated. This happens because
the array was initially [2, 3 ,4 ,5 ,6 ,7]. But after the rotation the smaller
elements[2,3] go at the back. i.e. [4, 5, 6, 7, 2, 3]. Because of this the first
element [4] in the rotated array becomes greater than the last element.

This means there is a point in the array at which you would notice a change.
This is the point which would help us in this question. We call this the Inflection
Point.
4 5 6 7 2 3
2 is inflection point
4  ... 7 increase
2 3 increase
7 -> 2 decrease
In this modified version of binary search algorithm, we are looking for this point.
In the above example notice the Inflection Point.
All the elements to the left of inflection point > first element of the array.
All the elements to the right of inflection point < first element of the array.

Algorithm
1. Find the mid element of the array.

2. If mid element > first element of array this means that we need to look for
the inflection point on the right of mid.

3. If mid element < first element of array this that we need to look for the
inflection point on the left of mid.
4 5 6 7 2 3
6 is mid
mid < 4 > going right

In the above example mid element 6 is greater than first element 4.
Hence we continue our search for the inflection point to the right of mid.

4. We stop our search when we find the inflection point, when either of the two
conditions is satisfied:
nums[mid] > nums[mid + 1] Hence, mid+1 is the smallest.
nums[mid - 1] > nums[mid] Hence, mid is the smallest.

4 5 6 7 2 3
2 is mid
In the above example. With the marked left and right pointers. The mid element
is 2. The element just before 2 is 7 and 7>2 i.e. nums[mid - 1] > nums[mid].
Thus we have found the point of inflection and 2 is the smallest element.


Complexity Analysis

Time Complexity: Same as Binary Search O(logN)
Space Complexity: O(1)

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  // If the list has just one element then return that element.
  if (nums.length === 1) return nums[0];

  let i = 0;
  let j = nums.length - 1;

  // if the last element is greater than the first element then there is no rotation.
  // e.g. 1 < 2 < 3 < 4 < 5 < 7. Already sorted array.
  // Hence the smallest element is first element. A[0]
  if (nums[j] > nums[0]) return nums[0];

  while (i < j) {
    let mid = Math.floor(i + (j - i)/2);
    // if the mid element is greater than its next element then mid+1 element
    // is the smallest
    // This point would be the point of change. From higher to lower value.
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }

    // if the mid element is lesser than its previous element then mid element
    // is the smallest
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }

    // if the mid elements value is greater than the 0th element this means
    // the least value is still somewhere to the right as we are still dealing
    // with elements greater than nums[0]
    if (nums[mid] > nums[0]) {
      i = mid + 1
    } else {
      // if nums[0] is greater than the mid value then this means the smallest
      // value is somewhere to the left
      j = mid - 1;
    }
  }

  return -1
};

var findMin1 = function(nums) {
  let lo = 0;
  let hi = nums.length-1;

  while (lo < hi) {
    let mid = Math.floor(lo + (hi-lo)/2);
    if (nums[mid] < nums[hi]) {
      hi = mid;
    } else {
      lo = mid+1;
    }
  }

  return nums[lo];
}

// console.log('findMin', findMin([4,5,6,7,0,1,2]));
// console.log('findMin', findMin([3,4,5,1,2]));
// console.log('findMin', findMin([2,1]));
//console.log('findMid', findMin([2,3,4,5,1]))


export {
  findMin,
  findMinBruteForce,
  findMin1
}
