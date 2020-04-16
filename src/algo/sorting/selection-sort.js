/**
 * Selection sort works by selecting the minimum value in a list and
 * swapping it with the first value in the list.
 * It then starts at the second position, selects the smallest value in the remaining list,
 * and swaps it with the second element.
 * It continues iterating through the list and swapping elements until
 * it reaches the end of the list.
 * Now the list is sorted.
 * Selection sort has quadratic time complexity in all cases.
 */
function swap(a, b, arr) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function selectionSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let min = i;
    for (let j = i+1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    swap(i, min, arr); // swap function define separately, instead of swap could you ES6 syntax
  }

  return arr;
}

export { selectionSort }
