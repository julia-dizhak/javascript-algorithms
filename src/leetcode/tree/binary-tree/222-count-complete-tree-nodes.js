import { BinarySearchTree } from './226-invert-binary-tree'

/*
Leetcode
222 Count complete Tree Nodes
medium

Given a complete binary tree, count the number of nodes.

Note:
Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last,
is completely filled, and all nodes in the last level are as far left as
possible. It can have between 1 and 2h nodes inclusive at the last level h.

Example:

Input:
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6
*/

/*
Approach

The height of a binary tree is the largest number of edges in a path from the root
node to a leaf node. Essentially, it is the height of the root node.
Note that if a tree has only one node, then that node is at the same time the
root node and the only leaf node, so the height of the tree is 0.

Algorithm
1 A fully completed tree has node number: count = 2 ^ depth - 1
for example: [1,2,3]
depth is 2
count = 2 ^ 2 - 1 = 3

2 Compare left height and right height, if equal, use the formula,
otherwise recursively search left and right at next level

3 The search pattern is very similar to binary search, the difference of heights
either exists in left side, or right side

For those who are confused with (1 << leftDepth) - 1;
This is done to find the nodes when depth is known.
Suppose there are N nodes in a tree, then depth = (log2(n+1))
1 node gives log2(2) = 1
3 nodes gives log2(4) = 2
7 nodes gives log2(8) = 3
15 nodes gives log2(16) = 4
what we are doing in this line (1 << leftDepth) - 1 is given Depth we will find
Number of nodes,
N = 2 ^ depth - 1.

Complexity analysis
time complexity is O(log(n)^2)
if you draw the recursion tree and you will find that in every level,
there will always be one left or right subtree is a complete tree and will
just return. So every level's time is O(log n),
total time complexity is O(log(n) ^ 2)
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val === undefined ? 0 : val)
 *   this.left = (left === undefined ? null : left)
 *   this.right = (right === undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  if (root == null) return 0;

  let leftDepth = countLeftDepth(root);
  let rightDepth = countRightDepth(root);

  if (leftDepth === rightDepth) {
    return (1 << leftDepth) - 1;
  } else {
    // height of the tree
    return 1 + countNodes(root.left) + countNodes(root.right)
  }
};

function countLeftDepth(node) {
  let depth = 0;
  while (node !== null) {
    node = node.left;
    depth++;
  }
  return depth
}

function countRightDepth(node) {
  let depth = 0;
  while (node !== null) {
    node = node.right;
    depth++;
  }
  return depth
}




let tree = new BinarySearchTree();
const arr = [4,2,7,1,3,6,9];
arr.map((element, index) => {
  tree.add(element);
  return tree;
})
tree = JSON.parse(JSON.stringify(tree)).root;
console.log('count nodes tree', tree)

export { countNodes, BinarySearchTree }
