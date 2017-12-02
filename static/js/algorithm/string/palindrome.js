/**
 * Check string for palindrome.
 * A palindrome is a word, phrase, number, or sequence of characters which reads the same backward or forward.
 * runtime O(n)
 *
 */

/**
 * @param {string}
 * @return {}
 *
 */

'use strict';

function isStringPalindrome(str) {
    let palindrome = str.split('').reverse().join('');

    if ( str === palindrome) {
        return true;
    } else {
        return false;
    }
}

//console.log(isStringPalindrome('level'));
//console.log(isStringPalindrome('test'));
