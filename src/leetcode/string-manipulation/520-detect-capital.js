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
  if (word.length === 1) return true;

  return (
    (word[0] === word[0].toLowerCase() && word.substr(1) === word.substr(1).toLowerCase())
    ||
    (word[0] === word[0].toUpperCase() && word.substr(1) === word.substr(1).toLowerCase())
    ||
    (word[0] === word[0].toUpperCase() && word.substr(1) === word.substr(1).toUpperCase())
  )
};

/*
Approach substr
time is O(n)
space is O(1)
*/
var detectCapitalUseSubstr = function(word) {
  if (word.toUpperCase() === word) return true;
  if (word.toLowerCase() === word) return true;

  if (word[0].toUpperCase() + word.substring(1).toLowerCase() === word) {
    return true;
  }

  return false;
}

/*
Approach Character by character

It's a fairly easy problem because it does not require you to use any special
trick, and all you need to do is to implement the solution step by step.

However, it would take some time if you want to make your code easily readable,
beautiful, and short. Below two approaches are introduced, they are "Character
by Character" method and "Regex" method.

There are a few points you should notice from the code above:
We use the built-in function isUpperCase (in Java) and isupper (in Python) to
check whether a char is upper case. You can also use the ASCII to do that.
Just use something like word.charAt(i) >= 'A' && word.charAt(i) <= 'Z'.

We use break after we find matching failed because there is no need to check
whether the further char is valid.

You can combine the three match variables into one by reusing it after each case,
but I prefer to separate it into three for better readability.

OK! Now we have solved this problem. The time complexity is O(n) (where n
is word length) because we need to check each char at most three times. This time
complexity is great, and there is no too much we can do to improve it.

However, we can make the code looks better and shorter, without reducing the
readability.
*/
var detectCapitalUseCharacterByCharacter = function(word) {
  const n = word.length;
  let match1 = true, match2 = true, match3 = true;


  // case 1: all capital
  for (let i = 0; i < n; i++) {
    if (word.charAt(i) !== word.charAt(i).toUpperCase()) {
      match1 = false;
      break;
    }
  }
  if (match1 === true) return true;

  // case 2: all not capital
  for (let i = 0; i < n; i++) {
    if (word.charAt(i) !== word.charAt(i).toLowerCase()) {
      match2 = false;
      break;
    }
  }
  if (match2 === true) return true;

  // case 3: all not capital except first
  if (word.charAt(0) !== word.charAt(0).toUpperCase()) match3 = false;
  if (match3) {
    for (let i = 1; i < n; i++) {
      if (word.charAt(i) !== word.charAt(i).toLowerCase()) {
        match3 = false;
        break;
      }
    }
  }

  if (match3 === true) return true;

  // if not matching
  return false;
}

console.log('detectCapitalUseCharacterByCharacter', detectCapitalUseCharacterByCharacter('LKK'))
//console.log('detectCapitalUse', detectCapitalUse('USA'))
// console.log('detectCapitalUse1', detectCapitalUse('USAaaaa'))
// console.log('detectCapitalUse1', detectCapitalUse('aaaa'))
// console.log('detectCapitalUse1', detectCapitalUse('FLaGfrt'))

export {
  detectCapitalUse,
  detectCapitalUseSubstr,
  detectCapitalUseCharacterByCharacter
}
