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
  return []
};


twoSum([2, 7, 11, 15], 9);

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



// 3 variant
// sort and make binary search
// and save indexes
// complemnt


// var twoSum = function(nums, target) {
//   let map = new Map();

//   for (var i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i]
//     }
//      map.set(nums[i], i);
//   }
//   console.log('map', map)
// }


// function whatFlavors(cost, money) {
//   let n = cost.length,
//       restCost = {};

//   for(let i = 0; i < n; i += 1) {
//       var result = money - cost[i];
//       if(restCost[result]) {
//           console.log(restCost[result] + ' ' + (i + 1));
//           break;
//       }
//       restCost[cost[i]] = i + 1;
//   }
// }

// whatFlavors([2, 7, 11, 15], 9);

export { twoSum, twoSumBruteForce }
