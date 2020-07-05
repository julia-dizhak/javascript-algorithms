/*
Implementation
We can use a class to implement adding and removing from the heap,
but we need a way to store the values in order. What kind of data structures
do we know in JavaScript that have a specific order? Arrays do!
The first element in the array is the root node. The left child is the second
item and the right child is the third item, etc

Complexity
time
insert is O(log n)
*/
class MaxBinaryHeap {
  constructor() {
    this.values = [];
    //this.size = this.values.length; // number of elements
  }

  // helper methods that bubbles up values from end
  bubbleUp() {
    // get index of inserted element
    let index = this.values.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1)/2);
      if (this.values[parentIndex] < this.values[index]) {
        this.swap(index, parentIndex);
        // We reassign our current index to the element’s new index if swapped,
        // and keeps testing parents in a loop until the element fits, or we reach
        // the root of the heap.
        index = parentIndex;
      } else break;
    }
    return 0
  }

  // swim or bubble up
  swim(index) {
    // if index starts from 0
    while (index > 1) {
      // get parent index via formula
      const parentIndex = Math.floor((index - 1)/2);
      if (this.values[parentIndex] < this.values[index]) {
        this.swap(index, parentIndex);
        // change current index to parent index
        index = parentIndex
      } else break;
    }

    return 0;
  }

  // method that pushes new value onto the end and calls the bubble helper
  insertOntoEnd(val) {
    this.values.push(val);
    this.bubbleUp();
    return this.values;
  }

  // method that pushes new value and calls the bubble helper
  insert(val) {
    let size = this.values.length;
    // (size > 0) ? this.values[++size] = val : this.values[0] = val
    // //this.values[++size] = val;
    this.values.push(val);
    this.swim(size);
    return this.values;
  }

  // bubble down elements to readjust heap after removing max element
  bubbleDown() {
    let parentIndex = 0;
    let size = this.values.length;
    const parent = this.values[0];

    while(true) {
      let leftChildIndex = 2*parentIndex + 1;
      let rightChildIndex = 2*parentIndex + 2;

      let leftChild;
      let rightChild;
      let indexToSwap = null;

      // if left child exists, and is greater than the element, plan to swap
      // with the left child index
      if (leftChildIndex < size) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > parent) {
          indexToSwap = leftChildIndex
        }
      }

      // if right child exists
      if (rightChildIndex < size) {
        rightChild = this.values[rightChildIndex];
        if (
          (rightChild > parent && indexToSwap === null) ||
          (rightChild > leftChild && indexToSwap !== null)
          ) {
            indexToSwap = rightChildIndex
        }
      }

      // if there are no plans to swap, break out of the loop
      if (indexToSwap === null) break;
      // swap with planned element
      this.swap(parentIndex, indexToSwap);
      // starting index is now index that we swapped with
      parentIndex = indexToSwap;
    }
  }

  deleteMax() {
    // swap first and last element
    this.swap(0, this.values.length - 1);
    //pop max value off of values
    let poppedVal = this.values.pop();
    //re-adjust heap if length is greater than 1
    if (this.values.length > 1) {
      this.bubbleDown();
    }
    return poppedVal
  }

  max() {
    return this.values[0]
  }


  // helper methods
  swap(index1, index2) {
    let temp = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = temp;
  }
}

// tests
const heap = new MaxBinaryHeap();
heap.insert(100);
heap.insert(20);
heap.insert(80);
heap.insert(30);
heap.insert(70);
heap.insert(40);
heap.deleteMax()

// heap.insertOntoEnd(100);
// heap.insertOntoEnd(20);
// heap.insertOntoEnd(80);
// heap.insertOntoEnd(30);
// heap.insertOntoEnd(70);
// heap.insertOntoEnd(40);

//console.log('heap', heap)

export {
  MaxBinaryHeap
}
