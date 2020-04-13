/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
function binarySearch(arr, target) {
  const len = arr.length;
  let start = 0;
  let end = len - 1;

  //let isTargetExist = false;

  while (start <= end) {
    let mid = Math.floor( (start + end) / 2 ); // index

    if (arr[mid] === target) {
      //isTargetExist = true;
      return true
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    //console.log('mid', mid) // todo remove lof
  }

  //isTargetExist = false;

  //return isTargetExist ? arr[mid] : -1
  return false

}

function binarySearchRecursive(arr, target) {
  const len = arr.length;
  let start = 0;
  let end = len - 1;

  let mid = Math.floor( (start + end) / 2 );

  if (arr[mid] === target) {
    return true;
  } else if ( arr[mid] < target ) {
    return binarySearchRecursive(arr.slice(mid + 1, end), target);
  } else if ( arr[mid] > target ) {
    return binarySearchRecursive(arr.slice(start, mid - 1), target);
  } else {
    return false
  }
}

// sherlock and array desc todo
/**
 * Sherlock and array
 * Watson gives Sherlock an array of integers.
 * His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right.
 * For instance, given the array [5, 6, 8, 11], 8 is between two subarrays that sum to 11.
 * If your starting array is [1], that element satisfies the rule as left and right sum to 0.

You will be given arrays of integers and must determine whether there is an element that meets the criterion.
 */
// Function Description

// Complete the balancedSums function in the editor below. It should return a string, either YES if there is an element meeting the criterion or NO otherwise.

// balancedSums has the following parameter(s):

// arr: an array of integers
export function balancedSums(arr) {
  // const len = arr.length;

  // let leftSum = 0;
  // let rightSum = 0;
  // let leftArr = [];
  // let rightArr = []


  // if (len === 1) {
  //   return 'YES'
  // }

  // for (let i = 1; i < len; i++) {
  //   leftArr = arr.slice(0, i);
  //   leftSum = (leftArr.length > 0) ? leftArr.reduce((accumulator, currentValue) => accumulator + currentValue) : 0;

  //   rightArr = arr.slice(i+1); //rightArr = arr.slice(i, len);
  //   rightSum = (rightArr.length > 0) ? rightArr.reduce((accumulator, currentValue) => accumulator + currentValue): 0;

  //   // return index
  //   if (leftSum === rightSum) {
  //     return 'YES'
  //   }
  // }

  // return 'NO'

  let i = 0;
  let j = arr.length - 1;
  let sum = 0;
  debugger;
  while (i !== j) {
    if (sum >= 0) {
      sum -= arr[j];
      j--;
    } else {
      sum +=arr[i];
      i++;
    }
  }

  return sum === 0 ? 'YES' : 'NO';
}

balancedSums([5,6,8,11])

export { binarySearch, binarySearchRecursive }
