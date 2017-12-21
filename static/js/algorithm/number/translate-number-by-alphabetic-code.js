/**
 * Translate number by alphabetic code to a string
 * 12258 -> 'abbeh', 'aveh', 'abyh', 'lbeh', 'lyh'
 *
 *
 *
 *
 * Input:
 * Output:
 */

/**
 * @param {number}
 * @return {string}
 *
 */

'use strict';

// Algorithm
// segment data(number): single digit or double digit
// single -> translate to a letter
// double digit: check if number less than 26
// number = 113131
// k = `${number}`
// number.toString()
// first, I establish the dictionary to store all the numbers
// first with simple digit
// then keep one single digit + and do that loop contionusly to find all of the combination

function translateNumberbByAlphabeticCode(num) {
     let arr2 =  ('' + num).split('').map(digit => +digit);

     let alphabet1 = {
         1: 'a',
         2: 'b',
         3: 'c'
     };
     //console.log(alphabet1[1])
     let alphabet = ['a', 'b', 'c', 'd', 'e'];

    let arr = num.toString().split(''),
        len = arr2.length;



    let arr1 =  ('' + num).split('').map(function(digit) {
        return +digit;
    });



    //console.log(arr2);


    for (let i = len - 1; i >= 0; i--) {
        if (arr2[i]) {

        }

        if ( arr2[i] < 26) {
console.log(arr2[i]);
        }
    }


}

//console.log('translateNumberbByAlphabeticCode', translateNumberbByAlphabeticCode(12258) );


// solution(278) -> bgh

// 278
//
// listNumbers
// for i in listNumbers:
//   for j in listNumbers
//    match()
