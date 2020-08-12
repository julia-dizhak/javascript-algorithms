/*
Leetcode
118 Pascals triangle
easy

Given a non-negative integer numRows, generate the first numRows of Pascal's
triangle

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example 5
Input: 5
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
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let triangle = [];
  //if (numRows === 1) pascalTriangle.push([1]);

  // const rows = triangle.length;
  // const cols = triangle[0].length

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j <= i; j++) { // 1  // 2 row - 2 co
      //if (i === numRows ||)
      // if (i === 0 && j === 0) {
      //   triangle.push([1])
      // } else {
      //   debugger
      //   // i = 1 j = 0
      //   let direct1 = (i > 1 && j > 0) ? triangle[i-1][j] : null;
      //   let direct2 = (i > 1 && j > 0) ? triangle[i-1][j+1] : null;
      //   if (direct1 !== null || direct2 !== null) {
      //     triangle.push([direct1, direct2]);
      //   }

      // }
    }

  }

  return triangle
};

console.log('pascalTriangle 1', generate(2));

export {
  generate
}
