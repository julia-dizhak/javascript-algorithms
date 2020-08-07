/*
Selection sort works by selecting the minimum value in a list and
swapping it with the first value in the list.

It then starts at the second position, selects the smallest value in the remaining list,
and swaps it with the second element.
It continues iterating through the list and swapping elements until
it reaches the end of the list.
Now the list is sorted.

To maintain algorithm invariants:
- Move the pointer to the right i++
- Identify index of minimum entry on right
- Exchange onto position

Time complexity
Selection sort has quadratic time complexity in all cases.
The number of compares and exchanges made by selection sort does not
depend on the order of the input.
*/
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function selectionSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    // set minimum to this position
    let min = i; // index of the smallest element to the right of pointer i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        // resets min
        min = j
      }
    }

    // or possible to use ES6 syntax
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
    // or separate function
    //swap(arr, i, min);
  }

  return arr;
}

export { selectionSort, swap }
