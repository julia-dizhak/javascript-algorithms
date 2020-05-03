function insertionSort(arr) {
  const len = arr.length;

  // can skip the first item = index 0, since any array of size 1 is trivially sorted
  for (let i = 1; i < len; i++) {
    const key = arr[i]; // or an element
    let j = i - 1;

    /*
      Move elements of arr[0..i-1], that are
      greater than key, to one position ahead
      of their current position
    */
    while (j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j];
      j = j - 1;
    }

    arr[j+1] = key;
  }

  return arr;
}

insertionSort([3, 1,2])


function insertionSort1(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    const key = arr[i]; // todo instead key use arr[i]
    let j = i - 1;
    while (j>=0 && arr[j] > key) {
      arr[j+1] = arr[j] // swap
      j = j - 1
    }
    //console.log('arr', arr)
    arr[j+1] = key;
    console.log(arr.join(` `));
  }
  return arr
}

// function insertionSort2 (n, arr) {

//   let storage
//   for (let i = 1; i < n; i++) {
//       storage = arr.splice(i, 1)[0]

//       for (let j = i; j >= 0; j--) {
//           if (storage > arr[j-1] || j === 0) {
//               arr.splice(j, 0, storage)
//               break
//           }
//       }

//       console.log(arr.join(' '))
//   }
// }


// In Insertion Sort Part 1, you inserted one element into an array at its correct sorted position. Using the same approach repeatedly, can you sort an entire array?

// Guideline: You already can place an element into a sorted array. How can you use that code to build up a sorted array, one element at a time? Note that in the first step, when you consider an array with just the first element, it is already sorted since there's nothing to compare it to.

// In this challenge, print the array after each iteration of the insertion sort, i.e., whenever the next element has been inserted at its correct position. Since the array composed of just the first element is already sorted, begin printing after placing the second element.

// For example, there are  elements in . Working from left to right, we get the following output:

// 3 4 7 5 6 2 1
// 3 4 7 5 6 2 1
// 3 4 5 7 6 2 1
// 3 4 5 6 7 2 1
// 2 3 4 5 6 7 1
// 1 2 3 4 5 6 7
// correct to check lines
// for (var i = 1; i < array.length; i++) {
//   var j = i;
//   var value = array[i];
//   while (j >= 1 && (array[j-1] > value)) {
//     array[j] = array[j-1];
//     j--;
//   }
//   array[j] = value;
//   console.log(array.join(' '));
// }

// insertion sort 1
// Sorting
// One common task for computers is to sort data. For example, people might want to see all their files on a computer sorted by size. Since sorting is a simple problem with many different possible solutions, it is often used to introduce the study of algorithms.

// Insertion Sort
// These challenges will cover Insertion Sort, a simple and intuitive sorting algorithm. We will first start with a nearly sorted list.

// Insert element into sorted list
// Given a sorted list with an unsorted number  in the rightmost cell, can you write some simple code to insert  into the array so that it remains sorted?

// Since this is a learning exercise, it won't be the most efficient way of performing the insertion. It will instead demonstrate the brute-force method in detail.

// Assume you are given the array  indexed . Store the value of . Now test lower index values successively from  to  until you reach a value that is lower than ,  in this case. Each time your test fails, copy the value at the lower index to the current index and print your array. When the next lower indexed value is smaller than , insert the stored value at the current index and print the entire array.

// The results of operations on the example array is:

// Starting array:
// Store the value of  Do the tests and print interim results:
  // let i = arr.length-1;
  // let val = arr[i];

  // while(val < arr[i-1]){
  //   arr[i] = arr[i-1];
  //   console.log(arr.join(` `));
  //   i--;
  // }
  // arr[i] = val;
  // console.log(arr.join(` `));

insertionSort1([1,3,2])
export { insertionSort }
