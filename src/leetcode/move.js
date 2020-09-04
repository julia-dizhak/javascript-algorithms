/*
Approach Generate all permutations

1 Generate all permutations, I generated string permutations instead of array
which is very easier to code in Java because all of the nunber in our array is single digit.
*/

// permutation
function permute(arr) {
  if (arr.length === 1) return arr;
  let output = [];
  // second argument index or position
  backtracking(arr, 0, output);
  return output
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function backtracking(arr, pos, result) {
  if (pos === arr.length) {
    result.push(arr.slice());
  } else {
    for (let i = pos; i < arr.length; i++) {
      swap(arr, i, pos)
      backtracking(arr, pos+1, result);
      // reset
      swap(arr, i, pos)
    }
  }
}

/**
 * @param {number[]} A
 * @return {string}
*/
var largestTimeFromDigits = function(A) {
  let permutations = permute(A);
  let res = '';
  console.log('permutations', permutations);
  // for (const p of permutations) {

  // }
}

// var largestTimeFromDigits1 = function(A) {
//   let hash = {};
//   let output = ''
//   let first = 0;
//   let second = 0

//   let firstArr = A.filter(item => item <= 2);
//   if (firstArr.length === 0) {
//     return output;
//   }

//   first = Math.max(...firstArr) || -1;
//   A = A.filter(item => item !== first);
//   console.log('A', A);
//   //debugger
//   if (first === 2) {
//     let secondArr = A.filter(item => item <= 3);
//     second = Math.max(...secondArr);
//     console.log('second', second);
//     A = A.filter(item => item !== second);
//   } else if (first === 1 || first === 0) {
//     second = Math.max(...A);
//   } else {
//     return output
//   }

//   let thirdArr = A.filter(item => item <= 6);
//   let third = Math.max(...thirdArr);
//   A = A.filter(item => item !== third);

//   console.log('third', third);
//   let fourth = A[0]
//   output = first.toString() + second.toString() + ':' + third.toString() + fourth.toString();

//   console.log('output', output)
//   return output;
// };

console.log('largestTimeFromDigits', largestTimeFromDigits([1,2,3,4]))
//console.log('largestTimeFromDigits', largestTimeFromDigits([5,5,5,5]))
//console.log('largestTimeFromDigits', largestTimeFromDigits([6,6,6,6]))
//console.log('largestTimeFromDigits', largestTimeFromDigits([1,1,1,1]))

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  nums = nums.sort((a,b) => a - b);
  console.log('nums', nums)
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(i, nums[i])
  }
  console.log('map', map);

  for (let [key, value] of map) {
    console.log(key + ' = ' + value);
    let nextKey = key+k;
    //let nextVal = value+t
    console.log(key+k)
    //console.log(value+t)
    //console.log(key + k + ' = ' + value + t);

    if (Math.abs(map.get(key) - map.get(key+1)) <= t ) {
      if (Math.abs(key - (key+1)) <=3) return true
    }
  }

  // for (let i = 0; i < nums.length; i++) {
  //   // 0 1 2 3
  //   for (let j = 1; j < nums.length; j++) {
  //     console.log('i, j', i, j);
  //     //debugger
  //     if (Math.abs(i - j) <= k && Math.abs(nums[i] - nums[j]) <= t ) {
  //       return true
  //     }
  //   }
  // }
  return false
};

//console.log('containsNearbyAlmostDuplicate', containsNearbyAlmostDuplicate([1,2,3,1], 3, 0))
//console.log('containsNearbyAlmostDuplicate', containsNearbyAlmostDuplicate([1,0,1,1], 1, 2))
console.log('containsNearbyAlmostDuplicate', containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3));

/*
Repeated substring pattern

Example 1:

Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.
*/

var lengthOfLongestSubstring = function(s) {

  const n = s.length;
  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i+1; j <= n; j++) {
      console.log('i,j', i, j)
      if (allUnique(s,i,j)) {
        max = Math.max(max, j-i)
      }
    }
  }

  return max;
}
console.log('lengthOfLongestSubstring', lengthOfLongestSubstring('aba'))
//console.log('lengthOfLongestSubstring', lengthOfLongestSubstring('abcabcbb'))

function allUnique(s, start, end) {
  debugger
  let hash = {};
  for (let i = start; i < end; i++) {
    if (hash[s[i]] === undefined) {
      hash[s[i]] = (hash[s[i]] || 0) + 1;
    } else return false;
  }
}

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  if (s.length < 2) return false; 
  const n = s.length;

  for (let i = 0; i < n; i++) {
    for (let j = i+1; j <= n; j++) {
      unique(s,i,j)
      
    }
    
  }
}

function unique(s, start, end) {
  //debugger
  let hash = {};
  for (let i = start; i < end; i++) {
    if (hash[s[i]] === undefined) {
      hash[s[i]] = (hash[s[i]] || 0) + 1;
    } else {

    }
    
  }
  
}

//console.log('repeatedSubstringPattern', repeatedSubstringPattern('abab'))
    

export {
  largestTimeFromDigits,
  containsNearbyAlmostDuplicate,

  lengthOfLongestSubstring,
  repeatedSubstringPattern
}
