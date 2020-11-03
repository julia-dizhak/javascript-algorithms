/*
Insertion sort

Invariants
Entries to the left of ↑ (including ↑) are in ascending order.
Entries to the right of ↑ have not yet been seen.

To maintain algorithms invariants:
- Move pointer to the right i++;
- Moving from right to the left, exchange a[i] with each larger entry to its left
*/

/**
 * Insertion sort algorithm
*/
function insertionSort(arr) {
  if (arr.length == 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    // We declare a temporary variable to store the value of the current item, 
    // and declare a new variable j, which is equal to the index of the element 
    //that we will compare our current element to
    let j = i - 1;
    // for example [4, 5, 1, 2, 3], and 1 was our active value. The index of the 
    // currently active element is then 2, so temp is equal to array[2] which is
    // 5, and j is equal to 1. Then, 1 gets replaced with 5. The array is now 
    // [4, 5, 5, 2, 3]; array[2] is now equal to 5, and j is equal to 0. We still 
    // need to swap 5 with 1! As we know that the index of the new position of 
    // the currently active value is always one index higher than the value of j, 
    // we set array[j + 1] equal to the value that temp holds, which is the 
    // currently active value.
    while (j >= 0 && arr[j] > temp) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = temp;
  }
  return arr;
}

// the same 
function insertionSort1(arr) {
  const n = arr.length;

  // can skip the first item = index 0, since any array of size 1 is trivially sorted
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    // look to the left
    let j = i - 1;

    // Move elements of arr[0...i-1], that are greater than key, to one position
    // ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j];
      j = j - 1;
    }

    arr[j+1] = key;
  }

  return arr;
}

/*
Use 2 for loops
*/
function insertionSortVariant2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {

      if (arr[j] < arr[j-1]) {
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      } else break;
      
    }
  }
  return arr;
}

/*
In Insertion Sort Part 2: learning exercise

Guideline: You already can place an element into a sorted array.
How can you use that code to build up a sorted array, one element at a time?
Note that in the first step, when you consider an array with just the first element,
it is already sorted since there's nothing to compare it to.

Print the array after each iteration of the insertion sort, i.e.,
whenever the next element has been inserted at its correct position.
Since the array composed of just the first element is already sorted,
begin printing after placing the second element.

For example, there are n=7 elements in [3,4,7,5,6,2,1].
Working from left to right, we get the following output:
3 4 7 5 6 2 1
3 4 7 5 6 2 1
3 4 5 7 6 2 1
3 4 5 6 7 2 1
2 3 4 5 6 7 1
1 2 3 4 5 6 7

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
  insertionSort, runningTimeOfInsertionSort,
  insertionSortVariant2,
  insertionSort1
}
