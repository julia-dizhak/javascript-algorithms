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

// Microsoft | OA 2019 | String Without 3 Identical Consecutive Letters
// microsoft
//Write a function solution that, given a string S of N lowercase English letters,
// returns a string with no instances of three identical consecutive letters,
// obtained from S by deleting the minimum possible number of letters
// Examples: Given S = “eedaaad” , the function should return “eedaad” .
// One occurrence of letter a is deleted.

var noThreeIdenticalLetters = function(s) {
  const letters = {};

  for (const letter of s) {
    letters[letter] = (letters[letter] || 0) + 1
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (letters[char] >= 3) {
      const firstIndex = s.indexOf(char);
      const lastIndex = i;
      const substr = s.substring(firstIndex, lastIndex+1);
      const substr1 = substr.slice(0,2);
      console.log('substr', substr)
      console.log('substr1', substr1)
      // return begin str + cutted + end
      // console.log('index', i);
      // console.log('char', char);

    }
  }

  // s.slice(firstIndex, firstIndex + 2)
  // s.substring(firstIndex, 5+1)
  console.log('letters', letters)

  return s
}

//console.log(noThreeIdenticalLetters('eedaaad'))
//given S=“uuuuxaaaaxuuu” the function should return “uuxaaxuu”


export { canConstruct }
