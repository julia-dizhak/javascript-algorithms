/**
 * Leetcode
 * 773 Flood Fill
 * easy
 *
 * An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).
 * Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.
 *
 * To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally
 * to the starting pixel of the same color as the starting pixel,
 * plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel),
 * and so on.
 * Replace the color of all of the aforementioned pixels with the newColor.
 *
 * Note
 * The length of image and image[0] will be in the range [1, 50].
 * The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
 * The value of each color in image[i][j] and newColor will be an integer in [0, 65535].
 *
 * Hint
 * Write a recursive function that paints the pixel if it's the correct color, then recursion on neighboring pixels.
 *
 * Example 1
 * Input: image = [[1,1,1],[1,1,0],[1,0,1]]
 * sr = 1, sc = 1, newColor = 2
 * Output: [[2,2,2],[2,2,0],[2,0,1]]
 *
 * Explanation
 * From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
 * by a path of the same color as the starting pixel are colored with the new color.
 * Note the bottom corner is not colored 2, because it is not 4-directionally connected
 * to the starting pixel.
 *
 *
 * Flood fill also called seed fill, is an algorithm that determines the area connected to a given node in a multi-dimensional array.
 * The flood-fill algorithm takes three parameters:
 * a start node,
 * a target color,
 * and a replacement color.
 *
 * In computer graphics, a bitmap image or a raster graphics is a dot matrix data (2 dimensional array) structure that represents a generally rectangular
 * grid of pixels (points of color), viewable via a monitor, paper.
 *
 * A bitmap is a rectangular grid of pixels, with each pixel's color being specified by a number of bits.
 * A raster is technically characterized by the width and height of the image in pixels and by the number of bits per pixel (or color depth, which determines the number of colors it can represent).
 *
*/

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

/*
  Keep track of what color was at the beginning
  startingColor = original color image
*/
var floodFill = function(image, row, col, newColor, startingColor = image[row][col]) {
  // handle if the coordinate is out of bounds
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

  floodFill(image, row-1, col, newColor, startingColor); // top row
  floodFill(image, row+1, col, newColor, startingColor); // bottom row
  floodFill(image, row, col-1, newColor, startingColor); // left column
  floodFill(image, row, col+1, newColor, startingColor); // right column

  return image
};

export { floodFill }
