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
  if (n === 1) return true;
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

/*
Approach

Improvement

Where to start? The biggest problem of the code above is that there are too many
cases. What if we can combine them? Notice that the biggest difference between
case 2 and case 3 is the condition of the first char.

By combining case 2 and case 3, we get a new pattern: No matter what first char
is, the rest should be lowercase.

Still, there are a few points you should notice from the code above:
We check the length of the word firstly because we need to use the first two
char to check if the word matches case1. Fortunately, a word with 1 length would
always match either case2 or case3.

You can count the number of uppercase/lowercase letters in the word instead of
checking it one by one and return immediately. That can also work.

Some programming languages have built-in methods to check if the word matches
certain case, such as istitle() in Python and word.toUpperCase().equals(word)
in Java. Those methods are doing the same things as our code above. It would be great if you can know both these APIs and how they implemented.

Complexity Analysis
Time complexity: O(n), where n is the length of the word. We only need to check
each char at most constant times.

Space complexity: O(1). We only need constant spaces to store our variables.
*/
var detectCapitalUseCharacterByCharacterImprove = function(word) {
  const n = word.length;
  if (n === 1) return true;

  // case 1: all capital
  if (
    word.charAt(0) === word.charAt(0).toUpperCase() &&
    word.charAt(1) === word.charAt(1).toUpperCase()
  ) {
    for (let i = 2; i < n; i++) {
      if (word.charAt(i) === word.charAt(i).toLowerCase()) {
        return false;
      }
    }
  } else {
    // case 2 and 3
    for (let i = 1; i < n; i++) {
      if (word.charAt(i) === word.charAt(i).toUpperCase()) {
        return false
      }
    }
  }

  // if pass one of cases
  return true;
}

/*
Approach use Regex

Intuition

Hey, if we want to do pattern matching, why don't we use Regular Expression (Regex)?
Regex is a great way to match a given pattern to a string.

Algorithm

1 All letters in this word are capitals, like "USA".
2 All letters in this word are not capitals, like "leetcode".
3 Only the first letter in this word is capital, like "Google".

The pattern of case 1 in regex is [A-Z]*, where [A−Z] matches one char
from 'A' to 'Z', * represents repeat the pattern before it at least 0 times.
Therefore, this pattern represents "All capital".

The pattern of case 2 in regex is [a-z]*, where similarly, [a-z] matches one
char from 'a' to 'z'. Therefore, this pattern represents "All not capital".

Similarly, the pattern of case 3 in regex is [A-Z][a-z]*.

Take these three pattern together, we have [A-Z]*|[a-z]*|[A-Z][a-z]*, where "|"
represents "or".

Still, we can combine case 2 and case 3, and we get .[a-z]*, where "."
can matches any char.

Therefore, the final pattern is [A-Z]*|.[a-z]*.

However, it is worth pointing out that the speed of regex is highly dependent on
its pattern and its implementation, and the time complexity can vary from O(1)
to O(2^n)
If you want to control the speed yourself, using Approach 1 would be better.

Complexity Analysis
Time complexity: Basically O(n), but depends on implementation.

Space complexity : O(1). We only need constant spaces to store our pattern.
*/

var detectCapitalUseRegex = function(word) {
  let regex = /^[a-z]+$|^[A-Z]+$|^[A-Z][a-z]+$/;
  //let regex = /[A−Z]*|[a-z]*|[A-Z][a-z]*/ // todo doesn't work
  return regex.test(word)

  // return (
  //   /^[^a-z]*$/.test(word) ||
  //   /^[a-z]*$/.test(word) ||
  //   /^[A-Z]{1}[a-z]*$/.test(word)
  // );

};



// tests
//console.log('detectCapitalUseCharacterByCharacter', detectCapitalUseCharacterByCharacter('LKK'))
//console.log('detectCapitalUse', detectCapitalUse('USA'))
// console.log('detectCapitalUse1', detectCapitalUse('USAaaaa'))
// console.log('detectCapitalUse1', detectCapitalUse('aaaa'))
// console.log('detectCapitalUse1', detectCapitalUse('FLaGfrt'))

export {
  detectCapitalUse,
  detectCapitalUseSubstr,
  detectCapitalUseCharacterByCharacter,
  detectCapitalUseCharacterByCharacterImprove,
  detectCapitalUseRegex
}
