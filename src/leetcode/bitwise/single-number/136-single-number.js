/*
Leetcode
136 Single Number
easy

Given a non-empty array of integers, every element appears twice except for one.
Find that single one.

Note:
Your algorithm should have a linear runtime complexity.
Could you implement it without using extra memory?

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4
*/


/*
Approach brute force

Algorithm

Iterate over all the elements in nums
If some number in nums is new to array, append it
If some number is already in the array, remove it

Complexity Analysis
Time complexity : O(n^2)
Space complexity : O(n). We need a list of size nn to contain elements in nums.
*/


/*
Approach hash

Algorithm
We use hash table to avoid the O(n) time required for searching the elements.

Iterate through all elements in nums and set up key/value pair.
Return the element which appeared only once.

Complexity Analysis

Time complexity: O(n⋅1)=O(n). Time complexity of for loop is O(n).
Time complexity of hash table(dictionary in python) operation pop is O(1).

Space complexity: O(n). The space required by hash table is equal to the number
of elements in nums.
*/


/*
Approach Math

Concept
2 * (a + b + c) - (a + a + b + b + c) = c

Complexity Analysis
Time complexity : O(n + n) = O(n). sum will call next to iterate through nums.
We can see it as sum(list(i, for i in nums)) which means the time complexity
is O(n) because of the number of elements(n) nums.

Space complexity : O(n + n) = O(n). set needs space for the elements in nums
*/


/*
Approach bit manipulation

known that A ^ A = 0 and the XOR operator is commutative,
the solution will be very straightforward.
X ^ 0s = X

X^X = 0
0^0 = 0
0^X = X

This XOR operation works because it's like XORing all the numbers by itself.
So if the array is [2,1,4,5,2,4,1] then it will be like we are performing this
operation
((2^2)^(1^1)^(4^4)^(5)) => (0^0^0^5) => 5.
Hence picking the odd one out (5 in this case).

Complexity Analysis
Time complexity : O(n). We only iterate through nums, so the time complexity
is the number of elements in nums.
Space complexity : O(1).
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }

  return result;
};

function singleNumberVariant2(nums) {
	return nums.reduce((prev, curr) => prev ^ curr, 0);
}

export {
  singleNumber,
  singleNumberVariant2
}
