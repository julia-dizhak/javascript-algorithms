/*
Leetcode
Find all duplicates in Array

todo number

example:
[4,3,2,7,8,2,3,1] -> [2,3]

without extra space
time?
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

console.log('findAllDuplicatesMin', findAllDuplicatesMin([4,3,2,7,8,2,3,1]))

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
//console.log('findAllDuplicates1', findAllDuplicates1([4,3,2,7,8,2,3,1]))


export {
  findAllDuplicates,
  findAllDuplicates1
}
