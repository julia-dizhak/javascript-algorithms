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

  // Approach Recursion 2
  insert(value) {
    if (value <= this.value) {
      if (this.left) this.left.insert(value);
      else this.left = new TreeNode(value);
    }
    else {
      if (this.right) this.right.insert(value);
      else this.right = new TreeNode(value);
    }
    return this;
  };
}

const tree = new BST(2);
//tree.insertNode(1);
tree.insertNode(3);

// insert
tree.insert(1);
console.log('tree 1', tree);

// Second approach
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const tree2 = new BST(2);
//tree.insertNode(1);
tree.insertNode(3);

// insert
//tree.insert(1);
console.log('tree', tree);

export {
  BST,
  TreeNode
}
