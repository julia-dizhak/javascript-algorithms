/*
Leetcode
987 Vertical order traversal of BT
medium

Given a binary tree, return the vertical order traversal of its nodes values.

For each node at position (X, Y), its left and right children respectively will
be at positions (X-1, Y-1) and (X+1, Y-1).

Running a vertical line from X = -infinity to X = +infinity, whenever the vertical
line touches some nodes, we report the values of the nodes in order from top to
bottom (decreasing Y coordinates).

If two nodes have the same position, then the value of the node that is reported
first is the value that is smaller.

Return an list of non-empty reports in order of X coordinate.  Every report will
have a list of values of nodes.


Example 1:
Input: [3,9,20,null,null,15,7]
    3
   / \
  9  20
    /  \
   15   7

Output: [[9],[3,15],[20],[7]]
Explanation:
Without loss of generality, we can assume the root node is at position (0, 0):
Then, the node with value 9 occurs at position (-1, -1);
The nodes with values 3 and 15 occur at positions (0, 0) and (0, -2);
The node with value 20 occurs at position (1, -1);
The node with value 7 occurs at position (2, -2).

Example 2:
     1
    / \
  2     3
 /  \  /  \
4   5  6  7

Input: [1,2,3,4,5,6,7]
Output: [[4],[2],[1,5,6],[3],[7]]
Explanation:
The node with value 5 and the node with value 6 have the same position according
to the given scheme.
However, in the report "[1,5,6]", the node value of 5 comes first since 5 is
smaller than 6.

Note:
The tree will have between 1 and 1000 nodes.
Each node's value will be between 0 and 1000.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
*/
class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/*
Approach Queue + HashTable without ordering (doesn't required conditions)

If we do not need to think about ordering, which is described in problem, like

-Running a vertical line from X = -infinity to X = +infinity, in order from top to
bottom (decreasing Y coordinates).

-If two nodes have the same position, then the value of the node that is reported
first is the value that is smaller.

-Return an list of non-empty reports in order of X coordinate

Then we can calculate hd (horizontal distance)

HD assign to each node:
1 for root, hd = 0
2 left child, hd = hd - 1
3 right child, hd = hd + 1
Nodes with the same hd come to the same vertical line.

For example [3,9,20,null,null,15,7]
min distance -1
max distance 2
hd
-1 : 9
0: 3, 15 the same vertical line
1: 20
2: 7

Algorithm BFS(queue) + HashTable
1 enqueue root
2 update hd for root as 0
3 add hd = 0 in HashTable and root as value
4 dequeue and
  - check left and right and update hd in HashTable
  - enqueue the left and the right child

Note: Queue
queue(node) - insert to the front of Queue
dequeue() - return from front
*/
var verticalTraversalWithoutOrder = function(root) {
  if (root === null) return [];

  let queue = [];
  let x = 0; // hd
  let y = 0; // vertical distance
  if (root !== null) queue.push([root,x,y]);

  let list = [];


  while (queue.length) {
    const [node, x, y] = queue.shift();
    if (node.left) queue.push([node.left, x-1, y-1]);
    if (node.right) queue.push([node.right, x+1, y-1]);
    if (node) list.push([node.val, x, y]);
  }

  //console.log('list', list);

  let hash = {};
  // let hashKeys = [];
  // let hashValues = [];
  for (let i = 0; i < list.length; i++) {
    const [val, x, y] = list[i];
    //debugger
    if (hash[x] !== undefined) {
      //debugger
      let values = hash[x].push(val);
      hash[x] = values;
    } else {
      hash[x] = [val]
    }

  }

  console.log('list', list);
  console.log('hash', hash);

  return list;

}

// tests
let root = new TreeNode(3)
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
//console.log('verticalTraversalWithoutOrder', verticalTraversalWithoutOrder(root));

// const compare = (a, b) => {
//   if (a[2] - b[2] === 0 ) {

//     if (a[1] - b[1] === 0) {
//       return a[0] - b[0];
//     }
//   }

//   return a[2] - b[2]
// }

// var verticalTraversal1 = function(root) {
//   if (root === null) return [];

//   let hash = {};
//   let queue = [];

//   // x = 0, y = 0 for root
//   if (root !== null) queue.push([root,0,0]);
//   let list = [];

//   while (queue.length) {
//     const [node, x, y] = queue.shift();
//     //console.log('node', node)
//     if (node.left) {
//       queue.push([node.left, x-1, y-1]);
//     }
//     if (node.right) {
//       queue.push([node.right, x+1, y-1]);
//     }
//     if (node) list.push([node.val, x, y]);
//   }

//   console.log('list', list)
//   list = list.sort(compare);
//   console.log('list', list);

//   // for (let i = 0; i < list.length; i++) {
//   //   const [val, x, y] = list[i];


//   // }

//   const map = new Map();
//   for(let i = 0; i < list.length; i++) {
//     const [value, row, column] = list[i]

//     if (map.has(column)) {
//       map.get(column).push(value)
//     } else {
//       map.set(column, [value]);
//     }
//   }

//   return [...map.values()]

//   //return list;
// }

var verticalTraversal = function(root) {
  if (root == null) {
      return [];
  }

  const queue = [];

  queue.push([root, 0, 0]);
  const list = [];
  while(queue.length > 0) {
      const [node, row, column] = queue.shift();


      if (node) {
          queue.push([node.left, row + 1, column - 1])
          queue.push([node.right, row + 1, column + 1])
          list.push([node.val, row, column]);
      }
  }

const compare = (a, b) => {
  if (a[2] - b[2] === 0 ) {

    if (a[1] - b[1] === 0) {
      return a[0] - b[0];
    }
  }

  return a[2] - b[2]
}

 list.sort(compare)

const map = new Map();
for(let i = 0; i < list.length; i++) {
  const [value, row, column] = list[i]

  if (map.has(column)) {
    map.get(column).push(value)
  } else {
    map.set(column, [value]);
  }
}

return [...map.values()]
};

// tests
let tree = new TreeNode(3)
// tree.left = new TreeNode(9);
// tree.right = new TreeNode(20);
// tree.right.left = new TreeNode(15);
// tree.right.right = new TreeNode(7);
//console.log('tree', tree);
tree = verticalTraversal(tree)
//console.log('verticalTraversal', verticalTraversal(tree));

// solution https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/discuss/777997/JavaScript-Clean-BFS-Beat-97
// check https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/discuss/773459/Javascript-BFS-solution
// video https://www.youtube.com/watch?v=NjdOhYKjFrU

export {
  verticalTraversal
}
