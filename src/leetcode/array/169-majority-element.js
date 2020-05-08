import { quickSort } from '../../algorithms/sorting/quick-sort';

/**
 * Leetcode
 * 169 Majority element
 * medium
 *
 * Given an array of size n, find the majority element.
 * The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 */

/**
 * Approach 1 Brute force
 * [2, 2, 2, 4, 7, 9, 6, 5, 66] doesn/t work
 *
 * 2
 * count =3 > lenth/2 -> 2
*/
// ...


/**
 * Approach 2 Hash Map
 *
 * Time complexity : O(n)
 * We iterate over arr once and make a constant time HashMap insertion on each iteration.
 * Therefore, the algorithm runs in O(n) time.
 *
 * Space complexity : O(n)
 * At most, the HashMap can contain n - n/2 associations, so it occupies O(n) space.
 * This is because an arbitrary array of length n can contain n distinct values,
 * but arr is guaranteed to contain a majority element, which will occupy (at minimum) n/2 + 1 array indices.
*/
var majorityElement = function(arr) {
  const len = arr.length;

  if (len === 0) {
    return [];
  }

  if (len  === 1) {
    return arr[0]
  }

  const hash = {};

  for (const num of arr) {
    hash[num] = (hash[num] || 0) + 1
  }

  for (const key in hash) {
    if (hash[key] > len / 2)  {
      return Number(key)
    }
  }
}

/**
 * Approach 3 Sorting
 *
 * Intuition
 * If the elements are sorted in monotonically increasing (or decreasing) order,
 * the majority element can be found at index n/2 or n/2 + 1 incidentally, if n is even.
 *
 * Time complexity : O(nlgn)
 * Sorting the array costs O(nlgn) time in Python and Java, so it dominates the overall runtime.
 *
 * Space complexity : O(1) or O(n)
 * We sorted arr in place here - if that is not allowed, then we must spend linear additional space on a copy of nums and sort the copy instead.
*/
var majorityElementSorting = function(arr) {
  arr = quickSort(arr);
  return arr[Math.floor(arr.length/2)]
}

/**
 * Approach 6 Boyer-Moore Voting algorithm
 *
 * Intuition
 * If we had some way of counting instances of the majority element as +1 and
 * instances of any other element as −1,
 * summing them would make it obvious that the majority element is indeed the majority element.
 * To do this, we maintain a count, which is incremented
 * whenever we see an instance of our current candidate for majority element
 * and decremented whenever we see anything else.
 * Whenever count equals 0, we effectively forget about everything in nums up to the current index
 * and consider the current number as the candidate for majority element.
 *
 * Time complexity: O(n)
 * Boyer-Moore performs constant work exactly n times, so the algorithm runs in linear time.
 *
 * Space complexity : O(1)
 * Boyer-Moore allocates only constant additional memory.
*/
var majorityMooreVoting = function(nums) {
  let count = 0;
  let candidate;

  for (const num of nums) {
    if (count === 0) {
      candidate = num
    }
    count += (num === candidate) ? 1 : -1
  }

  return candidate
}

/**
 * 229 Majority element II
 *
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 * Note: The algorithm should run in linear time and in O(1) space.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
*/
var majorityElementVariant2= function(nums) {
  var hash = {};
  var res = [];

  if (nums.length === 0) {
    return [];
  }

  if (nums.length === 1) {
    return nums[0]
  }

  for (const num of nums) {
    hash[num] = (hash[num] || 0) + 1
  }

  for (let key in hash) {
    if (hash[key] > nums.length/3) res.push(Number(key));
  };

  return res;

};

export {
  majorityElement,
  majorityMooreVoting,
  majorityElementSorting,
  majorityElementVariant2
}
