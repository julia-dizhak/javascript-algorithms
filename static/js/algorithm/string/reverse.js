/**
 * Reverse a string
 *
 * runtime O(n)
 *
 * @param {string}
 * @return {string}
 *
 */

'use strict';

const reverseWithDecrementingLForLoop = (str) => {
    const len = str.length;
    let result = [];

    for (let i = len-1; i >= 0; i--) {
        result.push(str[i]);
    }

    return result.join('').toLowerCase();
};

console.log(reverseWithDecrementingLForLoop('Hello'));

export { reverseWithDecrementingLForLoop };
