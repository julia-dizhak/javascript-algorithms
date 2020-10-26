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
  //console.log('permutations', permutations);
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
  //console.log('nums', nums)
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(i, nums[i])
  }
  //console.log('map', map);

  for (let [key, value] of map) {
    //console.log(key + ' = ' + value);
    let nextKey = key+k;
    //let nextVal = value+t
    //console.log(key+k)
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
  //console.log('hash', hash);

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

  // console.log('res1', res1);
  // console.log('res2', res2);
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

//console.log('getAllElements', getAllElements(root1, root2))

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

start from (-3,-3) and shift up by one unit
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
      // console.log('row', row);
      // console.log('col', col);
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
//console.log('largestOverlap', largestOverlap(A, B))

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
  //console.log('binaries', binaries);
  
  let sum = binaries.reduce((sum, binary) => {
    sum += parseInt(binary, 2);
    return sum
  }, 0)

  //console.log(sum);
  return sum;  
};



let root = new TreeNode(1);
root.left = new TreeNode(0);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(1);

root.right = new TreeNode(1);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(1)

//onsole.log('sumRootToLeaf', sumRootToLeaf(root));


/*
10.09
compare version numbers

*/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// var compareVersion = function(version1, version2) {
    
// };

//console.log('compareVersion', compareVersion('0.1', '1.1'))

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

  //console.log('output', output);
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

// var rob = function(nums) {
//   return helper(nums, nums.length - 1);
// }
// var helper = function(nums, i) {
//   if (i < 0) return 0;
//   return Math.max(helper(nums, i-2) + nums[i], helper(nums, i-1));
// }

// console.log('rob', rob([1,2,3,1]));
// console.log('rob', rob([2,7,9,3,1]))
// console.log('rob', rob([1,1,1,1,1]))
// console.log('rob', rob([1, 2]))
// console.log('rob', rob([2,1,1,2]))

// best stock 2
// robot follow up

// var sequentialDigits = function(low, high) {
//   let output = [];

//   helper2(low, high, 1, output);
//   console.log('output', output)
//   return output;  
// };

// function helper2(low, high, start, res) {
//   if (num <= high) {

//   }
//   let n1 = low.length;
//   for (let i = start; i <= 9; i++) {
    
    
//   }
  
// }
/*
constraints
tipps you can generate all numbers

need to learn practical js
git
DOM event
rxjs (in angular)
build interface
system design: how to build google analytics
build projects from scratch
sql
rest 
*/
var sequentialDigits = function(low, high) {
  let allNumbers = [
    12,23,34,45,56,67,78,89,
    123,234,345,456,567,678,789,
    1234,2345,3456,4567,5678,6789,
    12345,23456,34567,45678,56789,
    123456,234567,345678,456789,
                         1234567,2345678,3456789,
                         12345678,23456789,
                         123456789
  ];

  let list = [];
  const n = allNumbers.length;
  for (let i = 0; i < n; i++) {
    if (allNumbers[i] >= low && allNumbers[i] <= high) {
      list.push(allNumbers[i]);
    }
  }
  return list;
}
// console.log('sequentialDigits', sequentialDigits(100, 300))
// console.log('sequentialDigits', sequentialDigits(100, 1300))

/*
you need to output the total time that Ashe is in poisoned condition.
Since the poisoned status won't add up together
though the second poisoning attack will still work at time point 2, it will stop 
at the end of time point 3

not greedy not dp
intervals
merge intervals

doesn't deserve medium
*/

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let total = 0
  const [start, end] = timeSeries;
  return total;
};
// console.log('findPoisonedDuration', findPoisonedDuration([1,4], 2));
// console.log('findPoisonedDuration', findPoisonedDuration([1,2], 2));


/*
todo
Thus, it is a directed weighted graph.
*/


/*

713 Subarray Product Less Than K
Your are given an array of positive integers nums.

Count and print the number of (contiguous) subarrays where the product of all 
the elements in the subarray is less than k.

Example 1:
Input: nums = [10, 5, 2, 6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are: 
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
Note that [10, 5, 2] is not included as the product of 100 is not strictly less 
than k.

Note:
0 < nums.length <= 50000.
0 < nums[i] < 1000.
0 <= k < 10^6.

Hint
For each j, let opt(j) be the smallest i so that nums[i] * nums[i+1] * ... * nums[j] 
is less than k. opt is an increasing function.
*/

/*
Brute force
time limit exceed

is this 
https://leetcode.com/problems/subarray-product-less-than-k/discuss/868946/C%2B%2B-Python-Explained-oror-Sliding-Windows-Problem-oror-Brute-Force-oror-Faster-than-96
correct
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
*/
var numSubarrayProductLessThanK1 = function(nums, k) {
  let count = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    let product = nums[i];
    if (nums[i] < k) count++;

    for (let j = i+1; j < n; j++) {
      product *= nums[i];
      if (product >= k) break;
      else count++;
    }
  }

  return count;
}


//console.log('product', numSubarrayProductLessThanK1([10, 5, 2, 6], 100));

/*

class Solution {
public:
    int numSubarrayProductLessThanK(vector<int>& nums, int k) {
        int count = 0;
        int n = nums.size();
        int start = 0, end = 0;
        int product = 1;
        while(end < n){
            product *= nums[end];
            while( start < n and product >= k){	    	//If  product is greater than K value then divide the value at 
                product /= nums[start];                 //the START index from the "nums" array and then increment the start value 
                start++;
            }
            if(product < k) count += end - start + 1;	// If product is less than K value then increase COUNT value

            end++;
        }
        return count;
    }
};
*/


// 2 pointers or sliding window
// slow fast 
/*
1 The idea is always keep an max-product-window less than K;

2 Every time shift window by adding a new number on the right(j), if the product 
is greater than k, then try to reduce numbers on the left(i), until the subarray 
product fit less than k again, (subarray could be empty);
Each step introduces x new subarrays, where x is the size of the current window (j + 1 - i);
example:
for window (5, 2), when 6 is introduced, it add 3 new subarray: (5, (2, (6)))
        (6)
     (2, 6)
  (5, 2, 6)

  I think the trickiest part is why the number of newly introduced subarrays is j - i + 1.
Say now we have {1,2,3} and add {4} into it. Apparently, the new subarray introduced here are:
{1,2,3,4}, {2,3,4}, {3,4}, {4}, which is the number of elements in the new list.
If we also remove some at the left, say we we remove 1, then subarrays are:
{2,3,4}, {3,4}, {4}. It is easy to get the result is j - i + 1.

I was SO close to solving this via sliding window, but couldn't come up with ans += right - left + 1....

For those who are confused, let's use the example nums = [10,5,2,6]:

If we start at the 0th index, [10,5,2,6], the number of intervals is obviously 1.
If we move to the 1st index, the window is now [10,5,2,6]. The new intervals created are [5] and [10,5], so we add 2.
Now, expand the window to the 2nd index: [10,5,2,6]. The new intervals are [2], [5,2], and [10,5,2], so we add 3.
The pattern should be obvious by now; we add right - left + 1 to the output variable every loop!

Thus O(n) (+ alpha for computation)
i is incremented by 1 everytime enter the while loop, so the while loop takes at most O(n) time, time complexity is O(n) for the for loop and O(n) for the while loop, i.e. O(n) totally.


Initialize start and end to index 0. Initialize prod to 1. Iterate end from 0 to len(nums)-1. Now if prod * nums[end] is less than k, then all subarray between start and end contribute to the solution. Since we are moving from left to right, we would have already counted all valid subarrays from start to end-1. How many new subarrays with nums[end]? Answer: end-start+1. What will be the updated prod? Answer: prod * nums[end].
What if prod * nums[end] >= k? We need to contract the subarray by advancing start until we get a valid solution again. Now what do we do when start > end? Answer: prod=1.
Special case: k=0.
Time is O(N) and space is O(1).
Issue: Overflow with multiplication.

Input: nums = [10, 5, 2, 6], k = 100

======== (End for loop, r = 0 snapshot) =============
[10, 5, 2, 6]
  r
  l
prod = 10
cnt += 1


======== (End for loop, r = 1 snapshot) =============
[10, 5, 2, 6]
     r
  l
prod = 50
cnt += 2


======== (r = 2, prod >= k snapshot) ================
[10, 5, 2, 6]
        r
  l  
prod = 100, >= k, 
keep moving l till < k


======== (End for loop, r = 2 snapshot) =============
[10, 5, 2, 6]
        r
     l  
prod = 10
cnt += 2


======== (End for loop, r = 3 snapshot) =============
[10, 5, 2, 6]
           r
     l  
prod = 60	 
cnt += 3

Complexity Analysis

Time Complexity: O(N)O(N), where NN is the length of nums. left can only be incremented at most N times.

Space Complexity: O(1)O(1), the space used by prod, left, and ans.
*/
var numSubarrayProductLessThanK = function(nums, k) {
  const n = nums.length;
  if (n === 0) return 0;
  if (k === 0) return 0;
  //console.log('nums', nums);

  let count = 0;
  let product = 1;
  for (let i = 0, j=0; j < n; j++) {
    product *= nums[j];
    //try to make the subarray valid by removing the left elements from i
    while (product >= k && i <= j) {
      product /= nums[i];
      i++
    }
    //now the length of valid subarray is j - i + 1,and since the array have only positive numbers
     //All subarrays with length 1 ~ j - i + 1 ending with nums[j] are valid,and there are j - i + 1 of them.
    count += j - i +1;
  }
  return count;
}

/*
class Solution {
    public int numSubarrayProductLessThanK(int[] nums, int k) {
        int n = nums.length;
        long p = 1l;
        int i = 0;
        int j = 0;
        int total = 0;
        while(j < n){
            p *= nums[j];
            while(i <= j&&p >= k){
                p /= nums[i];
                i++;
            }
            total += (j - i + 1);
            j++;
        }
        return total;
    }
}
*/

//console.log('numSubarrayProductLessThanK', numSubarrayProductLessThanK([1, 2], 1));
//console.log('numSubarrayProductLessThanK', numSubarrayProductLessThanK([3, 1, 1], 2));
//console.log('numSubarrayProductLessThanK', numSubarrayProductLessThanK([10, 5, 2, 6], 100));
//console.log('numSubarrayProductLessThanK', numSubarrayProductLessThanK([1, 5, 2], 1));

/*
word break
https://www.youtube.com/watch?v=WepWFGxiwRs
https://leetcode.com/problems/word-break/discuss/169383/The-Time-Complexity-of-The-Brute-Force-Method-Should-Be-O(2n)-and-Prove-It-Below

// word break ii
// https://leetcode.com/problems/word-break-ii/discuss/739854/JavaScript-Easy-Solution

https://leetcode.com/problems/word-break/discuss/43890/Javascript-DP-beats-91-Golang-DP-3ms

Leetocode
139 Word break

Given a non-empty string s and a dictionary wordDict containing a list of
non-empty words, determine if s can be segmented into a space-separated sequence
of one or more dictionary words.

Note:
The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

Example 1:
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:
Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

Example 3:
Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false

*/


/*
Approach

s = I a m a c e
wordDict = [I, am, ace, a]

length = 1
length = 2

String="iamace" Words=[i, am, ace]
1) take array of length of the string+1 and first cell is empty string.
2) take first character check in Words it's there or not.
    If yes empty string in the cell.
    If no that character plus previous cell string and keep in the cell.
3) if not empty string in cell check any word in Words is matching with it or 
not if match empty string in cell or keep as it is.
4) continue for rest character.
5) in the last cell if it's empty then successful else not.
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  if (!wordDict || wordDict.length == 0) return false
  var dp = new Array(s.length + 1);
  dp.fill(false)
  dp[0] = true
  
  for(var i = 1; i <= s.length; i++) {
      for(var j = 0; j < i; j++) {
          if(dp[j] && wordDict.indexOf(s.substring(j, i)) >= 0) {
              
              dp[i] = true
              break;
          }
      }
  }
  return dp[s.length]
};

// console.log('wordBreak', wordBreak('leetcode', ["leet", "code"]))
// console.log('wordBreak', wordBreak('leetcode', ["leet", "code"]))
// console.log('wordBreak', wordBreak('applepenapple', ["apple", "pen"]));

/*
check 560
check 523
*/

/*
design questions separate
Recent Counter

int ping(int t) Adds a new request at time t, where t represents some time in 
milliseconds, and returns the number of requests that has happened in the past 
3000 milliseconds (including the new request). Specifically, return the number 
of requests that have happened in the inclusive range [t - 3000, t].

...
It is guaranteed that every call to ping uses a strictly larger value of t than the previous call

example
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3

Queue

*/

/*
This problem is practical, which can test one's basic knowledge about the data structure and algorithm.

First of all, let us clarify the problem a bit. We are given a sequence of ping calls, i.e. [t_1, t_2, t_3, ... t_n][t 
1
​	
 ,t 
2
​	
 ,t 
3
​	
 ,...t 
n
​	
 ], ordered by the chronological order of their arrival time.

check solution

Then the ping(t) function can be implemented in two steps:

Step 1): we append the current ping call to the tail of the sliding window.

Step 2): starting from the head of the sliding window, we remove the outdated 
calls, until we come across a still valid ping call.

https://leetcode.com/problems/number-of-recent-calls/discuss/204560/Confused
i just dont understand a problem at all
https://leetcode.com/problems/number-of-recent-calls/discuss/322357/Javascript-detailed-explanation-beats-99.76-O(1)-time-O(n)-space
solution
*/
var RecentCounter = function() {
  // RecentCounter() Initializes the counter with zero recent requests.
  this.counter = 0;
  this.requests = 0;
  this.numberOfRequests = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.counter++;
  this.numberOfRequests += t;
  this.requests = [t - 3000, t];
  return this.counter
};

let recentCounter = new RecentCounter();
recentCounter.ping(1);
recentCounter.ping(100);
recentCounter.ping(3000);
//console.log('recentCounter', recentCounter);
//console.log('recentCounter', recentCounter.ping(100));


/*
permutation
*/
var findPairs = function(nums, k) {
  const n = nums.length;
  let res = [];
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let pair = [nums[i], nums[j]]
      //let diff = Math.abs(nums[i] - nums[j]);
      //res.push(diff)
      res.push(pair)
      //if (diff === k) count++;
    };
  }

  res.map((item, index) => {
    const diff = Math.abs(item[0] - item[1]);
    if (diff === k) count++;
  })

  console.log('res', res)
  //console.log('pair', pair)
  console.log(count)
  return count
};

// var permutations = function(nums) {
//   if (nums.length === 1) return nums;
//   let output = [];
//   helper(nums, 0, output);
//   return output;
// }

// console.log('findPairs', findPairs([3,1,4,1,5], 2));
// console.log('findPairs', findPairs([1,2,3,4,5], 1));

// https://stackoverflow.com/questions/22566379/how-to-get-all-pairs-of-array-javascript
// const pairsOfArray = array => (
//   array.reduce((acc, val, i1) => [
//     ...acc,
//     ...new Array(array.length - 1 - i1).fill(0)
//       .map((v, i2) => ([array[i1], array[i1 + 1 + i2]]))
//   ], [])
// ) 

// const pairs = pairsOfArray(['a', 'b', 'c', 'd', 'e'])
// console.log(pairs)

/*
449. Serialize and Deserialize BST

traversal root left right
preorder traversal <root><left><right>

todo add what serialize mean
Serialization / deserialization
In computing, serialization (US spelling) or serialisation (UK spelling) is the process of translating a data structure or object state into a format (is converting a data structure or object into a sequence of bits) that can be stored (for example, in a file or memory data buffer) or transmitted (for example, across a computer network) and reconstructed later (possibly in a different computer environment). When the resulting series of bits is reread according to the serialization format, it can be used to create a semantically identical clone of the original object. 
The opposite operation, extracting a data structure from a series of bytes, is deserialization.

JSON.parse(text [, reviver]) method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.

JSON.stringify(value) converts a JS obj pr value to a JSON string.

DFS repeat algorithm (educative espresso)
I find preorder traversal the easiest to implement iteratively.
You can just reuse the dfs algorithm, but make sure you push the children onto
the stack in such a way that the left child is processed before
the right child.

Intuition
1 visit root
2 visit left sub-tree (visit all nodes left)
3 visit right sub-tree (visit all nodes right)

Algorithm
1 Create an empty stack, push root node to the stack
2 Do following while stack is not empty:
  2.1 pop an item from the stack and push it to stack ??? check
  2.2 push the right child of popped item to stack.
  2.3 push the left child of popped item to stack.

Complexity


serialize and deserialize BT 
https://leetcode.com/problems/serialize-and-deserialize-bst/discuss/201547/Easy-to-Understand-Javascript-Solution-84ms-beats-91


*/
//Definition for a binary tree node.
// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }  

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize1 = function(root) {
  let res = [];
  if (root === null) return res;

  let stack = [];

  if (root !== null) {
    stack.push(root);
  }

  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return res.join('');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize2 = function(data) {
  data = data.split('');
  console.log(data);

  // create a tree on the  top of it
};

/*
approach My serialized list takes the form of:
[root, <elements smaller than root>, <elements bigger than root>] and this is true recursively. I cheated a little bit by using JSON.stringify and JSON.parse but the general idea is there.
*/
var serialize = function(root) {
  function traverse(node) {
    if (!node) return [];
    return [node.val].concat(traverse(node.right), traverse(node.left));
  }
  const stringify = traverse(root);
  console.log(typeof stringify)
  console.log(typeof JSON.stringify(stringify))
  return JSON.stringify(stringify);
}

var deserialize = function(data) {
  function construct(arr) {
    if (!arr.length) {
        return null;
    }
    const root = new TreeNode(arr[0]);
    root.left = construct(arr.filter(num => num < root.val));
    root.right = construct(arr.filter(num => num > root.val));
    return root;
  }
  return construct(JSON.parse(data));
};

// root = [2,1,3]
let root4 = new TreeNode(2);
root4.left = new TreeNode(1);
root4.left.left = new TreeNode(3);
//console.log('root', root4);


//console.log('twoOperations', twoOperations(root4));
//console.log('serialize', serialize(root4));

// Your functions will be called as such:
//const twoOperations = deserialize('123');
//console.log('deserialize', deserialize('[1,2,3]'));
//deserialize(serialize(root));


/*
min number of ballons

d = 2r
Given an array points where points[i] = [xstart, xend], return the minimum number of arrows that must be shot to burst all balloons.

is it interval problem or not
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
// wrong solution
var findMinArrowShots1 = function(points) {
  points = points.sort((a,b) => a[0] - b[0]);
  //console.log('points', points);

  let intervals = [];
  intervals.push(points[0]);
  const lastInterval = intervals[intervals.length - 1];

  let shoot = 1;

  for (const point of points.slice(1)) {
    const [start, end] = point;
    console.log('start', start);
    console.log('end', end);
    if (lastInterval[1] < start) shoot++;
    else {
      lastInterval[1] = Math.min(lastInterval[1], end);
      lastInterval[0] = Math.min(lastInterval[0], start);
    }
    //console.log('lastInterval', lastInterval);
  }

  return shoot;
};

/*
We know that eventually we have to shoot down every balloon, so for each ballon there must be an arrow whose position is between balloon[0] and balloon[1] inclusively. Given that, we can sort the array of balloons by their ending position. Then we make sure that while we take care of each balloon in order, we can shoot as many following balloons as possible.

So what position should we pick each time? We should shoot as to the right as possible, because since balloons are sorted, this gives you the best chance to take down more balloons. Therefore the position should always be balloon[i][1] for the ith balloon.

This is exactly what I do in the for loop: check how many balloons I can shoot down with one shot aiming at the ending position of the current balloon. Then I skip all these balloons and start again from the next one (or the leftmost remaining one) that needs another arrow.

Example:

balloons = [[7,10], [1,5], [3,6], [2,4], [1,4]]
After sorting, it becomes:

balloons = [[2,4], [1,4], [1,5], [3,6], [7,10]]
So first of all, we shoot at position 4, we go through the array and see that all first 4 balloons can be taken care of by this single shot. Then we need another shot for one last balloon. So the result should be 2.



BTW here are the questions that can be solved with the same technique

56 Merge Intervals <- very similar😈
435 Non-overlapping Intervals <- very similar😈
252 Meeting Rooms
253 Meeting Rooms II

https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/discuss/889144/JavaScript-Clean-Solution
https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/discuss/93703/Share-my-explained-Greedy-solution
*/
var findMinArrowShots = function(points) {
  //debugger
  if (points.length === 0) return 0;
  points = points.sort((a,b) => a[1] - b[1]);
  //console.log('points', points);

  let arrowPos = points[0][1];
  //console.log('arrowPos', arrowPos);
  let shoot = 1;

  for (let i = 1; i < points.length; i++) {
    if (arrowPos >= points[i][0]) {
      continue;
    }
    shoot++;
    arrowPos = points[i][1];
  }

  return shoot;
};

//console.log('ArrowShots', findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]));
//console.log('ArrowShots2', findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]));
//console.log('ArrowShots2', findMinArrowShots([[-2147483646,-2147483645],[2147483646,2147483647]]));


/*
Leetcode
316 Remove duplicate letters
medium

Given a string s, remove duplicate letters so that every letter appears once and 
only once. You must make sure your result is the smallest in lexicographical 
order among all possible results.

check 1081

hint1
Greedily try to add one missing character. How to check if adding some character 
will not cause problems ? Use bit-masks to check whether you will be able to 
complete the sub-sequence if you add the character at some index i.

greedy approach?
x^x = 0
https://leetcode.com/problems/remove-duplicate-letters/discuss/76768/A-short-O(n)-recursive-greedy-solution
for (let i = 0; i < n; i++) {
  count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
}
see comment great approach, here is mine Java iterative version:

use stack
https://leetcode.com/problems/remove-duplicate-letters/discuss/76769/Java-solution-using-Stack-with-comments

https://leetcode.com/problems/remove-duplicate-letters/discuss/76767/C%2B%2B-simple-solution-easy-understanding

js
https://leetcode.com/problems/remove-duplicate-letters/discuss/890096/JavaScript-solution-explained-97-speed

https://www.educative.io/courses/simplifying-javascript-handy-guide
on the Pragmatic Programmers book
gmat problem solving
master sliding window patters
*/
/**
 * @param {string} s
 * @return {string}
 */
// var removeDuplicateLetters = function(s) {
//   const n = s.length;
//   if (n < 2) return s;
//   let count = new Array(26).fill(0);
//   let used = new Array(26);

//   // Count all letters in s by ASCII code offset from a's code = 97
//   for (let i = 0; i < n; i++) {
//     count[s.charCodeAt(i) - 97]++;
//   }

//   let res = [];
//   for (let i = 0; i < n; i++) {
//     const letter = s.charCodeAt(i) - 97;   //Iterating over all letters in string, reduce count
//     count[letter]--;
//     if (!used[letter]) {
//       while ( res.length > 0 && 
//         res[res.length - 1].charCodeAt(0) - 97 > letter && 
//         count[res[res.length - 1].charCodeAt(0) - 97] > 0 
//       ) {
//           used[res[res.length - 1].charCodeAt(0) - 97] = false;
//           res.pop();
//       }
//       res.push(s[i]);  
//     }
//     used[letter] = true;
//   }

//   return res.join('')
// };

//console.log('removeDuplicateLetters', removeDuplicateLetters('bcabc'));
//console.log('removeDuplicateLetters', removeDuplicateLetters('cbacdcbc'));

/*
https://leetcode.com/problems/buddy-strings/discuss/141838/Javascript-straightforward
*/

// var buddyStrings = function(A, B) {
//   if (A.length === 0 || B.length === 0) return false;
//   let B1 = B.split('').reverse().join('');
//   console.log(B1);
//   if (B1 === A) return true;
//   return false
    
// };
// console.log('buddyStrings', buddyStrings('ab', 'ba'));
// console.log('buddyStrings', buddyStrings('ab', 'ab'));
// console.log('buddyStrings', buddyStrings('aa', 'aa'));
// console.log('buddyStrings', buddyStrings('aaaaaaabc', 'aaaaaaacb'));
// console.log('buddyStrings', buddyStrings('', 'aa'));



/*

Hint 1
The easiest solution would use additional memory and that is perfectly fine.

hint 2
The actual trick comes when trying to solve this problem without using any 
additional memory. This means you need to use the original array somehow to 
move the elements around. Now, we can place each element in its original 
location and shift all the elements around it to adjust as that would be too 
costly and most likely will time out on larger input arrays.
*/

/*
Approach iterative
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (k == 0) return nums; 
  while (k > 0) {
    let lastElement = nums[nums.length - 1];
    nums.unshift(lastElement);
    nums.pop();
    k--;
  }
  //console.log('nums', nums);
  return nums;
};

// console.log('rotate', rotate([1,2,3,4,5,6,7], 3))
// console.log('rotate', rotate([-1,-100,3,99], 2))

/*
Store last element, right shift the array and make that last element to be the 
first element of list.
*/
function rightRotate(arr, n) {
  return (arr.splice(arr.length - n)).concat(arr.splice(0, arr.length));
}
// console.log('rotate', rightRotate([1,2,3,4,5,6,7], 3))
// console.log('rotate', rightRotate([-1,-100,3,99], 2))

/*
binary search?

matrix properties
Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left)/2);
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
} 

var searchMatrix = function(matrix, target) {
  if (matrix.length < 1) return false;
  const rows = matrix.length;
  const cols = matrix[0].length;
  if (rows < 1 || cols < 1) return false;

  let index;
  debugger
  for (let i = 0; i < rows; i++) {
    let lastElementInRow = matrix[i][cols-1];
    console.log('lastElementInRow', lastElementInRow);
    let row = matrix[i];
    console.log('row', row)
    if (target <= lastElementInRow) {
      index = binarySearch(row, target);
      console.log('index', index);
      if (index != -1) {
        return true;
      }
    } else continue
  }

  return false;
};


const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]]
// console.log('searchMatrix', searchMatrix(matrix, 3));
// console.log('searchMatrix', searchMatrix(matrix, 10));
// console.log('searchMatrix', searchMatrix(matrix, 13));
// console.log('searchMatrix', searchMatrix([], 0));
// console.log('searchMatrix', searchMatrix([[1]], 0));
// console.log('searchMatrix', searchMatrix([[1]], 1));
// console.log('searchMatrix', searchMatrix([[1,2]], 1));
// console.log('searchMatrix', searchMatrix([[1,2]], 2));
// console.log('searchMatrix', searchMatrix([[1,2]], 3));

/*
https://leetcode.com/problems/repeated-dna-sequences/discuss/206968/javascript
*/
var findRepeatedDnaSequences = function(s) {
  let res = [];
  //s = s.match(/.{1,10}/g);
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    
    
  }
  // move to regex patterns
  console.log('s', s);
};
console.log('findRepeatedDnaSequences', findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));


/*
find all subarrays
check sign

brute force
https://leetcode.com/problems/asteroid-collision/discuss/374043/Java-or-Full-thought-process-or-Brute-force-to-100-beat-or-Various-solutions

overall, there are totally 4 scenarios will happen: 1.+ + 2.- - 3.+ - 4.- +
when collision happens: only 3 which is + -
use a stack to keep track of the previous and compare current value with previous ones

https://leetcode.com/problems/asteroid-collision/discuss/109694/JavaC%2B%2B-Clean-Code
use stack
If someone wants a JavaScript solution: (here I make use of a 'blasted' boolean, just to think more naturally about the solution and keep it inline with other such Stack related problems.
var asteroidCollision = function(asteroids) {
    const stack = [];

    if (!asteroids || asteroids.length < 1) return stack;

    for (let i = 0; i < asteroids.length; i++) {
        if (asteroids[i] < 0) {
            const absoluteValue = Math.abs(asteroids[i]);

            let blasted = false;
            while (stack.length > 0 && stack[stack.length - 1] > 0 && stack[stack.length - 1] <= absoluteValue) {
                if (stack.pop() === absoluteValue) {
                    blasted = true;
                    break;
                }
            }

            if (!blasted && (stack.length === 0 || stack[stack.length - 1] < 0)) {
                stack.push(asteroids[i]);
            }
        } else {
            stack.push(asteroids[i]);
        }
    }

    return stack;
};
*/
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const n = asteroids.length;
  let res = [];

  for (let i = 0; i < n - 2 + 1; i++) {
    console.log(asteroids[i]);
    let pair = []
    for (let j = i; j < i+2; j++) {
      console.log('j',asteroids[j]);
      pair.push(asteroids[j]);
    }
    console.log('pair', pair);
    res.push(pair)
  }

  // 
  return res;
};

//console.log('asteroidCollision', asteroidCollision([5,10,-5]));

/*
132 Pattern

i < j < k
nums[i] < nums[k] < nums[j]
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    if (nums[i] >= nums[i+1]) continue;

    for (let j = i+1; j <= n - 1 ; j++) {
      if (nums[j] <= nums[j+1]) continue;

      for (let k = j+1; k < n; k++) {    
        if (nums[k] >= nums[j] || nums[k] <= nums[i]) {
          continue
        }
        return true;
      }
      console.log('i', i);
      console.log('j', j);
      i = j;
      break;

    };
  }

  return false;
};
// console.log('find132pattern', find132pattern([1,2,3,4]));
// console.log('find132pattern', find132pattern([3,1,4,2]));

/*
Bag of tokens
https://leetcode.com/problems/bag-of-tokens/discuss/908434/Heavily-commented-JavaScript-Solution
*/


export {
  largestTimeFromDigits,
  containsNearbyAlmostDuplicate,
  partitionLabels,
  wordPattern
}
