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
*/

console.log('findAllDuplicates', findAllDuplicates([4,3,2,7,8,2,3,1]))

export {
  findAllDuplicates
}
