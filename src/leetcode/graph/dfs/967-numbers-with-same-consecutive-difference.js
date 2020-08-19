/*
Leetcode
967 Numbers With Same Consecutive Differences
medium

Return all non-negative integers of length N such that the absolute difference
between every two consecutive digits is K.

Note that every number in the answer must not have leading zeros except for the
number 0 itself. For example, 01 has one leading zero and is invalid, but 0 is valid.

You may return the answer in any order.

Example 1:
Input: N = 3, K = 7
Output: [181,292,707,818,929]
Explanation: Note that 070 is not a valid number, because it has leading zeroes.

Example 2:
Input: N = 2, K = 1
Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]


Note:
1 <= N <= 9
0 <= K <= 9
*/

/*
Approach


brute force

[18, 29, 70, 81, 92]
181, 292, 707, 818, 929
18 + 1

DP subproblems
define a subproblem



Consecutive" digits when N == 1
Seems the answer for N == 1 and K > 0 should be []...
backtracing
dp?
*/

/*
looping

    if (N === 1) return [0,1,2,3,4,5,6,7,8,9];
    let output = [1,2,3,4,5,6,7,8,9];

    for (digits = 1; digits <= N - 1; digits++) {

        let new_output = [];

        for (const result of output) {

            let prev = result - 10 * Math.floor(result / 10); // get unit digit - could this be improved?

            for (let num = 1; num <= 10; num++) {
                let next = num % 10;
                if (Math.abs(prev - next) === K) new_output.push(result * 10 + next);
            }

        }

        output = new_output;
    }

    return output;
*/
var numsSameConsecDiff = function(N, K) {
  if (N === 1) return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let results = [];
  //
  for (let num = 1; num < 10; ++num) {
    dfs(N - 1, num, K, results)
  }

  //
  return results

}
/*
dfs
var numsSameConsecDiff = function(N, K) {
    const res = new Set();
    for (let i = 0; i <= 9; i += 1) {
        numsSameConsecDiffImpl(N - 1, K, res, i);
    }
    return [...res];
};

function numsSameConsecDiffImpl(n, k, res, acc) {
    if (n === 0) {
        res.add(acc);
        return;
    }
    if (acc === 0) {
        return; // No leading zeros
    }

    const lastNumber = acc % 10;
    const newValues = [
        lastNumber + k,
        lastNumber - k,
    ];
    for (const newValue of newValues) {
        if (newValue < 0 || newValue > 9) {
            continue;
        }
        numsSameConsecDiffImpl(n - 1, k, res, acc * 10 + newValue);
    }
}
*/

/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, K) {
  let result = [];

  // there is no case N = 1, N>=1
  if (N === 1) return [0,1,2,3,4,5,6,7,8,9];

  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      if (Math.abs(i-j) === K) {
        //result.push(Number(''+i+j));
        result.push(''+i+j);
      }

    }
  }

  if (N > 2) {
    for (let i = 0; i < result.length; i++) {
      result[i] += result[i].slice(0, N-2);
    }
  }

  result = result.map(el => Number(el))

  return result;
};
console.log('numsSameConsecDiff', numsSameConsecDiff(1,0))
console.log('numsSameConsecDiff', numsSameConsecDiff(0,1))
//console.log('numsSameConsecDiff', numsSameConsecDiff(2,1))
console.log('numsSameConsecDiff', numsSameConsecDiff(3,7))
console.log('numsSameConsecDiff', numsSameConsecDiff(4,7))

export {
  numsSameConsecDiff
}
