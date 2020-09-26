
/*
Leetcode
179 Largest number
medium

Given a list of non negative integers, arrange them such that they form the 
largest number.

Example 1:
Input: [10,2]
Output: "210"

Example 2:
Input: [3,30,34,5,9]
Output: "9534330"
Note: The result may be very large, so you need to return a string instead of an 
integer.
*/

/*
Approach Sort

The key is to sort the nums vector based on the lexicographic combination of 
any two numbers. 
Example a = 102, b = 201, should be lexicographically compared as "102201" vs. "201102"

When applied to numbers, lexicographic order is increasing numerical order, i.e. 
increasing numerical order (numbers read left to right). For example, the permutations 
of {1,2,3} in lexicographic order are 123, 132, 213, 231, 312, and 321. 

Or
The idea here is basically implement a String comparator to decide which String 
should come first during concatenation.
Because when you have 2 numbers (let's convert them into String), you'll face 
only 2 cases:
const s1 = '9';
const s2 = '31';
const case1 = s1 + s2 = 931
const case1 = s2 + s1 = 319
Apparently, case1 is greater than case2 in terms of value.
So, we should always put s1 in front of s2.

time is O(n log n) because of sort
space is O(n)
*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  if (nums.length === 0 || nums === null) return '';
  nums = nums.sort((a, b) => {
    return `${b}${a}` - `${a}${b}`;
  })

  return nums.join('');
}

// let a = [12, 10, 2, 3, 4];
// a = a.sort((a, b) => {
//   console.log('diff =', `${b}${a}` - `${a}${b}`)
//   return `${b}${a}` - `${a}${b}`
// })
// console.log('a', a);


// tests
//console.log('largestNumber', largestNumber([]));
// console.log('largestNumber', largestNumber([10,2]));
// console.log('largestNumber', largestNumber([3,30,34,5,9]));

export {
  largestNumber
}

