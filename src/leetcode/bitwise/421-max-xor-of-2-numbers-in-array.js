/*
Leetcode
421 Maximum xor of 2 numbers in array
medium

Given an integer array nums, return the maximum result of nums[i] XOR nums[j], 
where 0 ≤ i ≤ j < n.

Follow up: Could you do this in O(n) runtime?

Example 1:
Input: nums = [3,10,5,25,2,8]
Output: 28
Explanation: The maximum result is 5 XOR 25 = 28.

Example 2:
Input: nums = [0]
Output: 0

Example 3:
Input: nums = [2,4]
Output: 6

Example 4:
Input: nums = [8,10,2]
Output: 10

Example 5:
Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]
Output: 127

Constraints:
1 <= nums.length <= 2 * 104
0 <= nums[i] <= 231 - 1

*/

/* 
Approach 2 loops

time is n^2
*/
var findMaximumXOR1 = function(nums) {
  let max = 0;
  for (let item of nums) {
    for (let i=0; i < nums.length; i++){
      max = Math.max(max, item ^ nums[i]);
    }
  }
  return max;
};

/*
The same approach

time is n^2
time limit exceed
*/ 
var findMaximumXOR2 = function(nums) {
  const n = nums.length;
  if (n === 1) return nums[0];
  let output = [];

  for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
      let x = nums[i] ^ nums[j];
      output.push(x);
    }
  }

  return Math.max(...output);
}

/*
Approach Bit manipulation

Lets write a binary representation of each number
[3, 10, 5, 25, 2, 8]
3 ->  00011
10 -> 01010
5 ->  00101
25 -> 11001
2 ->  00010
8 ->  01000

0 ^ 0 = 0
1 ^ 1 = 0
0 ^ 1 = 1
1 ^ 0 = 1

The idea to loop through 32 bits and get as many 1 as possible.
Since we're XORing and trying to get big numbers, we want as many 1's to the left as possible
to iteratively determine what would be each bit of the final result from left to right.

- First iteration we should have 1 bit at first position, from 25 is 10000 = 16

- next we can have another 11, 11000. Numbers 8 and 10 are out of picture, because
they have 0 bit on second position. But with rest of numbers 3,5,2  we can get 11000 = 24
(10000 + 1000 = 16 + 8 = 24)

- next step. is it possible to get 11100 from 3, 5, 2. To get a 1 in the third position, 
our only choice is 5
25 ^ 5 = 28 -> 111000
At this point we can stop because there is only one choice that gives us a 1 in 
the third most significant bit.

- next iteration will give us only O

Mask Explanation  mask = mask | (1 << i), for example
for (let i = 3; i >= 0; i--) {
  mask = mask | (1 << i);
}
i = 3 mask = 0, 1 << i = 1000, mask = mask | (1 << i) = 1000
i = 2 mask = 1000, 1 << i = 100, mask = 1100

Time is O(n)
space is O(n)

*/

var findMaximumXOR = function(nums) {
  /*
  The maxResult is a record of the largest XOR we got so far, if it's 11100 at 
  i = 2, it means before we reach the last two bits, 11100 is the biggest XOR we 
  have, and we're going to explore whether we can get another two '1's and put
  them into maxResult
  */
  let maxResult = 0;
  let mask = 0;

  // This is a greedy part, since we're looking for the largest XOR, we start 
  // from the very beginning, aka, the 31st position of bits. 
  for (let i = 31; i >= 0; i--) {
    // The mask will grow like  100..000 , 110..000, 111..000,  then 1111...111
    // for each iteration, we only care about the left parts
    mask = mask | (1 << i);
    //mask = 1 << i;
    //console.log('mask', mask.toString(2))
    
    let set = new Set();
    for (const num of nums) {
      /* 
      we only care about the left parts, for example, if i = 2, then we have
      {1100, 1000, 0100, 0000} from {1110, 1011, 0111, 0010}
      */
      console.log('mask', mask.toString(2));
      let leftPartOfNum = num & mask;
      console.log('leftPartOfNum', leftPartOfNum.toString(2));
      set.add(leftPartOfNum);
    }
    console.log('set', set);

    // if i = 1 and before this iteration, the maxResult we have now is 1100, 
    // my wish is the maxResult will grow to 1110, so I will try to find a candidate
    // which can give me the greedyTry;
    let greedyTry = maxResult | (1 << i);

    for (let leftPartOfNum of set) {
      // We want to maximize XOR 
      // This is the most tricky part, coming from a fact that if a ^ b = c, then a ^ c = b;
      // now we have the 'c', which is greedyTry, and we have the 'a', which is leftPartOfNum
      // If we hope the formula a ^ b = c to be valid, then we need the b, 
      // and to get b, we need a ^ c, if a ^ c exists in our set, then we're good to go
      let anotherNum = leftPartOfNum ^ greedyTry;
      if (set.has(anotherNum)) {
        maxResult= greedyTry;
        break;
      }
    }    

    // If unfortunately, we didn't get the greedyTry, we still have our max, 
    // So after this iteration, the max will stay at 1100.
  }

  return maxResult
}

//console.log('findMaximumXOR', findMaximumXOR([3,10,5,25,2,8]));
//console.log('findMaximumXOR', findMaximumXOR([3]));
//console.log('findMaximumXOR', findMaximumXOR([3,8]))
console.log('findMaximumXOR', findMaximumXOR([3,8,2]))
// console.log('findMaximumXOR', findMaximumXOR([3,8,5]))
// console.log('findMaximumXOR', findMaximumXOR([8,10,2]))
// console.log('findMaximumXOR', findMaximumXOR([14,70,53,83,49,91,36,80,92,51,66,70]))


/*
todo
https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/discuss/166211/Python-O(n)-solution-for-dummies-like-me-easy-commented-solution-with-explanation
*/
export {
  findMaximumXOR1, 
  findMaximumXOR
}