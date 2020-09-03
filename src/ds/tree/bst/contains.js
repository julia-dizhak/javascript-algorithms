/*
contains
Recursive approach
*/
class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

class BST {
  constructor(val) {
    this.root = new TreeNode(val);
  }

  insert(val, root = this.root) {
    let newNode = new TreeNode(val);
    if (!root) root = newNode;
    else if (root.val === val) {
      // case with duplicated
      console.log('equal val');
      return null;
    }
    else if (val < root.val) {
      if (!root.left) root.left = newNode;
      else this.insert(val, root.left);
    }
    else {
      if (!root.right) root.right = newNode;
      else this.insert(val, root.right)
    }
  }

  /**
    * Approach recursion
    * search
    * The contains() method accepts a value as an argument and
    * returns true if the value is present in the tree or false if not.
    *
    * time is O(log n) in best case, in average case no
  */
  // todo check why it doesn't work
  contains1(val, currentNode = this.root) {
    if (val === currentNode.val) return true;

    if (val < currentNode.val) {
      if (currentNode.left) this.contains(val, currentNode.left);
    }

    if (val > currentNode.val) {
      if (currentNode.right) this.contains(val, currentNode.right);
    }

    return false;
  }

  contains(val, currentNode = this.root) {
    if (val === currentNode.val) return true;

    if (val < currentNode.val) {
      // if this.left doesn't exist return false
      // if it does exist, check if its subtree contains the value
      return !!currentNode.left && this.contains(val, currentNode.left);
    }

    if (val > currentNode.val) {
      // if this.right doesn't exist return false
      // if it does exist, check if its subtree contains the value
      return !!currentNode.right && this.contains(val, currentNode.right);
    }

    return false;
  }

}

let tree = new BST(5);
// insert
tree.insert(4);
tree.insert(7);
tree.insert(6);
tree.insert(8);
// contains
tree.contains(4);
//console.log('tree', tree);

export {
  BST,
  TreeNode
}
