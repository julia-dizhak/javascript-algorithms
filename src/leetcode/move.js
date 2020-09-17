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

//console.log('largestTimeFromDigits', largestTimeFromDigits([1,2,3,4]))
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
//console.log('containsNearbyAlmostDuplicate', containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3));


/*
split it up
find a - add to partition, 
we have to split at least of last occurence of a, b, c
second split d, e
last occurence of h
we can't modify a string
wants many possible parts
last occurence
output array doesn't count like space
https://www.youtube.com/watch?v=5NCjHqx2v-k&ab_channel=NickWhite

last indices

task with repeated string update
greedy algorithms from briliant to learn
*/
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const n = S.length;
  let output = [];

  let lastIndices = new Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    //debugger
    lastIndices[S.charAt(i) - 'a'] = i;
  }

  console.log('lastIndices', lastIndices)

  let hash = {};
  for (let i = 0; i < n; i++) {
    hash[S[i]] = (hash[S[i]] || 0) + 1;
  }
  console.log('hash', hash);

  let i = 0;
  let j = 0;

  let partition = '';

  while (i < n) {
    if (hash[S[i]]) {
      hash[S[i]]--;
      partition += S[i];
      i++;
    } else {
      j = i;
    }
  }

  return output;
};

//console.log('partitionLabels', partitionLabels('ababcbacadefegdehijhklij'))

/*
1305
in-order traversal
left nodes then current root then right nodes

https://leetcode.com/problems/all-elements-in-two-binary-search-trees/

hint 2
merge 2 in one list

[2,1,4]
[1,0,3]
[0,-10,10]
[5,1,7,0,2]
[]
[5,1,7,0,2]
[0,-10,10]
[]

[1,null,8]
[8,1]

time
space

need to add iterative solution
https://leetcode.com/problems/all-elements-in-two-binary-search-trees/discuss/464415/Javascript-Python3-C%2B%2B-in-order-traversal-%2B-merge

*/
class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  let res = [];
  let res1 = [];
  let res2 = [];
  if (!root1 && !root2) return [];

  if (root1) {
    res1 = inorder(root1)
  }
  if (root2) {
    res2 = inorder(root2)
  }

  console.log('res1', res1);
  console.log('res2', res2);
  return merge(res1, res2);

};

// inorder traversal move
var inorder = function(root, nodes = []) {
  if (root) {
    inorder(root.left, nodes);
    nodes.push(root.val);
    inorder(root.right, nodes)
  }
  return nodes;
}

const merge = function(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;

  let res = [];
  let i = 0;
  let j = 0;

  // example
  // [1,2,4] [0,1,3]
  while (i < n1 && j < n2) {
    if (arr1[i] <= arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++
    }
  }

  if (i < n1) res = [...res, ...arr1.slice(i)];
  if (j < n2) res = [...res, ...arr2.slice(j)];
  console.log('res', res)
  return res;
}

// let root1 = new TreeNode(2);
// root1.left = new TreeNode(1);
// root1.right = new TreeNode(4);

// let root2 = new TreeNode(1);
// root2.left = new TreeNode(0);
// root2.right = new TreeNode(3);

// example 1
//[1,null,8]
//[8,1]
let root1 = new TreeNode(1);
//root1.left = new TreeNode(1);
root1.right = new TreeNode(8);

let root2 = new TreeNode(8);
root2.left = new TreeNode(1);
//root2.right = new TreeNode(3);


console.log('getAllElements', getAllElements(root1, root2))

/*
easy to read
const traversal = (node, arr = []) => {
  if (node) {
    traversal(node.left, arr);
    arr.push(node.val);
    traversal(node.right, arr);
  }
  return arr;
};
const merge = (arr1, arr2) => {
  const ret = [];
  let idx1 = idx2 = 0;
  while (idx1 < arr1.length && idx2 < arr2.length) {
    arr1[idx1] < arr2[idx2] ? ret.push(arr1[idx1++]) : ret.push(arr2[idx2++]);
  }
  while (idx1 < arr1.length) ret.push(arr1[idx1++]);
  while (idx2 < arr2.length) ret.push(arr2[idx2++]);
  return ret;
};
const getAllElements = (root1, root2) => merge(traversal(root1), traversal(root2));
*/

/*
Image overlap

start from -3
total number of 1

After, the overlap of this translation is the number of positions that have a 
1 in both images.

time 4 for loop n^4? 
constant time

solution 
https://leetcode.com/problems/image-overlap/solution/
*/
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
*/
var largestOverlap = function(A, B) {
  const rows = A.length;
  const cols = A[0].length;

  let res = 0; // total number of 1

  for (let row = -rows; row < rows; row++) {
    for (let col = -cols; col < cols; col++) {
      // all possible overlapping
      console.log('row', row);
      console.log('col', col);
      // console.log('A', A[row][col])
      // console.log('B', B[row][col]);
      res = Math.max(res, count(A, B, row, col));
    }
  }

  console.log('res', res);
  return res;
};

function count(A, B, row, col) {
  let counter = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (
        i + row < 0 || i + row >= A.length || 
        j + col < 0 || j + col >= B.length
      ) continue
      if (A[i + row][j + col] === 1 && B[i][j] === 1 ) counter++;
    }
  }

  return counter;
}

let A = [
  [1,1,0],
[0,1,0],
[0,1,0]]
let B = [
  [0,0,0],
[0,1,1],
[0,0,1]]
console.log('largestOverlap', largestOverlap(A, B))

/* 
word pattern
290

Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter 
in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true

solution is open

Just based on instinct
pattern map to words
create a hash key is a pattern, value is word
first check if both length are the same otherwise return false
{a: dog}
{b: cat}

last example is perfect
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let words = str.split(' ');
  if (pattern.length !== words.length) return false;

  let hash = {};
  for (let i = 0; i < pattern.length; i++) {
    let currentChar = pattern.charAt(i);
    if (hash[currentChar] !== undefined)  {
      //debugger
      if (hash[currentChar] !== words[i]) return false
    }
    else {
      if (Object.values(hash).indexOf(words[i]) !== -1) return false;
      hash[currentChar] = words[i];
    }
  }

  //console.log('hash', hash);
  return true;
};

//console.log('wordPattern', wordPattern('abba', 'dog cat cat dog'));
//console.log('wordPattern', wordPattern('aaba', 'dog cat cat dog'))
//console.log('wordPattern', wordPattern('abba', 'dog dog dog dog'))

/*
Sum of Root To Leaf Binary Numbers

hint1
Find each path, then transform that path to an integer in base 10

todo
solution with separate helper method outside of main function
solution is open
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  let binaries = [];

  const helper = (node, str) => {
    if (!node) return; 

    // compose the binary string for the next node
    const binary = str + node.val;

    if (!node.left && !node.right) {
      binaries.push(binary)
    }

    if (node.left) {
      helper(node.left, binary);
    }
    if (node.right) {
      helper(node.right, binary);
    }
  }

  helper(root, '');    
  console.log('binaries', binaries);
  
  let sum = binaries.reduce((sum, binary) => {
    sum += parseInt(binary, 2);
    return sum
  }, 0)

  console.log(sum);
  return sum;  
};



let root = new TreeNode(1);
root.left = new TreeNode(0);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(1);

root.right = new TreeNode(1);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(1)

console.log('sumRootToLeaf', sumRootToLeaf(root));


/*
10.09
compare version numbers

*/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    
};

console.log('compareVersion', compareVersion('0.1', '1.1'))

/*
DP?
row
col
what is the smallest problem? max today?

Columns are sizes of knapsack
Rows are items.


time is O(n^2)

todo tests
[1,2,3,1]
[2,7,9,3,1]
[1,1,1,1,1]
[]
[1]
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob1 = function(nums) {
  //debugger
  const n = nums.length;
  if (n < 1) return 0;
  if (n === 1) return nums[0];
  
  let output = []

  let start = 0;
  while (start < n) {
    let i = start;
    let res = 0;
    while (i < n) {
      res += nums[i];
      i += 2;
    }
    output.push(res);
    start++;
  }

  console.log('output', output);
  return Math.max(...output)
};

/*
step 1
A robber has 2 options: a) rob current house i; b) don't rob current house
If an option "a" is selected it means she can't rob previous i-1 house but can 
safely proceed to the one before previous i-2 and gets all cumulative loot that follows.
If an option "b" is selected the robber gets all the possible loot from robbery of i-1 and all the following buildings.
So it boils down to calculating what is more profitable:

robbery of current house + loot from houses before the previous
loot from the previous house robbery and any loot captured before that

Step 2. Recursive (top-down)
Converting the recurrent relation from Step 1 shound't be very hard.
time limit exceed
*/

var rob = function(nums) {
  return helper(nums, nums.length - 1);
}
var helper = function(nums, i) {
  if (i < 0) return 0;
  return Math.max(helper(nums, i-2) + nums[i], helper(nums, i-1));
}

// console.log('rob', rob([1,2,3,1]));
// console.log('rob', rob([2,7,9,3,1]))
// console.log('rob', rob([1,1,1,1,1]))
// console.log('rob', rob([1, 2]))
// console.log('rob', rob([2,1,1,2]))



/*

https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/discuss/91046/How-do-you-even-think-of-getting-an-O(n)-solution-for-this

https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/discuss/849679/Javascript-Python3-C%2B%2B-Trie-%2B-Greedy-Alternative-Path
*/
var findMaximumXOR1 = function(nums) {
  const n = nums.length;
  if (n === 1) return 0;
  if (n === 2) return nums[0] ^ nums[1];
  let output = [];
  let even = []
  let odd = []

  let prevOdd = 0;
  let currOdd = 0
  for (let i = 0; i < n; i++) {
    if ( (nums[i] & 1) === 0) even.push(nums[i])
    if ( (nums[i] & 1) === 1) odd.push(nums[i])
  }

  console.log('even', even);
  odd = odd.sort((a,b) => b - a);
  even = even.sort((a,b) => a - b);
  console.log('odd', odd);
  let merge = [...odd, ...even];
  console.log('merge', merge)
  return merge[0] ^ merge[1];
}

console.log('findMaximumXOR', findMaximumXOR1([3,10,5,25,2,8]));
console.log('findMaximumXOR', findMaximumXOR1([3]));
console.log('findMaximumXOR', findMaximumXOR1([3,8]))
console.log('findMaximumXOR', findMaximumXOR1([3,8,2]))
console.log('findMaximumXOR', findMaximumXOR1([3,8,5]))
console.log('findMaximumXOR', findMaximumXOR([8,10,2]))
console.log('findMaximumXOR', findMaximumXOR([14,70,53,83,49,91,36,80,92,51,66,70]))


export {
  largestTimeFromDigits,
  containsNearbyAlmostDuplicate,
  partitionLabels,
  wordPattern
}
