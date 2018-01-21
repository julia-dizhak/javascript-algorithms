/**
 * Clone arrays
 *
 * loop for and while (var i = a.length; while(i--) { b[i] = a[i]; })
 * slice
 * map a.map(e => e)?
 * array.from()
 * concat
 * spread operator arr2 = [...arr1];
 *
 * @param {[array]}
 * @return {[array]}
 */

'use strict';

// runtime O(1) ?
// one from fastest solutions
const cloneWithSliceMethod = (arr) => {
    let clone = arr.slice(0); // faster then arr.slice()

    return clone;
};

//console.log(cloneWithSliceMethod([1,2,3,4,5]));

// to add clone as a native method to arrays
Array.prototype.clone = function() {
    return this.slice(0);
};

// don't iterate over arrays to clone them if all you need is a native clone
// runtime O(n)
const cloneWithForLoop = (arr) => {
    let clone = [],
        len = arr.length;

    for (let index = 0; index < len; index++) {
        clone.push(arr[index]); // index could be any types, so you should check and if it's references type make additional manipulation
    }

    return clone;
};

//console.log(cloneWithForLoop([1,2,3,4,5]));

// loop fixed size
// runtime O(n)
const cloneWithForLoopFixedSize = (data) => {
    let copy = new Array(data.length),
        len = data.length;

    for (let j = 0; j < len; j++) {
        copy[j] = data[j];
    }
    return copy;
};

// deep clone array spread
const cloneDeepWithSpread = (clone) => {
    return [...clone];
};

//console.log('cloneDeepWithSpread', cloneDeepWithSpread([1,2,[3]]) );

// deep clone array JSON.stringify
const cloneDeepJson = (clone) => {
    return JSON.parse(JSON.stringify(clone));
};

export { cloneWithSliceMethod, cloneWithForLoop, cloneWithForLoopFixedSize, cloneDeepWithSpread, cloneDeepJson };
