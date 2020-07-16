/*
Leetcode
151 Reverse words
medium

Given an input string, reverse the string word by word.

Example 1:
Input: "the sky is blue"
Output: "blue is sky the"

Example 2:
Input: "  hello world!  "
Output: "world! hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:
Input: "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single
space in the reversed string.

Note:
A word is defined as a sequence of non-space characters.
Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space in the reversed string.

Follow up:
For C programmers, try to solve it in-place in O(1) extra space.
*/

/*
Approach 2 Pointers + split + trim (no reverse)
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  if (s === null) return null;
  if (!s.length) return '';

  let arr = s.trim().split(' ');
  arr = arr.filter(item => item.length);

  let i = 0;
  let j = arr.length - 1;

  while(i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  //console.log('arr', arr)
  return arr.join(' ');
};

// tests
// console.log('reverseWords', reverseWords('a good   example'))

/*
Approach 2 Pointers without trim

We can reverse each word first, then reverse the whole string, finnaly trim the string.
Let us consider a general case:

Step 1:
+---+---+---+---+---+---+---+---+---+---+---+
|   |   | a | b |   |   | c |   |   | d | e |
+---+---+---+---+---+---+---+---+---+---+---+

Step 2:
+---+---+---+---+---+---+---+---+---+---+---+
|   |   | b | a |   | c |   | e | d |   |   |
+---+---+---+---+---+---+---+---+---+---+---+

Step 3:
+---+---+---+---+---+---+---+---+---+---+---+
|   |   | d | e |   | c |   | a | b |   |   |
+---+---+---+---+---+---+---+---+---+---+---+

Step 4:
        +---+---+---+---+---+---+---+
        | d | e |   | c |   | a | b |
        +---+---+---+---+---+---+---+

The hardest part is from step 1 to step 2.

For a string, we introduce 4 variables:

1 len, the lenth of the string.
2 last, the index of the last character in the string.
3 chars, the character array of a string.
4 i, the iteration pointer, from 0 to len:

We can iterate the whole string from the start to the end, during the iteration
process, we reverse every word.

We introduce 3 variables:
start        end
  |           |
  v           v
+---+---+---+---+---+---+---+---+---+---+---+
|   |   | a | b |   |   | c |   |   | d | e |
+---+---+---+---+---+---+---+---+---+---+---+
          ^
          |
        first
1 start, the first position where a part of the string should be reversed.

2 end, the last position where a part of the string should be reversed.
If the next character is blank and current blank is not blank, we mark current i as end:
while (i < last && chars[i] != ' ' && chars[i + 1] != ' ') {
  i++;
}
end = i;

3 first, the first position where the character is not blank.
while (i < len && chars[i] == ' ') {
  i++;
}
first = i;

Now we reverse the string for start to end and then we leave a blank after the
last character, next round we reverse another part of the string:

            start        end
              |           |
              v           v
+---+---+---+---+---+---+---+---+---+---+---+
| b | a |   |   |   |   | c |   |   | d | e |
+---+---+---+---+---+---+---+---+---+---+---+
                          ^
                          |
                        first

We can know the the position of the last character is:
start + (end - first)
and the position of the blank will be:

start + (end - first) + 1
Next round, we reverse the part of the string from the next position after the blank.

Time is O(n)
Space is O(1)
*/

var reverseWord = function(arr, i, j) {
  if (arr == null || i >= j || j >= arr.length) return;

  while (i < j) {
    let temp = arr[i];
    arr[i++] = arr[j];
    arr[j--] = temp;
  }
  return arr
}
// reverse words in string II unlock
var reverseWords2 = function(s) {
  if (s == null) {
    return s;
  }
  let chars = s.split('');

  let len = chars.length;
  let last = len - 1;
  // i, the iteration pointer, from 0 to len:
  let i = 0;
  // start, the first position where a part of the string should be reversed.
  let start = 0;
  // the first position where the character is not blank
  let first = 0;
  let end = 0;

  while (i < len) {
    start = i;
    while (i < last && chars[i] === ' ') {
      i++;
    }
    first = i;

    while (i < last && chars[i] !== ' ' && chars[i + 1] !== ' ') {
      i++;
    }
    end = i;

    reverseWord(chars, start, end);
    // We can know the the position of the last character is: i = start + (end - first)
    // and the position of the blank will be:
    i = start + (end - first) + 1;

    // move to next
    i++;
  }
  reverseWord(chars, 0, len - 1);
  return chars.join('').trim();
};

console.log('reverseWords', reverseWords2('  a good   example'))

/*
Approach JS built-in reverse
*/
var reverseWords1 = function(s) {
  if (s === null) return null;

  let arr = s.trim().split(' ');
  arr = arr.filter(item => item.length !== 0);

  return arr.reverse().join(' ');
}

export {
  reverseWords,
  reverseWords1,
  reverseWords2
}
