/*
Hackerrunk: Ice Cream parlor
Leetcode
1. Two sum
easy

Given an array of integers,
return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution,
and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

Hint 1
A really brute force way would be to search for all possible pairs
of numbers but that would be too slow.
Again, it's best to try out brute force solutions for just for completeness.
It is from these brute force solutions that you can come up with optimizations.

Hint 2
So, if we fix one of the numbers, say x,
we have to scan the entire array to find the next number y
which is value - x
where value is the input parameter.
Can we change our array somehow so that this search becomes faster?

Hint 3
The second train of thought is, without changing the array,
can we use additional space somehow?
Like maybe a hash map to speed up the search?

Follow up:
What if the given input is already sorted in ascending order?
See Question [2. Two Sum II – Input array is sorted].
*/

/*
Approach brute force

Q. Are numbers are integer?
Q. Could numbers be negative?

Intuition
Loop through each element x
and find if there is another value that equals to target – x.


Time complexity
As finding another value requires looping through the rest of array,
its runtime complexity is O(n^2).

Space complexity is O(1)
*/
function twoSumBruteForce(arr, sum) {
  const len = arr.length;
  if (len === 0) return [];

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[j] === sum - arr[i]) {
        return [i, j]
      }
    }
  }

  // todo
  // throw new Error('No two sum solution');
  return -1;
}

/*
Approach 2 Two-pass hash table
Use Map

To improve our run time complexity, we need a more efficient way
to check if the complement exists in the array.
If the complement exists, we need to look up its index.
What is the best way to maintain a mapping of each element
in the array to its index? A hash table.

We reduce the look up time from O(n) to O(1) by trading space for speed.
A hash table is built exactly for this purpose, it supports fast look up
in near constant time. I say "near" because if a collision occurred,
a look up could degenerate to O(n) time.
But look up in hash table should be amortized O(1) time as long as
the hash function was chosen carefully.

A simple implementation uses two iterations.
In the first iteration, we add each element's value and its index
to the table. Then, in the second iteration we check if each element's
complement (target - nums[i]) exists in the table.
Beware that the complement must not be nums[i] itself!

Complexity Analysis:
Time complexity : O(n). We traverse the list containing n elements exactly
twice. Since the hash table reduces the look up time to O(1),
the time complexity is O(n).

Space complexity: O(n). The extra space required depends on
the number of items stored in the hash table,
which stores exactly n elements.
*/

function twoSumTwoPassHashes(arr, target) {
  const len = arr.length;
  if (len === 0) return [];

  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i)
  }

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    // Beware that the complement must not be nums[i] itself!
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)]
    }
  }

  return -1;
}

/*
Approach one-pass hash table

We could reduce the runtime complexity of looking up
a value to O(1) using a hash map
that maps a value to its index.

It turns out we can do it in one-pass. While we iterate and inserting elements
into the table, we also look back to check if current element's
complement already exists in the table.
If it exists, we have found a solution and return immediately.

1 Create an object containing the key-value pairs of the element and its index,
respectively.
2 Iterate through an array. For currentElement, compute complement.

Time complexity: O(n). We traverse the list containing n elements
only once. Each look up in the table costs only O(1) time.

Space complexity: O(n). The extra space required depends on the number
of items stored in the hash table, which stores at most n elements.
*/

/*
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
*/

// Example
// { 2: 0, 7: 1, 11: 2, 15 : 2}
// target 9
function twoSum(arr, target) {
  const len = arr.length;
  if (len === 0) return [];

  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i]; // is 7
    const index2 = hash[complement];
    if (index2 !== undefined) {
      return [index2, i]
    } else {
      hash[arr[i]] = i;
    }
  }

  // or through an exception
  // throw new Error('No two sum solution');
  return -1;
}

export {
  twoSum,
  twoSumBruteForce,
  twoSumTwoPassHashes
}
