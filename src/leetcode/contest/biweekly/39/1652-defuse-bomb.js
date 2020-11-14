/*
Leetcode
1652 Defuse the bomb
easy

You have a bomb to defuse, and your time is running out! Your informer will 
provide you with a circular array code of length of n and a key k.

To decrypt the code, you must replace every number. All the numbers are replaced 
simultaneously.

If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous k numbers.
If k == 0, replace the ith number with 0.
As code is circular, the next element of code[n-1] is code[0], and the previous 
element of code[0] is code[n-1].

Given the circular array code and an integer key k, return the decrypted code 
to defuse the bomb!

Example 1:

Input: code = [5,7,1,4], k = 3
Output: [12,10,16,13]
Explanation: Each number is replaced by the sum of the next 3 numbers. The 
decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap 
around.

Example 2:
Input: code = [1,2,3,4], k = 0
Output: [0,0,0,0]
Explanation: When k is zero, the numbers are replaced by 0. 

Example 3:
Input: code = [2,4,9,3], k = -2
Output: [12,5,6,13]
Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the numbers
wrap around again. If k is negative, the sum is of the previous numbers.
*/

/*
Approach n*k

code[n-1] is code[0]
code[0] is code[n-1]

If k < 0, replace the ith number with the sum of the previous k numbers.

To deal with this kind of problem, we need to play with the index wisely and 
carefully, just like defusing a bomb (lol). 

There are 3 points we need to notice:

-We need to return the result directly if k == 0 based on the problem statement. 
(I will handle this case specifically, to make it more readable and slightly faster :) )
-We need to do % to make sure the index is always in-bound when k > 0;
-We need to do +code.length to make sure it is alway > 0, and % to make sure the 
index is always in-bound when k < 0.

time is O(n*k)

*/
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
*/
var decrypt2 = function(code, k) {
  const n = code.length;

  let res = new Array(n).fill(0)
  if (k == 0) {
    return res;
  }

  if (k > 0) {
    for (let i = 0; i < n; i++) {
      for (let j = i+1; j <= i+k; j++) {
        res[i] += code[j % n];
      }      
    }
  } else if (k < 0) {
    for (let i = n-1; i > 0; i--) {
      for (let j = i-1; j > i+k; j--) {
        let index = j >= 0 ? j: j+n;
        res[i] += code[index];      
      }
    }
  }

  return res;
}

// the same approach
var decrypt1 = function(code, k) {
  const n = code.length;

  let res = new Array(n).fill(0)
  if (k == 0) {
    return res;
  }

  if (k > 0) {
    for (var i = 0; i < n; i++) {
      for (var j = i+1; j <= i+k; j++) {
        let index = j % n;
        res[i] += code[index]; 
      }
    }
  }

  if (k < 0) {
    for (var i = 0; i < n; i++) {
      let l = Math.abs(k)
      for (var j = i - 1 + n; l > 0; j--, l--) {
        let index = j % n;
        res[i] += code[index]
      }
    }
  }
  
  return res;  
};

/*
The same approach
O(NK) time solutions:
Just do what is asked in the question

hint1
As the array is circular, use modulo to find the correct index.

hint 2
The constraints are low enough for a brute-force solution.
*/
var decrypt = function(code, k) {
  const n = code.length;

  let res = new Array(n).fill(0)
  if (k == 0) {
    return res;
  }

  for (let i = 0; i < n; i++) {
    if (k > 0) {
      for (let j = 0; j < k; j++) {
        let index = (i+1+j) % n;
        console.log(index);
        res[i] += code[index];
      }
    } else if (k < 0) {
      for (let j = 0; j < -k; j++) {
        let index = (i+n-j-1) % n;
        console.log(index);
        res[i] += code[index];
      }
    }
  }

  return res;
}


// sliding window approach
var decryptUseSlidingWindow = function(code, k) {
  const n = code.length;

  let res = new Array(n).fill(0)
  if (k == 0) {
    return res;
  }

  let start = 1, end = k, sum = 0;
  if (k < 0) {
    k = -k;
    start = n - k;
    end = n - 1;
  }

  for (let i = start; i <= end; i++) 
    sum += code[i];
      
    for (let i = 0; i < n; i++) {
      res[i] = sum;
      sum -= code[(start++) % n];
      sum += code[(++end) % n];
    }
  return res;
}

// tests
// [12,10,16,13]
//console.log('decrypt', decrypt2([5,7,1,4], 3));
//console.log('decrypt', decrypt([1,2,3,4], 0));
// [12,5,6,13]
//console.log('decrypt', decryptUseSlidingWindow([2,4,9,3], -2));
// [22,26,22,28,29,22,19,22,18,21,28,19]
//console.log(decryptUseSlidingWindow([10,5,7,7,3,2,10,3,6,9,1,6], -4));

export {
  decrypt,
  decrypt1,
  decrypt2,
  decryptUseSlidingWindow
}