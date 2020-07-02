/*
Leetocde
215 Find the kth largest element in an unsorted array.
medium

Find the kth largest element in an unsorted array. Note that it is the
kth largest element in the sorted order, not the kth distinct element.

Or find the kth smallest element.
Problem related to Quick select algorithm

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
Approach sort
if you wanna find a smallest you look on first position,
largest - last, median

time O(n log n)
space is O(1)
*/
var findKthLargestSort = function(nums, k) {
  nums = nums.sort((a,b) => a - b);
  return nums[nums.length - k];
};


/*
Approach Heap
*/
// ...

/*
Approach quicksort partition schema

During sorting we are doing extra work - still doing more work that we need to do.
Because we know after sorting every kth element, but we need to know only one.

We wanna find a selection algorithm which runs in linear time. There is a solution
based on partition.

In quicksort, we pick a pivot element, then move the pivot element to its correct
position and partition the array around it. The idea is, not to do complete
quicksort, but stop at the point where pivot itself is kth smallest element.

The basic idea is to use Quick Select algorithm to partition the array with pivot:
Put numbers < pivot to pivot's left
Put numbers > pivot to pivot's right
Then
if indexOfPivot == k, return A[k]
else if indexOfPivot < k, keep checking left part to pivot
else if indexOfPivot > k, keep checking right part to pivot

Partition array around pivot so that
- entry a[j] in place
- no larger entry to the left of j
- no smaller entry to the right of j
Repeat in one subarray, depending on j; finished when j equals k;

Complexity
The average case for quick select is O(n) while the worst case is
O(n2).

Discard half each time: n+(n/2)+(n/4)..1 = n + (n-1) = O(2n-1) = O(n),
because n/2+n/4+n/8+..1 = n-1.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
*/
function findKthLargest(nums, k) {
  k = nums.length - k;
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    let j = partitionLomuto(nums, lo, hi);
    if (j < k) {
      /*
        pivotIndex < n - k
        k'th largest must be in the right partition. We "undershot" and need to
        go right (and we do this by narrowing the left bound)
      */
      lo = j + 1;
    } else if (j > k) {
      /*
        k'th largest must be in the left partition. We "overshot" and need to go left
        (and we do this by narrowing the right bound)
      */
      hi = j - 1;
    } else {
      break;
      // if (j === nums.length - k)
      /*
        Found. The pivot is index on index n - k. This is literally its final
        position if the array we were given had been sorted. See how we saved work?
        We don't need to sort the whole array
        In this case pivot would have a final position like in sorted array
        [2 1 3 5 6 4]
        3 is index 2 like in sorted array
      */
      // time limit exceed
      //return nums[k]
    }
  }
  return nums[k];
};

function partition(nums, start, end) {
  let pivot = start, temp;
  while (start <= end) {
      while (nums[start] <= nums[pivot]) start++;
      while (nums[end] > nums[pivot]) end--;
      if (start > end) break;

      temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
  }
  // why do we need second swap and as well pivot
  // Pivot was set to start in the beginning but then we moved the pointers start
  // and end inwards to reach the point where everything on the left is smaller and
  // everything on right is bigger.
  // This point is located at index end (The true Pivot). So we swap end and pivot
  // and return end.
  temp = nums[end];
  nums[end] = nums[pivot];
  nums[pivot] = temp;
  return end;
}

/*
Lomuto partition schema
*/
function partitionLomuto(arr, start, end) {
  // choose element as pivot
  const pivot = arr[end];
  let i = start; // pivot location

  for (let j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  // move a pivot to its proper location
  swap(arr, i, end);
  return i;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

//console.log('findKthLargest', findKthLargest([3,2,1,5,6,4], 2))
console.log('findKthLargest', findKthLargest([3,2,1], 1))

export {
  findKthLargest,
  findKthLargestSort
}
