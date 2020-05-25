/**
 * Leetcode javascript
 * 383 Ransom note
 * easy
 *
 * Given an arbitrary ransom note string and another string containing letters from all the magazines,
 * write a function that will return true if the ransom note can be constructed from the magazines;
 * otherwise, it will return false.
 *
 * Each letter in the magazine string can only be used once in your ransom note.
 *
 * Note:
 * You may assume that both strings contain only lowercase letters.
*/
var canConstruct = function(ransomNote, magazine) {
  const len1 = magazine.length;
  const len2 = ransomNote.length;
  const hash = {};

  // you don't need to split the strings into an array of characters. Array notation works fine on strings, as Javascript stores strings as a list of characters anyways.
  for (let i = 0; i < len1; i++) {
    const char = magazine[i];
    hash[char] = (hash[char] || 0) + 1;
  }

  for (let j = 0; j < len2; j++) {
    hash[ransomNote[j]] = (hash[ransomNote[j]] || 0) - 1;
    if (hash[ransomNote[j]] < 0) {
      return false
    }
  }

  return true
}

// to check
var canConstruct1 = function(ransomNote, magazine) {
  if ( ransomNote.length > magazine.length ) return false;
  const oldMagazineLength = magazine.length;
  ransomNote.split('').forEach(item => {
      magazine = magazine.replace(item, '');
  });
  return oldMagazineLength == magazine.length + ransomNote;
};

// Microsoft | OA 2019 | String Without 3 Identical Consecutive Letters
// microsoft
//Write a function solution that, given a string S of N lowercase English letters,
// returns a string with no instances of three identical consecutive letters,
// obtained from S by deleting the minimum possible number of letters
// Examples: Given S = “eedaaad” , the function should return “eedaad” .
// One occurrence of letter a is deleted.

var noThreeIdenticalLetters = function(s) {
  const letters = {};

  for (const letter of s) {
    letters[letter] = (letters[letter] || 0) + 1
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (letters[char] >= 3) {
      const firstIndex = s.indexOf(char);
      const lastIndex = i;
      const substr = s.substring(firstIndex, lastIndex+1);
      const substr1 = substr.slice(0,2);
      console.log('substr', substr)
      console.log('substr1', substr1)
      // return begin str + cutted + end
      // console.log('index', i);
      // console.log('char', char);

    }
  }

  // s.slice(firstIndex, firstIndex + 2)
  // s.substring(firstIndex, 5+1)
  console.log('letters', letters)

  return s
}

//console.log(noThreeIdenticalLetters('eedaaad'))
//given S=“uuuuxaaaaxuuu” the function should return “uuxaaxuu”

/**
 * 1232
 * easy
 * Hint 1 If there're only 2 points, return true.
 * 2 Check if all other points lie on the line defined by the first 2 points.
 * 3 Use cross product to check collinearity.
 */

/**
 * @param {number[][]} coordinates
 * @return {boolean}
*/

// var onLine = function() {

// }

// Straight line
// tan
// The point is if we take points p1(x, y), p2(x1, y1), p3(x3, y3), slopes of any two pairs is same then p1, p2, p3 lies on same line.
// slope from p1 and p2 is y - y1 / x - x1
// slope from p2 and p3 is y2 - y1 / x2 - x1
// if these two slopes equal, then p1, p2, p3 lies on same line.

// IF YOU HAVE ANY DOUBTS, FEEL FREE TO ASK
// IF YOU UNDERSTAND, DON'T FORGET TO UPVOTE
/**
 *
 * It is very straight forward. Just compute slope from the first points. If all the points are on the same line, their slope from the first point will be the same. Our point is defined by an array in the formate of [x,y].
 */

var checkStraightLine = function(coordinates) {
  const len = coordinates.length;
  // there are only two points
  if (len === 2) {
    return true
  }

  const x1 = coordinates[0][0],
    y1 = coordinates[0][1],
    x2 = coordinates[1][0],
    y2 = coordinates[1][1],
    k = (y2 - y1) / (x2 - x1);

  for (let i = 2; i < len; i++) {
    let localK = (coordinates[i][1] - y1) / (coordinates[i][0] - x1);
    if (localK !== k) {
      return false
    }
  }

  return true
};

// true case coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
//console.log(checkStraightLine([[1,2],[2,3]]))
//console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]));

checkStraightLine([[1,2],[2,3]])
// checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])
// add for coordiantes 2 solution: with tangens and y = ax+ b, JS, Moore's approach (famous voting algorithm) with comments/explanation

// move to binary search
// 777
// perfect square
/**
 *
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.
 * Note: Do not use any built-in library function such as sqrt.
 *
 *
*/
//1 = 1
//4 = 1 + 3
//n^{2}=1+1+2+2+...+(n-1)+(n-1)+n
// 16 = 4^2
//

// 1 even
// let n = 25
// 25 = 5 * 5
// 100 = 10 * 10 = 2*5 * 2*5
// time O(sqrt n) brute force
// 10
var isPerfectSquare = function(num) {
  for (let i = 1; i < num; i++) {
    if ( i*i < num ) i++
    else {
      if (i*i === num) return true
    }
  }

  return false
};

// efficient
// n = 16
// binary search

// complexity
// let N <= 10^10
// low = 1
// high = 10
// mid = 5
// sqrt n = 10 ^ 2
// log sqrt n = 5
var isPerfectSquareBinarySearch = function(num) {
  let left = 1;
  let right = num;

  while (left <= right) {
    let mid = Math.floor(left + (right - left)/2);
    let square = mid * mid;

    if (square === num) {
      return true
    }
    else if (square < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return false
};


// console.log('isPerfectSquare1', isPerfectSquare(25))
// console.log('isPerfectSquare', isPerfectSquare(24))
// console.log('isPerfectSquareBinarySearch', isPerfectSquareBinarySearch(25))
// console.log('isPerfectSquareBinarySearch', isPerfectSquareBinarySearch(24))

// babolonien method
// The babylonian method to check

// todo move solution from visual code to google doc

/**
 * 540 Single element in sorted array
 * medium
 *
 * You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.
 * Note: Your solution should run in O(log n) time and O(1) space.
 *
 * O(log n)
 */
// move to dictionares
// using binary search other this input
// condition even oder odd part of the array and exclude duplicates
//
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate1 = function(nums) {
  let hash = {};

  for (const num of nums) {
    hash[num] = (hash[num] || 0) + 1;
  }

  for (const key in hash) {
    console.log('key', key)
    if (hash[key] === 1) {
      return key
    }
  }

  //console.log('hash', hash);


  return nums
};

var singleNonDuplicate = function(nums) {
  const len = nums.length;
  let left = 0;
  let right = len - 1; // last index

  while (left <= right) {
    let mid = Math.floor(left + (right - left)/2); // handle overflow if left and right are very large numbers
    //console.log(nums[mid])

    let isEven = (right - mid) % 2 === 0;

    if (nums[mid] === nums[mid-1]) {
      if (isEven) {
        right = mid - 2 // ignore duplicate number
      } else {
        left = mid + 1
      }
    } else if (nums[mid] === nums[mid+1]) {
      if (isEven) {
        left = mid + 2;
      } else {
        right = mid - 1
      }
    } else {
      return nums[mid]
    }
  }

  return nums[left]
};

//console.log(singleNonDuplicate([1,1,2,3,3]));
//console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
// [3,3,7,7,10,11,11]


/**
 * 402 Remove K Digits
 *Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.
 *
 *
 * Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

 *
 * Greedy algorithm
 *
 * explanation
 * Best possible decision on each step.
 * We gonna loop through if we wanna keep the current number or we want to delete it and go with a different number
 * short time pay off
 *
 * stack
 * linear time : loop through N and deletions
 *
*/

/*
  remove first peek
  peeks from left hand side
  remove zero from beginning
  remove previous peeks
  asending order
  stack - remove from top
*/
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
// num is str
var removeKdigits = function(num, k) {
  const stack = [];
  let removed = 0;

  for (const n of num) {
    while (stack.length && n < stack[stack.length - 1] && removed < k) {
      stack.pop();
      removed += 1
    }

    stack.push(n)
  }

  // remove all remaining large numbers
  while (removed < k) {
    stack.pop()
    removed += 1
  }

  // remove all beginning zeros
  while (stack.length && stack[0] === '0') {
    stack.shift()
  }

  console.log(stack.length ? stack.join('') : '0')
  return stack.length ? stack.join('') : '0';
}

// 1129
//console.log(removeKdigits('1432219', 3))


// divide and conquer
/*
maxSubArray for array with n numbers:

If n == 1 : return this single element.

left_sum = maxSubArray for the left subarray, i.e. for the first n/2 numbers (middle element at index (left + right) / 2 always belongs to the left subarray).

right_sum = maxSubArray for the right subarray, i.e. for the last n/2 numbers.

cross_sum = maximum sum of the subarray containing elements from both left and right subarrays and hence crossing the middle element at index (left + right) / 2.
Merge the subproblems solutions, i.e. return max(left_sum, right_sum, cross_sum).

*/
const maxSub = (nums, left, right) => {
  if(left === right)
      return nums[left]
  else if(left > right)
      return Number.NEGATIVE_INFINITY

  let mid = Math.floor((left + right) / 2)
  let lmax = maxSub(nums, left, mid - 1)
  let rmax = maxSub(nums, mid + 1, right)

  let leftExtendMaxSum = 0,
    rightExtendMaxSum = 0;

  for(let i = mid - 1, tempTotal = 0; i >= left; --i)
      leftExtendMaxSum = Math.max(tempTotal += nums[i], leftExtendMaxSum)

  for(let i = mid + 1, tempTotal = 0; i <= right; ++i)
      rightExtendMaxSum = Math.max(tempTotal += nums[i], rightExtendMaxSum)

  //console.log('max', Math.max(leftExtendMaxSum + nums[mid] + rightExtendMaxSum, lmax, rmax))
  return Math.max(leftExtendMaxSum + nums[mid] + rightExtendMaxSum, lmax, rmax)
}

var maxSubArrayDivide = nums => {
  //console.log('maxSum', maxSub(nums, 0, nums.length - 1))
  return maxSub(nums, 0, nums.length - 1);
}

// todo write a test
//maxSubArrayDivide([-2,1,-3,4,-1,2,1,-5,4]);

// approach greedy
/*
The problem to find maximum (or minimum) element (or sum) with a single array as the input is a good candidate to be solved by the greedy approach in linear time. One can find the examples of linear time greedy solutions in our articles of
Super Washing Machines, and Gas Problem.
https://leetcode.com/articles/super-washing-machines/
https://leetcode.com/articles/gas-station/

Pick the locally optimal move at each step, and that will lead to the globally optimal solution.


*/

/* Dynamic programming
Kadans Algorithm
The problem to find sum or maximum or minimum in an entire array or in a fixed-size sliding window
could be solved by the dynamic programming (DP) approach in linear time.


*/


/*

918 Maximum Sum Circular Subarray
Given a circular array C of integers represented by A, find the maximum possible sum of a non-empty subarray of C.

Here, a circular array means the end of the array connects to the beginning of the array.  (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)

Also, a subarray may only include each element of the fixed buffer A at most once.  (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)



to find only one solution

*/
/**
 * @param {number[]} A
 * @return {number}
*/
// Kadane's Algorithm
function maxSubarraySum(arr) {
  let max = arr[0];
  let prevBest = 0;

  for (let n of arr) {
    if (prevBest > 0) prevBest += n
    else prevBest = n

    if (prevBest > max) max = prevBest
  }
  // for (let n of arr) {
  //   if (prevBest > 0) {
  //     prevBest += n
  //   } else if (prevBest > max) {
  //     max = prevBest
  //   } else {
  //     prevBest = n
  //   }
  // }

  return max;
}
var maxSubarraySumCircular = function(A) {
  const linearMax = maxSubarraySum(A);
  const total = A.reduce((acc, cur) => acc + cur);
  // the minumum contigious subarray sum
  const minSubarraySum = maxSubarraySum(A.map(n => n * -1))
  // deducts(removes) the minumum contigious subarray sum from the total;
  const circularMax = total + minSubarraySum;

  // if circularMax is 0, all nums in A are negative, thus return linearMax
  if (circularMax === 0) return linearMax;
  return Math.max(circularMax, linearMax);
}

// Subarray [3] has maximum sum 3
//console.log(maxSubarraySumCircular([2, -1, 2, 0, 1, 3, 4]))
//console.log(maxSubarraySumCircular([-1, 2, 0, 1, 3, 4]))

// class Bubble {
//   constructor() {
//     this.x = 200;
//     this.y = 150
//   }

//   move() {
//     this.x = this.x + random(-5, 5);
//     this.y = this.y + random(-5, 5);
//   }

//   show() {
//     stroke(255);
//     strokeWeight(4);
//     noFill();
//   }
// }

// const bubble = new Bubble();
// console.log('bubble', bubble);

// function setup() {
//   createCanvas(100, 100)
// }
// function draw() {
//   background();
//   bubble1.move();
//   bubble.show()
// }

/**
 *
 * 451
 * medium
 * Given a string, sort it in decreasing order based on the frequency of characters.
 *
 * Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.

 *
 * Important
 * Remember strings are immutable
 * Strings in most programming languages are immutable. This means that once a String is created, we cannot modify it. We can only create a new String
 * check case in JS!!!
 *
 */


/**
 *
 * @param {*} str
 */
var sortCharacterByFrequency = (str) => {
  // make a hush map
  const frequency = {};

  for (let i = 0; i < str.length; i++) {
    frequency[str[i]] = (frequency[str[i]] || 0) + 1
  }

  for (const key in frequency) {
    debugger
  }

  //console.log('frequency', frequency);

}

//console.log(sortCharacterByFrequency('tree')) //'eert'

/**
 * 986. Interval List Intersections
 * https://leetcode.com/problems/interval-list-intersections/discuss/315908/clean-javascript-solution
 */


/**
 * Construct Binary Search Tree from Preorder Traversal
 * 1008
 * medium
 */

// var bstFromPreorder = function(preorder) {
//   let recur = function(lower, upper) {
//       if (preorder[0] < lower || preorder[0] > upper) return null;
//       if (preorder.length == 0) return null;
//       let root = new TreeNode(preorder.shift());
//       root.left = recur(lower, root.val);
//       root.right = recur(root.val, upper);
//       return root;
//   }
//   return recur(-Infinity, Infinity);
// };
export { canConstruct }
