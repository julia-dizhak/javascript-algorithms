/**
 * Check string for palindrome.
 * A palindrome is a word, phrase, number, or sequence of characters which reads the same backward or forward.
 * runtime O(n)
 *
 * @param {string}
 * @return {boolean}
 *
 */

'use strict';

function isStringPalindrome(str) {
    let palindrome = str.split('').reverse().join('');

    return (str === palindrome) ? true: false;
}

console.log(isStringPalindrome('level'));
console.log(isStringPalindrome('test'));
