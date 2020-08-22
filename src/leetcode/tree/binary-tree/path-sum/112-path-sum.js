/*
Leetcode
112 Path sum
easy

Given a binary tree and a sum, determine if the tree has a root-to-leaf path
such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:
Given the below binary tree and sum = 22,
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*/
class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

// https://leetcode.com/problems/path-sum-iii/discuss/91895/JavaScript-Solution-BFS-and-DFS-with-explanation
/*
Approach

preorder DFS root->left->right see task
how to solve with other methods

time
space
*/
// https://leetcode.com/problems/path-sum/discuss/36486/Python-solutions-(DFS-recursively-DFS%2Bstack-BFS%2Bqueue)


/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  //debugger;
  if (root === null) return false;

  let stack = [];
  if (root !== null) stack.push([root, root.val]);

  let result = [];
  // while (stack.length) {
  //   const [node, val] = stack.pop();

  //   // means leaf
  //   if (!node.left && !node.right) {
  //     if (val === sum) {
  //       return true;
  //     }
  //   }

  //   if (node.right) stack.push(node.right, val + node.right.val);
  //   if (node.left) stack.push(node.left, val + node.val.left);
  // }

  //console.log('result2', result);
  return false
};

// tests
let tree = new TreeNode(5);
tree.left = new TreeNode(4);
tree.right = new TreeNode(8);
tree.left.left = new TreeNode(11);
tree.right.left = new TreeNode(13);
tree.right.right = new TreeNode(4);
tree.left.left.left = new TreeNode(7);
tree.left.left.right = new TreeNode(2);
tree.right.right.right = new TreeNode(4);
//console.log('tree', tree);

//console.log('hasPathSum', hasPathSum(tree, 22));

// describe task with path iii
// has path sum III
// https://leetcode.com/problems/path-sum-iii/discuss/377535/Javascript-Read-this-solution-if-you've-given-up-hope-and-just-want-to-see-some-progress

// path sum 3 desc
/*
You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go
downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000
to 1,000,000.

Example:
root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11
*/

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {

}






/*
448. Find All Numbers Disappeared in an Array
Easy

3008

253

Add to List

Share
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

export {
  hasPathSum
}
