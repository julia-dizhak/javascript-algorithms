/**
 * Find all duplicates in array
 * eliminate
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 * Find all the elements that appear twice in this array.
 * Could you do it without extra space and in O(n) runtime?
 *
 * Input: [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 */

/**
 * @param {number[]} array[number]
 * @return {number[]}
 */

'use strict';

// Runtime O(n)
let findDuplicates = function(arr) {
    let sorted = arr.sort(),
        len = arr.length - 1,
        duplicate = [];

    for ( let i = 0; i < len; i++ ) {
        if ( sorted[i + 1] === sorted[i] ) {
            duplicate.push(sorted[i]);
        }
    }

    return duplicate;
};

findDuplicates([4,3,2,7,8,2,3,1]);
console.log( findDuplicates([4,3,2,7,8,2,3,1]) );
