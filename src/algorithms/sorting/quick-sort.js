/*
Divide and conquer: recursion

*/
function quickSort(arr) {
  const len = arr.length;

  if (len <= 1) {
    return arr;
  }
  
  const pivot = arr[len - 1];
  const leftArr = [];
  const rightArr = [];

  for (const el of arr.slice(0, len - 1)) {
    // exclude last element, because it's our pivot
    el < pivot ? leftArr.push(el) : rightArr.push(el)
  }

  const merged = [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  return merged;
}

function quickSortUseRandomPivot(arr) {
  const len = arr.length;

  if (len <= 1) {
    return arr;
  }
  // pivot as a random
  let min = 1;
  let max = arr.length - 1;
  const random = Math.floor(min + Math.random() * (max + 1 - min));
  const pivot = arr[random]

  const left = [];
  const right = [];

  arr.splice(arr.indexOf(pivot), 1);
  arr = [pivot].concat(arr);

  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  const merged = [...quickSort(left), pivot, ...quickSort(right)];
  return merged;
}

// tests
// console.log('Sorted array:', quickSort([1, 3, 4, 2, 5]));

/*
Quick-sort under Hoare partition schema

Complexity
Quick sort’s worst case is O(n2) but that can be avoided if we pick random pivot point (choose middle one), so that way it’s big O is O(nlogn).
Slicing half and recursive and you need to loop through entire array -> O(n log n)

It’s space complexity is O(logn).

*/

function quickSortHoare(arr, left = 0, right = arr.length - 1) {
  // left-pointer would be the index of the first element which is 0
  // and right-pointer would be the index of the last element which would be (length -1).
  let pivot = partitionHoare(arr, left, right);

  if (left < pivot - 1) {
    quickSortHoare(arr, left, pivot - 1);
  }

  if (right > pivot) {
    quickSortHoare(arr, pivot, right)
  }

  return arr;
}

/* Two indices that start at the ends of the array being partitioned, then move
toward each other, until they detect an inversion: a pair of elements, one
greater than the pivot, one smaller, that are in the wrong order relative
to each other. The inverted elements are then swapped.
Here the numerical values of left and right is continually getting updated with
each inner while loop. But only if the while loop condition gets satisfied.
That is, when the while loop condition is unsatisfied, e.g. for the first inner
while loop, when array[left] > array[pivot] which means we have found a misplaced pair.
That is, although the left <= right (which is being made sure by the outer while loop)
the actual elements are not sorted. Meaning a left side element is larger in
value than the right side element. So, the code execution then jumps out of the
inner while loop and goes right in to execute the swap function.
*/
function partitionHoare(arr, lo, hi) {
  let pivot = Math.floor((lo + hi) / 2);

  while (lo < hi) {
    // find item on left to swap
    while (arr[lo] < arr[pivot]) {
      lo++;
    }
    // find item on right to swap
    while (arr[hi] > arr[pivot]) {
      hi--;
    }

    // check if pointers cross
    if (lo <= hi) {
      let temp = arr[lo];
      arr[lo] = arr[hi];
      arr[hi] = temp;

      lo++;
      hi--;
    }
  }

  return lo;
}

// tests
function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let arr = [];
// test with 3 indexes
for (let i = 0; i < 6; i++) {
  arr.push(getRandom(10))
}
console.log("Unsorted array: ", arr);
arr = quickSortHoare(arr);
console.log('Sorted array:', arr);

// lomoto partion scheme
// potential pivot location
// final pivot location
// todo

export { quickSort, quickSortUseRandomPivot };
