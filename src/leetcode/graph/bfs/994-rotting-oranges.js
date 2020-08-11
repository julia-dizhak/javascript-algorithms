/*
Leetcode
994 Rotting oranges
medium

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.

Every minute, any fresh orange that is adjacent (4-directionally) to a rotten
orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh
orange.  If this is impossible, return -1 instead.

Example 1:
Input: [[2,1,1],[1,1,0],[0,1,1]]
[
  [2,1,1]          [2,2,1]          [2,2,2]          [2,2,2]          [2,2,2]
  [1,1,0] = (1m) = [2,1,0] = (2m) = [2,2,0] = (3m) = [2,2,0] = (4m) = [2,2,0]
  [0,1,1]          [0,1,1]          [0,1,1]          [0,2,1]          [0,2,2]
]
Output: 4

Example 2:
Input: [
  [2,1,1],
  [0,1,1],
  [1,0,1]
]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten,
because rotting only happens 4-directionally.

Example 3:
Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer
is just 0.


Note:
1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2.
*/

/*
Approach BFS + hashes

The idea is use BFS graph traversal
Create a separate hashes for fresh, rotten, infected oranges.
And loop through rotten oranges

Complexity analysis

Why time is O(n) of we have 2 loop: one inside each other?
the case doesn't work grid3 = [[0,2]];

Time is O(n) if n counts of each grid (or n*m, if n - count of rows, m - count
of columns)
Space is O(n), use hashes
*/

function isEmpty(obj) {
  for (const prop in obj) {
    // if at least one prop exists
    if (obj.hasOwnProperty(prop)) return false;
  }

  // case if object is empty actually
  return JSON.stringify(obj) === JSON.stringify({})
}

var rottingOranges = function(grid) {
  let fresh = {};
  let rotten = {};

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        fresh[''+i+j] = 1;
        //fresh[i.toString()+j.toString()] = 1;
      }
      if (grid[i][j] === 2) {
        rotten[''+i+j] = 2
        //rotten[i.toString()+j.toString()] = 2;
      }

    }
  }

  // console.log('fresh', fresh)
  // console.log('rotten', rotten);
  if (isEmpty(fresh) || isEmpty(rotten)) return -1;

  //if (Object.values(fresh).length <= 0 || Object.values(rotten).length <= 0) return -1
// const [row, col] = Object.keys(rotten)[0].split('');
  // let queue = [[Number(row), Number(col)]];

  let minutes = 0;
  let directions = [[1,0], [-1,0], [0,1], [0,-1]];

  while (!isEmpty(fresh)) {
    let infected = {};

    for (const key in rotten) {
      const i = Number(key.charAt(0));
      const j = Number(key.charAt(1));
      // other solution
      // const [row, col] = key.split('');
      // const [i,j] = [Number(row), Number(col)];
      for (const direction of directions) {
        let nextI = i + direction[0];
        let nextJ = j + direction[1];
        if (fresh['' + nextI + nextJ]) {
          delete fresh['' + nextI + nextJ];
          infected['' + nextI + nextJ] = 2;
        }
      }
    }

    if (isEmpty(infected)) return -1;
    rotten = Object.assign({}, infected);
    minutes++;
  }

  return minutes;


  // while (queue.length) {
  //   //debugger
  //   let [i,j] = queue.shift();

  //   // flag visited or marked I was already in this position
  //   if (grid[i][j] === 2) {
  //     // top
  //     if (i+1 < rows && grid[i+1][j] === 1) {
  //       grid[i+1][j] = 2;
  //       queue.push([i+1, j]);
  //     }

  //     if (i-1 >= 0 && grid[i-1][j] === 1) {
  //       grid[i-1][j] = 2;
  //       queue.push([i-1, j])
  //     }

  //     // right
  //     if (j+1 < cols && grid[i][j+1] === 1) {
  //       grid[i][j+1] = 2;
  //       queue.push([i, j+1]);
  //     }

  //     if (j-1 >= 0 && grid[i][j-1] === 1) {
  //       grid[i][j-1] = 2;
  //       queue.push([i, j-1]);
  //     }

  //   }
  //   minute++;
  // }

}

/*
Approach BFS(queue)

time is O(n)
space is O(n) size of Queue

*/
var rottingOrangesBFS = function(grid) {
  if (grid === null || grid.length < 0) return -1;
  const rows = grid.length;
  const cols = grid[0].length;

  let queue = [];
  let countFresh = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) {
        queue.push([i,j]);
      } else if (grid[i][j] === 1) {
        countFresh++;
      }
    }
  }

  // if count of fresh oranges is zero --> return 0
  if (countFresh === 0) return -1;
  let minutes = 0;
  let directions = [[1,0], [-1,0], [0,1], [0,-1]];

  while (queue.length) {
    minutes++;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const point = queue.shift();
      for (const direction of directions) {
        const x = point[0] + direction[0];
        const y = point[1] + direction[1];
        /*
          if x or y is out of bound
          or the orange at (x , y) is already rotten
          or the cell at (x , y) is empty, we do nothing
        */
        if (x < 0 || y < 0 || x >= rows || y >= cols ||
          grid[x][y] === 0 || grid[x][y] === 2
        ) continue;
        // mark the orange at (x , y) as rotten
        grid[x][y] = 2;
        // put the new rotten orange at (x , y) in queue
        queue.push([x,y]);
        // decrease the count of fresh oranges by 1
        countFresh--;
      }
    }
  }

  return countFresh === 0 ? minutes - 1 : -1
}

// tests
const grid = [
  [2,1,1],
  [1,1,0],
  [0,1,1]
]

//console.log('rottingOranges', rottingOranges([[0,2]]));
console.log('rottingOranges', rottingOrangesBFS(grid));

export {
  rottingOranges,
  rottingOrangesBFS
}
