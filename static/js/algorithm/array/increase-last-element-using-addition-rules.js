/**
 * Find last element in array and increase (+1) using addition rules.
 * Input --> Output:
 * [1,9] --> [2,0]
 * [1,2,3] --> [1,2,4]
 * [9,9,9] --> [1,0,0,0]
 */

/**
 * @param {array[number]}
 * @return {array[number]}
 *
 */

'use strict';

// runtime O(n)
const increaseLastElement = function(arr) {
    let len = arr.length;
    let carrying = 1;
    let newArray = [];

    for (let i=len - 1; i>=0; i--) {
        let element = arr[i];
        let newElement = element + carrying;

        if (newElement % 10 !== 0) {
            carrying = 0;
        } else {
            newElement = 0;
        }

        newArray = [newElement, ...newArray];
    }

    if (carrying === 1) {
        newArray = [1, ...newArray];
    }

    return newArray;
};

console.log(increaseLastElement([1,2,3]), [1, 2, 4] );
console.log(increaseLastElement([1,2, 3, 9]), [1, 2, 4, 0]);
console.log(increaseLastElement([9, 9, 9]), [1, 0, 0, 0]);


