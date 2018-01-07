/**
 * Eliminate all duplicates in array
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 *
 * Input: [4,3,2,7,8,2,3,2,1,1,1,1]
 * Output: [1,2,3,4,7,8]
 *
 * @param {array[number]}
 * @return {array[number]}
 */

'use strict';

// runtime O(1)
// will start a while looping and keep an object/associated array.
// If I find an element for the first time, I will set it is value as true (that will tell me element added once.).
// If I find an element in the exists object, I will not insert it into the return array.
const eliminateDuplicates = (arr) => {
    let len = arr.length,
        output = [],
        exists = {},
        element;

    for (let i = 0; i < len; i++) {
        element = arr[i];

        if (!exists[element]) {
            output.push(element);
            exists[element] = true;
        }
    }

    // 2 for loops
    //for (let i = 0; i < len; i++) {
    //     exists[arr[i]] = 0; // exists['p']
    // }
    // for (let i in exists) {
    //     output.push(i);
    // }

    // converting string into array integers
    output = output.map((item) => {
        return parseInt(item, 10);
    });

    return output;
};

console.log('eliminateDuplicates -->', eliminateDuplicates([4,3,1,11,2,7,8,2,3,2,1,1,1]));

export { eliminateDuplicates };