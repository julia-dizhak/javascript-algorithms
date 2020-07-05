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
time O(logN)
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

time O(logN) because everytime n becomes n/2 or n/3 or n/5
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

// console.log('isUglyGreatestDivide', isUglyGreatestDivide(8))




// public boolean isUgly(int num) {
//   for (int i = 2; i < 6 && num > 0; i++)
//       while (num % i == 0)
//           num /= i;
//   return num == 1;
// }
/*
Ugly number II

Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

Example:
Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly
numbers.

Note:
1 is typically treated as an ugly number.
n does not exceed 1690.

Hint 1
The naive approach is to call isUgly for every number until you reach the nth one.
Most numbers are not ugly. Try to focus your effort on generating only the ugly ones.

Hint2
*/

/*
Brute force
This will TLE as Most numbers are not ugly.
*/
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let num = 0;
  while (n > 0) {
    num++;
    if (isUgly(num)) n--;
  }
  return num;
  // for (let i = 0; i <= n; i++) {
  //   if (isUgly(i)) count++
  // }
  // return count
};

/*
Approach 2: Generate all ugly number
How can be optimize is? As per the definition of Ugly Number is a number which
form of only product of 2, 3, & 5
number can be represent as in prime factorization like num = 2^a 3^b 5^c - ^ power symbol.
Why not generate all the possible ugly number and store them in list sort and
return n-1th (0 index based).
In this approach if we see sorting itself takes (p * log(p)) where p is the number
ugly numbers we generated till Integer.MAX_VALUE

Can be futhure optimize???

TC - 1690 O(1690) - we can have max 1690 ugly numbers till Integer.MAX_VALUE so all 3 loops will run that mnay itetrations while out ugly list will take nlogn time where n - 1690.
*/

// todo
// https://leetcode.com/problems/ugly-number-ii/discuss/718959/Three-Solution-or-Brute-Force-or-Generate-All-or-DP-Explained
// check hints
// https://leetcode.com/problems/ugly-number-ii/discuss/329484/Heavily-commented-JavaScript-bottom-up-DP-solution
// class Solution {
//   int nthUglyNumber(int n) {
//       List<Integer> ugly = new ArrayList<>();
//       long two, three, five, m = Integer.MAX_VALUE; // long - not let overflow.
//       for (two = 1; two <= m; two *= 2)
//           for (three = two; three <= m; three *= 3)
//               for (five = three; five <= m; five *= 5)
//                   ugly.add((int) five);
//       Collections.sort(ugly); // sorting list
//       return ugly.get(n - 1); // index 0 based
//   }
// }

//console.log('nthUglyNumber', nthUglyNumber(10))


export {
  isUgly,
  isUglyGreatestDivide
}
