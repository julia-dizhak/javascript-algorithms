/*
getBit
This method shifts 1 over by i bits
*/

/**
 *
 * @param {*} num
 * @param {*} index
 */
function getBit(num, index) {
  // creates a value that looks like 00010000
  const mask = 1 << index;
  // by performing AND with num we clear all bits other that the bit at bit index
  // finally we compare that to 0
  // if that new value is not zero, then bit index must have a 1. Otherwise, bit is a 0
  return (num & mask) !== 0;
}

// tests
// console.log('getBit', getBit(5,0)); // 1
// console.log('getBit', getBit(5,1)); // 0
// console.log('getBit 0', getBit(2,0));
// console.log('getBit 0', getBit(2,1));

/*
testBit
Given a number, write a method that tests if its i-th bit is set.

We'll say that the bits are numbered from the least significant bit (on the right)
to the most significant bit (on the left).

So, the binary number 0000 0001 has the 0th bit set and all the rest of its bits
are clear (not set)

Answer
We can test if the value has a specific bit set using a left shift with an and operator.

First, we'll create a mask by taking 1 and shifting it left until the set bit
is at the index we want to test.

Values used in bitwise operations are sometimes called masks.
(The nickname comes from the fact that the values often hide certain bits
and reveal others, like a costume mask.)

Here's a mask that can be or'd with a number to set its
fifth bit: 0010 0000.
And, here's a mask that can be and'd with a number to clear its third
bit: 1111 0111

1 << 0  →  0000 0001   // for the 0th bit
1 << 1  →  0000 0010   // for the 1st bit
1 << 2  →  0000 0100   // for the 2nd bit
...
1 << 7  →  1000 0000   // for the 7th bit

Then, we'll & the shifted 1 with the value we're testing. If the result is zero,
then the bit isn't set; otherwise, it is.

& 0101 1101
  0010 0000
-----------
  0000 0000

& 0101 1101
  0100 0000
-----------
  0100 0000

*/

/**
 * Returns True if number has the index'th bit set and False otherwise.
 * @param {*} number
 * @param {*} index
 */
function testBit(number, index) {
  let mask = 1 << index;
  // mask !== 0  => true || false => 1 || 0
  return number & mask !== 0
}

// console.log(testBit(1, 0))
// console.log(testBit(1, 1)) ; // start from 0?
// console.log(testBit(1, 2));


export {
  testBit
}
