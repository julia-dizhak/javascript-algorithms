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
    let arr = str.split('').sort(),
        len = arr.length,
        obj = {};

    if (len !== 0) {
        for (let i = 0;  i < len; i++) {
            obj[i] = arr[i];
            //console.log(arr[i]);
            //obj.push(arr[i]);
            console.log( obj[i] );


            //obj.hasOwnProperty(arr[i])

            // if (arr[i] === arr[i+1]) {
            //
            // }
            // let count = 0;
            // if(!obj.hasOwnProperty(arr[i])){
            //     obj[arr[i]] = count;
            // }
        }
    }

     console.log( obj['a']);
    return obj;


}

console.log('countNumberOfOccurrences -->', countNumberOfOccurrences('I want to eat two apples'));
