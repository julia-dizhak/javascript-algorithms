/*
Leetcode
Given a binary tree, write a function to get the maximum width of the given tree.
The width of a tree is the maximum width among all levels. The binary tree has
the same structure as a full binary tree, but some nodes are null.

The width of one level is defined as the length between the end-nodes
(the leftmost and right most non-null nodes in the level, where the null nodes
between the end-nodes are also counted into the length calculation.

Example 1:
Input:
           1
         /   \
        3     2
       / \     \
      5   3     9

Output: 4
Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).

Example 2:
          1
         /
        3
       / \
      5   3

Output: 2
Explanation: The maximum width existing in the third level with the length 2 (5,3).



todo ...
*/

/*
Approach BFS level order traversal
In this method we store all the child nodes at the current level in the queue
and then count the total number of nodes after the level order traversal for a
particular level is completed.
Since the queue now contains all the nodes of the next level, we can easily find
out the total number of nodes in the next level by finding the size of queue.
We then follow the same procedure for the successive levels.
We store and update the maximum number of nodes found at each level.

Time is O(n) in worst case
space
*/
/**
 * @param {TreeNode} root
 * @return {number}
*/

var widthOfBinaryTree = function(root) {
  if (root === null) return 0;
  let maxWidth = 0;

  let queue = [];
  if (root) queue.push(root);

  while (queue.length) {
    // size of queue when when the level order traversal for on level finishes
    let count = queue.length;
    // update the max node count value
    maxWidth = Math.max(maxWidth, count);

    // iterate for all nodes in queue currently
    while (count-- > 0) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return maxWidth;
};

var widthOfBinaryTreeVariant1 = function(root) {
  //debugger
  if (root === null) return 0;
  let maxWidth = 0;
  let queue = [];
  queue.push([root, 0]);

  while (queue.length) {
    const size = queue.length;
    let node, position, first;

    for (let i = 0; i < size; i++) {
      [node, position] = queue.shift();
      // logic explain?
      if (i === 0) first = position;
      if (node.left) queue.push([node.left, position*2]);
      if (node.right) queue.push([node.right, (position*2)+1]);
    }

    const currentWidth = (position - first + 1) | 0;
    maxWidth = Math.max(maxWidth, currentWidth);
  }
  return maxWidth;
}


/*
Approach Using Level order traversal

This method mainly involves two functions. One is to count nodes at a given
level (getWidth), and other is to get the maximum width of the tree(getMaxWidth).
getMaxWidth() makes use of getWidth() to get the width of all levels starting
from root.

Time is n^2
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

  // height of BT
  getHeight(root = this.root) {
    if (root === null) return 0;
    let leftHeight = this.getHeight(root.left);
    let rightHeight = this.getHeight(root.right);
    return 1 + Math.max(leftHeight, rightHeight);
  }

  getWidth(node, level) {
    //debugger
    if (node === null) return 0;

    if (level === 1) return 1;
    else if (level > 1) {
      return this.getWidth(node.left, level - 1) + this.getWidth(node.right, level - 1)
    }
    return 0
  }

  // function to get the maximum width of a binary tree
  getMaxWidth(root = this.root) {
    //debugger
    let maxWidth = 0;
    let width = 0;
    let height = this.getHeight(root);

    // Get width of each level and compare the width with maximum width so far
    for (let i = 0; i < height; i++) {
      width = this.getWidth(root, i);
      if (width > maxWidth) maxWidth = width
    }
    return maxWidth
  }

  insertNode(val, root = this.root) {
    const newNode = new TreeNode(val);
    if (root === null) root = newNode;

    let queue = [];
    queue.push(root);

    while (queue.length) {
      const node = queue[0];
      queue.shift();

      if (node.left === null) {
        node.left = newNode;
        break;
      } else {
        queue.push(node.left)
      }

      if (node.right === null) {
        node.right = newNode;
        break;
      } else {
        queue.push(node.right)
      }
    }
  }
}

/*
Approach is using DFS
todo
*/

// test 1
let tree = new BT(1);
tree.insertNode(2);
tree.insertNode(3);
tree.insertNode(4);
tree.insertNode(5);
tree.insertNode(6);
tree.insertNode(7);
tree.insertNode(8);
tree = JSON.parse(JSON.stringify(tree)).root;
// console.log('tree', tree);
// const width = widthOfBinaryTree(tree)
// console.log('width', width)


// test 2
// let root = new BT(1);
// root = JSON.parse(JSON.stringify(root)).root;
// root.left = new BT(2);
// root.right = new BT(3);
// root.left.left = new BT(4);

// console.log('root', root);
// const width = widthOfBinaryTree(root)
// console.log('width', width)

// test 3
// tree.getMaxWidth();
// console.log('height', tree.getHeight())
// console.log('getMaxWidth', tree.getMaxWidth())
// console.log('tree', tree);

// test 4
const width = widthOfBinaryTreeVariant1(tree)
//console.log('width', width)


export {
  widthOfBinaryTree,
  BT
}
