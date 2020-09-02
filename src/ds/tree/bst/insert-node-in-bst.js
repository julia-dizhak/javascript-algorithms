/*
Binary Search Tree implementation in JavaScript
Nodes as objects
*/
class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left); // left pointer
    this.right = (right === undefined ? null : right); // right pointer
  }
}

class BST {
  constructor(val) {
    this.root = new TreeNode(val);
  }

  /*
  Approach Recursion 1
  time is O(log n)
  space is O(log n)
  */
  insertNode(val, root = this.root) {
    let newNode = new TreeNode(val);
    if (!root) root = newNode;
    else if (root.val === val) {
      // case with duplicated
      console.log('equal val');
      return null;
    }
    else if (val < root.val) {
      if (!root.left) root.left = newNode;
      else this.insertNode(val, root.left);
    }
    else {
      if (!root.right) root.right = newNode;
      else this.insertNode(val, root.right)
    }
  }

  /**
    * approach Recursive 2
    * Adds some value into the tree. This method traverses the tree to find
    * the correct location to insert the value. Duplicate values are discarded.
    *
    * @param {*} val The value to add to the tree.
    * @returns {void}
  */
  insert(val) {
    let currentNode = this.root;

    // search
    const check = (node) => {
      /*
      * Create a new node to insert into the tree and store the value in it.
      * This node will be added into the tree.
      */
      const newNode = new Node(val);

      if (node === null) {
        node = newNode;
      } else if (val === node.val) {
        // case with duplicates
        console.log('equal val');
        return null;
      } else if (val < node.val) {
        // if value less than node value, go left
        if (node.left === null) {
          node.left = newNode;
        } else {
          check(node.left)
        }
      } else {
        // if value bigger than node value go right
        if (node.right === null) {
          node.right = newNode;
        } else {
          check(node.right)
        }
      }
    }

    // call search on root node
    check(currentNode);
  }
}

let tree = new BST(2);
tree.insertNode(1);
tree.insertNode(3);
//console.log('tree 1', tree);

// Second approach
function BST2(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// O(log n)
BST2.prototype.insert = function(value) {
  if (value <= this.value) {
    if (this.left) this.left.insert(value);
    else this.left = new BST2(value);
  }
  else {
    if (this.right) this.right.insert(value);
    else this.right = new BST2(value);
  }
  return this;
};

let tree2 = new BST2(2);
// insert
tree2.insert(1).insert(3);
//console.log('tree 2', tree2);

export {
  BST,
  TreeNode
}
