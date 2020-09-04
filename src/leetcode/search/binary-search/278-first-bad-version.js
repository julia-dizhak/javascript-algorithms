/*
Leetcode javascript
278. First Bad version
Easy

You are a product manager and currently leading a team to develop a new product.
Unfortunately, the latest version of your product fails the quality check.
Since each version is developed based on the previous version, all the versions after a bad version are also bad.
Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad.
Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example:
Given n = 5, and version = 4 is the first bad version.
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
*/

/*
Approach 1 Linear scan: The straight forward way is to brute force it by doing a linear scan.

Time complexity : O(n). Assume that isBadVersion(version) takes constant time to check if a version is bad.
It takes at most n - 1 checks, therefore the overall time complexity is O(n).
Space complexity : O(1).
*/
var solutionLinearSearch = function(isBadVersion) {
  return function(n) {
    for (let i = 1; i < n; i++) {
      if (isBadVersion(i) === true) {
        return i;
      }
    }
    return n;
  };
};

/*
Approach 2 Binary search
Let us see how the search space could be halved each time below.

Scenario 1
where isBadVersion(mid) => false.
We know that all versions preceding and including mid are all good.
So we set left = mid + 1 to indicate that the new search space is the interval [mid + 1, right] (inclusive).

Scenario 2
The only scenario left is where isBadVersion(mid) => true.
This tells us that mid may or may not be the first bad version,
ut we can tell for sure that all versions after mid can be discarded.
Therefore we set right = mid as the new search space of interval [left,mid] (inclusive).

Case: left + right can overflow
In our case, we indicate left and right as the boundary of our search space (both inclusive).
This is why we initialize left = 1 and right = n.
How about the terminating condition?
We could guess that left and right eventually both meet and it must be the first bad version,
but how could you tell for sure?
Here is a helpful tip to quickly prove the correctness of your binary search algorithm during an interview.
We just need to test an input of size 2.
left + right could overflow
One way to fix this is to use left + (right - left)/2

Time complexity: O(log n). The search space is halved each time.
Space complexity: O(1)
*/

var solutionBinarySearch = function(isBadVersion) {
  return function(n) {
    let left = 1;
    let right = n;

    while (left < right) {
      // left + right could overflow.
      let mid = left + (right - left) / 2;
      if (isBadVersion(mid)) {
        right = mid // new search [left, mid] (inclusive)
      } else {
        left = mid + 1; // search from [mid + 1, right] (inclusive)
      }
    }
  };
};

export { solutionLinearSearch, solutionBinarySearch }
