/*
Check if a Number is Odd or Even using Bitwise Operators
Given a number N, the task is to check whether the number is even or odd using 
Bitwise Operators.

Examples:

Input: N = 11
Output: Odd

Input: N = 10
Output: Even
*/

/*
Approach AND

The idea is to check whether last bit of the number is set or not. If last bit
is set then the number is odd, otherwise even.

5 - 101
3 - 11
2 - 10
4 - 100
*/
var isEven = function(n) {
  if ( (n & 1) !== 1) return true;
  return false;
}

var isOdd = function(n) {
  if (n & 1) return true;
  return false;
}

//console.log('isOdd', isOdd(5))

export {
  isEven,
  isOdd
}
