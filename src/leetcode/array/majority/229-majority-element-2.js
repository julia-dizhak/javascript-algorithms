/*
Leetcode
229 Majority element II
medium

Given an integer array of size n,
find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:
Input: [3,2,3]
Output: [3]

Example 2:
Input: [1,1,1,3,3,2,2,2]
Output: [1,2]


Hint
How many majority elements could it possibly have?
Do you have a better hint? Suggest it!
*/

/*
Approach use hash(objects)
easiest way

time is O(n)
space is O(n)
*/
/**
 * @param {number[]} nums
 * @return {number[]}
*/
var majorityElementUseHash = function(nums) {
  const n = nums.length;
  if (n === 0) return -1;
  if (n === 1) return nums;

  var hash = {};
  var res = [];

  for (const num of nums) {
    hash[num] = (hash[num] || 0) + 1
  }

  for (let key in hash) {
    if (hash[key] > n/3) res.push(Number(key));
  };

  return res;
};

/*
Approach Vote 
Exactly as original Majority problem but we need to keep 2 counters and 2 candidates.

Intuition

To figure out a O(1) space requirement, we would need to get this simple 
intuition first.

For an array of length n:
-There can be at most one majority element which is more than ⌊n/2⌋ times.
-There can be at most two majority elements which are more than ⌊n/3⌋ times.
-There can be at most three majority elements which are more than ⌊n/4⌋ times.
and so on.

And since the requirement is finding the majority for more than ceiling of [n/3], 
the answer would be less than or equal to two numbers.

Now figuring out the majority elements which show up more than ⌊n/3⌋ times is 
not that hard anymore. Using the intuition presented in the beginning, we only 
need four variables: two for holding two potential candidates and two for holding 
two corresponding counters. Similar to the above case, both candidates are initialized 
as None in the beginning with their corresponding counters being 0. While going 
through the array:

-If the current element is equal to one of the potential candidate, the count for 
that candidate is increased while leaving the count of the other candidate as it is.

-If the counter reaches zero, the candidate associated with that counter will be 
replaced with the next element if the next element is not equal to the other 
candidate as well.

-Both counters are decremented only when the current element is different from 
both candidates.
*/

var majorityElement = function(nums) {
  if (nums.length === 0) return -1;
  let candidate1 = null;
  let candidate2 = null;

  let counter1 = 0;
  let counter2 = 0;

  for (const num of nums) {
    // if (candidate1 !== null && candidate1 === num) {
    //   count1++;
    // } else if ()
    if (num === candidate1) counter1++;
    else if (num === candidate2) counter2++;
    else if (counter1 === 0) {
      candidate1 = num,
      counter1 = 1
    } else if (counter2 === 0) {
      candidate2 = num,
      counter2 = 1;
    } else {
      counter1 = counter1 - 1,
      counter2 = counter2 - 1
    }
  }
}

//

// voting second solution
const majorityMooreVotingVariant2 = nums => {
  if (nums.length === 0) return -1;

  let candidateA,
    candidateB,
    countA = 0,
    countB = 0;
  for (let index = 0; index < nums.length; index++) {
    if (candidateA === nums[index]) {
      countA++;
    } else if (candidateB === nums[index]) {
      countB++;
    } else if (countA === 0) {
      candidateA = nums[index];
      countA = 1;
    } else if (countB === 0) {
      candidateB = nums[index];
      countB = 1;
    } else {
      countA--;
      countB--;
    }
  }

  const elementCount = search => {
    return nums.reduce((accumulator, currentValue) => {
      return currentValue === search ? accumulator + 1 : accumulator;
    }, 0);
  };

  const candidate =  candidateA === candidateB
    ? [candidateA]
    : [candidateA, candidateB].filter(
      (element, index) => elementCount(element) > Math.floor(nums.length / 3)
    );

  return candidate;
};

// tests
// console.log('majorityElement', majorityElement([1]));
// console.log('majorityElement', majorityElement([3,2,3]));
// console.log('majorityElement', majorityElement([1,1,1,3,3,2,2,2]));

/*
todo
*/

export {
  majorityElementUseHash,
  majorityMooreVotingVariant2
}
