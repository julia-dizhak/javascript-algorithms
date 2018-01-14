/**
 * Reverse a string
 *
 * @param {string}
 * @return {string}
 *
 */

'use strict';

// runtime O(n)
const reverseWithDecrementingLForLoop = (str) => {
    const len = str.length;
    let result = [];

    if (str !== '') {
        for (let i = len-1; i >= 0; i--) {
            result.push(str[i]);
        }
        return result.join('').toLowerCase();
    }
};

//console.log(reverseWithDecrementingLForLoop('Hello'));

// runtime O(1)?
const reverseWithRecursion = (str) => {
    str = str.toLowerCase();
    if (str === '') { // this is the terminal case that will end the recursion
        return '';
    } else {
        return reverseWithRecursion(str.substr(1)) + str.charAt(0);
    }

    //return (str === '') ? '' : reverseWithRecursion(str.substr(1)) + str.charAt(0); // ternary operator
};

console.log(reverseWithRecursion('GoodBye!'));

export { reverseWithDecrementingLForLoop, reverseWithRecursion };
