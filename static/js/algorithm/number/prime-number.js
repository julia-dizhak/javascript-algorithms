/**
 * Prime number
 *
 * @param {number}
 * @return {boolean: true or false}
 *
 */

'use strict';

// runtime O(n)
function isPrimeNumberWithWhileLoop(num) {
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
console.log('isPrimeNumberWithWhileLoop', isPrimeNumberWithWhileLoop(0));

// runtime O(n)
const isPrimeNumberWithForLoop = num => {
    if (num < 2) {
        return num + ' a number is not greater than 1';
    } else if (num === 2) {
        return num + ' is a prime number';
    } else {
        for (let i = 2; i < num; i++) {
            if ( num % i === 0) {
                return num + ' is not prime number';
            } else {
                return num + ' is prime number';
            }
        }
    }

};
console.log('isPrimeNumberWithForLoop', isPrimeNumberWithForLoop(2));

// runtime O(sqrt(n))
// a number will never be divisible by a number bigger than half of its values. So, we dont have to loop 50%;
// if a number is not divisible by 3. (if it is divisible by 3, then it wouldn't be a prime number);
// then it would be divisible any number bigger than the 1/3 of its value;
// divisor would be less than Math.sqrt (n)
const isPrimeNumberWithForLoopRuntimeSqrt = num => {
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
console.log('isPrimeNumberWithForLoopRuntimeSqrt', isPrimeNumberWithForLoopRuntimeSqrt(100));
