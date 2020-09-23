/**
 * Binary search is a textbook algorithm based on the idea to compare the target value to the middle element of the array.
 * If the target value is equal to the middle element - we're done.
 * If the target value is smaller - continue to search on the left.
 * If the target value is larger - continue to search on the right.
 *
 * Binary search must always operated on sth which is sorted
 * and returns either the index of the location in the array,
 * or -1 if the array did not contain the target Value.
 *
 * You probably already have an intuitive idea that binary search makes fewer guesses than linear search
 *
 * Complexity analysis
 *
 * Time complexity: O(logN).
 * Let's compute time complexity with the help of master theorem ...
 * The equation represents dividing the problem up into a subproblems of size ...
 * Here at step there is only one subproblem a = 1, its size is a half of the initial problem b = 2,
 * and all this happens in a constant time d = 0.
 * And hence we're dealing with case 2 that results O(logN) time complexity.
 *
 * Space complexity: O(1) since it's a constant space solution.
*/
function binarySearch(arr, target) {
  arr = arr.sort((a, b) => a - b);
  const len = arr.length;
  let start = 0;
  let end = len - 1;


  while (start <= end) {
    // left + right could overflow
    let mid = Math.floor(start + (end - start)/2)

    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

function binarySearchRecursive(arr, target, start = 0, stop = arr.length - 1) {
  // left + right could overflow
  // let midPoint = Math.floor((start + stop) / 2);
  let mid = Math.floor(start + (stop - start)/2)

  switch (true) {
    case arr[mid] === target:
      return mid;

    case stop - start === 0:
      return -1;

    case target > arr[mid]:
      return binarySearchRecursive(arr, target, mid + 1, stop);

    case  target < arr[mid]:
      return binarySearchRecursive(arr, target, start, mid);

    default:
      console.log('Sorry, we are out of expressions');
  }
}

export { binarySearch, binarySearchRecursive }
