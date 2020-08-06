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

function count(n) {
  if (n <= 0) {
    //console.log(0);
    return;
  }
  else {
    //console.log(n);
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
Approach recursion

time is O(n)
space is O(n)
*/
var addDigitsUseRecursion = function(num) {
  if (num === 0) return 0;
  if (num < 10) return num;

  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return addDigitsUseRecursion(sum);
};

// print results
// By carefully observing the output, you would've noticed a pattern:
// for (let i = 0; i <  100; i++) {
//   console.log('i and addDigitsUseRecursion', i, addDigitsUseRecursion(i))
// }

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
  if (num < 10) return num;

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

dr_10(n)=0,if n=0
dr_10(n) = 9, if n=9k
dr_10(n) = n % 9, if n is not 9k

How to derive it? Probably, you already know the following proof from school,
where it was used for a divisibility by 9: "The original number is divisible
by 9 if and only if the sum of its digits is divisible by 9".
Let's revise it briefly.
The input number could be presented in a standard way ...
formula explanation
see https://leetcode.com/problems/add-digits/solution/


Explain Math explain the math behind this:
~input: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14
output: 0 1 2 3 4 5 6 7 8 9 1  2  3  4  5 6 7 8 9 1 2 3 ....

First you should understand:
10^k % 9 = 1 => 10 % 9 = 1, 100 % 9 = 1, 1000 % 9 = 1
a*10^k % 9 = a % 9
Then let's use an example to help explain.
Say a number x = 23456
x = 2*10000 + 3*1000 + 4*100 + 5*10 + 6
2 * 10000 % 9 = 2 % 9
3 * 1000 % 9 = 3 % 9
4 * 100 % 9 = 4 % 9
5 * 10 % 9 = 5 % 9
Then x % 9 = (2+3+4+5+6) % 9, note that x = 2* 10000 + 3 * 1000 + 4 * 100 + 5 * 10 + 6
So we have 23456 % 9 = (2 + 3 + 4 + 5 + 6) % 9

Other math explain
If an integer is like 100a+10b+c, then (100a+10b+c)%9=(a+99a+b+9b+c)%9=(a+b+c)%9

Time is O(1)
space is O(1)
*/

var addDigits = function(num) {
  if (num === 0) return 0;
  if (num % 9 === 0) return 9;
  else {
    return num % 9
  }
}

var addDigitsMath = function(num) {
  return (num === 0) ? 0 : 1 + (num - 1)%9;
}

//console.log('addDigits', addDigits(38))
//console.log('addDigits', addDigits(23456))
// console.log('addDigits', addDigits(10))
// console.log('addDigits', addDigits(1))
// console.log('addDigits', addDigits(99))
// console.log('addDigits', addDigits(112))
// console.log('addDigits', addDigits(912))

export {
  count,
  addDigitsBruteForce,
  addDigits,
  addDigitsUseLoop,
  addDigitsMath
}
