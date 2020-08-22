import { getNodeText } from "@testing-library/react";

/*
Leetcode
118 Pascals triangle
easy

Given a non-negative integer numRows, generate the first numRows of Pascal's
triangle

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example 5 Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

[
  [1],
  [1,1],
  [1,2,1],
  [1,3,3,1],
  [1,4,6,4,1]
]
*/

/*
Approach Array

Intuition
If we have the a row of Pascal's triangle, we can easily compute the next row
by each pair of adjacent values.
We can have 2 loops.

Complexity:
Time is O(numRows^2)

Although updating each value of triangle happens in constant time, it is
performed O(numRows^2) times. To see why, consider how many overall loop iterations
there are. The outer loop obviously runs numRows times, but for each iteration
of the outer loop, the inner loop runs rowNum (j) times.

Therefore, the overall
number of triangle updates that occur
is 1 + 2 + 3 + .., which, according to Gauss' formula, is

numRows*(numRows+1) / 2  =  (numRows^2 + numRows) /2 = numRows^2 / 2 +
numRows / 2 = O(numRows^2)

Space complexity : O(numRows^2)

Because we need to store each number that we update in triangle, the space
requirement is the same as the time complexity.
*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return [];

  let result = [];
  for (let i = 0; i < numRows; i++) {
    let currRows = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        currRows.push(1)
      } else {
        currRows.push(result[i-1][j-1] + result[i-1][j]);
      }
    }
    result.push(currRows);
  }
  return result;
}

// the same approach
var generate1 = function(numRows) {
  if (numRows === 0) return [];

  let output = [];

  for (let i = 0; i < numRows; i++) {
    let rows = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        rows[j] = 1
      } else {
        rows[j] = output[i-1][j-1] + output[i-1][j];
      }
    }
    output.push(rows)
  }

  return output;
}


/*
Approach DP

Algorithm
Although the algorithm is very simple, the iterative approach to constructing
Pascal's triangle can be classified as dynamic programming because we construct
each row based on the previous row.

First, we generate the overall triangle list, which will store each row as a
sublist. Then, we check for the special case of 0, as we would otherwise
return [1]. If numRows > 0, then we initialize triangle with [1] as its first row,
and proceed to fill the rows as follows: there is a schema
*/

/*
Approach recursion

Time is O(numRows^2)
space is O(numRows^2)

*/

var generateUseRecursion = function(numRows) {
  let result = [];
  helper(numRows, result);
  return result;
};

function helper(numRows, list = []) {
  if (numRows === 1) list.push([1])
  else if (numRows > 1) {
    helper(numRows - 1, list);
    let previousList = list[numRows - 2];
    let thisList = [];
    for (let i = 0; i < previousList.length; i++) {
      if (i === 0) thisList.push(1);
      if (i > 0) thisList.push(previousList[i] + previousList[i-1]);
      if (i === previousList.length - 1) thisList.push(1)
    }
    list.push(thisList);
  }
}

// tests
//console.log('pascalTriangle 1', generate(3));
//console.log('pascalTriangle 1', generateUseRecursion(3));

export {
  generate, generate1,
  generateUseRecursion
}
