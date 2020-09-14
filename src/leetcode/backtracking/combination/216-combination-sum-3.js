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


/*
Approach backtracking

Intuition

The problem asks us to come up with some fixed-length combinations that meet 
certain conditions.

To solve the problem, it would be beneficial to build a combination by hand.

If we represent the combination as an array, we then could fill the array one 
element at a time.

For example, given the input k=3 and n=9, i.e. the size of the combination 
is 3, and the sum of the digits in the combination should be 9. Here are a few 
steps that we could do:

1). We could pick a digit for the first element in the combination. Initially, 
the list of candidates is [1, 2, 3, 4, 5, 6, 7, 8, 9] for any element in the 
combination, as stated in the problem. Let us pick 1 as the first element. 
The current combination is [1].
[1, ?, ?], sum = 9

2). Now that we picked the first element, we have two more elements to fill in 
the final combination. Before we proceed, let us review the conditions that we 
should fullfil for the next steps.

- Since we've already picked the digit 1, we should exclude the digit from the 
original candidate list for the remaining elements, in order to ensure that the 
combination does not contain any duplicate digits, as required in the problem.

- In addition, the sum of the remaining two elements should be 9 - 1 = 8.

3). Based on the above conditions, for the second element, we could have several 
choices. Let us pick the digit 2, which is not a duplicate of the first element, 
plus it does not exceed the desired sum (i.e. 8) neither. The combination now
becomes [1, 2].
[1, 2, ?], sum = 9

4). Now for the third element, with all the constraints, it leaves us no choice 
but to pick the digit 6 as the final element in the combination of [1, 2, 6].
[1, 2, 6]

5). As we mentioned before, for the second element, we could have several choices. 
For instance, we could have picked the digit 3, instead of the digit 2. Eventually, 
it could lead us to another solution as [1, 3, 5].

6). As one can see, for each element in the combination, we could revisit our 
choices, and try out other possibilities to see if it leads to a valid solution.

If you have followed the above steps, it should become evident that backtracking 
would be the technique that we could use to come up an algorithm for this problem.

Indeed, we could resort to backtracking, where we try to fill the combination 
one element at a step. Each choice we make at certain step might lead us to a final 
solution. If not, we simply revisit the choice and try out other choices, i.e. 
backtrack.


Algorithm

To implement the algorithm, one could literally follow the steps in the Intuition 
section. However, we would like to highlight a key trick that we employed, in 
order to ensure the non-redundancy among the digits within a single combination, 
as well as the non-redundancy among the combinations.

The trick is that we pick the candidates in order. We treat the candidate digits 
as a list with order, i.e. [1, 2, 3, 4, 5, 6, 7, 8, 9]. At any given step, once 
we pick a digit, e.g. 6, we will not consider any digits before the chosen digit
for the following steps, e.g. the candidates are reduced down to [7, 8, 9].

With the above strategy, we could ensure that a digit will never be picked twice 
for the same combination. Also, all the combinations that we come up with would 
be unique.


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

Let K be the number of digits in a combination.

Time Complexity: O(9!* K / (9-K)!)

In a worst scenario, we have to explore all potential combinations to the very 
end, i.e. the sum n is a large number (n > 9 * 9). At the first step, we 
have 9 choices, while at the second step, we have 8 choices, so on and so forth.

The number of exploration we need to make in the worst case would be P(9, K) = 
9!* K / (9-K)!, assuming that K <= 9. By the way, K cannot be greater than 9, 
otherwise we cannot have a combination whose digits are all unique.

Each exploration takes a constant time to process, except the last step where it 
takes O(K) time to make a copy of combination.

Space complexity O(k)
During the backtracking, we used a list to keep the current combination, which 
holds up to K elements, i.e. O(K).

Since we employed recursion in the backtracking, we would need some additional 
space for the function call stack, which could pile up to K consecutive invocations, 
i.e. O(K).

Hence, to sum up, the overall space complexity would be O(K).

Note that, we did not take into account the space for the final results in the 
space complexity.

*/

// Example: Find app permutations
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
      helper(arr, pos + 1, res)
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
  let output = [];
  let combinations = [];
  backtrack(k, n, combinations, 0, output);
  return output;
};

function backtrack(k, remain, combinations, nextStart, res) {
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

/*
Approach the same backtracking

*/
var combinationSum3Backtracking = function(k, n) {
  let output = [];
  getCombination(k, n, [], 1, output);
  return output;
}

function getCombination(k, n, combinations, start, res) {
  if (combinations.length === k && n === 0) {
    res.push(combinations.slice()); 
  }

  for (let i = start; i <= 9; i++) { // for number 1 ~ 9
    combinations.push(i);
    let nextTarget = n - i;
    getCombination(k, nextTarget, combinations, i+1, res);
    combinations.pop(); // restore
  }
}

/*
Approach
*/
var combinationSum3Variant2 = function(k, n) {
  var result = [];
  search(1, [], k, n);
  return result;
  
  function search(from, prefix, k, n) {
    if (k === 0 && n === 0) return result.push(prefix);
    if (from > 9) return;
    prefix.push(from);
    search(from + 1, prefix.slice(0), k - 1, n - from);
    prefix.pop();
    search(from + 1, prefix.slice(0), k, n);
  }
};

// tests
// console.log('combinationSum3', combinationSum3(3, 7))
// console.log('combinationSum3', combinationSum3(3, 9))

export {
  combinationSum3,
  combinationSum3Backtracking
}