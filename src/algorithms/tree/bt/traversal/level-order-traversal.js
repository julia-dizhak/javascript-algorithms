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
    let node = queue.shift();
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
in reverse order to print?
Time Complexity: O(n) where n is number of nodes in the binary tree.
*/
/**
 *
 * @param {*} root
 */
var levelOrderBottom = function(root) {
  let result = [];

  if (!root) return result;

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
    debugger
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

let tree = new BT(3);
tree.insertNode(9);
tree.insertNode(20);
tree.insertNode(21);
tree = JSON.parse(JSON.stringify(tree)).root;
console.log('tree', tree);
console.log('levelorder', levelOrder(tree));


export {
  levelOrder,
  levelOrderForLeetcode,
  BT
}
