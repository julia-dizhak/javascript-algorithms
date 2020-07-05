// todo check a solution
// write a test -2147483648
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

import { zenburn } from "react-syntax-highlighter/dist/esm/styles/hljs";

/**
 * @param {number} num
 * @return {boolean}
 */
// doesnt' work solution
// var isUgly = function(num) {
//   if (num <= 0) return false;
//   if (num === 1) return true;
//   if (num === 2) return true;

//   let divisor = 2;
//   let factors = [];
//   //debugger
//   while (num >= divisor) {
//     if (num % divisor === 0) {
//       factors.push(divisor);
//       num = num / 2; // remove duplicates
//     } else divisor++;
//   }

//   console.log('factors', factors);

//   // /final condition to check if the array has anything greater than 5 because we ideally need array with 2, 3 or 5
//   for (let i = 0; i < factors.length; i++) {
//     if (factors[i] > 5) return false; // is it good solution
//   }

//   return true
// };


// var isUgly = function(num) {
//   if(num <= 0) return false;
//   while(parseInt(num/2)===num/2) { num/=2; }  // using the fact that
//   while(parseInt(num/3)===num/3) { num/=3; }  // multiplication is commutative,
//   while(parseInt(num/5)===num/5) { num/=5; }  // hence the order doesn't matter
//   return num===1;
// };
// It works equally well to simply check if num%prime === 0 instead of parseInt(num/prime)===num/prime

/*
Approach recursion

time
complexity
*/
var isUgly = function(num) {
  if (num <= 0) return false;

  if (num === 1 || num === 2 || num === 3 || num === 5) {
    return true;
  }
  if (num % 2 === 0) return isUgly(num / 2);
  if (num % 3 === 0) return isUgly(num / 3);
  if (num % 5 === 0) return isUgly(num / 5);
  return false;
};
console.log('isUgly', isUgly(8))
console.log('isUgly', isUgly(14))
console.log('isUgly', isUgly(21))

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

console.log('nthUglyNumber', nthUglyNumber(10))


/*
So the while works by turning off the right most bit in n in each iteration, the details are as follows.

the "while(n)" par is equivalent to while there is a bit set go into the loop

when were in the loop the "++dist" just counts how may bits we have turned off(set to 0) so far

the "n &= n-1" turns off(set to 0) the right most 1 bit, you can see this by just trying a few examples.

so where we exit the loop we know that n must be zero and hence dist will contain the number of bits set to one in x^y.

That's how the loop works.

n = 100000, then n - 1 = 011111 and n & (n-1) = 000000,
 */
// O(1) time and space complexity.

var hammingDistance = function(x, y) {
  let distCounter = 0;
  if (x === y) return distCounter;
  let diffOfBits = x^y;

  return countOne(diffOfBits)
}

function countOne(n) {
  let count = 0;
  while (n !== 0) {
    n = n & (n-1);
    count++;
  }
  return count;
}
// class Solution {
//   public:
//       int hammingDistance(int x, int y) {
//           int dist = 0, n = x ^ y;
//           while (n) {
//               ++dist;
//               n &= n - 1;
//           }
//           return dist;
//       }
//   };


console.log('hammingDistance', hammingDistance(1,4))

export {
  isUgly
}
