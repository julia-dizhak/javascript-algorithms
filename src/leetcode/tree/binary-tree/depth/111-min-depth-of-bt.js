/*
Leetcode
111 Min depth of binary tree
easy

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root 
node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example 1
Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
*/

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/*
Approach recursive

The intuitive approach is solve the problem by recursion. Below is DFS strategy.]

Intuition
1 Calculate height of left side
2 calculate height of right side
3 getMin of 2 heights and add 1 to it

Time complexity: we visit each node exactly once O(n)
Space complexity : in the worst case, the tree is completely unbalanced, e.g. each
node, has only one child node, the recursion call would occur N times, therefore
the storage to keep the call stack would be O(n).
But in the best case (tree is completely balanced), the space is O(log n).
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;

  if (root.left == null && root.right == null) return 1;

  let depth = Number.MAX_VALUE;
  if (root.left !== null) depth = Math.min(depth, minDepth(root.left));
  if (root.right !== null) depth = Math.min(depth, minDepth(root.right));

  return depth + 1;
}

// tests 
//let root = null;
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
//console.log('minDepth', minDepth(root));
//console.log('minDepth', minDepth([3,9,20,null,null,15,7]));
//console.log('minDepth', minDepth([2,null,3,null,4,null,5,null,6]));
    

export {
  minDepth,
  TreeNode
}