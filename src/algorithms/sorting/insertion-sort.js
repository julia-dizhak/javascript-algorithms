/**
 * In Insertion Sort Part 2: learning exercise
 *
 * Guideline: You already can place an element into a sorted array.
 * How can you use that code to build up a sorted array, one element at a time?
 * Note that in the first step, when you consider an array with just the first element,
 * it is already sorted since there's nothing to compare it to.
 *
 * Print the array after each iteration of the insertion sort, i.e.,
 * whenever the next element has been inserted at its correct position.
 * Since the array composed of just the first element is already sorted,
 * begin printing after placing the second element.
 *
 * For example, there are n=7 elements in [3,4,7,5,6,2,1]. Working from left to right, we get the following output:
 * 3 4 7 5 6 2 1
 * 3 4 7 5 6 2 1
 * 3 4 5 7 6 2 1
 * 3 4 5 6 7 2 1
 * 2 3 4 5 6 7 1
 * 1 2 3 4 5 6 7
 */

function insertionSort2(n, arr) {
  let storage;

  for (let i = 1; i < n; i++) {
    storage = arr.splice(i, 1)[0]

    for (let j = i; j >= 0; j--) {
      if (storage > arr[j-1] || j === 0) {
        arr.splice(j, 0, storage)
        break
      }
    }
    //console.log(arr.join(' '))
  }
}
// insertionSort2(7, [3,4,7,5,6,2,1]);

/**
 * Insertion sort algorithm
 */
function insertionSort(arr) {
  const len = arr.length;

  // can skip the first item = index 0, since any array of size 1 is trivially sorted
  for (let i = 1; i < len; i++) {
    const key = arr[i];
    // look to the left
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      debugger
      arr[j+1] = arr[j];
      j = j - 1;
    }

    arr[j+1] = key;
  }

  return arr;
}


function runningTimeOfInsertionSort(arr) {
  let swap = 0;

  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j>=0 && arr[j] > key) {
      swap++;
      arr[j+1] = arr[j];
      j = j - 1;
    }

    arr[j+1] = key;

  }

  return swap;
}

export {
  insertionSort2,
  insertionSort, runningTimeOfInsertionSort
}
