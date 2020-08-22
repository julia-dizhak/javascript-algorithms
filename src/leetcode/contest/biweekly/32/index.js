/*
contest
08.08.2020

https://leetcode.com/discuss/general-discussion/779883/biweekly-contest-32

6533 / 10643
*/

/*
Given an array arr of positive integers sorted in a strictly increasing order,
and an integer k.

Find the kth positive integer that is missing from this array.

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...].
The 5th missing positive integer is 9.

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing
positive integer is 6.
*/

/*
todo https://leetcode.com/problems/kth-missing-positive-number/discuss/779901/C%2B%2B-O(n)
1 <= arr.length <= 1000
*/
var findKthPositive2 = function(arr, k) {
  let count = 0;
  for (let i = 0, n = 1; n <= 100; n++) {
    if (i < arr.length && arr[i] === n) {
      i++
    } else {
      k--;
    }

  }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive1 = function(arr, k) {
  //let nums = Array.from(Array(1000), (_, i) => i + 1);
  let nums = new Array(1000).fill(0);
  for (let i = 0; i < arr.length; i++) {
    nums[arr[i]] = arr[i];
  }
  let i = 0;
  //let j = nums.length;
  while (k > 0) {
    i++;
    if (nums[i] === 0) {
      k--;
    }
  }
  return i
};

// https://www.geeksforgeeks.org/k-th-missing-element-in-sorted-array/
var findKthPositive2 = function(arr, k) {
  let diff = 0,
    ans = 0,
    count = k;
  let flag = false;

  for (let i = 0; i < arr.length; i++) {
    diff = 0;
    if (arr[i] + 1 !== arr[i+1]) {
      diff = (arr[i+1] - arr[i]) - 1;

      if (diff > k) {
        ans = arr[i] + count;
        flag = true;
        break;
      } else {
        count -= diff;
      }
    }
  }

  if (flag) return ans;
  else return - 1;

};

// missing number in sorted array
// https://www.geeksforgeeks.org/find-the-missing-number-in-a-sorted-array/

// https://www.geeksforgeeks.org/k-th-missing-element-increasing-sequence-not-present-given-sequence/
// use hash
// var findKthPositive = function(arr, k) {
//   let hash = {}
//   for (let i = 0; i < arr.length; i++) {
//     hash[arr[i]] = true;
//   }
//   let missing = 0;


//   console.log('hash', hash)
// }

// google phone
// https://leetcode.com/discuss/interview-question/723230/google-phone-kth-missing-number
var findKthPositive = function(arr, k) {
  const n = arr.length;
  if (arr.length === 0 || arr[0] > k) return k;
  if (arr[n-1] < n + k) return n+k;

  let low = 0;
  let high = n - 1;
  while (low < high) {
    let mid = Math.floor(low + (high - low)/2);
    if (arr[mid] - (mid+1) < k) low = mid+1;
    else  {
      high = mid;
    }
  }
  return k + low;
}

//console.log('contest findKthPositive',findKthPositive([2,3,4,7,11], 5) )
//console.log('contest findKthPositive',findKthPositive([1,2,3,4], 2) )

/*
Example 2:

Input: s = "())"
Output: 0
Explanation: The string is already balanced.
*/
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  if (s.length === 0) return 0;
  let arr = s.split('');
  const n = arr.length;

  let i = 0;
  let j = s.length - 1;

  let insertion = 0;
  while (i < j) {
    //debugger
    if (arr[i] === '(' && arr[j] === ')' &&  arr[j-1] === ')') {
      insertion = 0;
    } else if (arr[j] !== ')') {
      insertion +=1
    } else if (arr[j-1] !== ')') {
      insertion +=1
    } else if (arr[j] !== ')' && arr[j-1] !== ')') {
      insertion +=2
    }
    i++;
    j -= 2;
  }

  // let count1 = 0;
  // let count2 = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === '(') count1++;
  //   if (arr[i] === ')') count2++;
  // }

  // console.log('count1', count1)
  // console.log('count2', count2)
  // if (count1 === 2*count2) return 0;
  // return count1*2 - count2
  // for (let i = 0; i < s.length; i++) {


  // }
  return insertion
};
//console.log('minInsertions', minInsertions('())'))
//console.log('minInsertions', minInsertions('(()))'))
console.log('minInsertions', minInsertions('))())('))
//console.log('minInsertions', minInsertions('(((((('))
//console.log('minInsertions', minInsertions(')))))))'))
// https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/

export {
  findKthPositive,
  minInsertions
}
