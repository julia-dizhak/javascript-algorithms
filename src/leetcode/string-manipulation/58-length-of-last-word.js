/*
Leetcode
58 Length of last word
easy

Given a string s consists of upper/lower-case alphabets and empty space 
characters ' ', return the length of last word (last word means the last 
appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters 
only.

Example:
Input: "Hello World"
Output: 5
*/

/*
Approach use split and trim
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord1 = function(s) {
  if (s === ' ') return 0;
  s = s.trim();
  s = s.split(' ');
  return s[s.length - 1].length;
};

/*
Approach trim and 2 pointers fast and slow
*/

var lengthOfLastWord = function(s) {
  if (s === ' ') return 0;
  s = s.trim();
  if (s.length === 1 && s[0] !== ' ') return 1;
  const n = s.length;
  let i = 0;
  let j = 0;

  while (i < n) {
    if (s[i] === ' ') {
      j = i+1;
    }
    i++;
  }
  return n - j;
}

/*
Approach loop backwards + tail (without trim)

Start from the tail of s and move backwards to find the first non-space character. 
Then from this character, move backwards and count the number of non-space 
characters until we pass over the head of s or meet a space character. The count 
will then be the length of the last word.

time is O(n);
space is O(1)
*/
var lengthOfLastWord2 = function(s) {
  const n = s.length;
  if (s === ' ') return 0;
  if (n === 1 && s[0] !== ' ') return 1;

  let len = 0;
  let tail = s.length - 1;

  while (tail >= 0 && s[tail] === ' ') tail--;
  while (tail >= 0 && s[tail] !== ' ') {
    len++;
    tail--;
  }
  return len;
}

// regex
var lengthOfLastWordUseRegex = function(s) {
  s = s.replace(/^\s+|\s+$/g,'');
  var arr = s.split(' ');
  return arr[arr.length-1].length;
};

// tests
console.log('lengthOfLastWord', lengthOfLastWordUseRegex('  test a aa '));
console.log('lengthOfLastWord', lengthOfLastWordUseRegex('1'));
console.log('lengthOfLastWord', lengthOfLastWordUseRegex(' '));
console.log('lengthOfLastWord', lengthOfLastWordUseRegex('    '));
console.log('length', lengthOfLastWordUseRegex('Hello World'));
console.log('lengthOfLastWord', lengthOfLastWordUseRegex('Hello World test1 test 1 234'));

export {
  lengthOfLastWord1,
  lengthOfLastWord,
  lengthOfLastWord2,
  lengthOfLastWordUseRegex
}