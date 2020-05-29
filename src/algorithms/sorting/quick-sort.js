/*
  Divide and conquer: recursion
*/
function quickSort(arr) {
  const len = arr.length;

  if (len <= 1) {
    return arr;
  }

  const pivot = arr[len - 1];
  const leftArr = [];
  const rightArr = [];

  for (const el of arr.slice(0, len - 1)) {
    // exclude last element, because it's our pivot
    el < pivot ? leftArr.push(el) : rightArr.push(el)
  }

  const merged = [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  return merged;
}

export { quickSort };
