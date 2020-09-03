/*
Leetcode
450 Delete a node in BST
medium

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

  /*
  search for node
    check if current val equal val
    if so, delete val
    else search(val)

  edge case: delete a root
    if its a root
    else
      set relationship from parent L, R
      case 1: check if its leaf, if so
        delete if
          which pointer do we swap
            if the parent's left = val, then set that one
            parent['right] = null
      case 2: has 1 node
        check current has left or right
        if has a left, then set the left to the parents relationship for the to be deleted node
        parent['right] = this.left || this.right
      case 3: 2 nodes


  */
  delete(val) {
    debugger
    let currentNode = this.root;
    let found = false;
    let nodeToRemove;
    let parent = null;

    // find the node we want to remove
    while (!found) {
      if (currentNode === null || currentNode.val === null) {
        return 'the node was not found'
      }
      if (val === currentNode.val) {
        nodeToRemove = currentNode;
        found = true;
      } else if (val < currentNode.val) {
        parent = currentNode;
        currentNode = currentNode.left;
      } else {
        parent = currentNode;
        currentNode = currentNode.right;
      }
    }

    console.log("We found the node");
    console.log('parent node', parent);

    // helper variable which returns true if the node we've removing is the left
    // child and false if it's right
    const nodeToRemoveIsParentsLeftChild = parent.left === nodeToRemove;

    // if nodeToRemove is a leaf node, remove it
    if (nodeToRemove.left === null && nodeToRemove.right === null) {
      if (nodeToRemoveIsParentsLeftChild) parent.left = null;
      else parent.right = null
    }
  }

}

let tree = new BST(6);
tree.insert(2);
tree.insert(10);
tree.delete(2);

console.log('tree', tree)

export {
  BST
}
