/**
 * @fileoverview Binary Search Tree implementation in JavaScript
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null; // left pointer
    this.right = null;     // right pointer
  }
}
/**
 * Represents a single node in a BinarySearchTree.
 * @class BinarySearchTree
 */
class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
    this.count = 0; // how many nodes in Tree
  }

  size() {
    return this.count;
  }

  /**
    * Adds some value into the tree. This method traverses the tree to find
    * the correct location to insert the value. Duplicate values are discarded.
    * @param {*} value The value to add to the tree.
    * @returns {void}
  */
  // todo adding an element that already exists should return null.
  insert(value) {
    this.count++;

    /*
      * Create a new node to insert into the tree and store the value in it.
      * This node will be added into the tree.
    */
    let newNode = new Node(value);

    // special case: no nodes in the tree yet
    if (this.root.value === undefined) {
      this.root = newNode
    }

    // search
    const traverseTree = (node) => {
      // if value less than node value, go left
      if (value < node.value) {
        // if no left child, append new node
        if (!node.left) {
          node.left = newNode
        }
        // if left child exists, look left again recursively
        else {
          traverseTree(node.left)
        }
      }
      // if value bigger than node value go right
      else if ( value > node.value) {
        if (!node.right) {
          node.right = newNode
        }
        // look searchTree right again
        else {
          traverseTree(node.right)
        }
      }
    }
    // call search on root node
    traverseTree(this.root);
  }

   /**
    * The contains() method accepts a value as an argument and
    * returns true if the value is present in the tree or false if not.
  */
  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true
      }

      if ( value < currentNode.value) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return false;
  }

  // height of binary tree, should return '-1' when root is NULL.
  height(node = this.root) {
    //debugger;
    if (!node) return -1;
    var leftHeight = this.height(node.left);
    var rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }
}

const tree = new BinarySearchTree();
tree.insert(5)
tree.insert(10)
tree.insert(15)
tree.insert(8)
console.log('tree', tree)
console.log('height', tree.height());
console.log('size', tree.size());

export { BinarySearchTree }


