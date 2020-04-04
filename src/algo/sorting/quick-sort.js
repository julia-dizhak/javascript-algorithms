function quickSort(array) {
  const len = array.length;

  if (len <= 1) {
    return array;
  }

  const pivot = array[len - 1];
  const leftArr = [];
  const rightArr = [];

  for (const el of array.slice(0, len - 1)) {
    // exclude last element, because it's our pivot
    el < pivot ? leftArr.push(el) : rightArr.push(el)
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

export { quickSort };
