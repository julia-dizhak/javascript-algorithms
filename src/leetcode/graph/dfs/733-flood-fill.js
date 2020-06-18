/*
Leetcode
733 Flood Fill
easy

An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).
Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally
to the starting pixel of the same color as the starting pixel,
plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel),
and so on.
Replace the color of all of the aforementioned pixels with the newColor.

Note
The length of image and image[0] will be in the range [1, 50].
The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
The value of each color in image[i][j] and newColor will be an integer in [0, 65535].

Hint
Write a recursive function that paints the pixel if it's the correct color, then recursion on neighboring pixels.

Example 1
Input: image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]

Explanation
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.

Flood fill also called seed fill, is an algorithm that determines the area connected to a given node in a multi-dimensional array.
The flood-fill algorithm takes three parameters:
a start node,
a target color,
and a replacement color.

In computer graphics, a bitmap image or a raster graphics is a dot matrix data (2 dimensional array) structure that represents a generally rectangular
grid of pixels (points of color), viewable via a monitor, paper.

A bitmap is a rectangular grid of pixels, with each pixel's color being specified by a number of bits.
A raster is technically characterized by the width and height of the image in pixels and by the number of bits per pixel (or color depth, which determines the number of colors it can represent).
*/

import { helperVariant1 } from "../../../algorithms/string-manipulation/reverse-a-string";

/*
Approach 1: Depth-First Search

Intuition
We perform the algorithm explained in the problem description:
paint the starting pixels, plus adjacent pixels of the same color, and so on.

Algorithm
Say color is the color of the starting pixel.
Let's flood-fill the starting pixel: we change the color of that pixel to the new color,
then check the 4 neighboring pixels to make sure they are valid pixels of the same color,
and of the valid ones, we flood-fill those, and so on.

We can use a function dfs to perform a flood-fill on a target pixel.
And check a boundary conditions to prevent infinite loop.

Complexity Analysis
Time Complexity: O(N), where N is the number of pixels in the image.
We might process every pixel.

Space Complexity: O(N), the size of the implicit call stack when calling dfs.
*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
*/
var floodFill = function(image, row, col, newColor, startingColor = image[row][col]) {
  // handle if the coordinate is out of bounds
  // check indexes outs of bound before and then your condition
	// or if it is already the new color
  // or if it's not from the original color we're trying to change
  if (
    row < 0 ||
    col < 0 ||
    row >= image.length ||
    col >= image[row].length ||
    image[row][col] !== startingColor ||
    image[row][col] === newColor
  ) return image; // return image as it is

  // make it equal to new color
  image[row][col] = newColor;

  // going to 4 directions
  floodFill(image, row - 1, col, newColor, startingColor); // top row
  floodFill(image, row + 1, col, newColor, startingColor); // bottom row
  floodFill(image, row, col - 1, newColor, startingColor); // left column
  floodFill(image, row, col + 1, newColor, startingColor); // right column

  return image
};

/*
The same approach: DFS via recursion helper method.

We can use a function dfs to perform a flood-fill on a target pixel.
And check a boundary conditions + visited flag to prevent infinite loop.

Keep track of what color was at the beginning startingColor = original color image
input = [
  [1,1,1],
  [1,1,0],
  [1,0,1]
]
anything you change, you keep doing it connectively

output = [
  [2,2,2],
  [2,2,0],
  [2,0,1]
]

Time complexity is proportional to a number of pixes
we have to fill rows * cols
*/
var floodFillUseHelper = function(img, sr, sc, newColor) {
  // sr - starting row
  // sc - starting col
  const color = img[sr][sc]; // starting color
  if (color !== newColor) {
    helper(img, sr, sc, color, newColor)
  }
  // else color === newColor just return an image, blue === blue
  return img;
}

function helper(img, i, j, originalColor, newColor) {
  // check out of bounds to prevent infinite loop + our condition
  const rows = img.length;
  const cols = img[0].length;
  if (
    i < 0 || i >= rows ||
    j < 0 || j >= cols ||
    // if color is not a color I started with
    // Without checking if (color != newColor), your program will keep moving around in the image
    // visited flag: we are using the changing colour to keep track of which pixels we've already visited.
    // If the colour doesn't change, we forget where we've been and visit the same pixels over and over again.
    img[i][j] !== originalColor
  ) return;

  // have to modify color position
  img[i][j] = newColor;
  // exploring all directions
  helper(img, i - 1, j, originalColor, newColor);
  helper(img, i + 1, j, originalColor, newColor);
  helper(img, i, j - 1, originalColor, newColor);
  helper(img, i, j + 1, originalColor, newColor);
}


/*
Approach BFS todo

*/


// 130 surrounded regions
// last row is not surrounded
// except regions lies on boundary
// boudaryDFS
// video
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

let input = [
  ['x', 'x', 'x', 'x'],
  ['x', '0', '0', 'x'],
  ['x', 'x', '0', 'x'],
  ['x', '0', 'x', 'x'],
]
console.log(solve(input))

export {
  floodFill,
  floodFillUseHelper,
  solve }
