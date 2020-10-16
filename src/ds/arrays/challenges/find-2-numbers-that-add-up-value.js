/*
Find Two Numbers that Add up to "value"

Given an array and a number "value", find two numbers from the array that sum 
to 'value'. Implement your solution in JavaScript and see if your output matches 
with the correct output.

*/

/*
Approach Brute force

This is the most time-intensive, but yet an ​intuitive solution. Traverse the 
whole array, and check if any of the two elements add up to the given number n. 
Use a nested for-loop and iterate over the entire array for each element.

Time 
Since we iterate nn times over the entire array of length nn, the time 
complexity is O(n^2).
*/

/**
 * 
 * @param {*} arr 
 * @param {*} value 
 *  
*/
function findSumBruteForce(arr, value) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      if (arr[i] + arr[k] == value) {
        return [arr[i], arr[k]]
      }
    }
  }

  return false;
}

//console.log('findSum', findSumBruteForce([1,21,3,14,5,60,7,6], 81));

/*
Approach Sorting an array

While solution #1 is very intuitive, it is not very time efficient. 

A better way to solve this is by first sorting the array. Then, for each element 
in the array, use a binary search to look for another element in the array that
will be equal to the difference of the current element and the intended sum. 

You can implement the binarySearch() function however you like, recursively or 
iteratively. So, if the intended sum is value and the first element of the sorted 
array is a_0, then you will conduct a binary search for value-a_0. This will be 
repeated for all the elements until we find a solution.

Time Complexity 
Since most popular sorting functions take O(nlogn), let’s assume that the JavaScript 
sort() function takes the same. Then a binary search for each element takes 
O(logn), so a binary search for all n elements will take O(nlogn). 
So, the overall time complexity is O(nlogn).
*/

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  let found = false;
  let arrIndex = -1;

  while ((left <= right) && !found) {
    let mid = Math.floor(left + (right - left) / 2);

    if (target == arr[mid]) {
      found = true;
      arrIndex = mid;
    }
    else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  if (found) return arrIndex;
  else return false;
}
//console.log('binarySearch', binarySearch([-1,0,3,5,9,12], 9));

function findSumUseSort(arr, value) {
  arr = arr.sort((a,b) => a - b);

  let index;
  for (let i = 0; i < arr.length; i++) {
    const complement = value - arr[i];
    index = binarySearch(arr, complement);
    if (index != false && i != index) {
      return [arr[i], complement]
    }    
  }

  return false;
}

//console.log('findSum', findSumUseSort([1,21,3,14,5,60,7,6], 81));

/*
Approach Moving indices or Two pointers 

Hash doesn't work here

In this solution, we will first sort the array. Then we will use two variables, 
one starting from the first index of the array and second from size-1 index of 
the array. If the sum of the elements on these indexes of the array is smaller 
than given value then increment index from the start else decrement index from 
the end, until the given value is not equal to the sum. Store the elements on 
these indexes in result array and return it.

Time complexity
Since most popular sorting functions take O(nlogn), let’s assume that 
the JavaScript sort() function takes the same. Then, in the worst-case scenario, 
the entire array iterated from opposite ends would take O(n). So this 
solution is in O(nlog(n)).
*/

/**
 * 
 * @param {*} arr 
 * @param {*} value 
 */
function findSum(arr, value) {
  if (arr.length <= 1) return false;
  
  arr = arr.sort((a,b) => a - b);
  let index1 = 0,
    index2 = arr.length - 1,
    res = [],
    sum = 0;

  while (index1 !== index2) {
    sum = arr[index1] + arr[index2];
    if (sum < value) {
      index1++
    } else if (sum > value) {
      index2--;
    } else {
      res.push(arr[index1]);
      res.push(arr[index2]);
      return res;
    }
  } 

  return false;
}

export {
  findSumBruteForce,
  findSumUseSort,
  findSum
}