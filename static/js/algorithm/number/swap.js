/**
 * Swap a number
 *
 * @param {number1, number2}
 * @return {number2, number1}
 *
 */

'use strict';

// runtime O(n)?
const swapNumber = (a, b) => {
    console.log('before swap: ','a: ', a, 'b: ', b);
    b = b - a; // b = 4 - 3 -> 1

    console.log(b);

    a = a + b; // a = 3 + 1 = 4 -> b
    b = a - b; // b = 4 - 1 = 3 -> a

    console.log('after swap: ','a: ', b, 'b: ', a);

    a = a ^ b;

};

console.log(swapNumber(3, 4));

//export { reverseWithDecrementingLForLoop, reverseWithRecursion };
