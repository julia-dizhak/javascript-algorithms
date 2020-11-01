/*
Leetcode
1638 Sort Array by Increasing Frequency
easy

Given an array of integers nums, sort the array in increasing order based on the
frequency of the values. If multiple values have the same frequency, sort them 
in decreasing order.

Return the sorted array.

Example 1:
Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

Example 2:
Input: nums = [2,3,1,3,2]
Output: [1,3,3,2,2]
Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.

Example 3:
Input: nums = [-1,1,-6,4,5,-6,1,4,1]
Output: [5,-1,4,4,-6,-6,1,1,1]

Hint 1
Count the frequency of each value.

Hint 2
Use a custom comparator to compare values by their frequency. If two values have 
the same frequency, compare their values.
*/

/*
Approach Hash + sort

Time is O(n) + O(n log n) because of sort => O(n log n)
Space is O(n)
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  let sortAble = [];
  let frequency = {};
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    frequency[nums[i]] = (frequency[nums[i]] || 0) + 1;
  }
  console.log(frequency);
  
  for (const key in frequency) {
    sortAble.push([key, frequency]);
  }



  console.log('sortAble', sortAble);


}

/*
Approach use Array + sort

Time is O(n log n) because of sort
Space is O(n)
*/

function sortByFrequencyUseArr(arr){
  const frequency = {};
  
  arr.forEach(item => {
    frequency[item] = (frequency[item] || 0) + 1;
  });
  //console.log(frequency)

  let sortable = arr.map(item => [item, frequency[item]]);
  //console.log(sortable);

  sortable.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0]
    } 
    return a[1] - b[1]
  });
  //console.log(sortable);

  return sortable.map(s => s[0]);
}

// tests
// 3 1 1 2 2 2
//console.log('frequencySort', frequencySort([1,1,2,2,2,3]));
console.log('frequencySort', frequencySort([2,3,1,3,2]));
//console.log('frequencySort', frequencySort([-1,1,-6,4,5,-6,1,4,1]));

export {
  frequencySort,
  sortByFrequencyUseArr
}
