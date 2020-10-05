/*
Leetcode
1288 Remove Covered Intervals
medium

Given a list of intervals, remove all intervals that are covered by another interval in the list.

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
Approach sort

- init overlap 
- current ending so far
- sort by starting point and if 2 intervals have the same starting point, then
sort by ending in decreasing order (otherwise below approach will not work)
- because we sort [a,b], [c,d] => c will be always greater or equal to c >= a, 
then we need to check only ending and update it if ending bigger 

time is O(n log n)
space is O(1)
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
  intervals = intervals
    .sort((a,b) => a[0] - b[0])
    .sort((a,b) => {
      if (a[0] === b[0]) return b[1] - a[1]
    })
  console.log('intervals', intervals);

  let currentEnding = 0; // global ending
  let overlap = 0;

  for (const interval of intervals) {
    const [start, end] = interval;
    if (end > currentEnding) {
      overlap++;
      currentEnding = end;
    }
  }

  return overlap;
}

// tests
//console.log('remove', removeCoveredIntervals([[1,4],[3,6],[2,8]]));
//console.log('remove', removeCoveredIntervals([[1,4],[3,9],[2,8],[3,10]]));
//console.log('remove', removeCoveredIntervals([[1,2],[1,3]]));
console.log('remove', removeCoveredIntervals([[1,2],[1,4],[1,3]]));
// console.log('remove', removeCoveredIntervals([[1,4],[2,3]]));
// console.log('remove', removeCoveredIntervals([[3,10],[4,10],[5,11]]));
// console.log('remove', removeCoveredIntervals([[1,2],[1,4],[3,4]]));

export {
  removeCoveredIntervals
}