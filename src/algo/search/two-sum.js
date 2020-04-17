/**
 * Given an array of integers,
 * return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 */

// Ice Cream parlor
// return indexes
// brute force
function twoSum1(arr, sum) {
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
// complemnt


// function whatFlavors(cost, money) {


// }

// runtime O(n)
function twoSum(arr, sum) {
  const len = arr.length;

  const obj = {};

  for (let i = 0; i < len; i++) {
    const elem = arr[i];
    obj[i] = elem
    // obj =
    // index i
    // value arr
  }
  console.log('obj', obj)

  for (let i = 0; i < len; i++) {
    let complement = sum - arr[i];
    let index = -1;

    console.log('complement', complement);
    //debugger;
    if (Object.values(obj).includes(complement)) {
      index = Object.keys(obj).find(key => obj[key] === complement)
    }


    //const element = arr[i];

  }
}

function whatFlavors(cost, money) {
  let n = cost.length,
      restCost = {};
      
  for(let i = 0; i < n; i += 1) {
      var result = money - cost[i];
      if(restCost[result]) {
          console.log(restCost[result] + ' ' + (i + 1));
          break;
      }
      restCost[cost[i]] = i + 1;
  }
}

whatFlavors([2, 7, 11, 15], 9);
//twoSum([2, 7, 11, 15], 9)
export { twoSum }
