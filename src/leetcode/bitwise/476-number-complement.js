/**
 * Leetcode javascript
 * 1009. Complement of Base 10 Integer
 * 476. Number complement
 * easy
 *
 * Given a positive integer, output its complement number.
 * The complement strategy is to flip the bits of its binary representation.
 * 5 -> 101
 * 11 -> 1011
 * Note that except for N = 0, there are no leading zeroes in any binary representation
 *
*/

/**
 * Approach 1 Flip Bit by bit
 * To move along the number and flip bit by bit.
 *
 * Initiate 1-bit variable which will be used to flip bits one by one. Set it to the smallest register bit = 1.
 * Initiate the marker variable which will be used to stop the loop over the bits todo = num.
 *
 * Loop over the bits. While todo != 0:
 * Flip the current bit: num = num ^ bit.
 * Prepare for the next run. Shift flip variable to the left and todo variable to the right.
 * Return num
 *
 *  Time Complexity: O(1), since we're doing not more than 32 iterations here
 *  Space complexity O(1)
 */

var flipBitByBit = function(num) {
  let bit = 1;
  let todo = num;

  while (todo) {
    // flip current bit
    num = num ^ bit;
    // prepare for next run
    bit = bit << 1; // Shift flip variable to the left
    todo = todo >> 1; // todo variable to the right
  }
  return num
}

/*
  Approach 2 use toString and parseInt

  Time complexity is O(1), because toString operates from 2 through 36 bits.
*/
var bitwiseComplement = function(N) {
  const bitmask = N.toString(2);
  let flip = [];
  for (let i = 0; i < bitmask.length; i++) {
    let bit = 1;
    if (Number(bitmask[i]) === 1) {
      bit = 0
    }
    flip.push(bit)
  }

  const complement = flip.join('');
  return parseInt(complement, 2);
}

// second variant
var findComplement = function(N) {
  const bitmask = N.toString(2);
  let str = '';
  for (const i of bitmask) {
    str += +!(i-0);
  }
  return parseInt(str, 2);
}


// approach without toString and parseInt
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
  the math
  (1) 11 / 2 = 5
  (1) 5 / 2 = 2
  (0) 2 / 2 = 1
  (1) 1 / 2 = 0

  todo: doesn't work with 0 case
*/
function decimalToBinary(inputNum) {
  let binary = [];

  while (inputNum > 0) {
    if (inputNum % 2 === 1) {
      binary.splice(0,0,1);
      inputNum = (inputNum - 1) / 2;
    } else {
      binary.splice(0,0,0);
      inputNum /= 2;
    }
  }

  binary = binary.join('');
  return binary;
}

export {
  bitwiseComplement, findComplement, bitwiseComplementUseReduce, flipBitByBit,
  decimalToBinary
}
