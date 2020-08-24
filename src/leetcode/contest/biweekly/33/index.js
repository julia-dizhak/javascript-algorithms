/*
contest 33
22.08.2020

Problem 1
1556 https://leetcode.com/problems/thousand-separator/


solved 1 from 4

rank 7332 / 11366
*/


/*
I don't understand condition
Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an
array edges where edges[i] = [fromi, toi] represents a directed edge from node
fromi to node toi.

Find the smallest set of vertices from which all nodes in the graph are reachable.
It's guaranteed that a unique solution exists.

Notice that you can return the vertices in any order.

given acyclic - Given a directed acyclic graph
2 example is acyclic?

https://leetcode.com/discuss/interview-question/124861/digraph-cover-all-vertices-with-the-least-number-of-vertices
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
  let output = [];

  let queue = [];
  queue.push([0]);

  // while (queue.length) {
  //   let path = queue.shift();
  //   debugger

  // }



  return output

};

/*
https://leetcode.com/discuss/interview-question/124861/digraph-cover-all-vertices-with-the-least-number-of-vertices
*/

console.log('findSmallestSetOfVertices', findSmallestSetOfVertices(6, [[0,1],[0,2],[2,5],[3,4],[4,2]]))

/*
task 3
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

function modify(arr, op, idx) {
  if (op === 0) {
    arr[idx] = arr[idx] + 1;
  }

  //
}

var minOperations = function(nums) {

};

//console.log('minOperations', minOperations([1,5]))

export {

}
