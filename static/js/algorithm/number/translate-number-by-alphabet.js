/**
 * Translate number by alphabetic code to a string. Given the list of numbers [1,2],
 * write a solution to translate them into
 * all possible sequences of letters e.g. [1, 2] -> 'ab', 'm'
 *
 * Description:
 * segment data(number): single digit or double digit
 * single -> translate to a letter
 * double digit: check if number less than 26
 * first, I establish the dictionary to store all the numbers
 * first with simple digit
 * then keep one single digit + and do that loop contionusly to find all of the combination
 *
 * solutions(12) --> 'ab', 'm'
 * solutions(12258) --> 'abbeh', 'aveh', 'abyh', 'lbeh', 'lyh'
 * solutions(123) --> 'abc', 'mc', 'ax'
 * solutions(278) -> 'bgh'
 *
 * @param {number}
 * @return {string}
 *
 */

'use strict';

function generateHeadAndTail(arr) {
    // arr[[1], [2, 3]]

    let head = arr[0],
        tail = arr[1],
        result = [];

    if ( tail.length === 1 ) {
        result = [[[...head, ...tail], []]];
        return result;
    } else {
        // if ( tail.length > 1)
        let firstElement = tail[0],
            entry = [ [...head, firstElement], [...tail.slice(1)]];

        //console.log(firstElement);
        //console.log(JSON.stringify(entry));

        result.push(entry);

        let numTwoElements = parseInt('' + tail[0] + tail[1]);
        //console.log(numTwoElements);
        if (numTwoElements <=26 ) {
            result.push(
                [
                    [...head, numTwoElements], [...tail.slice(2)]
                ]
            );
        }

        return result;
    }

    //console.log(JSON.stringify(result));
}

console.log( 'generateHeadAndTail -->', JSON.stringify(generateHeadAndTail([[1], [2,3]])) );


function solutions(arr) {
    if ( arr.length === 0) {
        return [];
    }

    let q = [ [ [], arr ] ],
        result = [];

    while (q.length > 0) {
        //console.log('values in the q', q);
        let firstFromQ = q.pop();
        //console.log('array for processing', firstFromQ);

        let head = firstFromQ[0],
            tail = firstFromQ[1],
            pairs;

        if (tail.length === 0 && head.length > 0){
            result.push(head);
        } else if (tail.length > 0) {
            pairs = generateHeadAndTail([head, tail]);
            // console.log('another pairs ', pairs);
            pairs.map((pair) => q.push(pair));
        }
    }

    return result;
}

console.log(JSON.stringify(solutions([1, 2, 3])));


function translateByAlphabetCode(arrOfSolutions) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return arrOfSolutions.map((listOfNumbers)=>{
        return listOfNumbers.map((num)=> {
            return alphabet[num-1];
        }).join('');
    });
}

console.log('translateByAlphabetCode(123) -->', translateByAlphabetCode(solutions([1, 2, 3])));

export { generateHeadAndTail, solutions, translateByAlphabetCode };
//module.exports { generateHeadAndTail, solutions, translateByAlphabetCode };
