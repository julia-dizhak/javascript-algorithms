/*
Leetcode
392 Is subsequence
easy

Given a string s and a string t, check if s is subsequence of t.

A subsequence of a string is a new string which is formed
from the original string by deleting some (can be none)
of the characters without disturbing the relative positions
of the remaining characters.
(ie, "ace" is a subsequence of "abcde" while "aec" is not).

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B,
and you want to check one by one to see if T has its subsequence.
In this scenario, how would you change your code?
*/

/*
Approach 2 pointers

time is O(n)
space is O(1)
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s.length === 0) return true;

  let sPointer = 0;
  let tPointer = 0;
  // loop through a giant string
  while (tPointer < t.length) {
    if (t.charAt(tPointer) === s.charAt(sPointer)) {
      sPointer++;

      if (sPointer === s.length) return true;
    }
    tPointer++;
  }
  return false;
};

console.log('isSubsequence', isSubsequence('abc', 'ahbgdc'))

// recursive solution
// https://leetcode.com/problems/is-subsequence/discuss/678333/Detailed-Steps-with-Example-or-Two-Pointer-and-Follow-UP-or-Iterative-or-Recursive
// https://gist.github.com/naresh1406/9d52ef665e9296af639dc1e831a67b55

//See the follow-up question in the problem.
// https://leetcode.com/problems/is-subsequence/discuss/87268/Java-code-for-the-follow-up-question
// check complexity O(LKlogN)
// good example of code https://leetcode.com/problems/is-subsequence/discuss/87322/HashMap-%2B-Binary-Search-solution-for-the-follow-up-question


export { isSubsequence }
