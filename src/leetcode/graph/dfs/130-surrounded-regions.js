/*
Leetcode
130 Surrounded regions
medium

Given a 2D board containing 'X' and 'O' (the letter O), capture all regions
surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:
X X X X
X O O X
X X O X
X O X X

After running your function, the board should be:
X X X X
X X X X
X X X X
X O X X

Explanation:
Surrounded regions shouldn’t be on the border, which means that any 'O'
on the border of the board are not flipped to 'X'.
Any 'O' that is not on the border and it is not connected to an 'O' on the border
will be flipped to 'X'.
Two cells are connected if they are adjacent
cells connected horizontally or vertically.
*/

/*
Approach

Explanation:
Capture all surrounded O-regions and flip finding regions in 4 directions by X
(marking + flipping)

*/

// last row is not surrounded
// except regions lies on boundary
// boudaryDFS
// turn x to 0?
// union find?

//@return {void} Do not return anything, modify board in-place instead.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  //debugger
  // why?
  if (board.length === 0 || board[0].length === 0) {
    return
  }
  if (board.length < 2 || board[0].length < 2) {
    return
  }

  let rows = board.length;
  let cols = board[0].length;

  //Any 'O' connected to a boundary can't be turned to 'X', so ...
	//Start from first and last column, turn 'O' to '*'.
  for (let i = 0; i < rows; i++) {
    if (board[i][0] === '0') {
      boundaryDFS(board, i, 0)
    }
    if (board[i][cols-1] === '0') boundaryDFS(board, i, cols-1)
  }
};

function boundaryDFS(board, i, j) {
  if (i < 0 || i > board.length - 1 || j < 0 || j > board.length - 1) {
    return
  }
  if (board[i][j] === '0') {
    board[i][j] = '*'
  }
  if (i > 1 && board[i-1][j] === 'O') boundaryDFS(board, i-1, j);

}

let input1 = [
  ['x', 'x', 'x', 'x'],
  ['x', '0', '0', 'x'],
  ['x', 'x', '0', 'x'],
  ['x', '0', 'x', 'x'],
]
console.log(solve(input1))

// todo https://leetcode.com/problems/surrounded-regions/discuss/41612/A-really-simple-and-readable-C%2B%2B-solutionuff0conly-cost-12ms

export { solve }
