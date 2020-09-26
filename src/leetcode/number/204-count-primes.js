// todo check a solution
/*
Leetcode
204 Count primes

Count the number of prime numbers less than a non-negative number, n.

Example:
Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

Hint 1
Let's start with a isPrime function. To determine if a number is prime, we need
to check if it is not divisible by any number less than n.
The runtime complexity of isPrime function would be O(n) and hence counting
the total prime numbers up to n would be O(n2). Could we do better?

Hint 2
As we know the number must not be divisible by any number > n / 2, we can
immediately cut the total iterations half by dividing only up to n / 2.
Could we still do better?

Hint 3
Let's write down all of 12's factors:

2 × 6 = 12
3 × 4 = 12
4 × 3 = 12
6 × 2 = 12
As you can see, calculations of 4 × 3 and 6 × 2 are not necessary. Therefore, we only need to consider factors up to √n because, if n is divisible by some number p, then n = p × q and since p ≤ q, we could derive that p ≤ √n.

Our total runtime has now improved to O(n1.5), which is slightly better. Is there a faster approach?

public int countPrimes(int n) {
   int count = 0;
   for (int i = 1; i < n; i++) {
      if (isPrime(i)) count++;
   }
   return count;
}

private boolean isPrime(int num) {
   if (num <= 1) return false;
   // Loop's ending condition is i * i <= num instead of i <= sqrt(num)
   // to avoid repeatedly calling an expensive function sqrt().
   for (int i = 2; i * i <= num; i++) {
      if (num % i == 0) return false;
   }
   return true;
}
*/

// todo hint 2, 3
// https://leetcode.com/problems/count-primes/
// check stackoverflow
// todo check olf algorithmes
function isPrime(n) {
  if (n <= 1) return false;
  // if ( n === 1) return true;
  // if ( n === 2) return true;

  // let divisor = 2;

  // while (n > divisor) {
  //   if (n % divisor === 0) return false;
  //   else divisor++;
  // }
  // return true

  // Loop's ending condition is i * i <= num instead of i <= sqrt(num)
   // to avoid repeatedly calling an expensive function sqrt().

  for (let i = 2; i*i <= n ; i++) {
    if (n % i === 0) return false
  }
  return true
}

console.log('isPrime', isPrime(10))

// prime factors

// var primeFactors = function(n) {
//   let factors = [];
//   let divisor = 2;

//   if (n === 1) return 1;
//   if (n === 2) return [1,2];

//   while (n > divisor) {
//     //debugger
//     if (n % divisor === 0) {
//       factors.push(divisor);
//       n = n / divisor; // explanation
//     } else divisor++
//   }

//   return factors
// };
//console.log('primeFactors', countPrimes(14))

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) count++
  }
  return count
};


console.log('countPrimes', countPrimes(10))

export {
  countPrimes
}
