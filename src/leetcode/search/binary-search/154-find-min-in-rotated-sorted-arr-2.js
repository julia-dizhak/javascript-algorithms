/*
Leetcode
154 Find min in rotated sorted array
hard

Suppose an array sorted in ascending order is rotated at some pivot unknown
to you beforehand.
(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.
The array may contain duplicates.

Example 1:
Input: [1,3,5]
Output: 1

Example 2:
Input: [2,2,2,0,1]
Output: 0

Example: [3,3,3,1]

Note:
This is a follow up problem to Find Minimum in Rotated Sorted Array.
Would allow duplicates affect the run-time complexity? How and why?

Note: spec/test in problem 153
*/

/*
First a problem without duplicates
example with no duplicates [4,5,6,7,0,1,2]
1. step mid is 7, nums[mid] > nums[hi]
2. lo is 4, mid is 1, [0,1,2]
3. hi is 1, mid is 0 [0,1]
4. return 0

*/
var findMin1 = function(nums) {
  if (nums.length === 1) return nums[0];
  if (nums[nums.length] > nums[0]) return nums[0];

  let lo = 0;
  let hi = nums.length - 1;

  while (lo < hi) {
    let mid = Math.floor(lo + (hi - lo)/2);
    if (nums[mid] > nums[hi]) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }
  return nums[lo]
}

// console.log('findMin1', findMin1([4,5,6,7,0,1,2]));

/*
Approach binary search
When num[mid] == num[hi], we couldn't sure the position of minimum in mid's left
or right, so just let upper bound reduce one.

This code is correct to return the minimum value of the array. But in terms of
"find the minimum value index" it is not right.
see code below
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin2Version1 = function(nums) {
  if (nums.length === 1) { return nums[0]};
  if (nums[nums.length - 1] > nums[0]) return nums[0];

  let lo = 0;
  let hi = nums.length - 1;

  while(lo < hi) {
    let mid = Math.floor(lo + (hi - lo)/2);

    if (nums[mid] > nums[hi]) {
      lo = mid + 1;
    } else if (nums[mid] < nums[hi]) {
      hi = mid
    } else {
      // when num[mid] and num[hi] are same
      hi--;
    }
  }
  return nums[lo]
}
//console.log('findMin2Version1', findMin2Version1([1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1]));

/*
Approach Binary search - correct find the minimum value index

Below code is correct in terms of "find the minimum value index" of it.
Consider this case: 1 1 1 1 1 1 1 1 2 1 1
the min index returned is 0, while actually it should be 9.
For this case: 2 2 2 2 2 2 2 2 1 2 2
it will return the correct index, which is 8.

The reason is, the pivot index will be passed by at hi--.
To avoid this, we can add the following judgement
*/
var findMin2 = function(nums) {
  if (nums.length === 1) { return nums[0]};
  if (nums[nums.length - 1] > nums[0]) return nums[0];

  let i = 0;
  let j = nums.length - 1;

  while(i < j) {
    let mid = Math.floor(i + (j - i)/2);
    if (nums[mid] < nums[j]) {
      j = mid;
    }
    else if (nums[mid] > nums[j]) {
      i = mid + 1;
    } else {
      // nums[mid] == nums[j])
      if (nums[j - 1] > nums[j]) {
        i = j;
        break;
      }
      j--;
    }
  }

  return nums[i];
};

// console.log('findMin2', findMin2([2,3,3,4,5,0,0,1,1,1,1,1,1]));
// console.log('findMin2', findMin2([1,1,1,1,2]));
// console.log('findMin2', findMin2([2,2,2,0,1,1,1,1]));
// console.log('findMid2', findMin2([2,3,4,5,1,1,1]))

var findMin2Variant2 = function(nums) {
  if (nums.length === 1) { return nums[0]};
  if (nums[nums.length - 1] > nums[0]) return nums[0];

  let i = 0;
  let j = nums.length - 1;

  while(i < j) {
    let mid = Math.floor(i + (j - i)/2);
    if (nums[mid] < nums[j]) {
      j = mid;
    }
    else if (nums[mid] > nums[j]) {
      i = mid + 1;
    } else {
      // nums[mid] == nums[j])
      if (j !== 0 && nums[j] >= nums[j-1]) {
        j--
      } else {
        return nums[j]
      }
    }
  }

  return nums[i];
};


/*
Approach Brute force

There is no faster way than O(n) to solve an input like "1 1 1 1 1 0 1 1 1 1 1 1 1 1".
Binary search won't work in this case as your nums[start] == nums[mid] == nums[end],
which half would you discard then? In other words, you have to examine all elements.
With that being said, this is probably the only way to solve it.


Time is O(n)
Space is O(1)
*/
var findMin2Linear = function(nums) {
  if (nums.length === 1) { return nums[0]};
  if (nums[nums.length - 1] > nums[0]) return nums[0];

  let min = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i]
    }
  }
  return min
}

export {
  findMin2,
  findMin2Version1,
  findMin2Variant2,
  findMin2Linear
}
