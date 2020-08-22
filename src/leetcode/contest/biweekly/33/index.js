/*
contest 33
22.08.2020


*/

var test = function() {
  console.log('test contest 3', test)
}

const test1 = test();
console.log('test1', test1)


/*

Given an integer n, add a dot (".") as the thousands separator and return it
in string format.

https://leetcode.com/problems/thousand-separator/
*/

/**
 * @param {number} n
 * @return {string}
*/
var thousandSeparator = function(n) {
  let num = n.toString();
  let count = 0;
  let s = '';

  for (let i = num.length - 1; i >= 0; i--) {

    if (count % 3 === 0 && count !== 0) {
      s = '.' + s;
    }
    s = num.charAt(i) + s;
    count++;
  }

  return s;
};

var thousandSeparator1 = function(n) {
  // n = n.toString();
  // if (n.length <= 3) return n;
  // return n.toLocaleString(undefined, {maximumFractionDigits:3})

  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

//console.log('thousandSeparator', thousandSeparator(987))
console.log('thousandSeparator', thousandSeparator(1234))
//console.log('thousandSeparator', thousandSeparator(123456789))
//console.log('thousandSeparator', thousandSeparator(0))


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
  test
}
