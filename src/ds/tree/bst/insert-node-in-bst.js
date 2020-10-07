/*
Leetcode
701 Insert into a Binary Search Tree
medium

You are given the root node of a binary search tree (BST) and a value to insert 
into the tree. Return the root node of the BST after the insertion. It is 
guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as t
he tree remains a BST after insertion. You can return any of them.

Example 1:
Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]
Explanation: Another accepted tree exists as well

Example 2:
Input: root = [40,20,60,10,30,50,70], val = 25
Output: [40,20,60,10,30,50,70,null,null,25]

The below solution is general, for example, I check a case where root equals to 
given tree, but from a problem it's not possible
*/

/*
BST insert a node
Node as class

Approach recursion 
time is O(log n)
space is O(log n)

Approach iterative
Starting from root, each time move to the left or right child. Once we reach a 
leaf node, insert val.
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
    * Approach Recursive 2
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

  /*
  Approach Iterative

  Another way to explain the insertion is that in order to insert a new node in 
  the tree, its key is first compared with that of the root. If its key is less 
  than the root’s, it is then compared with the key of the root’s left child. 
  If its key is greater, it is compared with the root’s right child. 
  
  This process continues, until the new node is compared with a leaf node, and 
  then it is added as this node’s right or left child, depending on its key: 
  if the key is less than the leaf’s key, then it is inserted as the leaf’s left
  child, otherwise as the leaf’s right child.

  Time is O(h) where h is the height of the BST. The height of BST inworts case
  is as much as number of keys in BST. The worst case happens when given keys
  are sorted in asc or desc order and we get a skewed tree.

  For a height balanced BSTs, with each comparison we skip about half of the tree, 
  so that each insertion operation takes time proportional to the logarithm of the 
  number of items n stored in the tree i.e. 
  */
  insertNodeIterative(val, root = this.root) {
    const newNode = new TreeNode(val);
    // test case when root = []
    if (!root) {
      root = newNode;
      return root;
    }

    // start with root node
    let curr = root;
    while (true) {
      if (val < curr.val) {
        if (curr.left !== null) curr = curr.left;
        else {
          curr.left = newNode;
          break;
        }
      } 
      else {
        if (curr.right !== null) curr = curr.right;
        else {
          curr.right = newNode;
          break;
        }
      }
    }

    return root;
  }
}

// tests
//let tree = new BST(2);
// tree.insertNode(1);
// tree.insertNode(3);
// tree.insertNodeIterative(1);
// tree.insertNodeIterative(3);
// tree.insertNodeIterative(4);
// console.log('tree 1', tree);

/*
BST insert a node
Use prototypes and function constructor 
*/
function BST2(value, left, right) {
  this.value = value;
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

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

//let tree2 = new BST2(2);
// insert
//tree2.insert(1).insert(3);
//console.log('tree 2', tree2);

export {
  BST,
  TreeNode
}
