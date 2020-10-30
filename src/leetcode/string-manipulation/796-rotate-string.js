/*
Leetcode
796 Rotate string
easy

We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to 
the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' 
after one shift on A. Return True if and only if A can become B after some number 
of shifts on A.

Example 1:
Input: A = 'abcde', B = 'cdeab'
Output: true

Example 2:
Input: A = 'abcde', B = 'abced'
Output: false
Note:

A and B will have length at most 100.

Hints
- You may have to spend time thinking about how best to arrange these strings 
before processing in a loop.
- Think about ways to short-circuit the check.
*/

/*
Approach Brute force

Before we start the loop, we make sure that the strings have the same number of 
characters. If they don’t we automatically know that they’re not rotations of 
each other.

In the for-loop, we’re rotating str1 repeatedly, one character at a time. To see 
this, insert a log statement and print out rotation in the loop.

At every iteration, we check if it’s equal to str2. If it is, we stop and return
true. Eventually, we get through the entire string. If we never find that they’re 
equal, we return false.

Complexity
The for-loop already tells us it’s going to at least be O(n).

The string concatenation is likely O(n) as well. According to the spec 
for String.prototype.slice, it seems as if internally, slicing a string occurs 
in a loop.

The equality check rotation === str2 is also an O(n) operation, as each character 
needs to be compared.

The O(n) for-loop combined with its two O(n) internal processes bring the time 
complexity to: O(n^2).

Space is
The space complexity is: O(n).
The amount of memory rotation needs is proportional to the number of characters 
in the input strings.
*/
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
*/
function stringRotation(str1, str2) {
  const n1 = str1.length;
  const n2 = str2.length;
  if (n1 !== n2) return false;
  if (str1 === str2) return true;

  for (let i = 0; i < n1; i++) {
    const rotation = str1.slice(i, n1) + str1.slice(0,i);
    //console.log(rotation);
    if (rotation === str2) return true;
    
  }
  return false;
}

// tests
console.log('stringRotation', stringRotation('rotation', 'tationro'));


export {
  stringRotation
}