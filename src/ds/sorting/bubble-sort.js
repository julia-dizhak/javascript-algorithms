/*
Complexity analysis

Time complexity
We don't need to loop all the way to the end every time because
the right side of the array becomes sorted every loop
In the end of the day it still O(n^2)

Space is constant O(1)
*/
function bubbleSort(arr) {
  const len = arr.length;
  let swap;

  do {
    swap = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
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
        arr[j+1] = current;
      }
    }
  }

  return arr;
}

/*
Modified bubble sort is just an enhancement to the bubble sort algorithm.
It wont improve the algorithm worst case running time
but on an average case or for nearly sorted array it is a great improvement as
it skips many passes.
Modified bubble sort keeps count of the number of adjacent inversions in each pass
and when there are no adjacent inversions the algorithm halts as the list will be sorted
if there are no adjacent inversions
*/
function bubbleSortModified(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let swaps = 0;
    for (let j = 0; j < len - i - 1; j++) {
      const current = arr[j];
      const next = arr[j+1];

      if (current > next) {
        arr[j] = next;
        arr[j+1] = current;
        swaps++;
      }

      if (swaps === 0) {
        break
      }
    }
  }

  return arr;
}

function bubbleSortDisplayCount(arr) {
  const len = arr.length;
  let count = 0; // swaps count
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


export { bubbleSort, bubbleSortDisplayCount, bubbleSortTwoForLoops,
  bubbleSortModified }
