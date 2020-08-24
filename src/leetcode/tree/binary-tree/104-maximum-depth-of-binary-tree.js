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

/*
Approach recursive

maximum depth equals to height? of the tree - yes, of node - no

Intuition
1 Calculate height of left side
2 calculate height of right side
3 getMax of 2 heights and you add 1 to it
4 return this to the calling function

Algorithm
1 if root is null return 0
2 count height of leet subtree = leftHeight
3 count height of right subtree = rightHeight
4 height equals 1 + max(leftHeight, rightHeight)

Visualization:
    10
    /\
   5   6
      / \
     8   7
          \
           4
var height = function(root) {
            if (root === null) return 0;
  line 1 -  let leftHeight = height(root.left);
  line 2 -  let rightHeight = height(root.right);
  line 3 -  return 1 + Math.max(leftHeight, rootHeight);
}

You can draw a table with root, line number, left height, right height
Call Stack
root     | line number   | left height  | right height
10       | 1             |  1           |

5        | 1             | 0            |
null     |               |              |
5        | 2             |              | 0
null     |               |              |
...
5 return from line number 3 - 1 to 10

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

// the same approach
var maxDepthRecursion = function(root) {
  if (root === null) return 0;

  let leftHeight = maxDepthRecursion(root.left);
  let rightHeight = maxDepthRecursion(root.right);
  return Math.max(leftHeight, rightHeight) + 1;
};

/*
Approach iterative
todo
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

// tests
// let tree = new BT(3);
// tree.addNode(9);
// tree.addNode(20);
// tree.addNode(null);
// tree.addNode(null);
// tree.addNode(15);
// tree.addNode(7);
// tree = JSON.parse(JSON.stringify(tree)).root;
// console.log('tree', tree)
//
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(15);
const height = maxDepthRecursion(root);
console.log('height of tree', height);
console.log('root', root)

export {
  maxDepth, maxDepthRecursion,
  BT
}
