/*
Approach Generate all permutations

1 Generate all permutations, I generated string permutations instead of array
which is very easier to code in Java because all of the nunber in our array is single digit.
*/

// permutation
function permute(arr) {
  if (arr.length === 1) return arr;
  let output = [];
  // second argument index or position
  backtracking(arr, 0, output);
  return output
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function backtracking(arr, pos, result) {
  if (pos === arr.length) {
    result.push(arr.slice());
  } else {
    for (let i = pos; i < arr.length; i++) {
      swap(arr, i, pos)
      backtracking(arr, pos+1, result);
      // reset
      swap(arr, i, pos)
    }
  }
}

/**
 * @param {number[]} A
 * @return {string}
*/
var largestTimeFromDigits = function(A) {
  let permutations = permute(A);
  let res = '';
  console.log('permutations', permutations);
  // for (const p of permutations) {

  // }
}

// var largestTimeFromDigits1 = function(A) {
//   let hash = {};
//   let output = ''
//   let first = 0;
//   let second = 0

//   let firstArr = A.filter(item => item <= 2);
//   if (firstArr.length === 0) {
//     return output;
//   }

//   first = Math.max(...firstArr) || -1;
//   A = A.filter(item => item !== first);
//   console.log('A', A);
//   //debugger
//   if (first === 2) {
//     let secondArr = A.filter(item => item <= 3);
//     second = Math.max(...secondArr);
//     console.log('second', second);
//     A = A.filter(item => item !== second);
//   } else if (first === 1 || first === 0) {
//     second = Math.max(...A);
//   } else {
//     return output
//   }

//   let thirdArr = A.filter(item => item <= 6);
//   let third = Math.max(...thirdArr);
//   A = A.filter(item => item !== third);

//   console.log('third', third);
//   let fourth = A[0]
//   output = first.toString() + second.toString() + ':' + third.toString() + fourth.toString();

//   console.log('output', output)
//   return output;
// };

console.log('largestTimeFromDigits', largestTimeFromDigits([1,2,3,4]))
//console.log('largestTimeFromDigits', largestTimeFromDigits([5,5,5,5]))
//console.log('largestTimeFromDigits', largestTimeFromDigits([6,6,6,6]))
//console.log('largestTimeFromDigits', largestTimeFromDigits([1,1,1,1]))

export {
  largestTimeFromDigits
}
