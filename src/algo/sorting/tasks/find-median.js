import { quickSort } from '../quick-sort';

function findMedian(arr) {
  const len = arr.length;
  const sortedArr = quickSort(arr);

  let median;
  if (len === 0) return median = 0;

  let index = 0;

  if (len % 2 === 0) {
    index = len / 2;
    median = (sortedArr[index] + sortedArr[index - 1]) / 2
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
