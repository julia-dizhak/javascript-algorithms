/*
Leetcode
62 Unique Paths
medium

A robot is located at the top-left corner of a m x n grid (marked 'Start' in
the diagram below).

The robot can only move either down or right at any point in time. The robot
is trying to reach the bottom-right corner of the grid (marked 'Finish' in the
diagram below).

How many possible unique paths are there?

Example 1:
Input: m = 3, n = 2
Output: 3

| 0 | x | x |
| x | x | 0 |

Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right
corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right

Example 2:
Input: m = 7, n = 3
Output: 28


Constraints:
1 <= m, n <= 100
It's guaranteed that the answer will be less than or equal to 2 * 10 ^ 9.
*/

/*
Approach

when (m==0 || n== 0), my understanding is there will be no way to go down or
right, so return 0.

| 0 |
| 0 |

For all other cells. The result = uniquePaths(m-1,n)+uniquePaths(m,n-1)
*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function(m, n) {
//   if (m === 0 || n === 0) return 0;
//   if (m === 1 || n === 1) return 1;

//   let dp = new Array(n);
//   for (let i = 0; i < n; i++) {
//     dp[i] = 1;
//   }

// };

// var uniquePathsIterate = function(m, n) {
//   let dp = new Array(m+1).fill(1).map(x => new Array(n+1).fill(0));
//   for (let i=1;i<=m;i++) {
//       for (let j=1;j<=n;j++) {
//           if (i==1 && j==1) dp[i][j] = 1;
//           else dp[i][j] = dp[i-1][j] + dp[i][j-1];
//       }
//   }
//   return dp[m][n];
// }

// todo table
var uniquePaths = function(m,n) {
  //let path = new Array[[]]
  //let path = Array.from(Array(2), () => new Array(3)).fill(0);
  let path = [...Array(m)].map(_ => Array(n).fill(0));
  //path[0][0] = 0;


  for (let i = 0; i < m; i++) {
    path[0][i] = 1
  }

  for (let j = 0; j < n; j++) {
    path[0][j] = 1

  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      path[i][j] = path[i-1][j] + path[i][j-1];
    }
  }

  console.log(path)
  return path[m-1][n-1];
}

console.log('uniquePath', uniquePaths(3,2))

export {
  uniquePaths
}
