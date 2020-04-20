
const node = {
  value: 125,
  left: null,
  right: null
}

// insert
// finding

// can use class here and update es6
class Node {
  constructor(value) {
    this.value = value;
    // left pointer
    this.left = null;
    // right pointer
    this.right = null;
  }
}
// function Node() {
//     this.value = value;
//     // left pointer
//     this.left = null;
//     // right pointer
//     this.right = null;
// }

/**
 * Represents a single node in a BinarySearchTree.
 * @class BinarySearchTree
 */
// function BinarySearchTree() {
//   this.root = null
// }

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
    this.count = 0;
  }

  size() {
    return this.count
  }

  contains(value) {
    let currentNode = this.root;

    if (value === currentNode.value) {
      return true;
    } else if (value < currentNode.value) {
      // if (left === null) {
      //   return false
      // } else {

      // }
    }
  }
}

// BinarySearchTree.prototype = {
//   //constructor: BinarySearchTree,

//   // add
//   insert: function(val) {

//   },

//   // The contains() method accepts a value as an argument and
//   // returns true if the value is present in the tree or false if not.
//   contains: function(value) {
//     //let found = false;
//     const node = this.root;

//     if (value === node) {
//       return true;
//     } else if (value < node) {
//       // if (left === null) {
//       //   return false
//       // } else {

//       // }
//     }
//   },

//   // remove

//   size: function() {

//   }

//   // ...
// }

const tree = new BinarySearchTree();
tree.contains(2)


export { BinarySearchTree }
