/*
Leetcode
129 Sum Root to Leaf Numbers

Given a binary tree containing digits from 0-9 only, each root-to-leaf path
could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

Note: A leaf is a node with no children.

Example:
Input: [1,2,3]
    1
   / \
  2   3
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.


Example 2:
Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.
*/

/*
Approach preorder traversal of the tree.

In preorder traversal, keep track of the value calculated till the current node,
let this value be val. For every node, we update the val + nodes data

*/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  let sum = 0;
  //debugger
  if (root === null) sum = 0;
  if (root.left === null && root.right === null) sum += root.val;

  let x = root;
  //debugger
  // while (x !== null) {
  //   if (x.left !== null) {
  //     x = x.left
  //   }
  // }

  // how to find all leaves

  console.log('sum', sum);
  return sum

};


// public int sumNumbers(TreeNode root) {
// 	return sum(root, 0);
// }

// public int sum(TreeNode n, int s){
// 	if (n == null) return 0;
// 	if (n.right == null && n.left == null) return s*10 + n.val;
// 	return sum(n.left, s*10 + n.val) + sum(n.right, s*10 + n.val);
// }
// https://leetcode.com/problems/sum-root-to-leaf-numbers/discuss/41531/Clean-Java-DFS-solution-(preorder-traversal)
//https://leetcode.com/problems/sum-root-to-leaf-numbers/discuss/705970/Recursive-Preorder-Traversal-or-Easy-to-Understand-or-Diagram-Visualization


// recursion
// var sumNumbers = function(root) {
//   let sum = 0;
//   if (!root){
//       return 0;
//   }
//   const dfs = (node,current) => {
//       current = current * 10  + node.val;
//       if (!node.left && !node.right){
//           sum+=current;
//       }
//       if (node.right){
//           dfs(node.right,current)
//       }
//       if (node.left){
//           dfs(node.left,current)
//       }

//   }
//   dfs(root,0);
//   return sum;
// };
// iterative

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

class BT {
  constructor(val) {
    this.root = new TreeNode(val)
  }

  // insertion Node iteratively
  insertNode(val, root = this.root) {
    const newNode = new TreeNode(val);

    // if (root === null) {
    //   root = newNode;
    // }

    let x = root;
    let y = null; // last node at the moment = leaf

    while (x !== null) {
      y = x;
      if (val <= x.val) {
        x = x.left;
      } else {
        x = x.right;
      }
    }

    // now y is leaf
    if (y === null) {
      y = newNode;
    } else if (val <= y.val) {
      y.left = newNode;
    } else {
      y.right = newNode;
    }
  }
}

// tests
let tree = new BT(1);
tree.insertNode(2)
tree.insertNode(3)
//tree.insertNode(3)
tree = JSON.parse(JSON.stringify(tree)).root;
//console.log('tree', tree);
console.log('sumNumbers', sumNumbers(tree));
//console.log('sumNumbers', sumNumbers([1,2,3]));

export {
  sumNumbers,
  BT
}
