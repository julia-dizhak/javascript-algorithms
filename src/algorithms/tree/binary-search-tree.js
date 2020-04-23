/**
 * Binary Search Tree implementation in JavaScript
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
    // count doesn't work correctly with duplicated nodes
    return this.count;
  }

  /**
    * Adds some value into the tree. This method traverses the tree to find
    * the correct location to insert the value. Duplicate values are discarded.
    * @param {*} value The value to add to the tree.
    * @returns {void}
  */
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
        if (node.left === null) {
          node.left = newNode
        }
        // if left child exists, look left again recursively
        else {
          traverseTree(node.left)
        }
      }
      // if value bigger than node value go right
      else if ( value > node.value) {
        if (node.right === null) {
          node.right = newNode
        }
        // look searchTree right again
        else {
          traverseTree(node.right)
        }
      }
      else {
        // adding an element that already exists should return null
        return null
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
  lowestCommonAncestor(
    p, // v1
    q, // v2
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

const tree = new BinarySearchTree();
// need to have specific order
tree.insert(4)
tree.insert(2)
tree.insert(3)
tree.insert(1)
tree.insert(7)
tree.insert(6)


console.log('tree', tree)
tree.lowestCommonAncestor(2,7) // should be 4 it's not correct
console.log('lca', tree.lowestCommonAncestor(2,7));
// console.log('size', tree.size());

export { BinarySearchTree }


