/**
 * Find duplicates symbols in a string
 *
 */

/**
 * @param {string, string}
 * @return {number}
 *
 */

'use strict';

// runtime O(n)
function findDuplicateSymbol(symbol, str) {
    let count = 0,
        len = str.length;

    console.log(len);
    for (let i = 0; i < len; i++) {
        if ( str[i] === symbol ) {
            count++;
        }
    }

    return count;

}

// console.log(findDuplicateSymbol('a', 'apple') );
