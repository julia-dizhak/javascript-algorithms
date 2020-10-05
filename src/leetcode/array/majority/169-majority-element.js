/*
Leetcode
169 Majority element
medium

Given an array of size n, find the majority element.
The majority element is the element that appears more than ⌊ n/2 ⌋ times.
You may assume that the array is non-empty and the majority element always
exist in the array.

Example 1:
Input: [3,2,3]

Output: 3

Example 2:
Input: [2,2,1,1,1,2,2]
Output: 2
*/

/*
Approach 1 Brute force

The brute force algorithm iterates over the array, and then iterates again for
each number to count its occurrences. As soon as a number is found to have
appeared more than any other can possibly have appeared, return it.

Time complexity: O(n^2)
The brute force algorithm contains two nested for loops that each run for n
iterations, adding up to quadratic time complexity.

Space complexity: O(1)
The brute force solution does not allocate additional space proportional to the
input size.
*/
var majorityElementBruteForce = function(arr) {
  const majorityCount = arr.length/2;

  for (const num of arr) {
    let count = 0;
    for (const elem of arr) {
      if (elem === num) {
        count += 1
      }
    }

    if (count > majorityCount) return num
  }

  return -1
}


/*
Approach 2 Hash Map

Time complexity: O(n)
We iterate over arr once and make a constant time HashMap insertion on each iteration.
Therefore, the algorithm runs in O(n) time.

Space complexity: O(n)
At most, the HashMap can contain n - n/2 associations, so it occupies O(n) space.
This is because an arbitrary array of length n can contain n distinct values,
but arr is guaranteed to contain a majority element, which will occupy (at minimum) n/2 + 1 array indices.
*/
var majorityElement = function(arr) {
  const n = arr.length;
  if (n === 0) return -1;
  if (n === 1) return arr[0];

  const hash = {};

  for (const num of arr) {
    hash[num] = (hash[num] || 0) + 1
  }

  for (const key in hash) {
    if (hash[key] > n/2)  {
      return Number(key)
    }
  }
  return -1;
}

/*
Approach 3 Sorting

Intuition
If the elements are sorted in monotonically increasing (or decreasing) order,
the majority element can be found at index n/2 or n/2 + 1 incidentally, if n is even.

Time complexity: O(nlogn)
Sorting the array costs O(nlogn) time in Python and Java, so it dominates the overall runtime.

Space complexity : O(1) or O(n)
We sorted arr in place here - if that is not allowed, then we must spend linear additional space on a copy of nums and sort the copy instead.
*/
// doesn't work for all cases
var majorityElementSorting = function(arr) {
  const n = arr.length;
  if (n === 0) return -1;
  if (n === 1) return arr[0];

  arr = arr.sort((a, b)=> a - b);
  return arr[Math.floor(arr.length/2)]
}

/*
Approach Randomization

Intuition

Because more than ⌊n/2] array indices are occupied by the majority element, a 
random array index is likely to contain the majority element.

Algorithm

Because a given index is likely to have the majority element, we can just select 
a random index, check whether its value is the majority element, return if it is, 
and repeat if it is not. The algorithm is verifiably correct because we ensure 
that the randomly chosen value is the majority element before ever returning.

Complexity analysis
Time is O(infinite)
It is technically possible for this algorithm to run indefinitely (if we never 
manage to randomly select the majority element), so the worst possible runtime 
is unbounded. However, the expected runtime is far better - linear, in fact. 
For ease of analysis, convince yourself that because the majority element is 
guaranteed to occupy more than half of the array, the expected number of 
iterations will be less than it would be if the element we sought occupied 
exactly half of the array. Therefore, we can calculate the expected number of 
iterations for this modified version of the problem and assert that our version 
is easier.

Space complexity : O(1)
Much like the brute force solution, the randomized approach runs with constant 
additional space.
*/
// min and max included
function randRange(min, max) {
  //return Math.floor(Math.random() * max) + min;
  return Math.floor(Math.random() * (max - min + 1) + min);  
}

function countOccurrences(nums, element) {
  let count = 0;
  for (const num of nums) {
    if (num === element) count++;
  }
  return count;
}

var majorityElementRandomization = function(nums) {
  const n = nums.length;
  const majorityCount = n / 2;

  //console.log('majorityCount', majorityCount)
  
  while (true) {
    let candidate = nums[randRange(0, n)];
    //console.log('candidate', candidate);
    if (countOccurrences(nums, candidate) > majorityCount) return candidate;
  }
}
//console.log('majority', majorityElementRandomization([1,2,1,3,1]));

/*
Approach Divide and Conquer

Intuition

If we know the majority element in the left and right halves of an array, we can 
determine which is the global majority element in linear time.

Algorithm

Here, we apply a classical divide & conquer approach that recurses on the left 
and right halves of an array until an answer can be trivially achieved for a 
length-1 array. Note that because actually passing copies of subarrays costs 
time and space, we instead pass lo and hi indices that describe the relevant 
slice of the overall array. In this case, the majority element for a length-1 
slice is trivially its only element, so the recursion stops there. If the current 
slice is longer than length-1, we must combine the answers for the slice's left 
and right halves. If they agree on the majority element, then the majority 
element for the overall slice is obviously the same[1]. If they disagree, only 
one of them can be "right", so we need to count the occurrences of the left and 
right majority elements to determine which subslice's answer is globally correct. 
The overall answer for the array is thus the majority element between indices 0 and nn.


Time complexity: O(nlgn)
Each recursive call to majority_element_rec performs two recursive calls on subslices 
of size n\2 

Space complexity : O(logn)
Although the divide & conquer does not explicitly allocate any additional memory, 
it uses a non-constant amount of additional memory in stack frames due to recursion. 
Because the algorithm "cuts" the array in half at each level of recursion, it 
follows that there can only be O(lgn) "cuts" before the base case of 1 is reached. 
It follows from this fact that the resulting recursion tree is balanced, and 
therefore all paths from the root to a leaf are of length O(lgn). Because the 
recursion tree is traversed in a depth-first manner, the space complexity is 
therefore equivalent to the length of the longest path, which is, of course, OO(lgn).
*/
function countInRange(nums, num, lo, hi) {
  let count = 0;
  for (let i = lo; i <= hi; i++) {
    if (nums[i] === num) count++;
  }
  return count;
}

var majorityElementDivideConquer = function(nums, lo = 0, hi = nums.length - 1) {
  // base case; the only element in an array of size 1 is the majority element.
  if (lo === hi) return nums[lo];

  // recurse on left and right halves of this slice.
  let mid = Math.floor(lo + (hi -lo)/2);
  let left = majorityElementDivideConquer(nums, lo, mid);
  let right = majorityElementDivideConquer(nums, mid+1, hi);
  
  // if the two halves agree on the majority element, return it.
  if (left === right) return left;
  // otherwise, count each element and return the "winner".
  let leftCount = countInRange(nums, left, lo, hi);
  let rightCount = countInRange(nums, right, lo, hi);

  return leftCount > rightCount ? left : right;
}

// console.log('majority', majorityElementDivideConquer([1,2,1,3,1]));
// console.log('majority', majorityElementDivideConquer([8,8,7,7,7]));

/*
Approach 6 Boyer-Moore Voting algorithm

Intuition
If we had some way of counting instances of the majority element as +1 and
instances of any other element as −1, summing them would make it obvious that
the majority element is indeed the majority element.

To do this, we maintain a count, which is incremented whenever we see an instance
of our current candidate and decremented whenever we see anything else.
Whenever count equals 0, we effectively forget about everything in nums up to
the current index
and consider the current number as the candidate for majority element.

Time complexity: O(n)
Boyer-Moore performs constant work exactly n times, so the algorithm runs in
linear time.

Space complexity: O(1)
Boyer-Moore allocates only constant additional memory.
*/
// doesn't work for case when there is no majority elements
var majorityMooreVoting = function(nums) {
  let count = 0;
  let candidate;

  for (const num of nums) {
    if (count === 0) {
      candidate = num
    }
    count += (num === candidate) ? 1 : -1
  }

  return candidate;
}

export {
  majorityElement,
  majorityElementBruteForce,
  majorityMooreVoting,
  majorityElementSorting,
  majorityElementRandomization,
  majorityElementDivideConquer
}
