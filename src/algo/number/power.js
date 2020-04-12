function power(base, exponent) {
  let result = 1;

  for (let count = 0; count < exponent; count++) {
    result *= base;
  }

  return result
}

export { power }


// todo sorted arr
function binarySearch(arr, correct) {
  const len = arr.length;
  // index
  let min = 1;
  let max = len - 1;


  let guessIndex = Math.round((max - min)/2);
  //debugger;
  let guess = arr[guessIndex]


  if (guess === correct) {
    console.log('guess', guess)
    return guess
  }

  //debugger
  // index
  if (guess < correct) {
    min = guess
  } else {
    max = guess
  }

  console.log('guess', guess)
  return guess;
}

// first 25 prime numbers
//const a = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
const a = [1,2,3,4,5]
//binarySearch(a, 3);

// task
// [5,6,8,11]

export { binarySearch }
