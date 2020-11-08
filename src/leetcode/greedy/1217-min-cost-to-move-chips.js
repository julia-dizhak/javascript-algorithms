/*
Leetcode
1217 Minimum Cost to Move Chips to The Same Position
easy

We need to move all the chips to the same position. In one step, we can change 
the position of the ith chip from position[i] to:

position[i] + 2 or position[i] - 2 with cost = 0.
position[i] + 1 or position[i] - 1 with cost = 1.
Return the minimum cost needed to move all the chips to the same position.

Example 1
Input: position = [1,2,3]
Output: 1
Explanation: First step: Move the chip at position 3 to position 1 with cost = 0.
Second step: Move the chip at position 2 to position 1 with cost = 1.
Total cost is 1.

Hint 1
The first move keeps the parity of the element as it is.

parity
A set with the property of having all of its elements belonging to one of two 
disjoint subsets, especially a set of integers split in subsets of even and 
odd elements. 

hint 2
The second move changes the parity of the element.

hint 3
Since the first move is free, if all the numbers have the same parity, the answer 
would be zero.

hint 4
Find the minimum cost to make all the numbers have the same parity.

 */

/*

example
test
parity
Approach Greedy
We have n chips, where the position of the ith chip is position[i].

In fact, we can move all chips at even positions to position 0, and move all 
chips at the odd positions to position 1

todo
mode to doc

I was able to achieve to this solution in half an hour. I did this on my own!!! 
I could crack the logic.
Initially I thought it was a DP problem and tried some cases where I realized 
that there are no overlapping subproblems. So , I tried the greedy approach.
I took the following lists initially:

[2,3] cost=1
2.[2,4] cost=0
3.[2,5] cost=1
4.[2,6] cost=0
Then I understood that an even number can be reached by any other even number 
with a cost=0 because even_no+2 or even_no-2 leads to even_no.
Similarly, I realized odd_no+2 or odd_no-2 leads to odd_no.
So, my thinking was if I can form 1 cluster of all even numbers given and 1 
cluster of all odd numbers given, then still the resultant cost will be 0!!!
Hence, the problem reduces to finding minimum of total number of odd and total 
number of even numbers.
Hope this helps!!

*/

/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 === 0) evenCount++;
    else oddCount++;   
  }
  return Math.min(oddCount, evenCount);

};

console.log('minCostToMoveChips', minCostToMoveChips([1,2,3]));
console.log('minCostToMoveChips', minCostToMoveChips([2,2,2,3,3]));

export {
  minCostToMoveChips
}