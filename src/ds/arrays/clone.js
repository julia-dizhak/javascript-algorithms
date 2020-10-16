/**
Clone arrays

Approaches:
loop for and while (var i = a.length; while(i--) { b[i] = a[i]; })
slice
map a.map(e => e)?
array.from()
concat
spread operator arr2 = [...arr1];
*/

/* 
* @param {[array]}
* @return {[array]}
*/

// runtime O(1)
// one from fastest solutions
const clone = (arr) => {
  let clone = arr.slice(0); // faster then arr.slice()

  return clone;
};


// to add clone as a native method to arrays
// Array.prototype.clone = function() {
//   return this.slice(0);
// };

// don't iterate over arrays to clone them if all you need is a native clone
// runtime O(n)
const cloneIterative = (arr) => {
  let clone = [],
    len = arr.length;

  for (let index = 0; index < len; index++) {
    // index could be any types, so you should check and if it's references type make additional manipulation
    clone.push(arr[index]);
  }

  return clone;
};

// loop fixed size
// runtime O(n)
const cloneUseLoopFixedSize = (data) => {
  let copy = new Array(data.length),
    len = data.length;

  for (let j = 0; j < len; j++) {
    copy[j] = data[j];
  }

  return copy;
};

// deep clone array spread
const cloneDeep = (clone) => {
  return [...clone];
};

const cloneDeepJson = (clone) => {
  return JSON.parse(JSON.stringify(clone));
};

export {
  clone,
  cloneIterative,
  cloneUseLoopFixedSize,
  cloneDeep,
  cloneDeepJson
};
