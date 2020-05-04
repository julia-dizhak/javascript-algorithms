import { binarySearch } from "../../algorithms/search/binary-search";

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

// 1009. Complement of Base 10 Integer
// 5 - 101
// 11 - 1011
// Note that except for N = 0, there are no leading zeroes in any binary representation.
// var bitwiseComplement = function(N) {
//   N to binary % 2
//   for - each 0 to 1
//   to decimal
// }

export { canConstruct }
