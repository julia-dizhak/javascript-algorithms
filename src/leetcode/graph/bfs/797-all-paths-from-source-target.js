/*
Leetcode
797 All paths from source to target
medium

Given a directed, acyclic graph (there is no cycle) of N nodes. Find all
possible paths from node 0 to node N-1, and return them in any order.

The graph is given as follows: the nodes are 0, 1, ..., graph.length - 1.
graph[i] is a list of all nodes j for which the edge (i, j) exists.

Example:
Input: [[1,2], [3], [3], []]
Output: [[0,1,3],[0,2,3]]

Explanation: The graph looks like this:
0--->1
|    |
v    v
2--->3
There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

Note:
The number of nodes in the graph will be in the range [2, 15].
You can print different paths in any order, but you should keep the order of nodes inside one path.
*/

/*
Approach BFS

1. create a queue
2 push first node to the queue
3 from example our start node is 0, our goal node is length - 1 = 3
4 repeat next steps until queue is not empty
  5 pop from queue [0], check last path if it equal to goal and add to the result
  6 continue BFS from last node.

Time complexity O(n^2 * 2^n), n - number of nodes
2^n - for every single path we could have 2 cases, current node can be in the path,
or it wont be in a path;
n^2 - for loop and concat neighbor

Space O(2^n) - total 2^n path which we can add to the result list
*/
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  let result = [];
  const n = graph.length;
  const goalNode = n - 1;

  let queue = [];
  queue.push([0]);

  while (queue.length) {
    let path = queue.shift();
    const lastNode = path[path.length - 1];

    if (lastNode === goalNode) {
      result.push(path)
    } else {
      const neighbors = graph[lastNode];
      for (const neighbor of neighbors) {
        let list = path.concat(neighbor);
        queue.push(list)
      }
    }
  }

  return result;
};

/*
Approach BFS
*/
var allPathsSourceTargetVariant1 = function(graph) {
  let result = [];
  const n = graph.length;

  let queue = [];
  queue = [[0, [0]]]

  while (queue.length) {
    let [front, list] = queue.shift();
    if (front === n - 1) {
      result.push(list);
      continue
    }

    const next = graph[front];
    next.forEach(item => {
      if (!list.includes(item)) {
        const newList = list.concat([item]);
        queue.push([item , newList])
      }
    })
  }

  return result
};

// console.log('graph', allPathsSourceTarget([[1,2], [3], [3], []]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) {
    return (nums[0] > nums[nums.length - 1]) ? nums[nums.length - 1] : nums[0]
  }

  let i = 0;
  let j = nums.length - 1;

  // case 1 ... nums[mid] < nums[mid+1] && nums[mid] < nums[mid-1]
  //
  while (i < j) {
    let mid = Math.floor(i + (j - i)/2);
    //debugger
    if ( (nums[mid] > nums[mid-1]) && (nums[mid] > nums[mid+1]) ) {
      i = mid + 1
    } else if ( (nums[mid] > nums[mid-1]) && (nums[mid] < nums[mid+1]) ) {
      j = mid - 1
    } else if (nums[mid] < nums[mid+1] && nums[mid] < nums[mid-1]) {
      return nums[mid]
    }
  }
  return nums[i]

};

console.log('findMin', findMin([4,5,6,7,0,1,2]));
console.log('findMin', findMin([3,4,5,1,2]));
console.log('findMin', findMin([2,1]));
console.log('findMid', findMin([2,3,4,5,1]))

export {
  allPathsSourceTarget,
  allPathsSourceTargetVariant1,
  findMin
}
