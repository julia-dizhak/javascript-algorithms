/**
 * Leetcode javascript
 * 383 Ransom note
 * easy
 *
 * Given an arbitrary ransom note string and another string containing letters from all the magazines,
 * write a function that will return true if the ransom note can be constructed from the magazines;
 * otherwise, it will return false.
 *
 * Each letter in the magazine string can only be used once in your ransom note.
 *
 * Note:
 * You may assume that both strings contain only lowercase letters.
*/
var canConstruct = function(ransomNote, magazine) {
  const len1 = magazine.length;
  const len2 = ransomNote.length;
  const hash = {};

  // you don't need to split the strings into an array of characters. Array notation works fine on strings, as Javascript stores strings as a list of characters anyways.
  for (let i = 0; i < len1; i++) {
    const char = magazine[i];
    hash[char] = (hash[char] || 0) + 1;
  }

  for (let j = 0; j < len2; j++) {
    hash[ransomNote[j]] = (hash[ransomNote[j]] || 0) - 1;
    if (hash[ransomNote[j]] < 0) {
      return false
    }
  }

  return true
}

// to check
var canConstruct1 = function(ransomNote, magazine) {
  if ( ransomNote.length > magazine.length ) return false;
  const oldMagazineLength = magazine.length;
  ransomNote.split('').forEach(item => {
      magazine = magazine.replace(item, '');
  });
  return oldMagazineLength == magazine.length + ransomNote;
};

/**
 * Leetcode
 * 387 First Unique Character in a String
 * easy
 *
 * Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
 * Note: You may assume the string contain only lowercase letters.
 *
 * Approach linear time solution
 * runtime O(n)
 * The best possible solution here could be of a linear time because to ensure that the character is unique you have to check the whole string anyway.
 *
 * Time complexity : \mathcal{O}(N)O(N) since we go through the string of length N two times.
 * Space complexity : \mathcal{O}(N)O(N) since we have to keep a hash map with N elements.
 */
var firstUniqueChar = function(s) {
  const frequencies = {};

  for (const char of s) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (frequencies[char] === 1) {
      return i
    }
  }

  return -1
}

  // if (Object.values(frequencies).every(val => val > 1)) {
  //   return -1
  // }

console.log('firstUniqueChar', firstUniqueChar('leetcode'))
console.log('firstUniqueChar1', firstUniqueChar('loveleetcode'))
console.log('firstUniqueChar1', firstUniqueChar('loleeoe'))
export { canConstruct, firstUniqueChar }
