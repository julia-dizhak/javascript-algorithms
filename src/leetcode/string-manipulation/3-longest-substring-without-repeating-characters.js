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

Algorithm
The naive approach is very straightforward. But it is too slow.
So how can we optimize it?

In the naive approaches, we repeatedly check a substring to see if it has
duplicate character. But it is unnecessary. If a substring Sij
from index i to j−1 is already checked to have no duplicate characters.
We only need to check if S[j] is already in the substring Sij.

To check if a character is already in the substring, we can scan the substring,
which leads to an O(n^2) algorithm. But we can do better.

By using HashSet as a sliding window, checking if a character in the current
can be done in O(1).

A sliding window is an abstract concept commonly used in array/string problems.
A window is a range of elements in the array/string which usually defined
by the start and end indices, i.e. [i, j) (left-closed, right-open).
A sliding window is a window "slides" its two boundaries to the certain direction.
For example, if we slide [i,j) to the right by 1 element, then it becomes [i+1,j+1)
(left-closed, right-open).

Back to our problem. We use HashSet to store the characters in current
window [i,j) (j = i initially). Then we slide the index j to the right.
If it is not in the HashSet, we slide j further. Doing so until s[j]
is already in the HashSet. At this point, we found the maximum size
of substrings without duplicate characters start with index i.
If we do this for all i, we get our answer.

Complexity Analysis
Time complexity: O(2n)=O(n). In the worst case each character will be visited
twice by i and j.

Space complexity: O(min(m,n)). Same as the previous approach.
We need O(k) space for the sliding window, where k is the size of the Set.
The size of the Set is upper bounded by the size of the string n and the size
of the charset/alphabet m.
​*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const n = s.length;
  let i = 0;
  let j = 0; // fast pointer, expand the window, make sure that everything is distinct
  let max = 0;
  let map = {};

  while (j < n) {
    if (map[s[j]]) {
      // delete from the head by using a slow pointer i
      // until we can put character j to the hash set
      map[s[i]] = null;
      i++;
    } else {
      // add character to hash and move j forward
      map[s[j]] = true;
      j++;
      // update max length
      max = Math.max(max, j - i);
    }
  }
  return max;
}

// todo use Map
// var lengthOfLongestSubstring = function(s) {
//   const map = new Map();
//   let l = 0;

//   for (let i = 0, j = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       j = Math.max(map.get(s[i]), j);
//     }

//     l = Math.max(l, i - j + 1);
//     map.set(s[i], i + 1);
//   }

//   return l;
// };

//console.log('lengthOfLongestSubstring', lengthOfLongestSubstring('abcabcbb'))

export {
  lengthOfLongestSubstring,
  lengthOfLongestSubstringBruteForce
}
