/*
Leetcode
103 Binary Tree Zigzag Level Order Traversal
medium

Given a binary tree, return the zigzag level order traversal of its nodes'
values. (ie, from left to right, then right to left for the next level and
alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/*
Approach BFS + queue

Time Complexity: O(n) where n is number of nodes in the binary tree (we need to
visit every node)

Space depends on queue size. In worst case is O(n)
*/
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let result = [];
  let depth = 0;
  if (!root) return result;

  let queue = [];
  if (root) queue.push(root);

  while (queue.length) {
    depth++;
    let size = queue.length;
    let temp = []

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      if (depth === 1 || depth % 2 === 0) {
        temp.unshift(node.val);
      } else {
        temp.push(node.val)
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right)
    }

    result.push(temp);
  }

  return result;
};

/*
Approach recursion

O(n) is time
O(n) is space stack size
*/
function zigzagLevelOrderUseRecursion(root) {
  let result = [];
  traversal(root, 0, result);
  return result;
}

function traversal(node, level, result) {
  if (!node) return;

  // result[level] = undefined
  if (result[level] == null) result.push([]);
  if (level % 2 === 0) {
    result[level].push(node.val);
  } else {
    result[level].unshift(node.val);
  }

  traversal(node.left, level + 1, result);
  traversal(node.right, level + 1, result);
}


// tests
// Given binary tree [3,9,20,null,null,15,7],
// let root = new TreeNode(3);
// root.left = new TreeNode(9);
// root.right = new TreeNode(20);
// root.right.left = new TreeNode(15);
// root.right.right = new TreeNode(7);
// console.log('root', root);
// const zigzagLevelOrderNode = zigzagLevelOrderUseRecursion(root);
// console.log('zigzagLevelOrderNode', zigzagLevelOrderNode)

export {
  zigzagLevelOrder,
  TreeNode,
  zigzagLevelOrderUseRecursion
}
