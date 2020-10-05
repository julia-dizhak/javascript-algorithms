/*
Leetcode
1288 Remove Covered Intervals
medium

Given a list of intervals, remove all intervals that are covered by another 
interval in the list.

Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.

After doing so, return the number of remaining intervals.

Example 1:
Input: intervals = [[1,4],[3,6],[2,8]]
Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.

Example 2:
Input: intervals = [[1,4],[2,3]]
Output: 1

Example 3:
Input: intervals = [[0,10],[5,12]]
Output: 2

Example 4:
Input: intervals = [[3,10],[4,10],[5,11]]
Output: 2

Example 5:
Input: intervals = [[1,2],[1,4],[3,4]]
Output: 1

Constraints:
1 <= intervals.length <= 1000
intervals[i].length == 2
0 <= intervals[i][0] < intervals[i][1] <= 10^5
All the intervals are unique.

Hint 1
How to check if an interval is covered by another?

Hint 2
Compare each interval to all others and check if it is covered by any interval.

*/

/*
Approach Sort start (left) ascending and end (right) descending

Intuition
Imagine that, after removing all covered intervals,
all intervals must have different bounds,
After sorting, their left and right bound are increasing at the same time.

Test Case
Here are some useful small test cases for debugging.
[[1,2],[1,3]]
[[1,3],[1,8],[5,8]]
[[1,6],[4,6],[4,8]]


Example: [[1,5],[1,4],[1,3],[1,2]]

- sort on left first: sort by starting point and if 2 intervals have the same 
starting point, then sort by ending in decreasing order (otherwise below approach 
will not work)

- When left are same, we sort right in descending order:
because we sort [a,b], [c,d] => c will be always greater or equal to c >= a, 
then we need to check only ending and update it if ending bigger 

time is O(n log n)
space is O(1)
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervalsUseSort = function(intervals) {
  intervals = intervals
    .sort((a,b) => a[0] - b[0])
    .sort((a,b) => {
      if (a[0] === b[0]) return b[1] - a[1]
    });
  //console.log('intervals', intervals);

  let currentEnding = 0; // global ending
  let res = 0;

  for (const interval of intervals) {
    const [start, end] = interval;
    if (end > currentEnding) {
      res++;
      currentEnding = end;
    }
  }

  return res;
}

// the same approach
var removeCoveredIntervalsUseSort2 = function(intervals) {
  let res = 0, right = 0;
  intervals = intervals.sort((a, b) => a[0] != b[0] ? a[0] - b[0] : b[1] - a[1]);
  for (const interval of intervals) {
    if (interval[1] > right) {
      ++res;
      right = interval[1];
    }
  }
  return res;
}

/*
Approach Sort

- Sort the array, and note the previous left and right bound.
- For every interval v, if v[0] > left && v[1] > right,
- It's a new uncovered interval, so we increment ++res.

Complexity: time O(NlogN), space O(1)
*/
var removeCoveredIntervals = function(intervals) {
  let res = 0, 
    left = -1, 
    right = -1;

  intervals = intervals.sort((a, b) => a[0] - b[0]);
  console.log('intervals', intervals)
  for (const interval of intervals) {
    if (interval[0] > left && interval[1] > right) {
      left = interval[0];
      ++res;
    }
    right = Math.max(right, interval[1])
  }
  return res;
}

// approach sort and stack?
// todo https://leetcode.com/problems/remove-covered-intervals/discuss/878196/2-Solutions-or-Easy-to-Understand-or-Sort-and-Count-overlap-intervals

// tests
//console.log('remove', removeCoveredIntervals([[1,4],[3,6],[2,8]]));
//console.log('remove', removeCoveredIntervals([[1,4],[3,9],[2,8],[3,10]]));
//console.log('remove', removeCoveredIntervals([[1,2],[1,3]]));
//console.log('remove', removeCoveredIntervals([[1,2],[1,4],[1,3]]));
//console.log('remove', removeCoveredIntervals([[1,5],[3,6]]));
// console.log('remove', removeCoveredIntervals([[1,4],[2,3]]));
// console.log('remove', removeCoveredIntervals([[3,10],[4,10],[5,11]]));
// console.log('remove', removeCoveredIntervals([[1,2],[1,4],[3,4]]));


export {
  removeCoveredIntervals,
  removeCoveredIntervalsUseSort, removeCoveredIntervalsUseSort2,
}