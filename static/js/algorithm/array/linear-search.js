/**
 * Linear Search ( Array A, Value x)
 *
 * Algorithm
 *
 * Step 1: Set i to 1
 * Step 2: if i > n then go to step 7
 * Step 3: if A[i] = x then go to step 6
 * Step 4: Set i to i + 1
 * Step 5: Go to Step 2
 * Step 6: Print Element x Found at index i and go to step 8
 * Step 7: Print element not found
 * Step 8: Exit
 *
 * Characteristics
 *
 * The worst case performance scenario for a linear search is that it needs to loop through the entire collection;
 * either because the item is the last one, or because the item isn't found. In other words, if you have N items in your collection, the worst case scenario to find an item is N iterations.
 * This is known as runtime O(n) using the Big O Notation.
 * The speed of search grows linearly with the number of items within your collection.
 *
 * In The Real World
 * Find Index
 *
 */

/**
 * @param {array, number}
 * @return {string[]}
 */

'use strict';

// runtime O(n)
function findIndex(data, searchQuery) {
    for (var i = 0; i < data.length; i++) {
        if ( data[i] === searchQuery) {
            return data[i];
        }
    }
    return false;
}

findIndex([1,2,3,4,6], 6);
//console.log( findIndex([1,2,3,4,6], 6) );
