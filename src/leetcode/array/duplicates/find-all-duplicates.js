/*
Leetcode
Find all duplicates in Array

todo number

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements
appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/

/*
Approach
Hash
sort [1,2,2,3,3,4,7,8]

*/

/*
sort + 2 pointers
extra space? no it's just a result and it doesn't grow because of input change?
correct space is O(1)
time is O(n log n)
*/
const findAllDuplicates = function(nums) {
  nums = nums.sort((a,b) => a - b);
  let result = []; // extra space?

  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    //debugger
    // do I need 2 pointers here?
    // if (nums[slow] !== nums[fast]) {
    //   slow++;
    // } else {

    // }

    if (nums[slow] === nums[fast]) {
      result.push(nums[slow])
    }
    slow++;
  }
  return result;
}

/*
linear time
extra space
*/
// find which are not enough
const findAllDuplicatesMin1 = function(nums) {
  const n = nums.length;
  let result = [];
  let arr = new Array(n).fill(0);

  //let count = 0;
  for (let i = 0; i < nums.length; i++) {
    //debugger
    if (arr[nums[i]] === 0) {
      arr[nums[i]] = nums[i]
    }
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 0) result.push(i)

  }
  console.log('arr', arr)
  return result;
}
/*
in place
*/
const findAllDuplicatesMin = function(nums) {
  const n = nums.length;
  let result = [];
  //let arr = new Array(n).fill(0);

  let count = 0;
  // while (n > 0) {
  //   n--;
  // }
  // arr is [4,3,2,7,8,2,3,1]
  for (let i = 0; i < nums.length; i++) {
    //debugger;
    let pos = nums[i];
    if (nums[i] !== i) {
      let temp = nums[i]; // 4
      nums[i] = nums[pos];
      nums[pos] = temp;
      count = 0;
    } else if (nums[i] === i) {
      count +=1
    } else if (count > 1) {
      result.push(nums[i])
    }

    // if (arr[nums[i]] === 0) {
    //   arr[nums[i]] = nums[i]
    // }
  }

  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i] === 0) result.push(i)

  // }
  console.log('nums', nums)
  return result;
}

//console.log('findAllDuplicatesMin', findAllDuplicatesMin([4,3,2,7,8,2,3,1]))

/*
Approach: Array
*/
// duplicated
const findAllDuplicates1 = function(nums) {
  const n = nums.length;
  if (n <= 0) return -1;

  let result = [];
  let arr = new Array(n+1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    //debugger
    if (arr[nums[i]] === 0) {
      arr[nums[i]] = nums[i]
    } else if (arr[nums[i]] === nums[i]) {
      result.push(nums[i]);
    }
  }

  //console.log('arr', arr)
  return result;
}
const findAllDuplicates2 = function(nums) {
  const n = nums.length;
  if (n <= 0) return -1;

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    //debugger
    //  check if the element at nums[i]th index is negative
    if (nums[Math.abs(nums[i]) - 1] < 0) {
      result.push(Math.abs(nums[i]))
    }
    nums[Math.abs(nums[i]) - 1] *= - 1; // change the sign of nums[i]th element
  }



  //console.log('nums', nums)
  return result;
}

//https://leetcode.com/discuss/explore/august-leetcoding-challenge/775784/find-all-duplicates-in-array-c-on-time-o1-space-with-explanation
console.log('findAllDuplicates2', findAllDuplicates2([4,3,2,7,8,2,3,1]))
//console.log('findAllDuplicates2', findAllDuplicates2([1,1]))
// https://medium.com/javascript-in-plain-english/algorithms-101-group-anagrams-in-javascript-b3e3c10d211e
// https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns
// https://dev.to/wangonya/sorting-algorithms-with-javascript-part-2-3g51#:~:text=log(sorted)-,Heap%20Sort,every%20time%20this%20is%20done.
//https://codeburst.io/implementing-dfs-and-bfs-using-javascript-5034f3cee9a1


export {
  findAllDuplicates,
  findAllDuplicates1,
  findAllDuplicates2
}
