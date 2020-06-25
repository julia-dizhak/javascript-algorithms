/*
Leetcode
104 Maximum depth of binary tree
easy

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the
root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
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
    this.val = (val === undefined) ? 0 : val;
    this.left = (left === undefined) ? null : left;
    this.right = (right === undefined) ? null : right;
  }
}

class BT {
  constructor(val) {
    this.root = new TreeNode(val);
  }

  /**
   * add node iterative approach
   *
   * New key is always inserted at the leaf node.
   * Start searching a key from root till we hit a leaf node.
   * Once a leaf node is found, the new node is added as a child of the leaf node.
   *
   * @param {number} val
   * @param {*} root
   */
  addNode(val, root = this.root) {
    const newNode = new TreeNode(val);

    // The parent node is recorded. We walk to the leave and insert the new node to
    // the parent pointer
    let x = root;
    let y = null;

    // find a last leaf and depends on val add to the left or to the right
    while (x !== null) {
      y = x;
      if (val <= x.val) {
        x = x.left
      } else {
        x = x.right
      }
    }

    if (y === null) {
      y = newNode;
    } else if (val <= y.val) {
      y.left = newNode;
    } else {
      y.right = newNode;
    }

    return y;
  }

  height(root = this.root) {
    if (root === null) return 0;

    let leftHeight = this.height(root.left);
    let rightHeight = this.height(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

/*
Approach recursive

maximum depth equals to height? of the tree - yes, of node - no

Algorithm
1 if root is null return 0
2 count height of leet subtree = leftHeight
3 count height of right subtree = rightHeight
4 height equals 1 + max(leftHeight, rightHeight)

Example: Given binary tree [3,9,20,null,null,15,7],
    3
     \
      9
    /  \
   7   20
       /
      15
return its depth = 3?

time complexity: O(n) we are visiting all nodes in Binary tree
space: height of binary tree, in worst case O(n)
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

/*
Approach iterative
todo
*/

// tests
// let tree = new BT(3);
// tree.addNode(9);
// tree.addNode(20);
// tree.addNode(null);
// tree.addNode(null);
// tree.addNode(15);
// tree.addNode(7);
// console.log('height of tree', tree.height());
// tree = JSON.parse(JSON.stringify(tree)).root;
// console.log('tree', tree)

export {
  maxDepth,
  BT
}
