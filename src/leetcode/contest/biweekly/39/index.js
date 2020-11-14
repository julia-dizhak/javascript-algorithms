/*
Biweekly 39 14.11

How many problem resolved? 
nothing

3642 / 6047
*/

/*
1st problem 


*/
function test() {
  console.log('test');
}

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
/*
code[n-1] is code[0]
code[0] is code[n-1]

anki circular number

If k < 0, replace the ith number with the sum of the previous k numbers.
*/
var decrypt1 = function(code, k) {
  const n = code.length;

  let res = new Array(n).fill(0)
  if (k == 0) {
    return res;
  }

  if (k > 0) {
    for (var i = 0; i < n; i++) {
      for (var j = i+1; j <= i+k; j++) {
        console.log(j);
        let index = j % n;
        console.log(index);
        res[i] += code[index]; 
      }
    }
  }

  if (k < 0) {
    for (var i = 0; i < n; i++) {
      let l = Math.abs(k)
      for (var j = i - 1 + n; l > 0; j--, l--) {
        console.log('j=', j);
        console.log('i', i);
        let index = j % n;
        console.log(index);
        res[i] += code[index]
      }
    }
  }
  
  return res;  
};
/*O(NK) time solutions:
Just do what is asked in the question

hint
As the array is circular, use modulo to find the correct index.

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

// [12,10,16,13]
console.log('decrypt', decrypt([5,7,1,4], 3));
console.log('decrypt', decrypt([1,2,3,4], 0));
// 9 + 3
// 2 + 3
// [12,5,6,13]
console.log('decrypt', decrypt([2,4,9,3], -2));
// [22,26,22,28,29,22,19,22,18,21,28,19]
//console.log(decrypt([10,5,7,7,3,2,10,3,6,9,1,6], -4));

// class Solution {
//   public int[] decrypt(int[] code, int k) {
//       int[] res = new int[code.length];
//       if (k == 0) return res;
//       int start = 1, end = k, sum = 0;
//       if (k < 0) {
//           k = -k;
//           start = code.length - k;
//           end = code.length - 1;
//       }
//       for (int i = start; i <= end; i++) sum += code[i];
      
//       for (int i = 0; i < code.length; i++) {
//           res[i] = sum;
//           sum -= code[(start++) % code.length];
//           sum += code[(++end) % code.length];
//       }
//       return res;
//   }
// }

export {
  test
}