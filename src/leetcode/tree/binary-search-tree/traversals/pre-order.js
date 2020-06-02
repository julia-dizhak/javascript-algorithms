/*
Leetcode
144 Binary Tree Preorder Traversal
medium

Given a binary tree, return the preorder traversal of its nodes' values.

Example:
Input: [1,null,2,3]
  1
  \
    2
  /
  3

Output: [1,2,3]
Follow up: Recursive solution is trivial, could you do it iteratively?
*/

// Definition for a binary tree node.
class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

//  function TreeNode(val, left, right) {
//       this.val = (val===undefined ? 0 : val)
//       this.left = (left===undefined ? null : left)
//       this.right = (right===undefined ? null : right)
//   }

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (!root) return [];
  let result = [];
  let stack = [root];

  //debugger;
  while (stack.length) {
    let node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  console.log('result', result)
  return result;

};

let tree = new TreeNode([1, null, 2, 3]);
//console.log('preorderTraversal', preorderTraversal(tree));


// how to push binary tree nodes to array
// Given a tree root

// A. If the tree is null, there's nothing to insert.
// B. If is not null:
// B.1 Insert everything on the left
// B.2 Insert the tree root
// B.3 Insert everything on the right
const walkAndInsert = (node, arr = []) => {
  if (!node) {
    return
  } else {
    walkAndInsert(node.left);
    arr.push(node.root);
    walkAndInsert(node.right);
  }
  return arr;
}

export { preorderTraversal }

// Of the three main types of binary tree traversals (inorder,preorder,postorder), I find preorder traversal the easiest to implement iteratively. You can just reuse the dfs algorithm, but make sure you push the children onto the stack in such a way that the left child is processed before the right child.

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// var preorderTraversal = function(root) {
//     var stack = [];

//     // We do not push the root node onto the stack if the root node is null. This way we will avoid
//     // going into the while loop when the root is null and just return an empty array as the result.
//     if(root !== null){
//         stack.push(root);
//     }

//     // Initialize the result to an empty array
//     var res = [];

//     // Keep iterating while there is something on the stack
//     while(stack.length > 0){
//         var node = stack.pop();

// 	// Do the preorder processing
//         res.push(node.val);

//         // If there is a right child, push it onto the stack.
//         if(node.right !== null){
//             stack.push(node.right);
//         }

//         // If there is a left child, push it onto the stack.
//         if(node.left !== null){
//             stack.push(node.left);
//         }
//     }

//     return res;
// };
