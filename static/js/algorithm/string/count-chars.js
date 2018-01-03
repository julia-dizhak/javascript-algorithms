/**
 * Count the number of occurrences of a character in a string 'I want to eat two apples. Apples are good.';
 * result = {
 *     " ": 8
 *     .: 2
 *     a: 5,
 *     d: 1,
 *     e: 4,
 *     g: 1,
 *     ...
 * }
 *
 * runtime O(n)
 *
 * @param {string}
 * @return {object}
 *
 */

'use strict';

const countNumberOfOccurrences = str => {
    const len = str.length;
    let result = {};

    for (let i = 0; i < len ; i++) {
        //console.log(` value in result for string ${str[i]} ${result[i]}`);

        let iChar = str[i].toLowerCase();

        if (result[iChar] === undefined) {
            result[iChar] = 1;
        } else {
            result[iChar] += 1;
        }

    }
    return result;
};

console.log('countNumberOfOccurrences -->', countNumberOfOccurrences('I want to eat two apples. Apples are good.'));
