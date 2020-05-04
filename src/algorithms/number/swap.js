/**
 * Swap a number
 *
 * @param {number1, number2}
 * @return {number2, number1}
 */

/*
  Approach 1
  Runtime O(1)
*/
const swap = function(a,b) {
  //console.log('before swap: ','a: ', a, 'b: ', b);
  b = b - a; // b = 4 - 3 = 1
  a = a + b; // a = 3 + 1 = 4
  b = a - b; // b = 4 - 1 = 3

  return [a, b];
}

/*
  Use temp
  Runtime O(1)
*/
const swapUseTemp = function(a,b) {
  let temp = a;
  a = b;
  b = temp;

  return [a,b];
}

/**
 * Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones),
 * rather than as decimal, hexadecimal, or octal numbers.
 *
 * For example, the decimal number nine has a binary representation of 1001.
 * Bitwise operators perform their operations on such binary representations,
 * but they return standard JavaScript numerical values.
 */

const swapNumberUseBitwise = (a, b) => {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  return [a, b];
};

export { swap, swapUseTemp, swapNumberUseBitwise  }
