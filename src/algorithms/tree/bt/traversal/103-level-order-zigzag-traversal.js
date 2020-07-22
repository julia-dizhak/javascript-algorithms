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

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let result = [];
  let level = 0;
  if (!root) return result;

  let queue = [];
  if (root) queue.push(root);

  while (queue.length) {
    level++;
    let size = queue.length;
    let temp = []

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      if (level === 1 || level % 2 === 0) {
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

// tests
// todo reverse
// Given binary tree [3,9,20,null,null,15,7],
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log('root', root);
const zigzagLevelOrderNode = zigzagLevelOrder(root);
console.log('zigzagLevelOrderNode', zigzagLevelOrderNode)

export {
  zigzagLevelOrder,
  TreeNode
}
