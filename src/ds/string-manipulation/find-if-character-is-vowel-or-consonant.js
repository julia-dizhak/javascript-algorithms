/*
Given a character, check if it is vowel or consonant.
Vowels are ‘a’, ‘e’, ‘i’, ‘o’ and ‘u’.
All other characters (‘b’, ‘c’, ‘d’, ‘f’ ….) are consonants.

Examples:
Input : x = 'c'
Output : Consonant

Input : x = 'y'
Output : Vowel
*/

function isVowel(char) {
  return /[aeiouAEIOU]/.test(char);
}

// other approach
function isVowel1(x) {
  if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u')  {
    // and + x === 'A' etc
    return true
  }
  return false
}

// tests
// console.log(isVowel1('a'));
// console.log(isVowel1('b'));

export {
  isVowel,
  isVowel1
}
