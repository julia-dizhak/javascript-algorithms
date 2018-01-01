(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.translateNumberByAlphabet = mod.exports;
    }
})(this, function (exports) {
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

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    function generateHeadAndTail(arr) {
        // arr[[1], [2, 3]]

        var head = arr[0],
            tail = arr[1],
            result = [];

        if (tail.length === 1) {
            result = [[[].concat(_toConsumableArray(head), _toConsumableArray(tail)), []]];
            return result;
        } else {
            // if ( tail.length > 1)
            var firstElement = tail[0],
                entry = [[].concat(_toConsumableArray(head), [firstElement]), [].concat(_toConsumableArray(tail.slice(1)))];

            //console.log(firstElement);
            //console.log(JSON.stringify(entry));

            result.push(entry);

            var numTwoElements = parseInt('' + tail[0] + tail[1]);
            //console.log(numTwoElements);
            if (numTwoElements <= 26) {
                result.push([[].concat(_toConsumableArray(head), [numTwoElements]), [].concat(_toConsumableArray(tail.slice(2)))]);
            }

            return result;
        }

        //console.log(JSON.stringify(result));
    }

    console.log('generateHeadAndTail -->', JSON.stringify(generateHeadAndTail([[1], [2, 3]])));

    function solutions(arr) {
        if (arr.length === 0) {
            return [];
        }

        var q = [[[], arr]],
            result = [];

        while (q.length > 0) {
            //console.log('values in the q', q);
            var firstFromQ = q.pop();
            //console.log('array for processing', firstFromQ);

            var head = firstFromQ[0],
                tail = firstFromQ[1],
                pairs = void 0;

            if (tail.length === 0 && head.length > 0) {
                result.push(head);
            } else if (tail.length > 0) {
                pairs = generateHeadAndTail([head, tail]);
                // console.log('another pairs ', pairs);
                pairs.map(function (pair) {
                    return q.push(pair);
                });
            }
        }

        return result;
    }

    console.log(JSON.stringify(solutions([1, 2, 3])));

    function translateByAlphabetCode(arrOfSolutions) {
        var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

        return arrOfSolutions.map(function (listOfNumbers) {
            return listOfNumbers.map(function (num) {
                return alphabet[num - 1];
            }).join('');
        });
    }

    console.log('translateByAlphabetCode(123) -->', translateByAlphabetCode(solutions([1, 2, 3])));

    exports.generateHeadAndTail = generateHeadAndTail;
    exports.solutions = solutions;
    exports.translateByAlphabetCode = translateByAlphabetCode;
});
