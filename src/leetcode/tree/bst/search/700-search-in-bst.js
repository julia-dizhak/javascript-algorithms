/*
Leetcode
700 Search in BST
easy

Given the root node of a binary search tree (BST) and a value.
You need to find the node in the BST that the node's value equals
the given value. Return the subtree rooted with that node.
If such node doesn't exist, you should return NULL.

For example,
Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2

You should return this subtree:
      2
     / \
    1   3

In the example above, if we want to search the value 5, since there is no node with value 5,
we should return NULL.

Note that an empty tree is represented by NULL,
therefore you would see the expected output (serialized tree format) as [], not null.

Algorithm

Solution comes from definition of BST.
BST is type of Binary Tree which fulfills in a specific ordering property:
the left subtree of a node has a key less than or equal
to its parent node's key. The right subtree of a node has a key
greater than to its parent node's key.

So since its BST for every node check if root.data is key and if not go either left or
right depending on if root.data is greater or less than key.

if root is null return null
root.val is equals to val return that node
val < root.val search in the left subtree
val > root.val search in the right subtree

Test cases:
1) null tree
2) Tree with one node and key is that node
3) Tree with many nodes and key does not exist
4) Tree with many nodes and key exists
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val === undefined ? 0 : val)
 *   this.left = (left === undefined ? null : left)
 *   this.right = (right === undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined) ? 0 : val;
    this.left = (left === undefined) ? null : left;
    this.right = (right === undefined) ? null : right;
  }
}

class BST {
  constructor(val) {
    this.root = new TreeNode(val);
    this.count = 0;
  }
}


/*
Approach recursion

Time is O(n) for non balanced BST
Time complexity is O(logn) for balanced BST
Space complexity is O(h) because of recursion, where h is the height of the BST
*/
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (root === null) return null;

  // base case
  if (root.val === val) return root; // we return a root which returns a subtree

  if (val < root.val) {
    // we return particular node up to the calling function
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};

/*
Approach iterative
Time is O(n) for non balanced BST
Time complexity is O(logn) for balanced BST
Space is O(1)
*/

var searchBSTIterative = function(root, val) {
  while (root !== null && root.val !== val) {
    root = (val < root.val) ? root.left : root.right;
  }
  return root
}

var searchBSTIterativeVariant2 = function(root, val) {
  while (root !== null) {
    if (root.val === val) return root;
    else if (val < root.val) {
      return root.left;
    } else {
      return root.right
    }
  }

  return null;
}

// todo check test and insert node to the Tree
const tree = new BST();

// BinaryTree bt = new BinaryTree();
// Node root = null;
// root = bt.addNode(10, root);
// root = bt.addNode(20, root);
// root = bt.addNode(-10, root);
// root = bt.addNode(15, root);
// root = bt.addNode(0, root);
// root = bt.addNode(21, root);
// root = bt.addNode(-1, root);
// BSTSearch bstSearch = new BSTSearch();
// Node result = bstSearch.search(root, 21);
// assert result.data == 21;

// result = bstSearch.search(root, -1);
// assert result.data == 21;

// result = bstSearch.search(root, 11);
// assert result == null;

// test
// Your input
// [4,2,7,1,3]
// 2
// Output
// [2,1,3]
// Expected
// [2,1,3]

export { searchBST }
