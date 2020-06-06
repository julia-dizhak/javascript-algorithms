/*
Leetcode
541. Reverse string II
easy

Given a string and an integer k, you need to reverse the first k characters
for every 2k characters counting from the start of the string.
If there are less than k characters left, reverse all of them.
If there are less than 2k but greater than or equal to k characters,
then reverse the first k characters and left the other as original.

Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"

Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]
*/

/*
Approach 1: direct (two pointers)

Intuition and Algorithm
We will reverse each block of 2k characters directly.
Each block starts at a multiple of 2k: for example, 0, 2k, 4k, 6k, ....
One thing to be careful about is we may not reverse each block
if there aren't enough characters.

To reverse a block of characters from i to j,
we can swap characters in positions i++ and j--.

Time Complexity: O(N), where N is the size of s.
We build a helper array, plus reverse about half the characters in s.
Space Complexity: O(N), the size of a.
*/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
  if (s.length  === 1) return s;

  let arr = s.split('');

  for (let i = 0; i < arr.length; i += 2*k) {
    let start = i;
    // suppose we are near the end of the char array a[]，
    // and we need do once more reverse.
    // If there are exact k or more than k chars left,
    // boundary start + k - 1 works just fine,
    // we can just do the reverse.
    // however if less than k characters left, and according to the problem
    // description, we need to reverse all of them,
    // the boundary should be length - 1 then,
    // otherwise, index will be out of range.
    let end = Math.min(start + k - 1, arr.length - 1);
    // works as well
    // let end = i + k - 1;

    while (start < end) {
      let temp = arr[start];
      arr[start++] = arr[end];
      arr[end--] = temp;
    }
  }
  return arr.join('')
}

/*
My first attempt, but it doesn't work
for case reverseStr1('abcdefg',1)
*/
const reverseStr1 = (s, k) => {
  const len = s.length;
  if (len === 1) return s;
  let reverse = [];

  for (let i = 0; i < s.length; i += 2*k) {
    let subStr;
    if (len - i >= 2*k ) {
      subStr = s.slice(i, 2*k).split('');
    } else {
      subStr = s.slice(i).split('')
    }

    let lenSubStr = subStr.length;

    if (lenSubStr < k) {
      if (lenSubStr === 2) {
        [subStr[0], subStr[1]] = [subStr[1], subStr[0]]
      }
    } else {
      let subStr1 = subStr.slice(0,k);
      let left = 0;
      let right = subStr1.length - 1;
      while (left < right) {
        let temp = subStr1[left];
        subStr1[left] = subStr1[right];
        subStr1[right] = temp;
        left++;
        right--;
      }
      reverse = reverse.concat(subStr1, subStr.slice(k));
    }
  }
  return reverse.join('')
}

export { reverseStr, reverseStr1 }
