// todo flood fill another approach

/*
Leetcode
79 Word search
medium

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where
"adjacent" cells are those horizontally or vertically neighboring. The same
letter cell may not be used more than once.

Example:
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

Constraints:
board and word consists only of lowercase and uppercase English letters.
1 <= board.length <= 200
1 <= board[i].length <= 200
1 <= word.length <= 10^3
*/

/*

separate method: recursion searchWord
recursively call
visited array
index
if next letter is correct
reset a word? don't want to return where we will be already '#' or empty space


I think space is O(L) where L is the length of the word; and time is O(M * N * 4^L) where M*N is the size of the board and we have 4^L for each cell because of the recursion. Of course this would be an upper bound. Not sure if it is good enough in an interview.
I think time complexity is (O(M^2 N^2)) because your above loop will cost O(MN) and for each iteration of the loop you call exists function and call to each exist function will cost O(MN).

I think is O(M^2 * N^2) for the worst case. For example, for this matrix below, If the answer is E -> E-> D->A -> S -> F->C->S->E->C->B->A in the zigzag order.
[
['A','B','C','E'],
['S','F','C','S'],
['A','D','E','E']
]

we would go through the whole board to find the correct start point at the bottom right ’E‘， which would cost O(MN). Start from this 'E', we would do dfs. Thus, the time complexity is O(MN * dfs complexity). If the answer is E -> E-> D->A -> S -> F->C->S->E->C->B->A , then the dfs would also cost O(MN) for the worst case. Therefore, for the extreme worst cast, it would cost O(M^2 * N^2) .

Time complexity: we are going on every cell on a board = O(n), n - number of cells
in a board.

Time complexity is O(N*s) where s is the number of characters in the string and
N is the number of cells in the 2D array

We are modifyging board in-place
O(n)?
*/

/*
*/
var exist = function(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // 0 is count
      if (board[i][j] === word.charAt(0) && dfs(board, i, j, 0, word)) {
        return true
      }
    }
  }
  return false;
};

var dfs = function(board, i, j, count, word) {
  if (count === word.length) return true;

  // check bounds
  const row = board.length;
  const col = board[0].length;
  if (
    i < 0 || i >= row ||
    j < 0 || j >= col ||
    board[i][j] !== word.charAt(count)
  ) return false;

  // mark
  let temp = board[i][j];
  board[i][j] = ' ';
  let found = dfs(board, i + 1, j, count + 1, word) ||
  dfs(board, i - 1, j, count + 1, word) ||
  dfs(board, i, j + 1, count + 1, word) ||
  dfs(board, i, j - 1, count + 1, word);

  board[i][j] = temp;
  return found;

}

const board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
const word = 'ABCCED';

//console.log('exist', exist(board, word))

export {
  exist
}
