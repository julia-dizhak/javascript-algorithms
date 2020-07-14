/*
Leetcode
100 Same tree
easy

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical
and the nodes have the same value.

Example 1:
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true

Example 2:
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false

Example 3:
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
*/

/*
Approach Recursion

Intuition

The simplest strategy here is to use recursion. Check if p and q nodes are not
None, and their values are equal. If all checks are OK, do the same for the child
nodes recursively.

Complexity Analysis

Time complexity: O(N), where N is a number of nodes in the tree, since one
visits each node exactly once.

Space complexity: O(log(N)) in the best case of completely balanced tree and O(N)
in the worst case of completely unbalanced tree, to keep a recursion stack.
*/
var isSameTree = function (p,q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

/*
https://www.geeksforgeeks.org/check-if-two-trees-have-same-structure/
solution with mistake

*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

// tests
// [1,2,1]
// [1,1,2]


/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree1 = function(p, q) {
  if (p === null && q === null) return true;

  let stack1 = []
  let stack2 = []

  if (p !== null) {
    stack1.push(p)
  }
  if (q !== null) {
    stack1.push(q)
  }

  // while (stack1.length) {
  //   let node = stack1.pop();

  // }

};

//

export {
  isSameTree
}
