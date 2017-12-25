/**
 * Translate number by alphabetic code to a string.
 * Description:
 * segment data(number): single digit or double digit
 * single -> translate to a letter
 * double digit: check if number less than 26
 * first, I establish the dictionary to store all the numbers
 * first with simple digit
 * then keep one single digit + and do that loop contionusly to find all of the combination
 *
 * solutions(12258) --> 'abbeh', 'aveh', 'abyh', 'lbeh', 'lyh'
 * solutions(123) --> 'abc', 'mc', 'ax'
 * solution(278) -> 'bgh'
 *
 */

/**
 * @param {number}
 * @return {string}
 *
 */

'use strict';

function translateNumberbByAlphabeticCode(num) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),
          lenAlphabet = alphabet.length;

    let num1 =  ('' + num).split('').map(digit => +digit - 1 ); // let arr =  ('' + num).split('').map(function(digit) { return +digit; });
    let num2 =  ('' + num).split('').map(digit => +digit );
    let len1 = num1.length;
    let len2 = num2.length;

    let solutions = [];

    // single translate to a letter: simple digit
    for (let i = 0; i < len1; i++) {
        let solution = alphabet[num1[i]];
        solutions.push(solution);
    }

    // iterate an array as a pair (current, next)
    num2.reduce( (arr, v, i, a) => {
        console.log( a[i]);
        if (i < a.length - 1) {
            arr.push([a[i], a[i + 1]]);
        } else {
            arr.push(a[i]);
        }
        console.log(arr);
        return arr;

        }, []).
    forEach(pair => {
        let pairs = '' + pair[0] + pair[1],
            solution = alphabet[pairs];


        if ( parseInt(pair) < 26 ) {
            solutions.push(solution);
        }
    });

    // all pairs
    // for (let i = 0; i < len2; i++) {
    //     for (let j = 1; j < len2; j++) {
    //         let pairs = '' + num2[i] + num2[j];
    //         console.log(pairs);
    //
    //         if ( parseInt(pairs) < 26 ) {
    //             let solution = alphabet[pairs];
    //
    //             solutions.push(solution);
    //         } else {
    //             let solution = alphabet[num1[i]];
    //             solutions.push(solution);
    //         }
    //     }
    // }

    return solutions.join('');
}

console.log('translateNumberbByAlphabeticCode(123) --> abc, mc, ax; current -->', translateNumberbByAlphabeticCode(123) );
//console.log('translateNumberbByAlphabeticCode(278) -->', translateNumberbByAlphabeticCode(278) );
