/*
leetcode
406 Longest Palindrome
easy

Given a string which consists of lowercase or uppercase letters, find the length
of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:
Input:"abccccdd"
Output:7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/*
Approach Hash

Intuition
Palindrome means spells same backwards and forwards.
famous: radar, racecar

A palindrome consists of letters with equal partners, plus possibly a unique
center (without a partner). The letter i from the left has its partner i from
the right.
For example in 'abcba', 'aa' and 'bb' are partners, and 'c' is a
unique center.

We don't need to print longest palindrome, we just need to print length of
palindrome
So we can just add 1 for a center character if needed at the very end.
There is an extra character available anytime your answer is less than the
length of the original string.
E.g., after (OUTSIDE!) the loop, just do:
if( ans < s.length ) ans++;

Complexity Analysis
Time Complexity: O(N)/O(1), where N is the length of s. We need to count each
letter.

Space Complexity: O(N) create a hash
*/
/**
 * @param {string} s
 * @return {number}
 */

var longestPalindromeUseHash = function(s) {
  if (s === undefined) return 0;
  if (s.length === 1) return 1;

  let ans = 0;
  let hash = {};

  for (const char of s) {
    hash[char] = (hash[char] || 0) + 1;
    if (hash[char] % 2 === 0) ans += 2;
  }

  console.log('hash', hash);
  // if( ans < s.length ) ans++;
  return ans < s.length ? ans + 1 : ans;
}

/*
Approach Greedy + Hash

A palindrome consists of letters with equal partners, plus possibly a unique
center (without a partner). The letter i from the left has its partner i from
the right.
For example in 'abcba', 'aa' and 'bb' are partners, and 'c' is a
unique center.

Imagine we built our palindrome. It consists of as many partnered letters as
possible, plus a unique center if possible. This motivates a greedy approach.

Algorithm
For each letter, say it occurs v times. We know we have (v / 2) * 2 letters that
can be partnered for sure. For example, if we have 'aaaaa', then we could have
'aaaa' partnered, which is (5 / 2) * 2 = 4 letters partnered.

At the end, if there was any v % 2 == 1, then that letter could have been a
unique center. Otherwise, every letter was partnered. To perform this check,
we will check for v % 2 == 1 and ans % 2 == 0, the latter meaning we haven't
yet added a unique center to the answer.
The same can be achieve as this
ans < s.length ? ans + 1 : ans;

Complexity Analysis
Time Complexity: O(N), where N is the length of s. We need to count each
letter.

Space Complexity: O(1)/O(n), the space for our count, as the alphabet size of s is
fixed. We should also consider that in a bit complexity model, technically we
need O(logN) bits to store the count values.
*/
var longestPalindromeUseGreedy = function(s) {
  if (s === undefined) return 0;
  if (s.length === 1) return 1;

  // it's really possible in JS?
  // todo
  // let charCounts = new Array(128).fill(0);
  // for (const char of s) {
  //   charCounts[char]++
  // }

  let charCounts = {};

  for (const char of s) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
  //console.log('charCounts', charCounts);

  let result = 0;
  for (const charCount in charCounts) {
    result += Math.floor(charCounts[charCount] / 2) * 2;
  }

  if (result < s.length) result++;
  return result;
}

var longestPalindromeUseGreedyVariant1 = function(s) {
  if (s === undefined) return 0;
  if (s.length === 1) return 1;

  let charCounts = {};
  let result = 0;

  for (const char of s) {
    charCounts[char] = (charCounts[char] || 0) + 1;
    if (charCounts[char] === 2) {
      result += 2;
      charCounts[char] = 0;
    }
  }

  if (result < s.length) result++;
  return result
}

/*
Approach todo
doesn't work

*/
var longestPalindrome = function(s) {
  if (s === undefined) return 0;
  if (s.length === 1) return 1;
  const arr = s.split('');
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = (hash[arr[i]] || 0) + 1
  }

  const even = Object.values(hash).filter(val => val > 1 && val % 2 === 0)
  const sumEven = even.length !== 0 ?  even.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0) : 0;
  const odd = Object.values(hash).filter(val => val > 1 && val % 2 !== 0)
  const sumOdd = odd.length !== 0 ? odd.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0) - 1 : 0;


  console.log('hash', hash)
  return sumEven + sumOdd + 1;
};

// tests
//console.log('longestPalindromeUseGreedy', longestPalindromeUseGreedy("abccccdd"));
//console.log('longestPalindrome', longestPalindrome("a")); // 1
//console.log('longestPalindrome', longestPalindrome("bb"));
//console.log('longestPalindrome', longestPalindrome('aAAAAAbccccdd'))
//console.log('longestPalindrome', longestPalindrome('aAbb'))

//https://leetcode.com/problems/non-overlapping-intervals/discuss/189715/Simple-Javascript-solution

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if(intervals.length===0) return 0;

intervals.sort((a,b) => a.start-b.start);
var count = 0;
var prevEnd = intervals[0].end;
for(var i=1; i<intervals.length; i++) {
  var thisStart = intervals[i].start;
  var thisEnd = intervals[i].end;
  if(thisStart < prevEnd) {
    count++;
    prevEnd = Math.min(prevEnd, thisEnd);
  } else {
    prevEnd = thisEnd;
  }
}
return count;
};
// https://leetcode.com/problems/non-overlapping-intervals/discuss/91701/Javascript-Solution
// runtime
//https://leetcode.com/problems/non-overlapping-intervals/discuss/334377/Javascript-ES6

// accepted
// function eraseOverlapIntervals(intervals) {
//   intervals.sort((a,b) => a[1] - b[1])
//   let prevInterval = intervals[0]
//   let counter = 0
//   for (let i = 1; i < intervals.length; i++) {
//       if (prevInterval[1] > intervals[i][0]) counter++
//       else prevInterval = intervals[i];
//   }
//   return counter;
// }

// next https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/discuss/39684/Javascript-DP-solution-that-beats-100!


export {
  longestPalindrome,
  longestPalindromeUseHash,
  longestPalindromeUseGreedy,
  longestPalindromeUseGreedyVariant1
}
