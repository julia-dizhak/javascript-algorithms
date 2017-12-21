/**
 * Find duplicates in array if only one duplicate is possible
 * Find all duplicates in array (multiply duplicates)
 * Find all myltiply duplicates and return array without duplicates
 *
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 * Find all the elements that appear twice in this array.
 * Could you do it without extra space and in O(n) runtime?
 *
 * Input: [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 */

/**
 * @param {array[number]}
 * @return {number[], array[number]}
 *
 */

'use strict';

// only one duplicate is possible
// runtime O(n)
let findOneDuplicate = function(arr) {
    let len = arr.length,
        obj= {};

    // iterate through array
    // store each in an object
    // in a process of iterating through array if you find one element in that array that already has been stored in object
    // that would be one that is duplicate
    for ( let i = 0; i < len; i++ ) {
        if ( !obj[arr[i]] ) {
            obj[arr[i]] = 1;
        } else {
            return arr[i];
        }
    }
};

// console.log( 'findOneDuplicate', findOneDuplicate([1,2,3,4,3,5]) );


// runtime O( n*log(n) + n )
let findMultiplyDuplicates = function(arr) {
    let sorted = arr.sort(), // runtime n*log(n)
        len = arr.length - 1,
        duplicate = [];

    for ( let i = 0; i < len; i++ ) {
        if ( sorted[i + 1] === sorted[i] ) {
            duplicate.push(sorted[i]);
        }
    }

    return duplicate;
};

// console.log( 'findMultiplyDuplicates', findMultiplyDuplicates([4,3,2,7,8,2,3,1]) );


// find all myltiply duplicates and return array without duplicates
// runtime O(n)
let findMultiplyDuplicatesAndEliminate = function(arr) {
    let len = arr.length,
        obj= {},
        obj1 = {},
        output = [];

    for ( let i = 0; i < len; i++ ) {
        if ( obj[arr[i]] === 0 ) {
            obj1[arr[i]] = 0;
        } else {
            obj[arr[i]] = 0; // no duplicates
        }
    }

    // duplicates
    for ( let j in obj1 ) {
        output.push(j);
    }

    // no duplicates
    // for ( let j in obj ) {
    //     output.push(j);
    // }

    return output;
};

// console.log('findMultiplyDuplicatesAndEliminate', findMultiplyDuplicatesAndEliminate([4,3,2,7,8,2,3,1]) );


// find myltiply duplicates
// runtime O(n)
let findMultiplyDuplicatesRuntimeN = function(arr) {
    let len = arr.length,
        obj= {},
        duplicate = [];

    for ( let i = 0; i < len; i++ ) {
        if ( !obj[arr[i]] ) {
            obj[arr[i]] = 1;
        } else {
            duplicate.push(arr[i]);
        }
    }

    return duplicate;
};

console.log( 'findMultiplyDuplicatesRuntimeN', findMultiplyDuplicatesRuntimeN([4,3,2,7,8,2,3,1]) );
