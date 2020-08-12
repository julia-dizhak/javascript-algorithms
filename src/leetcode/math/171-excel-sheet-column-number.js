/*
171 Excel sheet column number
easy
Given a column title as appear in an Excel sheet, return its corresponding column
number.

For example:
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...

Example 1: Input: "A" Output: 1

Example 2: Input: "AB" Output: 28

Example 3: Input: "ZY" Output: 701

Constraints:
1 <= s.length <= 7
s consists only of uppercase English letters.
s is between "A" and "FXSHRXW".
*/

/*
Approach Math
(teaser problem)

p.charAt(i) - 'a'

Time is O(n)
Space is O(1)
*/
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result = result*26 + (s.charCodeAt(i) - 'A'.charCodeAt(0) + 1)

  }
  return result;
};

/*
Approach recursion

time is O(n)
space is O(n)

*/
var titleToNumberUseRecursion = function(s) {
  return s !== '' ? 26 * titleToNumber(s.substr(0, s.length - 1)) +
  (s.charCodeAt(s.length - 1) - 'A'.charCodeAt(0) + 1) :
  0;
};

/*
Approach Math + base 26

Think of this problem as the same way you'd manually take a binary string and
calculate it's decimal representation. Instead of being base 2 it is base 26.

binary to decimal 101 -> 5
101 = 2^2 * 1 + 2^1 * 0 + 2^0 * 1 = 4 + 1 = 5


A = 1 = 26 * 0;
AA = 26 + 1 = 26 * 1 + 1;
BA = 26 * 26 + 1 = 26 * 2 + 1;
CA = 26 * 26 * 26 + 1 = 26 * 3 + 1;
*/
var titleToNumberMath = function(s) {
  const charCodeBase = 'A'.charCodeAt(0) - 1;
  let n = s.length;

  let result = 0;
  for (let i = 0; i < n; i++) {
    result += Math.pow(26, n - i - 1) * (s.charCodeAt(i) - charCodeBase);
  }
  return result;
};

/*
The same approach
*/
var titleToNumberMath1 = function(s) {
  let result = 0;
  for (let i = s.length - 1, j = 0; i >= 0; i--, j++) {
    result += Math.pow(26,j) * (s.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
  }
  return result;
};

// tests
//console.log('titleToNumberUseRecursion', titleToNumberUseRecursion('AAB'));

export {
  titleToNumber,
  titleToNumberMath,
  titleToNumberMath1,
  titleToNumberUseRecursion
}
