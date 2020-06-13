/*
  Leetcode
  169 Majority element
  medium

  Given an array of size n, find the majority element.
  The majority element is the element that appears more than ⌊ n/2 ⌋ times.
  You may assume that the array is non-empty and the majority element always exist in the array.

  Example 1:

  Input: [3,2,3]
  Output: 3

  Example 2:

  Input: [2,2,1,1,1,2,2]
  Output: 2
 */

/*
  Approach 1 Brute force

  The brute force algorithm iterates over the array, and then iterates again for each number to count its occurrences.
  As soon as a number is found to have appeared more than any other can possibly have appeared, return it.

  Time complexity: O(n^2)
  The brute force algorithm contains two nested for loops that each run for nn iterations,
  adding up to quadratic time complexity.

  Space complexity: O(1)
  The brute force solution does not allocate additional space proportional to the input size.
*/
var majorityElementBruteForce = function(arr) {
  const majorityCount = arr.length/2;

  for (const num of arr) {
    let count = 0;

    for (const elem of arr) {
      if (elem === num) {
        count += 1
      }
    }

    if (count > majorityCount) {
      return num
    }
  }

  return -1
}


/*
Approach 2 Hash Map

Time complexity: O(n)
We iterate over arr once and make a constant time HashMap insertion on each iteration.
Therefore, the algorithm runs in O(n) time.

Space complexity: O(n)
At most, the HashMap can contain n - n/2 associations, so it occupies O(n) space.
This is because an arbitrary array of length n can contain n distinct values,
but arr is guaranteed to contain a majority element, which will occupy (at minimum) n/2 + 1 array indices.
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
    if (hash[key] > len/2)  {
      return Number(key)
    }
  }
}

/*
Approach 3 Sorting

Intuition
If the elements are sorted in monotonically increasing (or decreasing) order,
the majority element can be found at index n/2 or n/2 + 1 incidentally, if n is even.

Time complexity: O(nlogn)
Sorting the array costs O(nlogn) time in Python and Java, so it dominates the overall runtime.

Space complexity : O(1) or O(n)
We sorted arr in place here - if that is not allowed, then we must spend linear additional space on a copy of nums and sort the copy instead.
*/
var majorityElementSorting = function(arr) {
  arr = arr.sort((a, b)=> a - b);
  return arr[Math.floor(arr.length/2)]
}

/*
  Approach 6 Boyer-Moore Voting algorithm

  Intuition
  If we had some way of counting instances of the majority element as +1 and
  instances of any other element as −1,
  summing them would make it obvious that the majority element is indeed the majority element.

  To do this, we maintain a count, which is incremented
  whenever we see an instance of our current candidate
  and decremented whenever we see anything else.
  Whenever count equals 0, we effectively forget about everything in nums up to the current index
  and consider the current number as the candidate for majority element.

  Time complexity: O(n)
  Boyer-Moore performs constant work exactly n times, so the algorithm runs in linear time.

  Space complexity : O(1)
  Boyer-Moore allocates only constant additional memory.
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

// voting second solution
const majorityMooreVotingVariant2 = nums => {
  if (nums.length === 0) {
    return [];
  }

  let candidateA,
    candidateB,
    countA = 0,
    countB = 0;
  for (let index = 0; index < nums.length; index++) {
    if (candidateA === nums[index]) {
      countA++;
    } else if (candidateB === nums[index]) {
      countB++;
    } else if (countA === 0) {
      candidateA = nums[index];
      countA = 1;
    } else if (countB === 0) {
      candidateB = nums[index];
      countB = 1;
    } else {
      countA--;
      countB--;
    }
  }

  const elementCount = search => {
    return nums.reduce((accumulator, currentValue) => {
      return currentValue === search ? accumulator + 1 : accumulator;
    }, 0);
  };

  const candidate =  candidateA === candidateB
    ? [candidateA]
    : [candidateA, candidateB].filter(
      (element, index) => elementCount(element) > Math.floor(nums.length / 3)
    );

  return candidate;
};

export {
  majorityElement,
  majorityElementBruteForce,
  majorityMooreVoting,
  majorityElementSorting,
  majorityMooreVotingVariant2
}
