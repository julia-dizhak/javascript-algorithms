/**
 * Given an array of integers,
 * return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 */

// Ice Cream parlor
// return indexes
function twoSum(arr, sum) {
  const len = arr.length;


  // brute force
  // complexity
  // time O(n2)
  // space complexity is O(1)
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++) {
      if (arr[j] === sum - arr[i]) {
        return [i, j]
      }
    }
  }

  throw new Error('No two sum solution')
}

//  What is the best way to maintain a mapping of each element in the array to its index? A hash table.
// two pass hash table
// create a hasm map
// select one and search in hash map for complement
// indexes should be different

// 3
// sort and make binary search
// and save indexes


export { twoSum }
