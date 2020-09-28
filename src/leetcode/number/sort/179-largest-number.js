
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
Approach Sort via custom comparator

Intuition

To construct the largest number, we want to ensure that the most significant 
digits are occupied by the largest digits.

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

Once the array is sorted, the most "significant" number will be at the front. 
There is a minor edge case that comes up when the array consists of only zeroes, 
so if the most significant number is 0, we can simply return 0. Otherwise, we 
build a string out of the sorted array and return it.

time is O(n log n) because of sort

space is O(1) / O(n)
Here, we allocate O(n) additional space to store the copy of nums. Although we 
could do that work in place (if we decide that it is okay to modify nums), we 
must allocate O(n) space for the final return string. Therefore, the overall 
memory footprint is linear in the length of nums.
*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  if (nums.length === 0 || nums === null) return '';
  nums = nums.sort((a, b) => {
    return `${b}${a}` - `${a}${b}`;
  });
  let res = nums.join('');
  return res.charAt(0) === '0' ? '0' : res;
}
// let a = [12, 10, 2, 3, 4];
// a = a.sort((a, b) => {
//   console.log('diff =', `${b}${a}` - `${a}${b}`)
//   return `${b}${a}` - `${a}${b}`
// })
// console.log('a', a);

// the same approach
var largestNumber1 = function(nums) {
  return nums
    .map(n => n.toString())
    .sort( (a,b) => (b + a).localeCompare(a + b))
    .join('')
    .replace(/^0+\B/, '');
};

// as well sort
var largestNumber3 = function (nums) {
  const res = nums
    .map(num => num.toString())
    .sort((a, b) => {
      return a.concat(b) > b.concat(a) ? -1 : 1;
    })
    .join('');

  return res.charAt(0) === '0' ? '0' : res;
};

// sort
var largestNumber4 = function(nums) {
  if (nums.length === 0 || nums === null) return '';
  let res = '';

  nums.sort(comparator);
  for (const num of nums) {
    res += num;
  }
  //console.log('res', res);
  return res == 0 ? '0' : res;
}  

function comparator(a,b) {
  const s1 = '' + a + b;
  const s2 = '' + b + a;
  return s2 - s1;
}

// tests
//console.log('largestNumber', largestNumber([]));
//console.log('largestNumber', largestNumber4([0,0]));
// console.log('largestNumber', largestNumber([10,2]));
// console.log('largestNumber', largestNumber([3,30,34,5,9]));

export {
  largestNumber,
  largestNumber3,
  largestNumber4
}

