/*
Leetcode
3 Longest substring without repeating characters
medium

Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

substring - part of the string
*/

/*
Approach Brute force

Intuition
Check all the substring one by one to see if it has no duplicate character.

Algorithm
Suppose we have a function boolean allUnique(String substring) which will
return true if the characters in the substring are all unique, otherwise false.
We can iterate through all the possible substrings of the given string s
and call the function allUnique.
If it turns out to be true, then we update our answer of the maximum length
of substring without duplicate characters.

Now let's fill the missing parts:
To enumerate all substrings of a given string, we enumerate the start and
end indices of them. Suppose the start and end indices are i and j, respectively.
Then we have 0≤i<j≤n (here end index j is exclusive by convention).
Thus, using two nested loops with i from 0 n−1 and j from i+1 to n,
we can enumerate all the substrings of s.

To check if one string has duplicate characters, we can use a set.
We iterate through all the characters in the string and put them into the
set one by one. Before putting one character, we check if the set already
contains it. If so, we return false. After the loop, we return true.

Complexity Analysis

Time complexity : O(n^3)
To verify if characters within index range [i, j)[i,j) are all unique,
we need to scan all of them.

Space complexity : O(min(n,m)). We need O(k) space for checking a substring
has no duplicate characters, where k is the size of the Set.
The size of the Set is upper bounded by the size of the string n and the size
of the charset/alphabet m.
*/

var lengthOfLongestSubstringBruteForce = function(s) {
  const n = s.length;
  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (allUnique(s,i,j)) {
        max = Math.max(max, j - i)
      }
    }
  }
  return max;
}

function allUnique(s, start, end) {
  let hash = {};
  for (let i = start; i < end; i++) {
    if (hash[s[i]] === undefined) {
      hash[s[i]] = (hash[s[i]] || 0) + 1
    } else {
      return false
    }
  }
  return true;
}

/*
Approach sliding window

we are going to have 2 pointers, start from the beginning
one stay at the beginning
and one pointer keep move and make sure that none of characters are the same
a is new, b is new, c is new - we are going to add it to the hash set
when we see a - get rid of that a
keep track of the longest window

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let i = 0;
  let j = 0; // second pointer, expand the window, make sure that everything is distinct
  let max = 0;
  let hash = {};

  // for (let i = 0; i < s.length; i++) {
  //   //debugger
  //   if (hash[s[i]] === undefined) {
  //     hash[s[i]] = (hash[s[i]] || 0) + 1;
  //     j++;
  //   } else {
  //     //j = 0
  //   }
  // }

  // console.log('hash', hash)

  // return j;

  while (i <= s.length) {
    if (hash[s[i]] === undefined) {
      hash[s[i]] = (hash[s[i]] || 0) + 1;
      i++;
      j++;
    } else {

    }
  }
};

// todo https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/1812/Share-my-Java-solution-using-HashSet

console.log('lengthOfLongestSubstring', lengthOfLongestSubstringBruteForce('abcabcbb'))
//console.log('lengthOfLongestSubstring', lengthOfLongestSubstring('abcbabcbb'))

export {
  lengthOfLongestSubstring,
  lengthOfLongestSubstringBruteForce
}
