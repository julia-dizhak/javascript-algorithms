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
Approach Recursive
Time is O(n)
space is O(n)
*/
var preorder = function(root, nodes = []) {
  if (root) {
    nodes.push(root.val);
    preorder(root.left, nodes);
    preorder(root.right, nodes);
  }

  return nodes;
};


/*
Approach Stack + Iterative

Depth-first search: preorder traversal <root><left><right>

I find preorder traversal the easiest to implement iteratively.
You can just reuse the dfs algorithm, but make sure you push the children onto
the stack in such a way that the left child is processed before
the right child.

Algorithm
1 visit root
2 visit left sub-tree (visit all nodes left)
3 visit right sub-tree (visit all nodes right)

Intuition
1 Create an empty stack, push root node to the stack
2 Do following while stack is not empty:
  2.1 pop an item from the stack and push it to stack
  2.2 push the right child of popped item to stack.
  2.3 push the left child of popped item to stack.

Complexity
In an average case however, if you are considering a balanced/close-to-balanced tree,
the time complexity is always O(n) as you HAVE to visit each node

Each iteration you're going one level deeper and adding 2 elements (right and
left if they exist) to the stack while popping one node out (the parent one).
It means that at most 1 new element is added as you go 1 level down. Once you reach
the left most node and pop it out you repeat the same procedure for the top node
in the stack -> O(h).
The space complexity was always proportional to the height of the tree.
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

  return result;
};

// Definition for a binary tree node
class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

class BT {
  constructor(val) {
    this.root = new TreeNode(val);
  }

  // iterative approach
  insert(val, root = this.root) {
    const newNode = new TreeNode(val);

    if (root === null) {
      root = newNode;
    }

    let queue = [];
    queue.push(root);

    while (queue.length) {
      let node = queue[0];
      queue.shift();

      if (node.left === null) {
        node.left = newNode;
        break;
      } else {
        queue.push(node.left)
      }

      if (node.right === null) {
        node.right = newNode;
        break;
      } else {
        queue.push(node.right)
      }
    }
  }
}

// tests
// input [1,null,2,3]
// Output: [1,2,3]
// todo
// let tree = new BT(1);
// tree.insert(null);
// tree.insert(2);
// tree.insert(3);
// tree = JSON.parse(JSON.stringify(tree)).root;
// console.log('tree', tree);
// console.log('preorder', preorder(tree));

// let tree1 = new TreeNode(1);
// tree1.right = new TreeNode(2);
// tree1.right.left = new TreeNode(3);
// console.log('tree', tree1);
// const preorder1 = preorder(tree1);
// console.log('preorderTraversal1', preorder1);

var inorderTraversal = function(root, nodes=[]) {
  //debugger
  if (root) {

    inorderTraversal(root.left, nodes);
    nodes.push(root.val);
    inorderTraversal(root.right, nodes);
  }

  return nodes
};



let tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);
// tree.insert(null);
// tree.insert(2);
// tree.insert(3);
// tree = JSON.parse(JSON.stringify(tree)).root;
// console.log('tree', tree);
// console.log('inorderTraversal', inorderTraversal(tree));
// const inorder = inorderTraversal(tree);
// console.log('inorder', inorder); // [1,3,2]

// https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/929/


var buildTree = function(inorder, postorder) {
  const n = postorder.length;
  const root = postorder[n-1];
  console.log('root', root);
  const rootIndex = inorder.indexOf(root);
  console.log('rootIndex', rootIndex);


  debugger
  const leftTree = inorder.slice(0, rootIndex);
  const rightTree = inorder.slice(rootIndex+1);
  console.log('leftTree', leftTree);
  // if (root) {

  // }
};
// const build = buildTree([9,3,15,20,7], [9,15,7,20,3])
// // inorder = [9,3,15,20,7]
// // postorder = [9,15,7,20,3]
// console.log('build tree', build)

export {
  preorder,
  preorderTraversal,
  BT,
  TreeNode
}
