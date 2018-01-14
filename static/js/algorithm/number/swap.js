/**
 * Swap a number
 *
 * @param {number1, number2}
 * @return {number2, number1}
 *
 */

'use strict';

// runtime O(1)
const swapNumber = (a, b) => {
    console.log('before swap: ','a: ', a, 'b: ', b);
    b = b - a; // b = 4 - 3 -> 1
    a = a + b; // a = 3 + 1 = 4 -> b
    b = a - b; // b = 4 - 1 = 3 -> a

    return [a, b];
    //a = a ^ b;

};

//console.log('after swap: b, a --> ', swapNumber(3, 4));

// O(1)
const swapNumberWithTemp = (a, b) => {
    let temp;

    temp = a;
    a = b;
    b = temp;

    return [a, b];
};

console.log('after swap: b, a --> ', swapNumberWithTemp(3, 4));
//export { reverseWithDecrementingLForLoop, reverseWithRecursion };
