/**
 * Linear Search (array a, value x)
 *
 * Algorithm:
 * Step 1: Set i to 1
 * Step 2: if i > n then go to step 7
 * Step 3: if a[i] = x then go to step 6
 * Step 4: Set i to i + 1
 * Step 5: Go to Step 2
 * Step 6: Print Element x Found at index i and go to step 8
 * Step 7: Print element not found
 * Step 8: Exit
 *
 * Characteristics:
 * The worst case performance scenario for a linear search is that
 * it needs to loop through the entire collection;
 * either because the item is the last one, or because the item isn't found.
 * In other words, if you have N items in your collection,
 * the worst case scenario to find an item is N iterations.
 * This is known as runtime O(n) using the Big O Notation.
 * The speed of search grows linearly with the number of items within your collection.
 *
 * @param {array, number}
 * @return {number | undefined}
 */

export function findIndex(arr, searchQuery) {
  const len = arr.length;

  for (let index = 0; index < len; index++) {
    const element = arr[index];
    if (element === searchQuery) {
      return index
    } else return undefined
  }
}
