/*
Check if a Number is Odd or Even using Bitwise Operators
Given a number N, the task is to check whether the number is even or odd using Bitwise Operators.

Examples:

Input: N = 11
Output: Odd

Input: N = 10
Output: Even
*/

/*
Approach AND
*/
var isEven = function(n) {
  if ( (n & 1) !== 1) return true;
  return false;
}

var isOdd = function(n) {
  if (n & 1) return true;
  return false;
}

/*
Approach use XOR

The idea is to check whether last bit of the number is set or not. If last bit
is set then the number is odd, otherwise even.
*/

//console.log('isEven', isEven(2))

export {
  isEven,
  isOdd
}
