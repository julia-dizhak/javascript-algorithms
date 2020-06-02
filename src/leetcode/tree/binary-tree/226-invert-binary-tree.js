/*
Leetcode
226. Invert Binary Tree
easy

An inversion, or mirror, of a Binary Tree,
is just a Binary Tree whose left and right children
(of all non-leaf nodes) are swapped.

The inverse of an empty tree is the empty tree.

Trivia:
This problem was inspired by this original tweet by Max Howell:
Google: 90% of our engineers use the software you wrote (Homebrew),
but you can’t invert a binary tree on a whiteboard so f*** off.

Example:
Input:
     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:
     4
   /   \
  7     2
 / \   / \
9   6 3   1

input [4,2,7,1,3,6,9]
output [4,7,2,9,6,3,1]

Input [1,2]
Output [1,null,2]
*/

// Definition for a binary tree node.
class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

class BinarySearchTree {
  constructor(val) {
    this.root = null;
  }

  add(val) {
    const node = this.root;

    if (node === null) {
      this.root = new TreeNode(val);
    } else {
      // recursion function
      const searchTree = node => {
        if (val < node.val) {
          if (node.left === null) {
            node.left = new TreeNode(val);
          } else if (node.left !== null) {
            // continue searching
            return searchTree(node.left)
          }
        } else if (val > node.val) {
          if (node.right === null) {
            node.right = new TreeNode(val);
          } else if (node.right !== null) {
            return searchTree(node.right)
          }
        } else return null;
      }
      searchTree(node);
    }
  }
}


/*
Approach recursive
This is a classic tree problem that is best-suited for a recursive approach.

Algorithm
call invert for left subtree
call invert for right subtree
swap left and right subtrees

Complexity Analysis
Since each node in the tree is visited only once,
the time complexity is O(n), where n is the number of nodes in the tree.
We cannot do better than that, since at the very least
we have to visit each node to invert it.

Because of recursion, O(h) function calls will be placed on the stack
in the worst case, where h is the height of the tree.
Because h ∈O(n), the space complexity is O(n).
*/
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function(node) {
  if (!node) return null;

  // call invert for left subtree
  let left = invertTree(node.left);
  // call invert for right subtree
  let right = invertTree(node.right);

  // swap left and right subtrees
  node.left = right;
  node.right = left;

  return node;
};

/*
todo
Approach iterative

flip nodes on each layers
swap leaves of subtree
dfs
*/

let tree4 = new BinarySearchTree();
const arr = [4,2,7,1,3,6,9];
//const arr = [4,2,7];
arr.map((element, index) => {
  tree4.add(element);
  return tree4;
})
tree4 = JSON.parse(JSON.stringify(tree4)).root;

const invertedTree = invertTree(tree4);
const test = JSON.parse(JSON.stringify(invertedTree))
// console.log('tree 4', tree4)
// console.log('invert tree 4', JSON.parse(JSON.stringify(invertedTree)));
// console.log('test', test.left.val)

export {
  invertTree,
  BinarySearchTree
}
