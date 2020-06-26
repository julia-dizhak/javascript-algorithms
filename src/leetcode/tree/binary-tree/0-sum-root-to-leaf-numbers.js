/*
Leetcode
Sum Root to Leaf Numbers

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
//tree.insertNode(2)
//tree.insertNode(3)
//tree = JSON.parse(JSON.stringify(tree)).root;
//console.log('tree', tree);

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
  // while ( x !== null) {
  //   if (x.left)
  // }

  // how to find all leaves

  console.log('sum', sum);
  return sum

};

//tree = JSON.parse(JSON.stringify(tree)).root;
//console.log('sumNumbers', sumNumbers(tree));
//console.log('sumNumbers', sumNumbers([1,2,3]));

export {
  sumNumbers,
  BT
}
