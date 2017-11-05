/**
 * Find all duplicates in array
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
let findDuplicatesRuntimeN = function(arr) {
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

//findDuplicatesRuntimeN([4,3,2,7,8,2,3,1]);
//console.log( findDuplicatesRuntimeN([4,3,2,7,8,2,3,1]) );

// Runtime O(1)
let findDuplicatesRuntimeOne = function(arr) {
    let len = arr.length,
        obj= {},
        obj1 = {},
        output = [];

    for ( let i = 0; i < len; i++ ) {
        if ( obj[arr[i]] === 0 ) {
            obj1[arr[i]] = 0;
        } else {
            obj[arr[i]] = 0;
        }
    }

    for ( let j in obj1) {
        output.push(j)
    }

    return output;
};

findDuplicatesRuntimeOne([4,3,2,7,8,2,3,1]);
console.log( findDuplicatesRuntimeOne([4,3,2,7,8,2,3,1]) );
