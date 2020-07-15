/*
Leetcode
264 Ugly number II
medium

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
An ugly number must be multiplied by either 2, 3, or 5 from a smaller ugly number.

Hint 3
The key is how to maintain the order of the ugly numbers. Try a similar approach
of merging from three sorted lists: L1, L2, and L3.

Hint 4
Assume you have U_k, the k^th ugly number. Then U_k+1 must be
Min(L1 * 2, L2 * 3, L3 * 5).
*/

/*
Approach Brute force
Loop for all positive integers until ugly number count is smaller than n,
if an integer is ugly than increment ugly number count.

This method is not time efficient as it checks for all integers until ugly
number count becomes n, but space complexity of this method is O(1)
This will TLE as Most numbers are not ugly.
*/
/**
 * @param {number} n
 * @return {number}
 */

function isUgly(n) {
  if (n <= 0 ) return false;
  if (n === 1) return true;
  const dividers = [2,3,5];
  for (const divider of dividers) {
    while ( n % divider === 0) {
      n = n / divider;
    }
  }
  return n === 1
}

var nthUglyNumber = function(n) {
  let num = 0;
  while (n > 0) {
    num++;
    if (isUgly(num)) n--;
  }
  return num;
};

/*
Approach 2: Generate all ugly number

How can be optimize is? As per the definition of Ugly Number is a number which
form of only product of 2, 3, & 5
number can be represent as in prime factorization like num = 2^a*3^b*5^c

Why not generate all the possible ugly number and store them in list sort and
return n-1 th (0 index based).
In this approach if we see sorting itself takes (p * log(p)) where p is the number
ugly numbers we generated till Integer.MAX_VALUE

Can be future optimize?

TC - 1690 O(1690) - we can have max 1690 ugly numbers till Integer.MAX_VALUE
so all 3 loops will run that may iterations while out ugly list will
take nlogn time where n - 1690.
*/

var nthUglyNumberGenerateAllNumbers = function(n) {
  let ugly = [];
  let m = Number.MAX_VALUE;
  m = 1690;

  // two = 1, 2, 4, 8, ...
  // three = 1, 3, 9, 27 ... (two = 1), 2, 6, 18, 54 ... (two = 2)
  // five = 1, 5, 25 ... (three = 1), 2, 10, 50 ... (three = 2)
  for (let two = 1; two <= m; two *= 2) {
    for (let three = two; three <= m; three *= 3) {
      for (let five = three; five <= m; five *=5) {
        ugly.push(five)
      }
    }
  }

  ugly = ugly.sort((a,b) => (a-b));
  return ugly[n-1];
}

/*
Approach DP bottom up = fill from base position

We can check hint2 and hint4:
Hint2
An ugly number must be multiplied by either 2, 3, or 5 from a smaller ugly number.

Hint 4
Assume you have U_k, the k^th ugly number. Then U_k+1 must be
Min(L1 * 2, L2 * 3, L3 * 5).

The ugly-number sequence is 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, …
because every number can only be divided by 2, 3, 5, one way to look at the
sequence is to split the sequence to three groups as below (multiplication table):
(1)    (2)    (3)
1×2    1×3    1×5
2×2    2×3    2×5
3×2    3×3    3×5
4×2    4×3    4×5
5×2    5×3    5×5
...

We can find that every subsequence is the ugly-sequence itself
(1, 2, 3, 4, 5, …)
multiply 2, 3, 5. Then we use similar merge method as merge sort, to get every
ugly number from the three subsequence. Every step we choose the smallest one,
and move one step after.

Algorithm
1 Declare an array for ugly numbers: ugly[n]
2 Initialize first ugly number: ugly[0] = 1

3 Initialize three array index variables i2, i3, i5 to point to 1st element of
the ugly array: i2 = i3 = i5 =0;

4 Initialize 3 choices for the next ugly no:
  next2 = ugly[i2]*2;
  next3 = ugly[i3]*3
  next5 = ugly[i5]*5;

5 Now go in a loop to fill all ugly numbers until n

let see how it works
init: ugly = [1 0 0 ... 0]
i2 = i3 = i5 = 0

first iteration:
ugly[1] = Min(ugly[i2]*2, ugly[i3]*3, ugly[i5]*5) = Min(2,3,5) = 2
ugly = [1, 2]
i2 = 1, i3 = i5 = 0 (i1 got incremented)

2nd iteration:
ugly[2] = Min(ugly[i2]*2, ugly[i3]*3, ugly[i5]*5) = Min(4,3,5) = 3
ugly = [1,2,3]
i2 = i3 = 1, i5 = 0 (i3 got incremented)

3rd iteration:
ugly[3] = Min(ugly[i2]*2, ugly[i3]*3, ugly[i5]*5) = Min(4,6,5) = 4
ugly = [1,2,3,4]
i2 = 2, i3 = 1, i5 = 0 (i2 got incremented)

4th iteration:
ugly[4] = Min(ugly[i2]*2, ugly[i3]*3, ugly[i5]*5) = Min(6,6,5) = 5
ugly = [1,2,3,4,5]
i2 = 2, i3 = 1, i5 = 1 (i5 got incremented)

5th iteration:
ugly[5] = Min(ugly[i2]*2, ugly[i3]*3, ugly[i5]*5) = Min(6,6,10) = 5
if two minimum increase both indexes
i2 = 3, i3 = 3, i5 = 1 (i2 and i3 got incremented)

will continue ...

Complexity
time is O(n), auxiliary space is O(n)
*/

var nthUglyNumberDP = function(n) {
  if (!n) {
    return 0;
  }

  let ugly = new Array(n).fill(0);
  //let ugly = [];

  ugly[0] = 1;
  let index2 = 0, index3 = 0, index5 = 0; // the 2,3,5 indexes
  let nextFactor2, nextFactor3, nextFactor5;

  for (let i = 1; i < n; i++) {
    nextFactor2 = ugly[index2]*2; // during first iteration 2
    nextFactor3 = ugly[index3]*3; // 3
    nextFactor5 = ugly[index5]*5; // 5

    // In index2, index3, index5 we now have 3 candidates for the next number. Pick the
    // lowest one, to record in order
    // let min = Math.min(Math.min(factor2, factor3), factor5); // check
    let nextUglyNumber = Math.min(nextFactor2, nextFactor3, nextFactor5)
    ugly[i] = nextUglyNumber;
    if (nextUglyNumber === nextFactor2) index2++;
    if (nextUglyNumber === nextFactor3) index3++;
    if (nextUglyNumber === nextFactor5) index5++;
  }

  //console.log('ugly', ugly)
  return ugly[n-1];
};

// tests
// console.log('nthUglyNumberDP', nthUglyNumberDP(6))

export {
  nthUglyNumber,
  nthUglyNumberGenerateAllNumbers,
  nthUglyNumberDP
}
