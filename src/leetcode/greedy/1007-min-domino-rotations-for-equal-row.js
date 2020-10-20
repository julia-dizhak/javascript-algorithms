/*
Leetcode
1007 Minimum Domino Rotations For Equal Row
medium

In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the 
ith domino.  (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the ith domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations so that all the values in A are the same, 
or all the values in B are the same.

If it cannot be done, return -1.

Example 1:


Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
Output: 2
Explanation: 
The first figure represents the dominoes as given by A and B: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
Example 2:

Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
Output: -1
Explanation: 
In this case, it is not possible to rotate the dominoes to make one row of values equal.

Constraints:
2 <= A.length == B.length <= 2 * 104
1 <= A[i], B[i] <= 6
*/

/*
Approach Brute Force 1

todo why???
We are as good as our very first domino :) So, we just need to check for A[0] 
(top) and B[0] (bot).

We find all possible number of rotations to make all the values in A are the 
same, or all the values in B are the same, and then get the minimum among them.

A[i] = A[i] if not swap OR B[i] if swap, B[i] = B[i] if not swap OR A[i] if swap.
When i = 0, A[0] can be either A[0] or B[0], B[0] can be either B[0] or A[0].
So the value must be either A[0] or B[0] if can be done.

There are 4 possible cases:
make values in A equal to A[0]
make values in B equal to A[0]
make values in A equal to B[0]
make values in B equal to B[0]

For each case we count rotations and we get the min rotations among them
*/

var minDominoRotationsBruteForce1 = function(A, B) {
  let ans = min(
    countNumberOfRotations(A[0], A, B),
    countNumberOfRotations(B[0], A, B),
    countNumberOfRotations(A[0], B, A),
    countNumberOfRotations(B[0], B, A),
  )

  return ans == Infinity ? -1 : ans;
}

function min(a,b,c,d) {
  return Math.min(Math.min(Math.min(a, b), c), d);
}

// Count number of rotations to make values in A equal to target.
function countNumberOfRotations(target, A, B) {
  let swap = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== target) {
      if (B[i] !== target) {
        return Infinity;
      } else {
        swap++
      }
    }
  }

  return swap;
}
//console.log('minDominoRotations', minDominoRotationsBruteForce1([2,1,2,4,2,2], [5,2,6,2,3,2]));


/*
Approach Brute force

*/
var minDominoRotationsBruteForce = function(A, B) {
  let min = +Infinity;
  for (let i = 1; i < 6; i++) {
    min = Math.min(min, getRotation(A,B,i))
    min = Math.min(min, getRotation(B,A,i))
  }
  return min == +Infinity ? -1 : min;
}

function getRotation(A,B,n) {
  let res = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === n) continue;
    if (B[i] !== n) return +Infinity;
    res++;
  }
  return res;
}


/*
Approach Greedy

- Count the frequency of each number in A and B, respectively;
- Count the frequency of A[i] if A[i] == B[i];
- If countA[i] + countB[i] - same[i] == A.length, we find a solution; otherwise, 
return -1;

- min(countA[i], countB[i]) - same[i] is the answer. countA[i] + countB[i] - same[i] 
is like finding the union of two set A and set B <=> A + B - (A & B)

Take example of
A = [2,1,2,4,2,2]
B = [5,2,6,2,3,2]

countA[2] = 4, as A[0] = A[2] = A[4] = A[5] = 2
countB[2] = 3, as B[1] = B[3] = B[5] = 2
same[2] = 1, as A[5] = B[5] = 2

We have countA[2] + countB[2] - same[2] = 6,
so we can make 2 in a whole row.

Time: O(A + B), space: O(1).
*/
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
  const n = A.length;
  let numberOfA = new Array(7).fill(0);
  let numberOfB = new Array(7).fill(0);
  let same = new Array(7).fill(0)

  for (let i = 0; i < A.length; i++) {
    numberOfA[A[i]]++;
    numberOfB[B[i]]++;
    if (A[i] === B[i]) {
      same[A[i]]++;
    }
  }

  for (let i = 1; i < 7; i++) {
    if (numberOfA[i] + numberOfB[i] - same[i] == n) {
      return n - Math.max(numberOfA[i], numberOfB[i])
    } 
    
  }
  return -1;
}
//console.log('minDominoRotations', minDominoRotations([2,1,2,4,2,2], [5,2,6,2,3,2]));

export {
  minDominoRotations,
  minDominoRotationsBruteForce,
  minDominoRotationsBruteForce1
}