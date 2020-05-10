function bubbleSort(arr) {
  const len = arr.length;
  let swap;

  do {
    swap = false;
    for (let i = 0; i < len-1; i++) {
      if (arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] =[arr[i+1], arr[i]];
        swap = true;
      }
    }
  } while (swap)

  return arr;
}

function bubbleSortTwoForLoops(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      const current = arr[j];
      const next = arr[j+1];

      if (current > next) {
        arr[j] = next;
        arr[j+1] = current
      }

    }
  }

  return arr;
}

function bubbleSortDisplayCount(arr) {
  const len = arr.length;
  let count = 0;
  let swap;

  do {
    swap = false;
    for (let i = 0; i < len-1; i++) {
      if (arr[i] > arr[i+1]) {
        [ arr[i], arr[i+1] ] =[ arr[i+1], arr[i] ];
        swap = true;
        count += 1;
      }
    }
  } while (swap)

  return count;
}


export { bubbleSort, bubbleSortDisplayCount, bubbleSortTwoForLoops }
