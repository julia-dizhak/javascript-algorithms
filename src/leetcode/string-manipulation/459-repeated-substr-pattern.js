/*
Leetcode
459 Repeated substring pattern
easy

Given a non-empty string check if it can be constructed by taking a substring of 
it and appending multiple copies of the substring together. You may assume the 
given string consists of lowercase English letters only and its length will not 
exceed 10000.

Example 1:
Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.

Example 2:
Input: "aba"
Output: False

Example 3:
Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
*/

/*
Approach Loop backwards

it's not an easiest one

if I repeat 'a' can i get full string
if I repeat 'ab' can i get full string
continue until half of the way
can do forward, backwards

time is O(n)
space is O(1)
*/
var repeatedSubstringPattern1 = function(s) {
  const n = s.length;
  for (let i = Math.floor(n/2); i >= 1; i--) {
    let numRepeats = Math.floor(n/i);
    let substr = s.substr(0,i);
    let newStr = '';
    for (let j = 0; j < numRepeats; j++) {
      newStr += substr;
    }
    if (s === newStr) return true;
  }
}

/*
Approach split and pattern

time is O(n)

*/
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const n = s.length;
  if (n < 2) return false; 
  let pattern = '';
  // divide string length by 2 because we only need to iterate on half of the string
  for (let i = 0; i < Math.floor(n/2); i++) {
    pattern += s[i];
    // keep adding to pattern until we find a pattern that matches all chars 
    // in the string when we do a split
    // example string 'abcabc':
    // i = 0, pattern 'a', s.split(pattern) = ['','bc','bc'] => after join bcbc
    // for i=1, pattern='ab', s.split(pattern).join('') = 'cc'
    // for i=2, pattern='abc', s.split(pattern).join('') = ''
    // console.log(s.split(pattern).join('')) 
    if (!s.split(pattern).join('')) return true
  }
}

/*
todo KMP
https://reponroy.wordpress.com/2015/04/29/kmp-minimum-length-of-a-repeated-string/#:~:text=KMP%20algorithm%20quickly%20finds%20the,to%20make%20the%20whole%20string..&text=S%20can%20be%20writen%20as,*%20ab%20where%20*%20means%20concatenation.
todo remove first and last character
todo solution https://leetcode.com/problems/repeated-substring-pattern/discuss/235383/JavaScript

*/

//console.log('repeatedSubstringPattern', repeatedSubstringPattern('abab'))
//console.log('repeatedSubstringPattern', repeatedSubstringPattern('abcabc'))
//console.log('repeatedSubstringPattern', repeatedSubstringPattern('aba'))
    
export {
  repeatedSubstringPattern,
  repeatedSubstringPattern1
}