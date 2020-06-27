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

  const half = Math.floor(arr.length / 2);
  const left = arr.slice(0, half);
  const right = arr.slice(half);

  return merger(mergeSort(left), mergeSort(right))
}

/*
Merge sort: practical improvements

Use insertion sort for small subarrays.
・Mergesort has too much overhead for tiny subarrays.
・Cutoff to insertion sort for ≈ 7 items
*/
// function mergeSortImprove(arr) {
//   if ( arr.length <= 1) {
//     return arr;
//   }

//   let lo
//   let hi

//   const half = Math.floor(arr.length / 2);
//   const left = arr.slice(0, half);
//   const right = arr.slice(half);

//   if (right <= left + CUTTOF - 1) {

//   }
// }

// test if it's stable
console.log('mergeSort', mergeSort([5, 2, 1, 3, 6, 4]));

export { mergeSort, merger }
