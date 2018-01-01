/**
 * Prime number
 *
 * @param {number}
 * @return {boolean: true or false}
 *
 */

'use strict';

// runtime O(n)
function isPrimeNumberByWhileLoop(num) {
    let divisor = 2;

    if (num < 2) {
        return num + ' a number is not greater than 1';
    }
    if (num === 2) {
        return num + ' is a prime number';
    }

    while (num > divisor) {
        if (num % divisor === 0) {
            return num + ' is not prime number';
        } else {
            divisor++;
        }
    }
    return num + ' is a prime number';

}
//console.log('isPrimeNumberByWhileLoop', isPrimeNumberByWhileLoop(0));

// runtime O(n)
const isPrimeNumberByForLoop = num => {
    if (num < 2) {
        return num + ' a number is not greater than 1';
    } else if (num === 2) {
        return num + ' is a prime number';
    } else if (num > 2) {
        for (let i = 2; i < num; i++) {
            if ( num % i === 0) {
                return num + ' is not prime number';
            } else {
                return num + ' is prime number';
            }
        }
    }

};
//console.log('isPrimeNumberByForLoop', isPrimeNumberByForLoop(2));

// runtime O(sqrt(n))
// a number will never be divisible by a number bigger than half of its values. So, we dont have to loop 50%
const isPrimeNumberRuntimeSqrt = num => {
    if (num < 2) {
        return num + ' a number is not greater than 1';
    }
    if (num === 2) {
        return num + ' is a prime number';
    }

    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        console.log(i, s);
        if ( num % i === 0) {
            return num + ' is not prime number';
        }
    }
    return num + ' is prime number';
};
console.log('isPrimeNumberRuntimeSqrt', isPrimeNumberRuntimeSqrt(9));
