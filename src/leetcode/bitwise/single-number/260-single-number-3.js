/*
Leetcode
260 Single number III
medium

Given an array of numbers nums, in which exactly two elements appear only once
and all the other elements appear exactly twice. Find the two elements that
appear only once.

Example:
Input:  [1,2,1,3,2,5]
Output: [3,5]

Note:
The order of the result is not important. So in the above example, [5, 3] is
also correct.
Your algorithm should run in linear runtime complexity. Could you implement it
using only constant space complexity?
*/

/*
Approach hash
*/

/*
Approach XOR

Idea:
- first XOR all elements together to find two distinct numbers;
- because 2 numbers are distinct xor must be non-zero, otherwise they are equal;
- 3 ^ 5 = 011 ^ 101 = 110. Only one number has a bit at second position, and only
one number has a bit at third position;
- we define 2 buckets [2,2,3] and [1,1,5] or [010,010,011] - have 1bit at second position
and [001,001,101] have 1bit at third position.
- we can use mask num & 010 ? goto [2,2,3] else goto [1,1,5] but for simplification
we extract last bit which is formula x & -x;
- we can do xor to get unique number from each array;


Our task is to find the two "unusual" numbers that appear once.
1. First, we XOR all the numbers together. A number XORed with itself is zero -
the numbers that appear twice will disappear from the XOR sum. Therefore,

example [1,2,1,3,2,5]
1 ^ 2 ^ 3 ^ 2 ^ 1 ^ 5 == ((1^1)^(2^2)^(3^5)) => 0^0^0^(3^5).

So the bits left in the result are the "residue" of the two unusual numbers.
Let's look at the binary representation of this residue.

3 ^ 5 == 0b011 ^ 0b101 == 0b110

2. (a xor b) must be non-zero otherwise they are equal.
So that since the two numbers are distinct, so there must be a set bit (that
is, the bit with value '1') in the XOR result. Find out an arbitrary set bit
(for example, the rightmost set bit).

If bit_i in (a xor b) is 1, bit_i at a and b are different.
3. Find bit_i using the low bit formula m & -m

a XOR b = 6  (diff)
6   =>    0110
-6  =>    1010 (2s complement of 6)
6 & -6 => 0010 //this is used as a mask to separate 3 and 5 from the nums[]

4. Partition the numbers into two groups: one group with bit_i == 1 and the other
group with bit_i == 0.
a is in one group and b is in the other.
a is the only single number in its group.
b is also the only single number in its group.
XORing all numbers in a's group to get a
XORing all numbers in b's group to get b
Alternatively, XOR (a xor b) with a gets you b.

In the second pass, we divide all numbers into two groups, one with the
aforementioned bit set, another with the aforementinoed bit unset. Two different
numbers we need to find must fall into the two distinct groups. XOR numbers in
each group, we can find a number in either group.


Time is O(n)
space is O(1)
*/
var singleNumber3 = function(nums) {
  let diff = 0;
  for (let i = 0; i < nums.length; i++) {
    // Get the XOR of the two numbers we need to find
    diff = diff ^ nums[i]
  }

  // Get its last set bit
  diff = diff & -diff;

  let res1 = 0;
  let res2 = 0;
  for (let j = 0; j < nums.length; j++) {
    //console.info('j', j, 'nums[j]', nums[j].toString(2), 'diff', diff.toString(2), 'res1', res1.toString(2), 'res2', res2.toString(2))
    // the bit is not set
    if ( (nums[j] & diff) === 0) {
      res1 = res1 ^ nums[j];
    } else {
      // the bit is set
      res2 = res2 ^ nums[j];
    }
  }

  return [res1, res2];
}

//console.log('singleNumber3', singleNumber3([1,2,1,3,2,5]))

export {
  singleNumber3,
}
