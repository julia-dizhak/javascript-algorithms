/*
Leetcode
137 Single Number II
Given a non-empty array of integers, every element appears three times except
for one, which appears exactly once. Find that single one.
medium

Note:
Your algorithm should have a linear runtime complexity.
Could you implement it without using extra memory?

Example 1:
Input: [2,2,3,2]
Output: 3

Example 2:
Input: [0,1,0,1,0,1,99]
Output: 99
*/

/*
Approach Hash

time is O(n)
space is O(n)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumberUseHash = function(nums) {
  let hash = {};
  for (const num of nums) {
    hash[num] = (hash[num] || 0) + 1;
  }

  for (const key in hash) {
    if (hash[key] === 1) {
      return Number(key);
    }
  }
};

/*
Approach sort

time is O(n log n)
*/
var singleNumberUseSort = function(nums) {
  nums = nums.sort((a,b) => a - b);
  for (let i = 0; i < nums.length; i = i + 3) {
    if (nums[i] !== nums[i+2]) return nums[i]
  }
}

var singleNumberUseSortVariant3 = function(nums) {
  nums = nums.sort((a,b) => a - b);
  for (let i = 0; i < nums.length - 3; i = i + 3) {
    if (nums[i] !== nums[i+2]) return nums[i]
  }
  return nums[nums.length - 1];
}

var singleNumberUseSortVariant2 = function(nums) {
  nums = nums.sort((a,b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i+1] && nums[i] !== nums[i-1]) return nums[i]
  }
}

/*
Approach Count time of occurrence

This approach is easily extended to any times of occurrence.

The usual bit manipulation code is bit hard to get and replicate. I like to think
about the number in 32 bits and just count how many 1s are there in each bit,
and sum %= 3 will clear it once it reaches 3. After running for all the numbers
for each bit, if we have a 1, then that 1 belongs to the single number, we can
simply move it back to its spot by doing result |= sum << i;

We can sum the bits in same positions for all numbers and take module with 3.
The bits for which sum is not multiply of 3, are the bits of number with single
occurrence.

Let us consider the example array [5,5,5,8]
101
101
101
1000
sum if first bits % 3 = (1 + 1 + 1 + 0) % 3 = 0;
sum of second bits % 3 = (0 + 0 + 0 + 0) % 3 = 0;
sum of third bits % 3 = (1 + 1 + 1 + 0) % 3 = 0;
sum of fourth bits % 3 = 1 % 3 = 1

This has complexity of O(32n), which is essentially O(n) and very easy to think
and implement. Plus, you get a general solution for any times of occurrence.
Say all the numbers have 5 times, just do sum %= 5.
*/

var singleNumber2TimeOccurrence = function(nums) {
  let result = 0;
  let sum;
  let mask;

  for (let i = 0; i < 32; i++) {
    // find sum of set bits at i-th position in all array elements
    sum = 0;
    mask = 1 << i;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] & mask) sum++;
    }

    // the bits with sum not multiple of 3, are the bits of element with single
    // occurrence

    // other variant
    // sum = sum % 3;
    // result = result | (sum << i)

    // other variant
    //if (sum % 3) result = result | x;

    // Bitwise ORing in order to set a subset of the bits in the value
    if (sum % 3 === 1) result = result | mask;
  }
  return result
}
//console.log('singleNumber2TimeOccurrence', singleNumber2TimeOccurrence([5,5,5,8]))

// todo https://www.geeksforgeeks.org/find-the-element-that-appears-once/
/*
Approach Bitwise XOR ???

we need to use bit manipulation here. find the sum of ith bit for every number.
if sum is not a multiple of 3, it means our answer has that bit as set

time is O(n)
space is O(1)
*/


var singleNumber2 = function(nums) {
  //debugger
  let ones = 0;
  let twos = 0;

  for (let i = 0; i < nums.length; i++) {
    ones = (ones ^ nums[i]) & ~twos;
    twos = (twos ^ nums[i]) & ~ones;
  }
  return ones
}

//console.log('singleNumber2', singleNumber2([2,2,3,2]))
//console.log('singleNumber', singleNumber([0,1,0,1,0,1,99]))

export {
  singleNumber2,
  singleNumberUseHash,
  singleNumberUseSort,
  singleNumberUseSortVariant2,
  singleNumberUseSortVariant3,
  singleNumber2TimeOccurrence
}
