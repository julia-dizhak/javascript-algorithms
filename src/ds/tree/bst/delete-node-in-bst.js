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
    } else if (nodeToRemove.left !== null && nodeToRemove.right === null) {
      // only has a left child
      if (nodeToRemoveIsParentsLeftChild) {
        parent.left = nodeToRemove.left;
      } else {
        parent.right = nodeToRemove.left;
      }
    } else if (nodeToRemove.left === null && nodeToRemove.right !== null) {
      // only has a right child
      if (nodeToRemoveIsParentsLeftChild) {
        parent.left = nodeToRemove.right;
      } else {
        parent.right = nodeToRemove.right;
      }
    } else {
      // has 2 children
      const rightSubTree = nodeToRemove.right;
      const leftSubTree = nodeToRemove.left;
      // sets parent nodes respective child to the right sub tree
      if (nodeToRemoveIsParentsLeftChild) {
        parent.left = rightSubTree;
      } else {
        parent.right = rightSubTree;
      }

      // find the lowest free space on the left side of the right sub tree
      // and add the leftSubtree
      let currentLeftNode = rightSubTree;
      let currentLeftParent;
      let foundSpace = false;
      while (!foundSpace) {
        if (currentLeftNode === null) foundSpace = true;
        else {
          currentLeftParent = currentLeftNode;
          currentLeftNode = currentLeftNode.left;
        }
      }
      currentLeftParent.left = leftSubTree;
      return 'the node was successfully deleted'
    }
  }

}

let tree = new BST(6);
tree.insert(2);
tree.insert(1);
tree.insert(0);
tree.insert(3);
tree.insert(10);
tree.insert(11);
tree.insert(12);

// case if node is leaf
//tree.delete(0); // left
//tree.delete(3); // right

// case is node has one child
//tree.delete(1) // left
//tree.delete(11) // right

// case 2 children
//tree.delete(2);

//console.log('tree', tree)

export {
  BST
}
