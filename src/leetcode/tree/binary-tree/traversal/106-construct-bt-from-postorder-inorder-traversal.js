/*
Leetcode
106 Given inorder and postorder traversal of a tree, construct the binary tree.
medium

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]

Return the following binary tree:
    3
   / \
  9  20
    /  \
   15   7
*/

// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/discuss/221681/Don't-use-top-voted-Python-solution-for-interview-here-is-why.

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/*
Approach Recursion

Example [2,1,3], [2,3,1]
Intuition
1) We first find the last node in postOrder. The last node is '1', we know this value
is root as root always appear in the end of postorder traversal.

2) We search “1” in inOrder to find left and right subtrees of root. Everything on
left of “1” in inOrder is in left subtree and everything on right is in right subtree.

3) We recur the above process for following two.
Make the created tree leftInorder, leftPostorder as left child of root.
Make the created tree rightInorder, rightPostorder as right child of root.

The code is clean and short. However, if you give this implementation during an
interview, there is a good chance you will be asked, "can you improve/optimize
your solution?"

Why? Take a look at Line A, Line B and Line C.
Line A takes O(N) time.
Line B and C takes O(N) time and extra space.

Thus, the overall running time and extra space is O(N^2).
So this implementation has a very bad performance, and you can avoid it.

time is O(N^2)
space is O(N^2)?
*/
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function buildTreeUseRecursion(inorder, postorder) {
  if (inorder.length === 0) return null;
  const rootNode = new TreeNode(postorder[postorder.length-1]);
  const rootNodeIndex = inorder.indexOf(rootNode.val); // line A

  const leftInorder = inorder.slice(0, rootNodeIndex);
  const rightInorder = inorder.slice(rootNodeIndex + 1);
  const leftPostorder = postorder.slice(0, leftInorder.length);
  const rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1);

  if (leftInorder.length === 0) {
    rootNode.left = null
  } else {
    rootNode.left = buildTreeUseRecursion(leftInorder, leftPostorder); // line B
  }

  if (rightInorder.length === 0) {
    rootNode.right = null
  } else {
    rootNode.right = buildTreeUseRecursion(rightInorder, rightPostorder); // line C
  }
  return rootNode;
};

/*
Approach 
*/
function buildTree(inorder, postorder) {

// tests
// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
const build = buildTreeUseRecursion([9,3,15,20,7], [9,15,7,20,3])
console.log('build tree', build)

//


export {
  TreeNode,
  buildTreeUseRecursion,
}
