/*
Biweekly 05.09

7022 / 10140
solved one task with 4 attempt

*/

/*
1 problem
example 2 is with bag

*/

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  let rows = mat.length;
  let cols = mat[0].length;
  console.log('cols', cols)
  let sum = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      console.log('i', i);
      console.log('j', j)
      // if (
      //   i === j ||
      //   (i === 0 && j === cols - 1) ||
      //   (i === rows - 1 && j === 0)
      // ) {
      //   sum += mat[i][j]
      // }
      if (
        (i === 0 && j !== 0) || (i === 0 && j !== cols - 1) ||
        (i !== 0 && j !== 0) || (i !== 0 && j !== cols - 1)
      ) {
        continue
      } else {
        sum += mat[i][j]
      }
    }
    
  }

  console.log('sum', sum)
  return sum
};

function diagonalSum1(mat) {
  if (mat.length === 1) return mat[0][0]
  let sum = 0;
  for (var i = 0; i <= mat.length - 1; i++) {
      sum += mat[i][i];
      //debugger
      if (mat.length % 2 === 1) {
        if ( i === 0 || i === mat.length - 1 || i !== Math.floor(mat.length/2))  {
          sum += mat[i].reverse()[i];
        }
      } else {
        sum += mat[i].reverse()[i];
      } 
  }
  console.log('sum', sum)
  return sum;
}


// function matrixDiagonals(matrix) {
//   debugger
//   let diagonal1 = 0, diagonal2 = 0;

//   for (var i = 0; i < matrix.length; i++) {
//     for (var j = 0; j < matrix.length; j++) {
//       // Get elements for the main diagonal (diagonal-1). So I need to increment the i and j equally
//       if ( i === j ) {
//         diagonal1 += matrix[i][j];
//       }
//       // Get elements for the secondary diagonal (diagonal-2). So I need to decrement j. Taking the value of the inner array from reverse (i.e. last element comes first)
//       if ( j = (matrix.length) - i - 1) {
//         diagonal2 += matrix[i][j];
//       }
//     }
//   }

//   console.log(diagonal1 + diagonal2);
//   return diagonal1 + diagonal2
// }

let mat = [[1,2,3],
[4,5,6],
[7,8,9]];
let mat1 = [[1,1,1,1],
[1,1,1,1],
[1,1,1,1],
[1,1,1,1]]
let mat2 = [[5]]
let mat3 = [[0,1],[1,0]
]
// expected 63
let mat4 = [[7,9,8,6,3],[3,9,4,5,2],[8,1,10,4,10],[9,5,10,9,6],[7,2,4,10,8]]
// console.log('diagonalSum', diagonalSum(mat))
// console.log('diagonalSum1', diagonalSum(mat1))
console.log('diagonalSum1', diagonalSum1(mat))
console.log('diagonalSum1', diagonalSum1(mat1))
console.log('diagonalSum1', diagonalSum1(mat2))
console.log('diagonalSum1', diagonalSum1(mat3))
console.log('diagonalSum1', diagonalSum1(mat4));
//console.log('matrixDiagonals', matrixDiagonals(mat))


/*
5492
Given a binary string s (a string consisting only of '0's and '1's), we can split 
s into 3 non-empty strings s1, s2, s3 (s1+ s2+ s3 = s).

Return the number of ways s can be split such that the number of characters '1' 
is the same in s1, s2, and s3.

Since the answer may be too large, return it modulo 10^9 + 7.

Example 1:

Input: s = "10101"
Output: 4
Explanation: There are four ways to split s in 3 parts where each part contain 
the same number of letters '1'.
"1|010|1"
"1|01|01"
"10|10|1"
"10|1|01"
*/

/**
 * @param {string} s
 * @return {number}
 */
var numWays = function(s) {
    
};


/*
problem 3
*/
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
  let n = arr.length;
  if (n === 1) return 0;
  let current = arr[0];
  let nextCurrent = arr[0];

  let res = [];

  let i = 0;
  let j = 0; // fast pointer?

  // while (i < n) {
  //   if (arr[i] <= arr[i+1]) i++;
  //   if (arr[i] > arr[i+1]) {
  //     debugger
  //     j = i;
  //   }
  // }

  // for (let i = 1; i < n; i++) {
  //   if (arr[i] <= arr[i+1]) {
      
  //   } else {
  //     //debugger
  //     res.push(arr[i])
  //   }
  //   // if (arr[i] === arr)
  //   // debugger
  //   // if (nextCurrent === current + 1 || nextCurrent === current) {
  //   //   current = arr[i];
  //   //   nextCurrent = current;
  //   //   console.log('current', current);
  //   //   console.log('nextCurrent', nextCurrent);

  //   // } else {

  //   // }
  
  // }

  console.log('res', res)
};

console.log('findLengthOfShortestSubarray', findLengthOfShortestSubarray([1,2,3,10,4,2,3,5]))
//console.log('findLengthOfShortestSubarray', findLengthOfShortestSubarray([1,2,3]))

const test1 = function() {
  console.log('contest 34')
}

console.log('contest', test1())

export {
  test1
}