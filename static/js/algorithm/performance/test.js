/**
 * Created by julia on 12/21/17.
 */

'use strict';

// for loop cached
// http://jsben.ch/y3SpC

// const toLowerCaseImperative
let arr = ['test', 'hello', 'hu', 'test to my', 'welcome', 'hu', 'test to test', 'morning', 'hi', 'tu', 'yes', 'no', 'test', 'hello', 'test', 'hello', 'hu'];

// for
let loopByFor = input => {
    let output = [];

    for (let i = 0; i < input.length; i++) {
        output.push( input[i].toUpperCase() );
    }
    return output;
};

console.time('loopByFor');
console.log('loopByFor', loopByFor(arr));
console.timeEnd('loopByFor');

// forEach
let loopByForEach = input => {
    let output = [];

    input.forEach(function(value) {
        output.push( value.toUpperCase() );
    });

    return output;
};

console.time('loopByForEach');
console.log('loopByForEach', loopByForEach(arr));
console.timeEnd('loopByForEach');

// map
let loopByMap = input => input.map(
    value => value.toUpperCase()
);

console.time('loopByMap');
console.log('loopByMap', loopByMap(arr));
console.timeEnd('loopByMap');
