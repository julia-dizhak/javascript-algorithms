/**
 * isPermutation 'rat' --> 'tar'
 * runtime O(n)
 *
 * @param {string}
 * @return {} (true or false?)
 *
 */

'use strict';

function isPermutation(str1, str2) {
    if (str1.length !== str2.length) {
        return 'Strings not equal';
    }

    let s1 = str1.split('').sort().join(''),
        s2 = str2.split('').sort().join('');

    if (s1 === s2) {
        return true;
    }
}

console.log(isPermutation('dogs', 'dog'));
