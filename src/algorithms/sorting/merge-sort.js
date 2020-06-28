/*
Merge sort: divide and conquer

Divide in two halves
Solve recursively each half
Merge 2 halves

Merge sort is pretty efficient and the best way to solve merge sort is recursively.
This algorithm is a good example of Divide and conquer

So suppose we have large array and we want to sort it.
What if we could magically sort the left half and sort the right half,
and then get back two sorted halves.
When if you want to have the whole array sorted all we have to do is merge those
in in sorted order and that's merge sort is.
So we apply merge sort to the left half, apply to the right half
and merge those back in order
It always give us n log n runtime. There is no case than array looks really funky.
The downside is merging 2 arrays together requires extra space - O(n) space
*/

function merger(left, right) {
  // auxilary
  let singleSorted = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      singleSorted.push(left[0]);
      // is it O(n) complexity
      left.shift(); // move pointer to next element
    } else {
      singleSorted.push(right[0]);
      right.shift(); // move pointer to next element
    }
  }

  // need to concat here because there will be one element
  // remaining from either left or the right
  return singleSorted.concat(left, right);
}

function mergeSort(arr) {
  // it means we no longer divide the array into smaller chunks
  if ( arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merger(mergeSort(left), mergeSort(right))
}

/*
Merge sort: practical improvements

Use insertion sort for small subarrays.
・Mergesort has too much overhead for tiny subarrays.
・Cutoff to insertion sort for ≈ 7 items
*/
function insertionSort(arr, lo, hi) {
  for (let i = lo; i <= hi; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j-1]; j--) {
      let temp = arr[j];
      arr[j] = arr[j-1];
      arr[j-1] = temp;
    }

  }
}

// todo doesn't work
function merge(arr, aux, lo, mid, hi) {
  // Copy to aux[]
  for (let i = lo; i <= hi; i++) {
    aux[i] = arr[i];
  }

  // Merge back to a[]
  let i = lo, j = mid + 1;
  for (let k = lo; k <= hi; k++) {
    if      (i > mid)              arr[k] = aux[j++];
    else if (j > hi)               arr[k] = aux[i++];
    else if (aux[i] < aux[j])      arr[k] = aux[i++];
    else                           arr[k] = aux[j++];
  }
}


function mergeSortImprove(arr, aux, lo, hi) {
  const CUTTOF = 7;

  // #1 improvement
  // Stop condition for this recursion.
  // This time we add a CUTOFF, when the items in array
  // is less than 7, we will use insertion sort.
  if (hi <= lo + CUTTOF - 1) {
    insertionSort(arr, lo, hi);
    return;
  }

  let mid = lo + (hi - lo) / 2;
  mergeSortImprove(arr, aux, lo, mid);
  mergeSortImprove(arr, aux, mid + 1, hi);
  if (!(arr[mid+1] < arr[mid])) return;
  merge(arr, aux, lo, mid, hi);
}

/*
Bottom-up mergeSort

Basic plan.
・Pass through array, merging subarrays of size 1.
・Repeat for subarrays of size 2, 4, 8, 16, ....

Complexity
*/
function bottomUpMergeSort(arr) {
  var sorted = arr.slice();
  const n = sorted.length;
  var buffer = new Array(n);


  for (var size = 1; size < n; size *= 2) {
    for (var leftStart = 0; leftStart < n; leftStart += 2*size) {
      var left = leftStart,
          right = Math.min(left + size, n),
          leftLimit = right,
          rightLimit = Math.min(right + size, n),
          i = left;
      while (left < leftLimit && right < rightLimit) {
        if (sorted[left] <= sorted[right]) {
          buffer[i++] = sorted[left++];
        } else {
          buffer[i++] = sorted[right++];
        }
      }
      while (left < leftLimit) {
        buffer[i++] = sorted[left++];
      }
      while (right < rightLimit) {
        buffer[i++] = sorted[right++];
      }
    }
    var temp = sorted,
        sorted = buffer,
        buffer = temp;
  }

  return sorted;
}

console.log('bottomUpMergeSort', bottomUpMergeSort([5, 2, 1, 3, 6, 4]));

export { mergeSort, merger, mergeSortImprove, bottomUpMergeSort }
