/*
Bubble sort

Approach Swapped

Next, it’s important to know whether we should swap at all. If the array has 
already been swapped, meaning an entire pass has gone without swapping, 
we won’t have to go through the array again. We need to create a variable 
that holds a boolean value, and only if that value is true, we want to swap values.

*/

function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;
    // swap logic
    // Right now, if swapped keeps on being false, the do-while will stop. 
    // We need to create the swapping logic. First, we need to loop over the array. 
    // Then, we check whether the current value, if it exists, is bigger than the 
    // next item’s value, if that exists, meaning that they should swap.
    for (let i = 0; i < n; i++) {
      if (arr[i] && arr[i+1] && arr[i] > arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
      
    }
  } while (swapped);

  return arr;
}
//console.log('bubbleSort', bubbleSort([2,1]));

// the same approach use ES6
function bubbleSortSwapped(arr) {
  const len = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped)

  return arr;
}

/*
Complexity analysis

Time complexity
We don't need to loop all the way to the end every time because
the right side of the array becomes sorted every loop
In the end of the day it still O(n^2)

Space is constant O(1)
*/
function bubbleSortUseLoops(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) { // j=1 , j = 2
      //console.log('j', j)
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];

        arr[j+1] = temp;
      }
    }

  }
  return arr;
}
//console.log('bubbleSortUseLoops', bubbleSortUseLoops([1,3,2]));
//console.log('bubbleSortUseLoops', bubbleSortUseLoops([1,8,2,4,5,7,3]));


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


export {
  bubbleSort,
  bubbleSortSwapped,
  bubbleSortUseLoops,
  bubbleSortDisplayCount, bubbleSortTwoForLoops,
  bubbleSortModified 
}
