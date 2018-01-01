/**
 * Count the number of occurrences of a character in a string
 * Coding a number in a string: 'I want to eat two apples' --> ''
 *
 * runtime O()
 *
 * @param {string}
 * @return {object}
 *
 */

'use strict';

let test = {
    a: 2,
    b: 0
};

function countNumberOfOccurrences(str) {
        const len = str.length;
        let result = {};

        for (let i = 0; i < len ; i++) {
            // console.log(` value in result for string ${str[i]} ${result[i]}`);

            let iChar = str[i].toLowerCase();

            if (result[iChar] == undefined) {
                result[iChar] = 1;
            } else {
                result[iChar] += 1;
            };

        };
        console.log(result);
        return result;


}

console.log('countNumberOfOccurrences -->', countNumberOfOccurrences('I want to eat two apples. Apples are good.'));


// const arr1 = [1,2];
// const arr2 = [6];
//
// function mergeSolution(arr1, arr2) {
//     let i=0,
//         j=0,
//         result = [];
//
//     while (i < arr1.length && j < arr2.length ) {
//         if (arr1[i] < arr2[j]) {
//             result.push(arr1[i]);
//             i++;
//         } else {
//             result.push((arr2[j]));
//             j++;
//         }
//     }
//     //console.log(i,j);
//     if (i < arr1.length) {
//         result = [...result, ...arr1.slice(i)];
//     }
//      if (j < arr2.length) {
//         result = [...result, ...arr2.slice(j)];
//     }
//
//     return result;
//
//     //i[0] > j[0]
//
//     // for () {
//     //
//     // }
// }
// console.log(mergeSolution(arr1, arr2));

// reverse
let str = 'string',
    strReverse = 'gnitrs';

function reverse(str) {
    const len = str.length;
    let result = [];

    for (let i = len-1; i >= 0; i--) {
        console.log(str[i]);
        result.push(str[i]);
    }
    return result.join('');
}

console.log(reverse(str));



