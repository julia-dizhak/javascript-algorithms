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

export { binarySearch, binarySearchRecursive }
