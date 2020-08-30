/*
Leetcode
969 Pancake sorting
medium

Given an array of integers A, We need to sort the array performing a series of
pancake flips.

In one pancake flip we do the following steps:

Choose an integer k where 0 <= k < A.length.
Reverse the sub-array A[0...k].
For example, if A = [3,2,1,4] and we performed a pancake flip choosing k = 2,
we reverse the sub-array [3,2,1], so A = [1,2,3,4] after the pancake flip at k = 2.

Return an array of the k-values of the pancake flips that should be performed
in order to sort A. Any valid answer that sorts the array within 10 * A.length
flips will be judged as correct.

Example 1:
Input: A = [3,2,4,1]
Output: [4,2,4,3]
Explanation:
We perform 4 pancake flips, with k values 4, 2, 4, and 3.
Starting state: A = [3, 2, 4, 1]
After 1st flip (k = 4): A = [1, 4, 2, 3]
After 2nd flip (k = 2): A = [4, 1, 2, 3]
After 3rd flip (k = 4): A = [3, 2, 1, 4]
After 4th flip (k = 3): A = [1, 2, 3, 4], which is sorted.
Notice that we return an array of the chosen k values of the pancake flips.

Example 2:
Input: A = [1,2,3]
Output: []
Explanation: The input is already sorted, so there is no need to flip anything.
Note that other answers, such as [3, 3], would also be accepted.

Constraints:

1 <= A.length <= 100
1 <= A[i] <= A.length
All integers in A are unique (i.e. A is a permutation of the integers from 1 to
A.length).
*/

/*
Approach sort like bubble sort

I need to choose k
k can't be 4
arr.length = 4
k < arr.length


3 2 4 1
4 2 3 1

Explanation

It's called "Pancake Flip" because, like a stack of pancakes, if you're going to flip some of the pancakes, you have to flip from the top of the stack up until a certain point. You can't flip only some section below the top.

It makes way more sense when you think about the array standing vertically like stack of pancakes. You must take a section from the top (beginning), including k pancakes in your flip.

I hope my explanation helped clear things up.


Time is



let currentSortingIndex = A.length-1;
    let res = [];
    while (currentSortingIndex != 0) {
        for(let i = currentSortingIndex; i >= 0; i--) {
            // if current sorted index number is in his place we dont need to sort him
            if(A[currentSortingIndex] === currentSortingIndex+1) break;
            // we found the current index number we need to sort
            if(A[i] === currentSortingIndex+1) {
                // reverse from 0 to that index to make the current sorting number first
                let partOfArrayToIndexWeFoundTheNumber = A.splice(0, i+1).reverse();
                A.splice(0, 0, ...partOfArrayToIndexWeFoundTheNumber)
                res.push(i+1);
                // reverse from 0 to the place that we currently sorting
                let partOfArrayToTheSortedIndex = A.splice(0, currentSortingIndex+1).reverse();
                A.splice(0, 0, ...partOfArrayToTheSortedIndex)
                res.push(currentSortingIndex+1);
                break;
            }
        }
        // we sorted the current index so we go to the next one
        currentSortingIndex--;
        // everything after that index is sorted
    }
    return res;

todo
https://leetcode.com/problems/sort-colors/

*/

/*
Approach strait forward

Note If you see the like vs dislike ratio < 1. Because this problem is poor
written, it is not clearly mentioned in the problem we need to return result 1
indexed based.

Example: A[] = [3, 2, 4, 1]

As, we have 4 elements in the aray 1 - 4.
Let start to move 4 on its correct position.
find index for 4 return 2
flip array at 2 and then 3 -->  [3, 2, 4, 1] --> [4, 2, 3, 1] -->  [1, 3, 2, 4]
Also, add both flip operation k as 1 based so [3, 4]

Now perform for 3.
index = 1
flip array at 1 and 2 --> [1, 3, 2, 4] --> [3, 1, 2, 4] --> [2, 1, 3, 4]
list = [3, 4, 2, 3]

Now perform for 2.
index = 0
flip array at 0 and 1 --> [2, 1, 3, 4] --> [2, 1, 3, 4] --> [1, 2, 3, 4]
list = [3, 4, 2, 3, 1, 2]

Now perform for 1.
index = 0
flip array at 0 and 1 --> [1, 3, 2, 4] --> [1, 3, 2, 4] --> [1, 3, 2, 4]
list = [3, 4, 2, 3, 1, 2, 1, 1]


As, per the problem we can flip subarray from 0 to k where 0 ≤ k < A.length,
this give us a hint first find the index of largest element and move it to the
correct place how to do that?

1 find the index of that element using find helper function.
2 now flip the array form 0 to the find index.
3 now flip the array from 0 the correct place of that element
4 Above 3 operation we have to perform for all elements from n to 1.

similar as selection sort?

time is O(n^2)
space is O(1)
*/

// example [3, 2, 4, 1]
// find method will help to find the index of the target element in the array
function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// flip method will help to flip all the element of subarray from [0, j]
function flip(arr, index) {
  if (arr.length === 1) return arr;
  let i = 0;
  let j = index;

  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

var pancakeSortBruteForce = function(A) {
  let res = [];

  for (let n = A.length; n > 0; n--) {
    // first find the index of current target = n
    let index = findIndex(A, n);
    // todo can find inside a loop
    console.log('index', index);
    // flip the array till that index so that get that element on front of array
    flip(A, index);
    //console.log('A', A);
    // now flip the array to move that element on correct position
    // n length, index 1 number less
    flip(A, n - 1);
    //console.log('A', A);

    // add first flip operation k, + 1
    res.push(index + 1);
    // add second flip operation k
    res.push(n)
  }

  console.log('res', res);
  return res;
}

/*
Approach

1 Find max
2 bring max to front
3 bring max to back
4 reduce the size and repeat


Example
[3,2,4,1] 4 is max
[4,2,3,1] bring 4 to front
[1,3,2,4] bring 4 to back, reduce size and repeat, max is 3
[3,1,2,4] bring front
[2,1,3,4] bring back, max is 2, in front
[1,2,3,4] bring back

time is O(n^2)
space is O(?)

*/
/**
 * @param {number[]} A
 * @return {number[]}
*/
var pancakeSort = function(A) {
  if (A.length === 1) return [];
  let ans = [];
  let lastPosition = A.length - 1;

  while (lastPosition > 0) {
    let max = A[0];
    let index = 0;

    for (let i = lastPosition; i > 0; i--) {
      // find current max
      if (A[i] > max) {
        max = A[i];
        index = i;
      }
    }
    console.log('max', max);
    console.log('lastPosition', lastPosition);
    console.log('index', index);

    // the max is already at the lastPosition, ignore this round
    if (index === lastPosition) {
      lastPosition--;
      continue;
    }

    // find the max, bring it to the front
    flip(A, index);
    if (index !== 0) ans.push(index + 1);

    // pancake flip the max from the front to the back
    flip(A, lastPosition);
    if (index !== lastPosition) ans.push(lastPosition + 1);

    lastPosition--;
  }

  return ans;
}


//////
// function find(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) return i;
//   }
//   return -1;
// }

// function flip1(subArr, k) {
//   let i = 0;
//   while (i < Math.floor(k/2)) {
//     let temp = subArr[i];
//     subArr[i] = subArr[k-i-1];
//     subArr[k-i-1] = temp;
//     i++;
//   }
// }

// var pancakeSort1 = function(A) {
//   if (A.length === 1) return [];
//   let ans = [];

//   for (let valueToSort = A.length; valueToSort > 0; valueToSort--) {
//     console.log('valueToSort', valueToSort);
//     // locate the position for the value to sort in this round
//     let index = find(A, valueToSort);
//     console.log('index', index);

//     // sink the value_to_sort to the bottom,
//     // with at most two steps of pancake flipping.
//     if (index === valueToSort - 1 ) {
//       continue;
//     }
//     // 1). flip the value to the head if necessary
//     if (index !== 0) {
//       ans.push(index + 1);
//       flip1(A, index + 1);
//     }
//     // 2). now that the value is at the head, flip it to the bottom
//     ans.push(valueToSort);
//     flip1(A, valueToSort);
//   }

//   console.log('ans')
//   return ans;
// }



// tests
//console.log('pancakeSort', pancakeSort([3,2,4,1]))
console.log('pancakeSort', pancakeSortBruteForce([3,2,4,1]))
// console.log('pancakeSort', pancakeSort([3,2,1,4]));
// console.log('pancakeSort', pancakeSort([1,2,3]))

export {
  pancakeSort,
  pancakeSortBruteForce,
  flip
}
