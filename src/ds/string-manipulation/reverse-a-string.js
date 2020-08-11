// you can check file reverse an array as well

/*
Leetcode
344. Write a function that reverses a string.
easy

The input string is given as an array of characters char[].
Do not allocate extra space for another array, you must do this by modifying
the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

The entire logic for reversing a string is based on using the opposite directional two-pointer approach!
*/

/*
  Use swap function
*/
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
var reverse = s => {
  for (let i = 0; i < s.length/2; i++) {
    swap(s, i, s.length - i - 1);
  }
}

// Time complexity O(N) - as these two pointers touch all the elements in the array
var reverseVariant2 = s => {
  for (let i = 0; i < s.length/2; i++) {
    let temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }
}

/*
Approach Recursion in-place
Does in-place mean constant space complexity?
No. By definition, an in-place algorithm is an algorithm which transforms input
using no auxiliary data structure.

The tricky part is that space is used by many actors, not only by data structures.
The classical example is to use recursive function without any auxiliary data structures.
Is it in-place? Yes.
Is it constant space? No, because of recursion stack.

Algorithm
Let's implement recursive function helper which receives two pointers,
left and right, as arguments.

Base case: if left >= right, do nothing.
Otherwise, swap s[left] and s[right] and call helper(left + 1, right - 1).

To solve the problem, call helper function passing the head and tail indexes
as arguments: return helper(0, len(s) - 1).

Complexity Analysis
Time complexity: O(N) time to perform N/2 swaps, O(n/2) == O(1/2 * n), get rid from constant
Space complexity: O(N) to keep the recursion stack.
*/
function helper(s, left, right) {
  if (left >= right) return;

  let temp = s[left];
  s[left] = s[right];
  s[right] = temp;
  helper(s, left + 1, right - 1)
}

function helperVariant1(s, left, right) {
  if (left >= right) return;

  let temp = s[left];
  s[left++] = s[right];
  s[right--] = temp;
  helper(s, left, right)
}

var reverseStringRecursion = s => {
  helper(s, 0, s.length - 1);
}

// recursion another variant
var reverseStringRecursionVariant2 = s => {
  if (s.length === 0) return;

  let temp = s[0];
  s.shift();
  reverseStringRecursionVariant2(s);
  s.push(temp);
}

/*
Two pointers approach

In this approach, two pointers are used to process two array elements at the same time.
Usual implementation is to set one pointer in the beginning and one at the end
and then to move them until they both meet.

Algorithm
Set pointer left at index 0, and pointer right at index n - 1,
where n is a number of elements in the array.

While left < right: Swap s[left] and s[right].
Move left pointer one step right, and right pointer one step left.

Time complexity: O(N) to swap N/2 element.
Space complexity: O(1), it's a constant space solution.
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
*/
var reverseStringTwoPointersUseTemp = function(s) {
  if (s.length === 1) return s;

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};
// console.log('reverseStringTwoPointersUseTemp', reverseStringTwoPointersUseTemp(['t','h','e']);

// Using destructuring assignment array matching available in ES6+ though not
// very efficient.
var reverseStringTwoPointers = s => {
  if (s.length === 1) return s;

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
}
// const t = reverseStringTwoPointers(['t', 'h', 'e']);
// console.log('reverseStringTwoPointers', t)

export {
  reverse, reverseVariant2,
  reverseStringRecursion, reverseStringRecursionVariant2, helperVariant1,
  reverseStringTwoPointersUseTemp, reverseStringTwoPointers
}
