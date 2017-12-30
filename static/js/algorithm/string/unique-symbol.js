/**
 * Find unique symbols in string (or detecting if a string consists of unique characters).
 *
 * Algorithm
 * ...
 *
 * Characteristics
 *
 */

/**
 * @param {string}
 * @return {}
 *
 */

'use strict';

// runtime O(n)
function isUniqueSymbolRuntimeN(str) {
    if (typeof str !== 'string') {
        return new Error({message: 'Must be a string'});
    }

    let sortedString = str.split('').sort().join(''),
        len = sortedString.length;

    for (let i=0; i < len; i++) {
        if (sortedString[i] === sortedString[i+1]) {
            return 'string is unique';
        } else {
            return 'string consists duplicates';
        }
    }

    //return str;
}

// console.log( isUniqueSymbolRuntimeN('teste') );

// runtime O(1)
function isUniqueSymbolRuntime1(str) {
    if (typeof str !== 'string') {
        throw new Error('Must be a string', str);
    }

    let obj = {},
        len = str.length;

    for (let i = 0; i < len; i++) {
        if (obj.hasOwnProperty(str[i])) {
            obj[str[i]] = false;
        } else {
            obj[str[i]] = true;
        }
    }
    return Object.values(obj).every( d => d === true );

}

// console.log(isUniqueSymbolRuntime1('test'));
