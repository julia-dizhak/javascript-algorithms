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


/* Approach Recursion

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

/* Approach Iteration DFS

Intuition

Start from the root and then at each iteration pop the current node out of the
deque. Then do the same checks as in the approach 1:
p and p are not None,
p.val is equal to q.val,
and if checks are OK, push the child nodes.

Complexity Analysis

Time complexity: O(N) since each node is visited exactly once.

Space complexity: O(log(N)) in the best case of completely
balanced tree and O(N) in the worst case of completely unbalanced tree, to keep a deque.
*/

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var check = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return true;
}
var isSameTreeIteration = function(p, q) {
  if (p === null && q === null) return true;
  if (!check(p,q)) return false;

  let stackP = [];
  let stackQ = [];
  stackP.push(p);
  stackQ.push(q);

  while(stackP.length) {
    p = stackP.pop();
    q = stackQ.pop();
    if (!check(p,q)) return false;

    if (p !== null) {
      if (!check(p.left, q.left)) return false;
      if (p.left !== null) {
        stackP.push(p.left);
        stackQ.push(q.left)
      }

      if (!check(p.right, q.right)) return false;
      if (p.right !== null) {
        stackP.push(p.right);
        stackQ.push(q.right)
      }
    }
  }
  return true;
};

/*
The same Approach Iteration, use DFS

the idea is to use stack for preorder traverse

The same time and space complexity as in previous approach
*/
var isSameTreeDFS = function(p, q) {
  if (p === null && q === null) return true;

  let pStack = [];
  let qStack = [];
  if (p !== null) pStack.push(p);
  if (q !== null) qStack.push(q);

  while (pStack.length && qStack.length) {
    let pNode = pStack.pop();
    let qNode = qStack.pop();

    if (pNode.val !== qNode.val) return false;

    if (pNode.right !== null) pStack.push(pNode.right);
    if (qNode.right !== null) qStack.push(qNode.right);
    if (pStack.length !== qStack.length) return false;

    if (pNode.left !== null) pStack.push(pNode.left);
    if (qNode.left !== null) qStack.push(qNode.left);
    if (pStack.length !== qStack.length) return false;
  }

  return pStack.length === qStack.length;
}

// tests
/*
https://www.geeksforgeeks.org/check-if-two-trees-have-same-structure/
solution with mistake
*/
class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined) ? 0 : val;
    this.left = (left === undefined) ? null : left;
    this.right = (right === undefined) ? null : right;
  }
}
// let root1 = new TreeNode(1);
// let root2 = new TreeNode(1);

// root1.left = new TreeNode(2);
// root1.left.left = new TreeNode(4);
// root1.left.right = new TreeNode(5);
// root1.right = new TreeNode(3);

// root2.left = new TreeNode(2);
// root2.right = new TreeNode(3);

// console.log('root1', root1);
// console.log('root2', root2);
// console.log('isSameTreeDFS', isSameTreeDFS(root1, root2));

export {
  isSameTree,
  isSameTreeIteration,
  isSameTreeDFS,
  TreeNode
}
