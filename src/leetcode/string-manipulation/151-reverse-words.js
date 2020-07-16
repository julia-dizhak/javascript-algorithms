/*
Leetcode
151 Reverse words
medium

Given an input string, reverse the string word by word.

Example 1:
Input: "the sky is blue"
Output: "blue is sky the"

Example 2:
Input: "  hello world!  "
Output: "world! hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:
Input: "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single
space in the reversed string.

Note:
A word is defined as a sequence of non-space characters.
Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space in the reversed string.

Follow up:
For C programmers, try to solve it in-place in O(1) extra space.
*/

/*
Approach 2 Pointer, split, trim
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  if (s === null) return null;
  if (!s.length) return '';

  let arr = s.trim().split(' ');
  arr = arr.filter(item => item.length);

  let i = 0;
  let j = arr.length - 1;

  while(i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  console.log('arr', arr)
  return arr.join(' ');
};

// tests
// console.log('reverseWords', reverseWords('a good   example'))

/*
Approach 2 Pointers without trim
*/

var reverseWords2 = function(s) {
  if (s === null) return null;
  if (!s.length) return '';

  let arr = s.split(' ');
  const n = arr.length;
  let i = n - 1

  // while (i >= 0) {
  //   debugger
  //   if (arr[i] === '') {
  //     i--;
  //     continue;
  //   }

  // }
};

//console.log('reverseWords', reverseWords2('a good   example'))

/*
Approach JS built-in
*/
var reverseWords1 = function(s) {
  if (s === null) return null;

  let arr = s.trim().split(' ');
  arr = arr.filter(item => item.length !== 0);

  return arr.reverse().join(' ');
}

export {
  reverseWords,
  reverseWords1,
  reverseWords2
}
