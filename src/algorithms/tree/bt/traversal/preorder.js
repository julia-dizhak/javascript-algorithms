/*
Leetcode
144 Binary Tree Preorder Traversal
medium

Given a binary tree, return the preorder traversal of its nodes' values.

Example:
Input: [1,null,2,3]
1
  \
    2
  /
3

Output: [1,2,3]
Follow up: Recursive solution is trivial, could you do it iteratively?
*/

/*
Approach Stack + Recursion

Depth-first search: preorder traversal <root><left><right>

Algorithm
1 visit root
2 visit left sub-tree (visit all nodes left)
3 visit right sub-tree (visit all nodes right)

Intuition
1 Create an empty stack, push root node to the stack
2 Do following while stack is not empty:
  2.1 pop an item from the stack and print it
  2.2 push the right child of popped item to stack.
  2.3 push the left child of popped item to stack.
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  // Initialize the result to an empty array
  let result = [];
  if (root === null) return result;

  let nodeStack = [];

  // We do not push the root node onto the stack if the root node is null.
  // This way we will avoid
  // going into the while loop when the root is null and just return an empty
  // array as the result.
  if (root !== null) {
    nodeStack.push(root);
  }

  while (nodeStack.length) {
    const node = nodeStack.pop();
    // Do the preorder processing
    result.push(node.val);

    // If there is a right child, push it onto the stack.
    if (node.right) nodeStack.push(node.right);
    // If there is a left child, push it onto the stack.
    // when order will be root -> left -> right
    // push last, pop last
    if (node.left) nodeStack.push(node.left);
  }

  //console.log('result', result)
  return result;

};

/*
todo
Approach Iterative

I find preorder traversal the easiest to implement iteratively.
You can just reuse the dfs algorithm, but make sure you push the children onto
the stack in such a way that the left child is processed before
the right child.
...
*/

// Definition for a binary tree node
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

  // iterative approach
  insert(val) {
    const newNode = new TreeNode(val);
    if (this.root === null) {
      this.root = newNode
    }

    let x = this.root;
    let y = null;

    while (x !== null) {
      y = x;
      if (val <= x.val) {
        x = x.left
      } else {
        x = x.right
      }
    }

    // y is leaf
    if (y === null) {
      y = newNode;
    } else if (val <= y.val) {
      y.left = newNode;
    } else {
      y.right = newNode;
    }
  }
}

// tests
// input [1,null,2,3]
// Output: [1,2,3]
let tree = new BST(1);
tree.insert(null);
tree.insert(2);
tree.insert(3);
tree = JSON.parse(JSON.stringify(tree)).root;
console.log('tree', tree);
console.log('preorderTraversal', preorderTraversal(tree));

export { preorderTraversal }


