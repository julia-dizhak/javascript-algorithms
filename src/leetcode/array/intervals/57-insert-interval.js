/*
Leetcode
57 Insert interval
hard

Given a set of non-overlapping intervals, insert a new interval into the intervals 
(merge if necessary).

You may assume that the intervals were initially sorted according to their start 
times.

Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
*/

/*
The solution is not correct
didn't pass all cases
*/
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
*/
var insert1 = function(intervals, newInterval) {
  let output = [];
  if (newInterval === null) {
    return intervals;
  }

  //if (intervals.length < 1) output.push(newInterval);

  for (const interval of intervals) {
    // example[[1,2]] and [3,4]
    if (interval[1] < newInterval[0]) {
      output.push(interval);
    } else if (newInterval[1] < interval[0]) {
      // example[[3,4]] and [1,2]
      output.push(newInterval);
      //newInterval = null;
      output.push(interval);
    } else {
      // overlap situation
      newInterval[0] = Math.min(newInterval[0], interval[0]);
      newInterval[1] = Math.max(newInterval[1], interval[1]);
    }
  }

  if (newInterval === null) return output;
  output.push(newInterval);
  
  return output
};

/*
Approach Iterative

By far the best solution I have seen is of O(n) time. One of the simplest ideas 
is to compare each interval in intervals (intervals[i]) with newInterval and 
then perform respective operations according to their relationships.

If they overlap, merge them to newInterval;
If intervals[i] is to the left of newInterval, push intervals[i] to the result vector;
If newInterval is to the left of intervals[i], push newInterval and all the 
remaining intervals (intervals[i], ..., intervals[n - 1]) to the result vector.

time is O(n)
space is O(1)
*/
var insert = function(intervals, newInterval) {
  let size = intervals.length;
  let index = 0;
  let res = [];
    
  while(index < size && intervals[index][1] < newInterval[0]) {
    res.push(intervals[index]);
    index++;
  }

  // merge all overlapping intervals to one considering newInterval
  while(index < size && intervals[index][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
    index++;
  }

  res.push(newInterval);

  // push newInterval and all the 
  // remaining intervals (intervals[i], ..., intervals[n - 1]) to the result vector.
  while(index < size) {
    res.push(intervals[index]);
    index++;
  }

  return res;
};


// tests
console.log('interval', insert([[2,5],[6,7],[8,9]], [0,1]))
//console.log('interval', insert([], [5,7]))
//console.log('interval', insert([[1,5]], [2,3]))
//console.log('interval', insert([[1,2]], [3,4]))
//console.log('interval', insert([[3,4]], [1,2]))
//console.log('interval', insert([[1,3], [6,9]], [2,5]))
//console.log('interval', insert([[1,3], [6,9]], null))
//console.log('interval', insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))

export {
  insert
}