/**
 * Binary search must always operated on sth which is storted
 * and returns either the index of the location in the array,
 * or -1 if the array did not contain the targetValue
*/
function binarySearch(arr, target) {
  arr = arr.sort();
  const len = arr.length;
  let start = 0;
  let end = len - 1;


  while (start <= end) {
    let mid = Math.floor( (start + end) / 2 ); // index

    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1
}

function binarySearchRecursive(arr, target) {
  arr = arr.sort();
  const len = arr.length;
  let start = 0;
  let end = len - 1;

  let mid = Math.floor( (start + end) / 2 );

  if (arr[mid] === target) {
    return mid;
  } else if ( arr[mid] < target ) {
    return binarySearchRecursive(arr.slice(mid + 1, end), target);
  } else if ( arr[mid] > target ) {
    return binarySearchRecursive(arr.slice(start, mid - 1), target);
  } else {
    return -1
  }
}


export { binarySearch, binarySearchRecursive }
