/**
 *
 * Leetcode
 * 567 Permutation in String
 *
 * Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1.
 * In other words, one of the first string's permutations is the substring of the second string.
 *
 * Example 1:
 * Input: s1 = "ab" s2 = "eidbaooo"
 * Output: True
 * Explanation: s2 contains one permutation of s1 ("ba").
 *
 * Example 2:
 * Input: s1= "ab" s2 = "eidboaoo"
 * Output: False
 *
 * Note:
 * The input strings only contain lower case letters.
 * The length of both given strings is in range [1, 10,000].
 *
 * Hint1:
 * Obviously, brute force will result in TLE (tle time limit exceed). Think of something else.
 *
 * Hint2:
 * How will you check whether one string is a permutation of another string?
 *
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const len1 = s1.length;
  const len2 = s2.length;

  let s1Counter = {},
    s2Counter = {}

  for (let i = 0; i < s1.length; i++) {
    s1Counter[s1[i]] = (s1[i] || 0) + 1;
  }

  for (let j = 0; j < s2.length; j++) {
    s2Counter[s2[j]] = (s2[j]|| 0) + 1;
  }

  //debugger
  //console.log('s1', s1Counter);
  //console.log('s2', s2Counter);
};

//console.log(checkInclusion('ab', 'eidbaooo'))

export { checkInclusion }
