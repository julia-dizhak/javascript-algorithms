/**
 * Binary search must always operated on sth which is sorted
 * and returns either the index of the location in the array,
 * or -1 if the array did not contain the targetValue.
 *
 * You probably already have an intuitive idea that binary search makes fewer guesses than linear search
*/
function binarySearch(arr, target) {
  arr = arr.sort((a, b) => a - b);
  const len = arr.length;
  let start = 0;
  let end = len - 1;


  while (start <= end) {
    // left + right could overflow
    let mid = Math.floor(start + (end - start)/2)

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

function binarySearchRecursive(arr, target, start = 0, stop = (arr.length - 1)) {
  // left + right could overflow
  // let midPoint = Math.floor((start + stop) / 2);
  let mid = Math.floor(start + (stop - start)/2)

  switch (true) {
    case arr[mid] === target:
      return mid;

    case stop - start === 0:
      return -1;

    case arr[mid] < target:
      return binarySearchRecursive(arr, target, mid + 1, stop);

    case arr[mid] > target:
      return binarySearchRecursive(arr, target, start, mid);

    default:
      console.log('Sorry, we are out of expressions');
  }
}

export { binarySearch, binarySearchRecursive }
