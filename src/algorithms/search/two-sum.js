import { binarySearchRecursive } from './binary-search';

/**
 * Ice Cream parlor
 *
 * Given an array of integers,
 * return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 */

/**
 * brute force solution
 * runtime O(n2)
 * space complexity is O(1)
 */
function twoSumBruteForce(arr, sum) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[j] === sum - arr[i]) {
        return [i, j]
      }
    }
  }

  throw new Error('No two sum solution');
}

/**
 *
 * Solution using hash, runtime O(n) - linear time
 * The main benefit of using a hash table is the O(1) lookup time.
 * 1 Create an object containing the key-value pairs of the element and its index, respectively.
 * 2 Iterate through an array. For currentElement, compute complement.
 * etc.
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
function twoSum(arr, target) {
  const len = arr.length;
  const previousValues = {};

  for (let i = 0; i < len; i++) {
    const currentElement = arr[i];
    const complement = target - currentElement;
    const index2 = previousValues[complement];
    if (index2 != null) {
      return [index2, i]
    } else {
      previousValues[currentElement] = i
    }
  }

  // or through an exception
  return [];
};

/**
 * 1 Take an arr
 * 2 sort all the items
 * 3 just do a binary search there
 * @param {*} arr
 * @param {*} target
 */
// todo find a solution
// function twoSumBinarySearch(arr, target) {
//   const sortedArr = arr.sort((a,b) =>  a - b);
//   console.log('arr', arr);

//   let nums = [];
//   let previousValues = [];

//   for (let i in sortedArr) {
//     let complement = binarySearchRecursive(sortedArr, target - sortedArr[i]);
//     if (!!complement && !previousValues.includes[arr[i]] && !previousValues.includes(complement)) {
//       nums.push([sortedArr[i], complement]);
//       previousValues.push(complement)
//     }
//   }

//   console.log(nums)
//   return nums;
// }

//twoSumBinarySearch([2, 7, 11, 15], 9);
//twoSumBinarySearch([2,3,4,3,6,7], 6);

function whatFlavors(cost, money) {
  const map = new Map();
  for (let i = 0; i < cost.length; i++) {
      var target = money - cost[i];
      if (map.has(target)) {
        console.log(map.get(target), i + 1);
        break;
      }
      map.set(cost[i], i + 1);
  }
}

//whatFlavors([2, 7, 13, 5, 4, 13, 5], 10)


const twoSumUsingMap = function(arr, target) {
  const len = arr.length;
  let map = new Map();

  for (var i = 0; i < len; i++) {
    let complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
     map.set(arr[i], i);
  }
  console.log('map', map)
}

twoSumUsingMap([2, 7, 11, 15], 9);

export { twoSum, twoSumBruteForce, twoSumUsingMap }
