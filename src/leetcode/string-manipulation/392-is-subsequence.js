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

// TODO
// See the follow-up question in the problem.
// https://leetcode.com/problems/is-subsequence/discuss/87268/Java-code-for-the-follow-up-question
// check complexity O(LKlogN)
// good example of code https://leetcode.com/problems/is-subsequence/discuss/87322/HashMap-%2B-Binary-Search-solution-for-the-follow-up-question
// solution follow up https://gist.github.com/naresh1406/9d52ef665e9296af639dc1e831a67b55



/*
Approach 2 pointers

We will take two pointer for both strings:

1 i is pointer for s and j pointer for t
2 compare character of s and t at i and j index rep.
- if both same then increment both pointer i and j
- else just increment t pointer j
3 repeat step 2 until either pointer reach the last character of the string
4 check if ith pointer reach to the end of s string return i == s.length()

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


/*
Approach recursive

time complexity is O(n), where n is length of t, because in worst case,
if s is not subsequence of t, you will loop through entire t string.

About space complexity, we need to remember, that
recursive algorithms take at least O(n) space where n is the depth of the recursive call.
In our worst case it would be O(n)
*/

function isSubsequenceRecursion(s, t) {
  // base case
  if (s === null || s.length === 0) return true;


  for (let i = 0; i < t.length; i++) {
    if (t.charAt(i) === s.charAt(0)) {
      return isSubsequenceRecursion(s.substr(1), t.substr(i+1))
    }
  }
  return false
}

export { isSubsequence, isSubsequenceRecursion }
