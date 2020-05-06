/**
 * Leetcode
 * 387 First Unique Character in a String
 * easy
 *
 * Given a string, find the first non-repeating character in it and return it's index.
 * If it doesn't exist, return -1.
 *
 * Note: You may assume the string contain only lowercase letters.
 *
 * Approach linear time solution
 * The best possible solution here could be of a linear time
 * because to ensure that the character is unique you have to check the whole string anyway.
 *
 * Time complexity : O(N) since we go through the string of length N two times.
 * Space complexity : O(N) since we have to keep a hash map with N elements.
 */
var firstUniqueChar = function(s) {
  const frequencies = {};

  for (const char of s) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // first non-repeating character
    if (frequencies[char] === 1) {
      return i
    }
  }

  return -1
}

export {firstUniqueChar }
