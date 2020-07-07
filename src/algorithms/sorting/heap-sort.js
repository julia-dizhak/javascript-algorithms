/*
Heap sort

task is related https://leetcode.com/problems/relative-sort-array/

https://www.youtube.com/watch?v=k72DtCnY4MU
11:46
*/


class MaxHeap {
  constructor(arr) {
    this.size = arr.length;
  }

  /**
   * i - index of root
   */
  heapify(arr, length, i) {

  }
}

function heapify(arr, length, i) {
  debugger
  let largest = i; // referring to indexes
  let left = i*2 + 1;
  let right = left + 1; // i*2 + 2

  // That recursive call below heapify(arr, size, largest) is going to
  // ripple down our heap every time we make a switch. When we are checking
  // the bottom elements of the heap, they are going to be next to elements
  // we have already popped off our heap and sorted. So we need to make sure
  // they get left alone. That is why we pass in length of the array that we
  // are using in our heap. Let’s make sure we don’t go past that length!
  if (left < length && arr[left] > arr[largest]) {
    largest = left
  }

  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  // Now we can check to see if largest is still referring to the parent
  // element. If it isn’t then, we will swap the largest element with the parent,
  // putting them into their appropriate places.
  if (largest !== i) { // if largest is not left or right
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    // If we are only comparing three elements at a time, we need a way to make
    // sure our swaps aren’t going to affect the elements further down the heap.
    // We are going to heapify this array from the bottom up. This means that
    // any swaps we do are changing the parent elements of the nodes below.
    // We need some kind of check in place to make sure that our lower elements
    // are still in order!
    heapify(arr, length, largest);
  }

  return arr;
}

function heapSort(arr) {
  const length = arr.length;
  let i = Math.floor(length/2 - 1); // index of last parent node
  let k = length - 1; // last index

  while (i >= 0) {
    heapify(arr, length, i);
    i--;
  }

  // repeat steps one and 2 until the heap has only 1 element remaining
  while (k >= 0) {
    // swap first and last element
    [arr[0], arr[k]] = [arr[k], arr[0]];
    // k = length - 1
    // k is length argument for next heapify call
    heapify(arr, k, 0);
    // we can continue decrementing it and using it as our length argument for
    // heapify until there is nothing left in heap and everything is sorted.
    k--;
  }

  // in-place algorithm
  return arr
}

console.log('heapSort', heapSort([6,5,3,1,8,7,2,4]));

export {
  heapSort,
  heapify
}
