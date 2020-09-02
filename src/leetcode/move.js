/*
Approach Generate all permutations
*/

/**
 * @param {number[]} A
 * @return {string}
*/

var largestTimeFromDigits = function(A) {
  let hash = {};
  let output = ''
  let first = 0;
  let second = 0

  let firstArr = A.filter(item => item <= 2);
  if (firstArr.length === 0) {
    return output;
  }

  first = Math.max(...firstArr) || -1;
  A = A.filter(item => item !== first);
  console.log('A', A);
  //debugger
  if (first === 2) {
    let secondArr = A.filter(item => item <= 3);
    second = Math.max(...secondArr);
    console.log('second', second);
    A = A.filter(item => item !== second);
  } else if (first === 1 || first === 0) {
    second = Math.max(...A);
  } else {
    return output
  }

  let thirdArr = A.filter(item => item <= 6);
  let third = Math.max(...thirdArr);
  A = A.filter(item => item !== third);

  console.log('third', third);
  let fourth = A[0]
  output = first.toString() + second.toString() + ':' + third.toString() + fourth.toString();

  console.log('output', output)
  return output;
};

//console.log('largestTimeFromDigits', largestTimeFromDigits([1,2,3,4]))
//console.log('largestTimeFromDigits', largestTimeFromDigits([5,5,5,5]))
//console.log('largestTimeFromDigits', largestTimeFromDigits([6,6,6,6]))
console.log('largestTimeFromDigits', largestTimeFromDigits([1,1,1,1]))

export {
  largestTimeFromDigits
}
