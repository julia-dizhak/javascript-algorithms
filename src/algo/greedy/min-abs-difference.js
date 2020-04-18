/**
 * Consider an array of integers, arr = [arr[0], ... , arr[n-1]].
 * We define the absolute difference between two elements a[i] and a[j] (where i!=j),
 * to be the absolute value of a[i] - a[j].
 * Given an array of integers,
 * find and print the minimum absolute difference between any two elements in the array.
 * For example, given the array arr = [-2,2,4]
 * we can create  pairs of numbers: [-2,2], [-2,4] and [2,4].
 * The absolute differences for these pairs are
 * |-2 -2| = 4,
 * |-2-4| = 6 and
 * |2-4| = 2.
 * The minimum absolute difference is 2.
 *
 * Algorithm
 * 1) sort
 * 2) consider diff between the first pair as min
 * 3) compare all "consecutive pair min" with the one in step2 to get the least min.
 * */
function minimumAbsoluteDifference(arr) {
  const len = arr.length;
  const sortedArr = arr.sort((a, b) => a - b); // solution doesn't work without sort

  let min = Math.abs(sortedArr[0] - sortedArr[1]),
    diff;

  for (let i = 2; i < len; i++) {
    diff = Math.abs(sortedArr[i] - sortedArr[i-1]);
    if (diff < min) {
      min = diff;
    }
  }

  return min;
}

export { minimumAbsoluteDifference }

