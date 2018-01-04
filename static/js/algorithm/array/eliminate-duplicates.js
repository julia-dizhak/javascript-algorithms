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
let eliminateDuplicates = function(arr) {
    let len = arr.length,
        output = [],
        obj = {};

    for (let i = 0; i < len; i++) {
        obj[arr[i]] = 0; // obj['p']
    }
    //console.log(obj);

    for (let i in obj) {
        output.push(i);
    }

    output = output.map((item) => {
        return parseInt(item, 10);
    });

    return output;
};

console.log('eliminateDuplicates -->', eliminateDuplicates([4,3,1,11,2,7,8,2,3,2,1,1,1]));
