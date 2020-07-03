/*
Leetcode
102 Binary Tree Level Order Traversal
medium

Given a binary tree, return the level order traversal of its nodes' values.
(ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:

[
  [3],
  [9,20],
  [15,7]
]
*/

/*
Approach iterative, Queue
Breadth-first Search - exploring every level before going further

printLevelorder(tree)
1) Create an empty queue q (FIFO)
2) put root into the queue
3) Loop while until queue is not empty
  a) create temp node
  b) Enqueue nodes children (first left then right children) to q
  c) Dequeue a node from q and assign it’s value to temp_node

Time complexity is O(n) visit all nodes.
Space depends on Queue size. In worst case we need to move all leaf nodes,
maximum BT has n/2 leas, space is O(n)
*/
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let result = [];
  if (!root) return result;

  let queue = [];
  queue.push(root);

  while (queue.length) {
    const node = queue.shift();
    result.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
}
// on Leetcode you need to push nodes into specific manner
var levelOrderForLeetcode = function(root) {
  let result = [];
  if (!root) return result;

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let size = queue.length;
    const temp = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      temp.push(node.val);
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    result.push(temp);
  }

  return result;
};

/*
Leetcode
107 Binary Tree Level Order Traversal II
bottom = reverse order

Given a binary tree, return the bottom-up level order traversal of its nodes'
values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
*/

/*
Approach Queue

1.Add root to queue
2.pop item in queue and add left and right nodes of that item to queue.
now add value of popped to a temporary array
3.repeat the above step len(queue) no of times
4.Add that temporary to result array
5.if size of queue !=0 go to step 2
6.return reversed result array

Time Complexity: O(n) where n is number of nodes in the binary tree
(we need to visit every node)
*/
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let result = [];
    if (!root) return result;

    let queue = [];
    if (root) queue.push(root);

    while (queue.length) {
      let size = queue.length;
      let temp = [];
      for (let i=0; i<size; i++) {
          let node = queue.shift();
          temp.push(node.val);
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);

      }
      result.unshift(temp);
    }
    return result
};

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

class BT {
  constructor(val) {
    this.root = new TreeNode(val);
  }

  // iterative approach
  insertNode(item, root = this.root) {
    const newNode = new TreeNode(item);
    if (!root) root = newNode;

    let queue = [];
    queue.push(root);

    while (queue.length) {
      const node = queue.shift();
      queue.shift()
      if (node.left === null) {
        node.left = newNode;
        break;
      } else {
        queue.push(node.left)
      }

      if (node.right === null) {
        node.right = newNode;
        break;
      } else {
        queue.push(node.right)
      }
    }
  }
}

// let tree = new BT(3);
// tree.insertNode(9);
// tree.insertNode(20);
// tree.insertNode(21);
// tree = JSON.parse(JSON.stringify(tree)).root;
// console.log('tree', tree);
// console.log('levelorder', levelOrderBottom(tree));

/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {

};

export {
  levelOrder,
  levelOrderForLeetcode,
  BT,
  levelOrderBottom
}
