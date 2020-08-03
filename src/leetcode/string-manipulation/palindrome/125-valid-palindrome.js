/*
Leetcode
125 Valid palindrome
easy

Given a string, determine if it is a palindrome, considering only alphanumeric
characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input: "race a car"
Output: false

Constraints:
s consists only of printable ASCII characters.
*/

/*
Approach 2 Pointers

Intuition
Palindrome means spells same backwards and forwards.

A string is said to be a palindrome if the string read from left to right is equal
to the string read from right to left. For example, ignoring the difference
between uppercase and lowercase letters, the string "iTopiNonAvevanoNipoti"
is a palindrome, while the string "iGattiNonAvevanoCugini" is not so.

We will use 2 pointers technique: one pointer starts from beginning while the
other pointer starts from end

time is O(n)
space is O(1)
*/

/**
 * @param {string} s
 * @return {boolean}
*/
var isPalindromeTwoPointers = function(s) {
  if (s.length === 1) return true;
  s = s.toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (s[left] === ' ' || !(/^[a-z0-9]+$/.test(s[left]))) {
      left++;
    }
    while (s[right] === ' ' || !(/^[a-z0-9]+$/.test(s[right]))) {
      right--;
    }

    if (s[left] !== s[right]) {
      return false
    } else {
      left++;
      right--;
    }
  }

  return true;
}

/*
Approach the same: 2 pointers

Alphanumeric means digit or letter, we need to remove punctuation
Remove punctuation first and create a fixed string
*/
var isPalindromeFixedString = function(s) {
  if (s.length === 1) return true;

  // Remove non-alphanumeric chars from the string
  const fixedString = s.toLowerCase().replace(/[\W]/g, '');
  // s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');

  let left = 0;
  let right = fixedString.length - 1;

  while (left < right) {
    if (fixedString[left] !== fixedString[right]) {
      return false
    }
    left++;
    right--;
  }
  return true
}

var isPalindrome = function(s) {
  if (s === '') return true
  const arr = s.trim().toLowerCase().split('').filter(item => {
    return (item.length !== 0 && item !== ' ' && /^[a-z0-9]+$/.test(item));
  });
  const strWithoutPunctuation = arr.join('');
  const reverseStr = arr.reverse().join('');

  return (strWithoutPunctuation === reverseStr)
};

// tests
// console.log('isPalindrome', isPalindromeTwoPointers('A man, a plan, a canal: Panama'))
// console.log('isPalindrome1', isPalindromeTwoPointers('race a car'))
// console.log('isPalindrome', isPalindromeTwoPointers(' cac:'))
// console.log('isPalindrome', isPalindromeTwoPointers(''))
// console.log('isPalindrome', isPalindromeTwoPointers('ab@a'))
// console.log('isPalindrome', isPalindromeTwoPointers('c#dc'))

export {
  isPalindrome,
  isPalindromeTwoPointers,
  isPalindromeFixedString
}
