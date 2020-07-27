/*
Given a non-negative integer num, repeatedly add all its digits until the result
has only one digit.

Example:
Input: 38
Output: 2
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?

Hint 1
A naive implementation of the above process is trivial. Could you come up with
other methods?

Hint 2
What are all the possible results?

Hint 3
How do they occur, periodically or randomly?

Hint 4
You may find this Wikipedia article useful.
Digital root also repeated digital sum
The digital root (also repeated digital sum) of a natural number in a given number
base is the (single digit) value obtained by an iterative process of summing digits,
on each iteration using the result from the previous iteration to compute a digit sum.
The process continues until a single-digit number is reached.
https://en.wikipedia.org/wiki/Digital_root

*/
/**
 * @param {number} num
 * @return {number}
 */

function count(n) {
  if (n <= 0) {
    console.log(0);
    return;
  }
  else {
    console.log(n);
    return count(n-1)
  }
}
//console.log('count', count(5))

/*
Approach recursion

time is O(n)
space is O(n) recursion stack
*/
var addDigitsBruteForce = function(num) {
  let arr = num.toString().split('');
  if (arr.length === 0) return;
  if (arr.length === 1) return arr[0];

  if (arr.length > 1) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i])
    }
    return addDigits(sum)
  }
};

/*
Approach while loop

Overview
The value we're asked to compute is the so-called Digital Root. Logarithmic time
solution is easy to write, although the main question here is how to fit into a
constant time.

Time is O(n)
Space is O(1)
*/
var addDigitsUseLoop = function(num) {
  let digitalRoot = 0;
  while (num > 0) {
    digitalRoot += num % 10;
    num = Math.floor(num / 10);

    if (num === 0 && digitalRoot > 9) {
      num = digitalRoot;
      digitalRoot = 0
    }
  }
  return digitalRoot;
}

/*
Approach 1 Mathematical Digital Root

Formula for the Digital Root

There is a known formula to compute a digital root in a decimal numeral system

How to derive it? Probably, you already know the following proof from school, where it was used for a divisibility by 9: "The original number is divisible by 9 if and only if the sum of its digits is divisible by 9". Let's revise it briefly.

*/

var addDigits = function(num) {

  return null;
}

console.log('addDigits', addDigits(38))
// console.log('addDigits', addDigits(112))
// console.log('addDigits', addDigits(912))

export {
  count,
  addDigitsBruteForce,
  addDigits,
  addDigitsUseLoop
}
