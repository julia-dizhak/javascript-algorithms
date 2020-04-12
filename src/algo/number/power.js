function power(base, exponent) {
  let result = 1;

  for (let count = 0; count < exponent; count++) {
    result *= base;
  }

  return result
}

export { power }


// todo sorted arr
// You probably already have an intuitive idea that binary search makes fewer guesses than linear search
// recursive approach
function binarySearchRecursive(arr, target) {
  const len = arr.length;
  // index
  let start = 0;
  let end = len - 1;


  //let mid = Math.floor((start - end)/2); // index
  debugger;
  //let guess = arr[guessIndex]


  // if (arr[mid] === target) {
  //   return true
  // }

  while (start <= end) {
    let mid = Math.floor((start + end)/2);

    if (arr[mid] === target) return true;
    else if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return false


  //debugger
  // index
  // if (arr[mid] > target) {
  //   // start
  //   // mid -1
  //   return binarySearchRecursive(arr.slice(start, mid - 1), target)
  // } else {
  //   return binarySearchRecursive(arr.slice(mid + 1, end), target)
  // }

}

// first 25 prime numbers
//const a = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
const a = [1, 3, 5, 7, 8, 9]
binarySearchRecursive(a, 5);

// task
// [5,6,8,11]

export { binarySearchRecursive }

