/*
Leetcode
268 Missing Number
easy

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2

Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8

Note:
Your algorithm should run in linear runtime complexity.
Could you implement it using only constant extra space complexity?
*/

/*
Approach 1: Sorting

If nums were in order, it would be easy to see which number is missing.

First, we sort nums. Then, we check the two special cases that can be handled
in constant time -
ensuring that 0 is at the beginning and that n is at the end.
Given that those assumptions hold, the missing number must somewhere
between (but not including) 0 and n.
To find it, we ensure that the number we expect to be at each index is indeed there.
Because we handled the edge cases, this is simply the previous number plus 1.
Thus, as soon as we find an unexpected number, we can simply return the expected number.

Complexity Analysis

Time complexity : O(nlogn)
The only elements of the algorithm that have asymptotically nonconstant time
complexity are the main for loop (which runs in O(n) time),
and the sort invocation (which runs in O(nlgn) time for Python and Java).
Therefore, the runtime is dominated by sort, and the entire runtime is O(nlgn).

Space complexity : O(1)\O(n)
In the sample code, we sorted nums in place, allowing us to avoid allocating additional space.
If modifying nums is forbidden, we can allocate an O(n) size copy and sort that instead.
*/

var missingNumber = function(nums) {
  nums = nums.sort((a,b) => a - b);

  // ensure that n is at the last index
  if (nums[nums.length - 1] !== nums.length) {
    return nums.length;
  }
  // ensure that 0 is at the first index
  else if (nums[0] !== 0) {
    return 0
  }

  // if we get here, then the missing number is on the range (0, n)
  for (let i = 1; i < nums.length; i++) {
    let expectedNum = nums[i-1] + 1;
    if (nums[i] !== expectedNum) {
      return expectedNum;
    }
  }

  // array was not missing any numbers
  return -1;
};

/*
Approach 4 Gauss' Formula

One of the most well-known stories in mathematics is of a young Gauss,
forced to find the sum of the first 100 natural numbers by a lazy teacher.
Rather than add the numbers by hand, he deduced a closed-form expression for the sum,
or so the story goes. You can see the formula below:
S = n*(n+1)/2

Algorithm

We can compute the sum of nums in linear time, and by Gauss' formula,
we can compute the sum of the first n natural numbers in constant time.
Therefore, the number that is missing is simply the result of Gauss' formula
minus the sum of nums, as nums consists of the first n natural numbers minus some number.

Complexity Analysis
Time complexity : O(n)
Although Gauss' formula can be computed in O(1) time,
summing nums costs us O(n) time, so the algorithm is overall linear.
Because we have no information about which number is missing,
an adversary could always design an input for which any algorithm that examines fewer than n numbers fails. Therefore, this solution is asymptotically optimal.

Space complexity: O(1)
This approach only pushes a few integers around, so it has constant memory usage.
*/

var missingNumberGauss = (nums) => {
  const len = nums.length;
  const expectedSum = len * (len + 1) / 2;

  let actualSum = 0;
  for (let i = 0; i < len; i++) {
    actualSum += nums[i]
  }

  return expectedSum - actualSum;
}

/*
Approach: Hash (close to brute force)

Intuition
A brute force method for solving this problem would be to simply check
for the presence of each number that we expect to be present.
The naive implementation might use a linear scan of the array to check for containment,
but we can use a HashSet to get constant time containment queries and overall linear runtime.

Algorithm
This algorithm is almost identical to the brute force approach,
except we first insert each element of nums into a set,
allowing us to later query for containment in O(1) time.

Complexity Analysis
Time complexity: O(n)
Because the set allows for O(1) containment queries,
the main loop runs in O(n) time. Creating num_set costs O(n) time,
as each set insertion runs in amortized O(1) time, so the overall runtime is O(n + n) = O(n).

Space complexity: \O(n)
nums contains n-1 distinct elements, so it costs O(n) space to store a set containing all of them.
*/
var missingNumberUseHash = (nums) => {
  const len = nums.length;
  const map = {};
  for (const num of nums) {
    map[num] = num
  }

  const expectedNumCount = len + 1;
  for (let number = 0; number < expectedNumCount; number++) {
    if (map[number] === undefined) {
      return number
    }
  }
}

export {
  missingNumber,
  missingNumberGauss,
  missingNumberUseHash
}
