/*
Leetcode
46 Permutations
Given a collection of distinct integers, return all possible permutations.

Example:
Input: [1,2,3]

Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/*
Print all binary

Approach Recursion

The idea is to try every permutation. For every position, there are 2 options,
either ‘0’ or ‘1’. Backtracking is used in this approach to try every
possibility/permutation.

backtracking
https://www.youtube.com/watch?v=wiBPsaJs2yQ&list=PLoCMsyE1cvdWiqgyzwAz_uGLSHsuYZlMX&index=9&t=0s
https://web.stanford.edu/class/archive/cs/cs106x/cs106x.1192/lectures/Lecture10/Lecture10.pdf
problem 461

idea to display 3 you need to know result of 2 numbers
print 3 digit binary number
// base case
if (digits === 0) {
  do nothing
} else {
 print 0
  print 2-digit binary number
  print 1
  print 2-digit binary number
}
*/
// todo
function helper1(digits, output) {
  if (digits === 0) {

  } else {

  }
}

function printAllBinary(digits) {
  if (digits === 0) {

  } else {

  }

}
//console.log('printAllBinary', printAllBinary(2))

/*
Approach Backtracking (with Recursion)

A permutation is an arrangement of all or part of a set of objects, with regard
to the order of the arrangement.
For example, suppose we have a set of three letters: A, B, and C. We might ask
how many ways we can arrange 2 letters from that set. Each possible arrangement
would be an example of a permutation. The complete list of possible permutations
would be: AB, AC, BA, BC, CA, and CB.

video all permutation example with boat
https://www.youtube.com/watch?v=GCm7m5671Ps&t=82s
https://www.youtube.com/watch?v=GuTPwotSdYw&t=3s



good explanation of backtracking
https://stackoverflow.com/questions/39927452/recursively-print-all-permutations-of-a-string-javascript
example of solution with swap

combination
https://leetcode.com/problems/permutations/discuss/18239/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partioning)


Recursive Solution
Basic idea: permutation of A[1..n] equals to
A[1] + permutation of (A[1..n] - A[1])
A[2] + permutation of (A[1..n] - A[2])
...
A[n] + permutation of (A[1..n] - A[n]).

Time: n!
Space:
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 1) return nums;
  let output = [];
  helper(nums, 0, output);
  return output;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// permute num[begin..end]
// invariant: num[0..begin-1] have been fixed/permuted
function helper(nums, pos, result) {
  if (pos === nums.length) {
    result.push(nums.slice());
  } else {
    for (let i = pos; i < nums.length; i++) {
      swap(nums, i, pos);
      helper(nums, pos+1, result);
      // reset
      swap(nums, i, pos);
    }
  }
}

// todo
// function permute1(str) {
//   if (str.length < 2) return str;

//   let permutations = [];
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     // Cause we don't want any duplicates:
//     if (str.indexOf(char) !== i) continue; // if char was used already
//     // skip it this time

//     // //Note: you can concat Strings via '+' in JS
//     // why we need this str.slice(0,i)? it's always 0
//     let remainingStr = str.slice(0,i) + str.slice(i+1, str.length)

//     for (var subPermutation of permute1(remainingStr)) {
//       permutations.push(char + subPermutation)
//     }
//   }

//   return permutations;
// }

//
//console.log('permute', permute('abc'))


// todo print quantity of solutions
//console.log('permute', permute([1,2,3]))

export {
  permute
}
