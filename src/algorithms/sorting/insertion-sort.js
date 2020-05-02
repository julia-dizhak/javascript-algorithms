function insertionSort(arr) {
  const len = arr.length;

  // can skip the first item = index 0, since any array of size 1 is trivially sorted
  for (let i = 1; i < len; i++) {
    const key = arr[i]; // or an element
    let j = i - 1;

    /*
      Move elements of arr[0..i-1], that are
      greater than key, to one position ahead
      of their current position
    */
    while (j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j];
      j = j - 1;
    }

    arr[j+1] = key;
  }

  return arr;
}

insertionSort([3, 1,2])

export { insertionSort}












