/*
Leetcode
66 Plus one
easy

Given a non-empty array of digits representing a non-negative integer,
plus one to the integer.

The digits are stored such that the most significant digit is at the head
of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number
0 itself.

Example 1:
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

/*
Approach Loop
check edge cases: [1,2,9], [9,9,9]

Complexity
time is O(n)
space is O(n)
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  // or digits.unshift(1);
  // [1, ...digits];
  let newDigits = new Array(n+1).fill(0);
  newDigits[0] = 1;
  return newDigits;
};

/*
Approach Math.pow

We're given a list of digits, and the idea here is to convert that list to an
integer, num. So each digit is multiplied by the proper place value and added
to num.
For example, if digits = [3, 8, 2, 5] then on the first iteration 3 is
multiplied by 10 to the power of 4-1-0 = 3, so this results in 3000, which is
added to num. Then 8 is multiplied by 10^2 and added to num, and so on.

The last step is to add 1 to num, convert it to a list and return that list.

Doesn't work with a big number
Time is O(n)
Space id O(n)
*/
var plusOne1 = function(digits) {
  let num = 0;
  const n = digits.length;

  for (let i = 0; i < n; i++) {
    num += digits[i] * Math.pow(10, n - 1 - i); // 10^3 base, exponent
  }
  return String(num + 1).split('').map(n => Number(n));
}

//console.log('plusOne1', plusOne1([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))

export {
  plusOne,
  plusOne1
}
