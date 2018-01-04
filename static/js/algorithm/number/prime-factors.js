/**
 * Prime factors
 *
 * @param {number}
 * @return {arrayp[number]}
 *
 */

'use strict';

// if number is a prime than runtime O(n) ?
// else log2 n
// x/2
const primeFactors = num => {
    let factors = [],
        divisor = 2;

    while (num > 2) {
        if (num % divisor === 0) {
            factors.push(divisor);
            num = num / divisor;
        } else {
            divisor++;
        }
    }
    return factors;

};
console.log('primeFactors -->', primeFactors(3));
