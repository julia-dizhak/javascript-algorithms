/**
 * Binary search must always operated on sth which is storted
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
    let mid = Math.floor((start + end) / 2); // index

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

function binarySearchRecursive(arr, target, start = 0, stop = (arr.length - 1)) {
  let midPoint = Math.floor( (start + stop) / 2);
  // let midPoint = Math.floor( ((stop - start) / 2) + start );

  switch (true) {
    case arr[midPoint] === target:
      return midPoint;

    case stop - start === 0:
      return -1;

    case arr[midPoint] < target:
      return binarySearchRecursive(arr, target, midPoint + 1, stop);

    case arr[midPoint] > target:
      return binarySearchRecursive(arr, target, start, midPoint);

    default:
      console.log('Sorry, we are out of expressions');
  }
}

export { binarySearch, binarySearchRecursive }
