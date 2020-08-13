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
Approach array

time is O(rowIndex^2)
space is O(k), The space used is just the k+1 array elements, hence O(k).
*/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function(rowIndex) {
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

export {
  getRow
}
