/*
Leetcode
733 Flood Fill
easy

An image is represented by a 2-D array of integers, each integer representing
the pixel value of the image (from 0 to 65535).
Given a coordinate (sr, sc) representing the starting pixel (row and column)
of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels
connected 4-directionally to the starting pixel of the same color as the
starting pixel, plus any pixels connected 4-directionally to those pixels
(also with the same color as the starting pixel), and so on.
Replace the color of all of the aforementioned pixels with the newColor.

Note
The length of image and image[0] will be in the range [1, 50].
The given starting pixel will satisfy 0 <= sr < image.length and
0 <= sc < image[0].length.
The value of each color in image[i][j] and newColor will be an integer in [0, 65535].

Hint
Write a recursive function that paints the pixel if it's the correct color,
then recursion on neighboring pixels.

Example 1
Input: image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]

Explanation
From the center of the image ( with position (sr, sc) = (1, 1) ), all pixels connected
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.

Flood fill also called seed fill, is an algorithm that determines the area
connected to a given node in a multi-dimensional array. The flood-fill algorithm
takes three parameters:
a start node,
a target color,
and a replacement color.

In computer graphics, a bitmap image or a raster graphics is a dot matrix data
(2 dimensional array) structure that represents a generally rectangular
grid of pixels (points of color), viewable via a monitor, paper.

A bitmap is a rectangular grid of pixels, with each pixel's color being specified
by a number of bits. A raster is technically characterized by the width and
height of the image in pixels and by the number of bits per pixel (or color depth,
which determines the number of colors it can represent).
*/

/*
Approach 1: DFS via recursion

Intuition
We perform the algorithm explained in the problem description:
paint the starting pixels, plus adjacent pixels of the same color, and so on.

Algorithm
Say color is the color of the starting pixel.
Let's flood-fill the starting pixel: we change the color of that pixel to the
new color, then check the 4 neighboring pixels to make sure they are valid pixels
of the same color, and of the valid ones, we flood-fill those, and so on.

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
  // FIRST check indexes outs of bound (ORDER is important) and then your condition
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

Why this approach called DFS?
because of visited flag?

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

There are three things that you need to consider once you have identified that
a question can be solved using DFS
1 The base case (return condition)
2 Mark that node as visited
3 nGiven that I am at a particular node what operations do I need to perform

The base case:
The current node cannot
a) Exit the matrix bounding condition
b) Different from the base color
c) Be a node that we have already visited

Time complexity is proportional to a number of pixes
we have to fill rows * cols or O(n)
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
    // Without checking if (color != newColor), your program will keep moving
    // around in the image visited flag: we are using the changing colour to
    // keep track of which pixels we've already visited.
    // If the colour doesn't change, we forget where we've been and visit the
    // same pixels over and over again.
    img[i][j] !== originalColor
  ) return;

  // starts from the middle as the starting pixel, changes itself to a new color
  // have to modify color position
  img[i][j] = newColor;
  // exploring all directions
  // replaces those that had the same number as the one the starting pixel had
  helper(img, i - 1, j, originalColor, newColor);
  helper(img, i + 1, j, originalColor, newColor);
  helper(img, i, j - 1, originalColor, newColor);
  helper(img, i, j + 1, originalColor, newColor);
}

/*
Approach BFS

Create a queue = [[sr,sc]]. Dequeue a queue, go to 4 directions and
check of i,j are not out of boundary.

time is O(n) need to visit all nodes
space is O(n)
*/
const floodFillBFS = function(img, sr, sc, newColor) {
  const rows = img.length;
  const cols = img[0].length;
  const startingColor = img[sr][sc];

  if (startingColor === newColor) return img;

  // if startingColor !== newColor
  let queue = [[sr,sc]];

  while (queue.length) {
    const [i, j] = queue.shift();
    if (img[i][j] === startingColor) {
      img[i][j] = newColor;
      if (i-1 >= 0) queue.push([i-1, j]); // up
      if (i+1 < rows) queue.push([i+1, j]); // down
      if (j-1 >= 0) queue.push([i, j-1]); // left
      if (j+1 < cols) queue.push([i, j+1]); // right
    }
  }

  return img;
}


/*
Approach: Depth-First Search
I'm not sure that it's correct solution

*/
const floodFillDFS = function(img, sr, sc, newColor) {
  const rows = img.length;
  const cols = img[0].length;
  const startingColor = img[sr][sc]
  if (startingColor === newColor) return img;

  let stack = [[sr,sc]];
  while (stack.length) {
    const [i,j] = stack.pop();
    if (img[i][j] === startingColor) {
      img[i][j] = newColor;

      if (i-1 >= 0) stack.push([i-1, j]); // up
      if (i+1 < rows) stack.push([i+1, j]); // down
      if (j-1 >= 0) stack.push([i, j-1]); // left
      if (j+1 < cols) stack.push([i, j+1]); // right
    }
  }

  return img;
}

// tests
// let input = [
//   [1,1,1],
//   [1,1,0],
//   [1,0,1]
// ]
// console.log('floodFillUseHelper', floodFillUseHelper(input, 1, 1, 2))
// console.log('floodFillDFS', floodFillDFS(input, 1, 1, 2))

export {
  floodFill,
  floodFillUseHelper,
  floodFillBFS,
  floodFillDFS
}
