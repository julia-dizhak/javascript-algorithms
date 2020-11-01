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
    if (rotation === str2) return true;
  }
  return false;
}

/*
Approach Simple check


Hints
Try thinking about the relationship between a string and its rotation. Try to 
short-circuit the check from Solution 1.


This solution requires some intense critical thinking.

If we take a string and create a new string by repeating it, it will contain all 
possible rotations of the string.



Time
n here will represent the length of the strings. n will be calculated for the 
case where the two strings are the same length.

Checking and comparing string length is constant-time, O(n).

The amount of time it takes to add a string to itself is proportional to the 
length of the string, so (str1 + str1) is O(n).

Checking string equality is also O(n) - all characters must be compared.

So, the final time complexity is O(n).

Space complexity is determined by the (str1 + str1) statement above. That temporary 
value will be proportional to the length of the strings, so it is O(n).

Time Complexity: O(N^2) ? no check before or yes, where N is the length of A.
Space Complexity: O(N), the space used building A+A.
*/
function stringRotationSimpleCheck(str1, str2) {
  return str1.length === str2.length && (str1 + str1).includes(str2);
}

/*
Use Hash

time is O(n)
space is O(n)
*/
function stringRotationUseHash(str1, str2) {
  const n1 = str1.length;
  const n2 = str2.length;
  if (n1 !== n2) return false;
  if (str1 === str2) return true;
  
  let arr1 = str1.split('');
  let hash = {};

  let key = '';
  let newArr1 = arr1.slice();

  let i = 0;
  while (i < n1 ) {
    let first = newArr1.shift();
    //console.log(first);
    //console.log(newArr1);
    newArr1 = [...newArr1, ...first]; // here is time?
    //console.log(newArr1);
    key = newArr1.join('').toString();
    //console.log(key);
    if (hash[key] == undefined) {
      hash[key] = key;
    }
    i++;
  }

  if (hash[str2]) {
    return true
  }

  //console.log(hash);
  return false;
}

// tests
console.log('stringRotation', stringRotationUseHash('rotation', 'tationro'));
console.log('stringRotation', stringRotationUseHash('rotation', 'tionrota'));
console.log('stringRotation', stringRotationUseHash('abcde', 'abced'));

export {
  stringRotation,
  stringRotationUseHash,
  stringRotationSimpleCheck
}