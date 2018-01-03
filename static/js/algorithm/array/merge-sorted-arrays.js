/**
 * Write a function which merges two sorted arrays of integers and prints result (Merge two sorted arrays)
 * Example, arr1 = [1, 2, 4, 6], arr2 = [3, 7, 9] => result = [1, 2, 3, 4, 6, 7, 9]
 *
 * runtime O(n)
 *
 * @param {array, array}
 * @return {array}
 *
 */

'use strict';

const mergeSortedArrays = (arr1,arr2) => {
    let i = 0, // initial index for the first array
        j = 0, // initial index for the second array
        result = [];

    const len1 = arr1.length,
        len2 = arr2.length;


    while (i < len1 && j < len2 ) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push((arr2[j]));
            j++;
        }
    }

    if (i < len1) {
        result = [...result, ...arr1.slice(i)];
    }

    if (j < len2) {
        result = [...result, ...arr2.slice(j)];
    }

    return result;
};

console.log('mergeSortedArrays', mergeSortedArrays([1, 2, 4, 6], [3, 7, 9]));

export { mergeSortedArrays };
