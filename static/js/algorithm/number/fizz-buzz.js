/**
 * Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
 *
 * 1
 * 2
 * 'Fizz'
 * 4
 * 'Buzz'
 * ..
 *
 * @param {for loop numbers}
 * @return {or number or string}
 */

'use strict';

// runtime O(n)
const fizzBuzz = () => {
    let output;

    for (let index = 1; index < 101; index++) {
        const isFizz = index % 3 === 0,
            isBuzz =  index % 5 === 0,
            isFizzBuzz = index % 5 === 0;

        if (isFizzBuzz) {
            output = ('FizzBuzz');
        }
        else if (isFizz) {
            output = ('Fizz');
        } else if (isBuzz) {
            output = ('Buzz');
        } else {
            output = index;
        }
        console.log(output);
    }

    return output;
};

console.log(fizzBuzz());
