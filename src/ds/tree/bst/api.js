/**
 * Binary Search Tree implementation in JavaScript
 * Nodes as objects
 */
class Node {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left); // left pointer
    this.right = (right === undefined ? null : right); // right pointer
  }
}

/**
 * Represents a single node in a BinarySearchTree.
 * @class BinarySearchTree
 */
class BinarySearchTree {
  constructor(val) {
    this.root = new Node(val);
    this.count = 1; // how many nodes in Tree
  }

  size() {
    // count doesn't work correctly with duplicated nodes
    return this.count;
  }

  // approach recursion
  insert1(val) {

  }


  /*
  * Insertion Node iteratively
  */
  insert(val, root = this.root) {
    const newNode = new Node(val);

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

    this.count++;
  }

  /**
    * search
    * The contains() method accepts a value as an argument and
    * returns true if the value is present in the tree or false if not.
  */
  contains(val) {
    let currentNode = this.root;

    while (currentNode) {
      if (val === currentNode.val) {
        return true
      }

      if (val < currentNode.val) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return false;
  }

  // im not sure that this is correct solution
  // height of binary tree, should return '-1' when root is NULL.
  height(node = this.root) {
    // empty node
    if (node === null) return -1;

    if (node.left === null && node.right === null) {
      return 0
    }

    if (node.left === null) {
      return this.height(node.right) + 1
    }

    if (node.right === null) {
      return this.height(node.left) + 1
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  // Start at root and check if p and q are less, then go left, otherwise go right
  // p is v1
  // q is v2
  lowestCommonAncestor(
    p,
    q,
    node = this.root
  ) {
    if (node.value > p && node.value > q) {
      return this.lowestCommonAncestor(p, q, node.left)
    } else if (node.value < p && node.value < q) {
      return this.lowestCommonAncestor(p, q, node.right)
    } else {
      return node
    }
  }
}

// tests
const tree = new BinarySearchTree(4);
// tree.insert(2)
// tree.insert(3)
// tree.insert(1)
// tree.insert(7)
// tree.insert(6)
//console.log('BST', tree)


tree.lowestCommonAncestor(2,7) // should be 4 it's not correct
//console.log('lca', tree.lowestCommonAncestor(2,7));
// console.log('size', tree.size());

// todo move each method separately?
// height
// depth
/*
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.



Example 1:


Input: root = [1,2,3,4], x = 4, y = 3
Output: false
Example 2:


Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
Example 3:



Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false


Constraints:

The number of nodes in the tree will be between 2 and 100.
Each node has a unique integer value from 1 to 100.
 */
/**
 * 993
 *
 *
 * family tree = generation tree
 * same generation
 * different parent
 * shouldn't be siblings
 *
 * conditions:
 * and same level - same generation
 * and shouldn't be siblings
 *
 * find depth for search
 *
 * traverse to the tree: check x and y and track depth and track parent
 *
 * let parent = -1
 *
 * todo fill in task
 */
// doesn't work
// [1,2,3,null,4,null,5]
// 5
// 4
// true
// wrong
// var isCousins = function name(root, x, y) {
//   let xParent, yParent;
//   let xDepth, yDepth;

//   const dfs = (node, parent, depth, x, y) => {
//     if (node === null) {
//       return false
//     }

//     if (node.val === x) {
//       xParent = parent;
//       xDepth = depth
//     }

//     if (node.val === y) {
//       yParent = parent;
//       yDepth = depth
//     }

//     dfs(node.left, parent, depth + 1, x, y);
//     dfs(node.right, parent, depth + 1, x, y);
//   }

//   // call
//   dfs(root, null, 0, x, y)

//   if (xDepth === yDepth && xParent !== yParent ) {
//     return true
//   } else {
//     return false
//   }
// }

// correct solution
// var isCousins = function(root, x, y) {
//   const dfs = (node, target, depth, parent) => {
//     if (!node) return null;
//     if (node.val === target) return { depth, parent };

//     return dfs(node.left, target, depth + 1, node.val)
//            || dfs(node.right, target, depth + 1, node.val);
//   };

//   const xMeta = dfs(root, x, 0, null);
//   const yMeta = dfs(root, y, 0, null);

//   return (xMeta.depth === yMeta.depth)
//          && (xMeta.parent !== yMeta.parent);
// };

// var isCousins = function name(root, x, y) {
//   const dfs = (node, parent, depth, x, y) => {
//     if (!node) {
//       return null
//     }

//     if (node.val === parent) {
//       return { parent, depth}
//     }

//     dfs(node.left, parent, depth + 1, x, y);
//     dfs(node.left, parent, depth + 1, x, y);
//   }

//   // call
//   dfs(root, null, 0, x, y)

//   if (xDepth === yDepth && xParent !== yParent ) {
//     return true
//   } else {
//     return false
//   }
// }

// var isCousins = function name(root, x, y) {
//   let tracker = {};

//   const dfs = (node, parent, depth, x, y) => {
//     if (node === null) {
//       return
//     }

//     dfs(node.left, node, depth+1, x, y);
//     dfs(node.left, node, depth+1, x, y);

//     if (node.val === x || node.val === y) {
//       // tracker[node.val] = parent depth
//     }

//     dfs(root, null, 0, x, y)
//   }
// }

//isCousins([1,2,3,null,4], 2, 3)

export { BinarySearchTree }


