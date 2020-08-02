/*
Leetcode
520 Detect capital
easy

Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following
cases holds:
- All letters in this word are capitals, like "USA".
- All letters in this word are not capitals, like "leetcode".
- Only the first letter in this word is capital, like "Google".

Otherwise, we define that this word doesn't use capitals in a right way.
*/

/*
Approach Use substr

time is O(n)
space is O(1)
*/
/**
 * @param {string} word
 * @return {boolean}
*/

var detectCapitalUse = function(word) {
  // return (
  //   word[0] === word.toUpperCase() &&
  //   word.substr(1) === word.substr(1).toLowerCase()
  // );
  //debugger
  if (word.length === 1) return true;

  // const firstLetter = word[0];

  // if (!isCapital(firstLetter)) {
  //   for (let i = 1; i < word.length; i++) {
  //     if (!isLowercase(word[i])) return false;
  //   }
  //   return true
  // }

  return (
    (word[0] === word[0].toLowerCase() && word.substr(1) === word.substr(1).toLowerCase())
    ||
    (word[0] === word[0].toUpperCase() && word.substr(1) === word.substr(1).toLowerCase())
    ||
    (word[0] === word[0].toUpperCase() && word.substr(1) === word.substr(1).toUpperCase())
  )

  // if (isCapital(firstLetter)) {
  //   for (let i = 1; i < word.length; i++) {
  //     //const letter = word[i];
  //     if (!isLowercase(word[i])) return false
  //   }
  //   return true
  // }
};
// USaj

// var detectCapitalUseRecursion = function(word) {
//   if (word.length === 1) return true;
//   else {
//     detectCapitalUseRecursion(word.length - 1)
//   }
// }

console.log('detectCapitalUse', detectCapitalUse('Leetcode'))
//console.log('detectCapitalUse', detectCapitalUse('USA'))
// console.log('detectCapitalUse1', detectCapitalUse('USAaaaa'))
// console.log('detectCapitalUse1', detectCapitalUse('aaaa'))
// console.log('detectCapitalUse1', detectCapitalUse('FLaGfrt'))

// if(word.toUpperCase() === word){
//   return true;
// }

// if(word.toLowerCase() === word){
//   return true;
// }

// if(word.substring(0,1).toUpperCase()+word.substring(1).toLowerCase() === word){
//   return true;
// }

// return false;

export {
  detectCapitalUse
}
