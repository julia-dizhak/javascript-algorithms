/**
 * The median of a list of numbers can be found by arranging all the numbers
 * from smallest to greatest.
 * If there is an odd number of numbers, the middle one is picked.
 * If there is an even number of numbers, median is then defined
 * to be the average of the two middle values.
*/
function findMedian(arr) {
  const len = arr.length;
  const sortedArr = arr.sort((a, b) => a - b);

  let median;
  if (len === 0) return median = 0;
  let index;

  if (len % 2 === 0) {
    index = len / 2;
    median = Math.floor((sortedArr[index] + sortedArr[index - 1]) / 2)
  } else {
    index = Math.floor(len / 2);
    median = sortedArr[index]
  }

  return median
}

function findMedianVariant1(arr) {
  const n = arr.length;
  arr = arr.sort((a, b) => a - b);
  return arr[(n - 1)/2];
}

export { findMedian, findMedianVariant1 }
