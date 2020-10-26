/*
Leetcode
119 Pascals triangle II
easy

Given a non-negative index k <= 33 return the kth index row of the Pascals
triangle. Note that the row index starts from 0.

Example
input 3, output [1,3,3,1]
*/

/*
Approach Brute-force recursion

lets say we had a function getNum(rowIndex, colIndex)
formula
getNum(rowIndex, colIndex) = getNum(rowIndex - 1, colIndex - 1) + 
getNum(rowIndex - 1, colIndex)

the recursion ends in some known base cases:
1 the first row is just a single 1
2 the first and last number of each row is 1

time is O(2^k)
space is O(k) + O(k), kth row
*/

var getRow = function(rowIndex) {
  let res = [];

  for (let i = 0; i <= rowIndex; i++) {
    res.push(helper(rowIndex, i));
  }

  return res;
}

function helper(row, col) {
  if (row == col || row == 0 || col === 0) return 1;
  return helper(row - 1, col - 1) + helper(row - 1, col);
}

/*
Approach DP?

in the previous approach, we end up making the recursive calls repeatedly

simple memoization would make that a particular element in a row is only 
calculated once.

time is O(2^rowIndex)
space is O(k), The space used is just the k+1 array elements, hence O(k).
*/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRowUseArr = function(rowIndex) {
  let res = new Array(rowIndex + 1).fill(0);
  res[0] = 1;
  if (rowIndex === 0) return res;

  for (let i = 0; i <= rowIndex; i++) {
    let temp = [...res]; // --> O(k) extra space
    for (let j = 1; j <= i; j++) {
      res[j] = temp[j-1] + temp[j];
    }
  }

  return res;
};

// console.log('getRow', getRow(3))

/*
Approach DP

in the previous approach, we end up making the recursive calls repeatedly

simple memoization
*/

export {
  getRow,
  getRowUseArr
}
