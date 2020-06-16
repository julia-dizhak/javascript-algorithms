/*
Ice Cream parlor

Leetcode
1. Two sum
easy

Given an array of integers,
return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution,
and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

Hint 1
A really brute force way would be to search for all possible pairs
of numbers but that would be too slow.
Again, it's best to try out brute force solutions for just for completeness.
It is from these brute force solutions that you can come up with optimizations.

Hint 2
So, if we fix one of the numbers, say x,
we have to scan the entire array to find the next number y
which is value - x
where value is the input parameter.
Can we change our array somehow so that this search becomes faster?

Hint 3
The second train of thought is, without changing the array,
can we use additional space somehow?
Like maybe a hash map to speed up the search?

Follow up:
What if the given input is already sorted in ascending order?
See Question [2. Two Sum II – Input array is sorted].
*/

/*
Approach brute force

Loop through each element x
and find if there is another value that equals to target – x.

runtime
As finding another value requires looping through the rest of array,
its runtime complexity is O(n2).

space complexity is O(1)
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


/*
Approach Two-pass hash table


*/
function twoSum1(arr, sum) {
  //if sum is 0

  let map = {};

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i
  }

  for (let i = 0; i < arr.length; i++) {
    const complement = sum - arr[i];
    // console.log('index', i);
    // console.log('complement', complement);
    //debugger
    if (map[complement] != null) {
      return [i, map[complement]]; // todo think about correct number
    }
  }

  //console.log('hash', map)
  //throw new Error('No two sum solution');
  return []
}

//console.log('twoSum', twoSum1([3,2,4], 6)); // index 2, 4
// console.log('twoSum', twoSum1([2, 7, 11, 15], 9)); // index 0,1


/*
Approach one-pass hash table

We could reduce the runtime complexity of looking up
a value to O(1) using a hash map
that maps a value to its index.

1 Create an object containing the key-value pairs of the element and its index,
respectively.
2 Iterate through an array. For currentElement, compute complement.

runtime O(n) - linear time
*/

/*
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
function twoSum(arr, target) {
  const len = arr.length;
  //if (len === 0 ) throw new Error('No two sum solution');
  const previousValues = {};

  for (let i = 0; i < len; i++) {
    const currentElement = arr[i];
    const complement = target - currentElement; // needed
    const index2 = previousValues[complement];
    if (index2 != null) {
      return [index2, i]
    } else {
      previousValues[currentElement] = i
    }
  }

  // or through an exception
  //throw new Error('No two sum solution');
  return [];
};

// todo
/*
approach use Map
*/
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

  return false
}


/*

Leetcode
167
easy

Given an array of integers that is already sorted in ascending order,
find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers
such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution
and you may not use the same element twice.
Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

todo
1 Take an arr
2 sort all the items
3 just do a binary search there

follow up design two sum data structure
*/

// todo
// 2 pointers
// can use the same approach as with hash, space is O(n)

// todo check
function findValue(nums, target, start = 0, end = nums.length - 1) {
  while (start <= end) {
    let mid = Math.floor(start + (end - start)/2);
    if (target === nums[mid]) return mid;
    else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return (start === end && nums[start] === target) ? start : -1;
}

function twoSumBinarySearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    // bsRecursive(arr, target, start, end)
    // todo rename stop to end
    const j = findValue(arr, complement, i+1, arr.length);
    if (j !== -1) {
      return [i+1, j+1]
    }
  }
  throw new Error('No two sum solution')
}

//console.log('twoSumBinarySearch', twoSumBinarySearch([2,7,11,15], 9))
//twoSumBinarySearch([2, 7, 11, 15], 9);
//twoSumBinarySearch([2,3,4,3,6,7], 6);

/*
Approach 2 pointers

Let’s assume we have two indices pointing to the i-th and j-th elements,
Ai and Aj respectively. The sum of Ai and Aj could only fall into one of these three possibilities:

1. Ai + Aj > target. Increasing i isn’t going to help us, as it makes the sum even
bigger. Therefore we should decrement j.

2. Ai + Aj < target. Decreasing j isn’t going to help us, as it makes the sum even
smaller. Therefore we should increment i.

3. Ai + Aj == target. We have found the answer.

*/

// [2,7,11,15], sum is 9
// 2 + 15  - 1 iteration
// 2 + 11 - 2
// 2 + 7
function twoSumTwoPointers(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      // becasue the indexes are not zero base, check thorugh leetcode
      //return [left+1, right+1]
      return [left, right]
    }
  }

  throw new Error('No two sum solution')
}

//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/discuss/51287/JavaScript-simple-solution
// var twoSumTwoPointers = function(numbers, target) {
//   var l=numbers.length, i=0, j=l-1;
//   while (numbers[i]+numbers[j] !== target) {
//     numbers[i]+numbers[j] < target ? i++ : j--;
//   }
//   return [i+1, j+1];
// };

console.log('twoSumTwoPointers', twoSumTwoPointers([2,7,11,15], 9))
//console.log('twoSumTwoPointers', twoSumTwoPointers([2,7,11,15], 13))

export { twoSum, twoSumBruteForce, twoSumUsingMap , twoSum1 }
