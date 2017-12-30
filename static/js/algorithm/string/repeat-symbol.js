/**
 * Find duplicates symbols in a string.
 * runtime O(n)
 *
 * @param {string, string}
 * @return {number}
 *
 */

'use strict';

function findDuplicateSymbol(symbol, str) {
    let count = 0,
        len = str.length;

    for (let i = 0; i < len; i++) {
        if ( str[i] === symbol ) {
            count++;
        }
    }

    return count;
}

console.log(findDuplicateSymbol('a', 'apple') );
