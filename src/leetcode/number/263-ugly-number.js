/*
Leetcode
263 Ugly number
easy

Write a program to check whether a given number is an ugly number.
Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

Example 1:
Input: 6
Output: true
Explanation: 6 = 2 × 3

Example 2:
Input: 8
Output: true
Explanation: 8 = 2 × 2 × 2

Example 3:
Input: 14
Output: false
Explanation: 14 is not ugly since it includes another prime factor 7.

Note:
1 is typically treated as an ugly number.
Input is within the 32-bit signed integer range: [−231,  231 − 1].
*/


/*
Approach recursion

complexity
time O(log n)
space is O(n)
*/
/**
 * @param {number} num
 * @return {boolean}
*/
var isUgly = function(num) {
  // basic cases: <= 0 and == 1
  if (num <= 0) return false;
  if (num === 1) return true;
  //if (num === 2 || num === 3 || num === 5) return true;

  // other cases: since the number can contain the factors of 2, 3, 5, I just
  // remove those factors. So now, I have a number without any factors of 2, 3, 5.
  if (num % 2 === 0) return isUgly(num/2);
  if (num % 3 === 0) return isUgly(num/3);
  if (num % 5 === 0) return isUgly(num/5);
  // after the removing, the number (new number) can contain a) the factor that
  // is prime and meanwhile it is >= 7, or b) the factor that is not the prime and
  // the factor is not comprised of 2, 3 or 5. In both cases, it is false
  // (not ugly number).
  return false
}

/*
Approach Greatest divide by [2,3,5]

time O(logN) because each time n becomes n/2 or n/3 or n/5
*/
var isUglyGreatestDivide = function(num) {
  if (num <= 0) return false;
  let factors = [2,3,5];

  for (const factor of factors) {
    while (num % factor === 0) {
      num = num / factor;
    }
  }
  return num === 1
}

// tests
//console.log('isUglyGreatestDivide', isUglyGreatestDivide(6))

export {
  isUgly,
  isUglyGreatestDivide
}
