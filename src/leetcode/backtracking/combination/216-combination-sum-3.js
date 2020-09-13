/*
Leetcode
216 Combination sum 3
medium

Find all possible combinations of k numbers that add up to a number n, given 
that only numbers from 1 to 9 can be used and each combination should be a unique 
set of numbers.

Note:
All numbers will be positive integers.
The solution set must not contain duplicate combinations.

Example 1:
Input: k = 3, n = 7
Output: [[1,2,4]]

Example 2:
Input: k = 3, n = 9
Output: [[1,2,6], [1,3,5], [2,3,4]]
*/

import Backtracking from "../../../components/concepts/Backtracking";


/*
Approach backtracking

Intuition

The problem asks us to come up with some fixed-length combinations that meet 
certain conditions.

To solve the problem, it would be beneficial to build a combination by hand.

If we represent the combination as an array, we then could fill the array one 
element at a time.

For example, given the input k=3k=3 and n=9n=9, i.e. the size of the combination 
is 3, and the sum of the digits in the combination should be 9. Here are a few 
steps that we could do:

1). We could pick a digit for the first element in the combination. Initially, 
the list of candidates is [1, 2, 3, 4, 5, 6, 7, 8. 9] for any element in the 
combination, as stated in the problem. Let us pick 1 as the first element. 
The current combination is [1].
[1, ?, ?]

2). Now that we picked the first element, we have two more elements to fill in 
the final combination. Before we proceed, let us review the conditions that we 
should fullfil for the next steps.

- Since we've already picked the digit 1, we should exclude the digit from the 
original candidate list for the remaining elements, in order to ensure that the 
combination does not contain any duplicate digits, as required in the problem.

- In addition, the sum of the remaining two elements should be 9 - 1 = 8.

...

Backtracking template in general case
def backtrack(candidate):
  if find_solution(candidate):
    output(candidate)
    return
  
  # iterate all possible candidates.
  for next_candidate in list_of_candidates:
    if is_valid(next_candidate):
      # try this partial candidate solution
      place(next_candidate)
      # given the candidate, explore further.
      backtrack(next_candidate)
      # backtrack
      remove(next_candidate)


Complexity analysis

Let KK be the number of digits in a combination.

Time Complexity: O(9!* K / (9-K)!)
...


*/

// Find app permutations
function permutations(arr) {
  if (arr.length === 1) return arr;
  let output = [];
  helper(arr, 0, output); 
  return output;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function helper(arr, pos, res) {
  if (pos = arr.length) {
    res.push(arr.slice());
  } else {
    for (let i = pos; i < arr.length; i++) {
      swap(arr, i, pos);
      helper(arr, pos+1, res)
      swap(arr, i, pos);
    }
  }
}

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  debugger
  let res = [];
  let combinations = [];
  backtrack(k, n, combinations, 0, res);
  return res;
};

function backtrack(k, remain, combinations, nextStart, res) {
  debugger
  if (remain === 0 && combinations.length === k) {
    res.push(combinations.slice());
  } else if (remain < 0 || combinations.length === k) {
    // Exceed the scope, no need to explore further.
    return;
  }

  for (let i = nextStart; i < 9; i++) {
    combinations.push(i+1);
    backtrack(k, remain - i - 1, combinations, i+1, res);
    combinations.pop();
  }
  
}

// tests
//console.log('combinationSum3', combinationSum3(3, 7))
console.log('combinationSum3', combinationSum3(3, 9))

export {
  combinationSum3,
  permutations

}