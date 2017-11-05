/**
 * Eliminate all duplicates in array
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 * Eliminate all duplicates the in this array.
 *
 * Input: [4,3,2,7,8,2,3,1]
 * Output: ["1", "2", "3", "4", "7", "8"]
 */

/**
 * @param {number[]} array[number]
 * @return {number[]}
 */

'use strict';

// Runtime O(1)
let eliminateDuplicates = function(arr) {
    let len = arr.length,
        output = [],
        obj = {};

    for (var i = 0; i < len; i++) {
        obj[arr[i]] = 0; // obj['p']
    }

    for (var i in obj) {
        output.push(i);
    }

    return output;
};

//eliminateDuplicates([4,3,2,7,8,2,3,1]);
//console.log( eliminateDuplicates([4,3,2,7,8,2,3,1]) );
