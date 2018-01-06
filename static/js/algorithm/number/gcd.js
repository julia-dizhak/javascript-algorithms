/**
 * Greatest common divisor of 2 numbers
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

console.log('greatestCommonDivisor-->', greatestCommonDivisor(2,4));

// Euclidean_algorithm
// function gcd(a, b)
//     if b = 0
//        return a;
//     else
//        return gcd(b, a mod b);
// O(h2)

export { greatestCommonDivisor};
