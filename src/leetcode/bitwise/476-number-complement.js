/*
Leetcode
476. Number complement / 1009. Complement of Base 10 Integer
easy

Given a positive integer, output its complement number.
The complement strategy is to flip the bits of its binary representation.
5 -> 101
11 -> 1011

Note that except for N = 0, there are no leading zeroes in any binary representation

Example 1:
Input: num = 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits),
and its complement is 010. So you need to output 2.

Example 2:
Input: num = 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits),
and its complement is 0. So you need to output 0.

Hint
A binary number plus its complement will equal 111....111 in binary. Also, 
N = 0 is a corner case.
*/


/*
Approach Use trick N + complement = 1

Hints
what is the relationship between input and output
input + output = 111....11 in binary format

Is there any corner case?
0 is a corner case expecting 1, output > input

Intuition
Let's find the first number X that X = 1111....1 > N
And also, it has to be noticed that,
N = 0 is a corner case expecting 1 as result

N + bitwiseComplement(N) = 11....11 = X
Then bitwiseComplement(N) = X - N

for those who wonder why the +1 is being added try looking at the pattern below, 
maybe it helps someone:
(number) => (how-number-is-derived) => binary-string
x = 1 => 1 => 1
x = 3 => (2*1 + 1) => 11
x = 7 => (3*2 + 1) => 111
x = 15 => (7*2 + 1) => 1111

Time is O(logN)
O(1) Space
*/
var bitwiseComplementUseTrick = function(N) {
  if (N === 0) return 1;
  if (N === 1) return 0;

  let x = 1;
  while (N > x) x = x * 2 + 1;
  return x - N;
}


/*
Approach 1 Flip Bit by bit

flip current bit using XOR operator

To move along the number and flip bit by bit.

Initiate 1-bit variable which will be used to flip bits one by one.
Set it to the smallest register bit = 1.
Initiate the marker variable which will be used to stop the loop over the bits
todo = num.

Loop over the bits. While todo != 0:
Flip the current bit: num = num ^ bit.
Prepare for the next run. Shift flip variable to the left and todo variable to
the right. Return num

Time Complexity: O(1), since we're doing not more than 32 iterations here
Space complexity O(1)
*/

var flipBitByBit = function(num) {
  if (num === 1) return 0;
  if (num === 0) return 1;

  let bit = 1;
  let todo = num;

  while (todo) {
    //console.log('line 1', num.toString(2))
    // flip current bit
    num = num ^ bit; // X ^ 1s = ~ X
    //console.log('line 2', num.toString(2))

    // prepare for next run
    //console.log('line 3', bit.toString(2))
    bit = bit << 1; // Shift flip variable to the left
    //console.log('line 4', bit.toString(2))

    todo = todo >> 1; // todo variable to the right
    //console.log('line 5', todo.toString(2))
  }
  return num;
}
//console.log('flipBitByBit', flipBitByBit(10))

function findComplementUsePow(num) {
  let n = 0;
  while (n < num) {
    n = (n << 1) | 1;
  }
  return n - num
}

function findComplementUsePowVariant1(N) {
  let i = 1; // i = pow(2, x) – 1; c is the smallest number >= N

  while (i < N) {
    i = (i << 1) | 1;
    //i = i*2 + 1;  same as above
  }

  //return i - N; // also ok
  return N ^ i;
}
//console.log('findComplementUsePow', findComplementUsePow(5))

/*
  Approach 2 use toString and parseInt

  Time complexity is O(1), because toString operates from 2 through 36 bits.
*/
var bitwiseComplement = function(N) {
  const mask = N.toString(2);
  let flip = [];
  for (let i = 0; i < mask.length; i++) {
    let bit = 1;
    if (Number(mask[i]) === 1) {
      bit = 0
    }
    flip.push(bit)
  }

  const complement = flip.join('');
  return parseInt(complement, 2);
}

// second variant
var findComplement = function(N) {
  const mask = N.toString(2);
  let str = '';
  for (const i of mask) {
    str += +!(i-0);
  }
  return parseInt(str, 2);
}

/*
Approach without toString and parseInt
*/
const power = function(base, exponent) {
  if (exponent === 0) return 1
  return base * power(base, exponent - 1)
}

var bitwiseComplementUseReduce = function(N) {
  const num = N.toString(2);
  let flip = [];
  for (let i = 0; i < num.length; i++) {
    let bit = 1;
    if (Number(num[i]) === 1) {
      bit = 0
    }
    flip.push(bit)
  }

  const len = flip.length;
  const complement = flip.map((val, index) => {
    index = index + 1; // todo explain
    return power(2, len - index) * val
  })

  const decimal = complement.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0)

  return decimal
}

/*
Approach Decimal to Binary + use Stack

Algorithm
1. Convert Decimal to binary.
2. Take its compliment
3. Convert back to equivalent Decimal.

the math
(1) 10 / 2 = 5
(1) 5 / 2 = 2
(0) 2 / 2 = 1
(1) 1 / 2 = 0

Time is O(log n)
space is O(log n)
*/
function decimalToBinary(N) {
  if (N === 0) return 1;
  if (N === 1) return 0;
  // decimal to binary using Stack
  let remStack = [],
    rem,
    binaryString = '';

  while (N > 0) {
    rem = Math.floor(N % 2);
    remStack.push(rem);
    N = Math.floor(N / 2);
  }

  while (remStack.length) {
    binaryString += remStack.pop().toString();
  }

  // complement binary string
  let complementString = '';
  for (let i = 0; i < binaryString.length; i++) {
    if (Number(binaryString[i]) === 0) {
      complementString +='1'
    } else {
      complementString +='0'
    }
  }

  // Convert back to equivalent Decimal
  return parseInt(complementString, 2)
}
//console.log('decimalToBinary', decimalToBinary(10))

export {
  bitwiseComplement, findComplement, bitwiseComplementUseReduce,
  flipBitByBit,
  decimalToBinary,
  findComplementUsePowVariant1, findComplementUsePow,
  bitwiseComplementUseTrick
}
