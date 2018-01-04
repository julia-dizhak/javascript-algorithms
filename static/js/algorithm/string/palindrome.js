/**
 * Check for palindrome.
 * A palindrome is a word, phrase or sequence of characters which reads the same backward or forward.
 * runtime O(n)
 *
 * @param {string}
 * @return {boolean}
 *
 */

'use strict';

function isStringPalindrome(str) {
    let removeSpaceFromStr = str.replace(/\s/g, ''),
        palindrome = removeSpaceFromStr.split('').reverse().join('');

    return (removeSpaceFromStr === palindrome) ? (palindrome + ' is a palindrome') : false;
}

console.log('isStringPalindrome-->', isStringPalindrome('race car'));
