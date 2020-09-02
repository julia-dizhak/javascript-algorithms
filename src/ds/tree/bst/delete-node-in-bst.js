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

  delete(val) {
    
  }
}
