/**
 * Translate number by alphabetic code to a string
 * solutions(12258_ -> 'abbeh', 'aveh', 'abyh', 'lbeh', 'lyh'
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

// Solutions
// (278) --> bgh
function translateNumberbByAlphabeticCode(num) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),
          lenAlphabet = alphabet.length;

    num =  ('' + num).split('').map(digit => digit - 1 ); // let arr =  ('' + num).split('').map(function(digit) { return +digit; });
    const len = num.length;

    let solutions = [];


    for (let i = 0; i <= len; i++) {
        let solution = alphabet[num[i]];
        solutions.push(solution);

        console.log( num[i] + num[i+1])

        // if (num[i]) {
        //
        // }
        //
        // if ( num[i] < 26) {
        //
        // }

        //num[2]  = b --> alphabet[1] --> b
    }

     return solutions.join('');

}

console.log('translateNumberbByAlphabeticCode(278) -->', translateNumberbByAlphabeticCode(278) );


// solution(278) -> bgh

// 278
//
// listNumbers
// for i in listNumbers:
//   for j in listNumbers
//    match()
