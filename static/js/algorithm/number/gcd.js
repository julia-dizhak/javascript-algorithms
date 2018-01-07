/**
 * Greatest common divisor of 2 numbers
 * Euclidean algorithm
 *
 * @param {number, number}
 * @return {number}
 *
 */

'use strict';

const greatestCommonDivisor = (a, b) => {
    let divisor = 2,
        greatestDivisor = 1;

    if (a < 2 || b < 2) {
        return 1;
    }

    while (a >= divisor && b >= divisor) {
        if ( a % divisor === 0 && b % divisor === 0) {
            greatestDivisor = divisor;
        }
        divisor++;
    }

    return greatestDivisor;
};

console.log('greatestCommonDivisor-->', greatestCommonDivisor(1,3));

const greatestCommonDivisorWithFor = (a, b) => {
    let smallerDigit = a > b ? b : a,
        biggerDigit = a > b ? a : b;

    for (let i = smallerDigit; i > 0; i--) {
        if (smallerDigit % i === 0 && biggerDigit % i === 0) {
            return i;
        }
    }
};

// runtime O(n^2)
const euclideanWithRecursion = (a, b) => {
    if(!b) {
        return a;
    }

    // if (b === 0) {
    //     return a;
    // }

    else {
        return euclideanWithRecursion(b, a % b);
    }
};

export { greatestCommonDivisor, euclideanWithRecursion };

console.log('euclideanWithRecursion -->', euclideanWithRecursion(5,10));

// tests are failed
// const iterative = (a, b) => {
//     if (a === 0) {
//         return b;
//     }
//
//     while (b != 0) {
//         if (a > b) {
//             a = a - b;
//         } else {
//             b = b - a;
//         }
//     }
//
//     return a;
// };
