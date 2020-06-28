/*
Implementation BT

insertNode(val) iterative approach

Algorithm:
Step 1: Create a function to insert the given node and pass two arguments to it,
the root node and the data to be inserted.

Step 2: Define a temporary node to store the popped out nodes from the queue for
search purpose.

Step 3: Define a queue to store the nodes of the binary tree.

Step 4: Push the root node inside the queue data structure.

Step 5: Start a while loop and check for the condition that whether the queue is
empty or not, if not empty then go to Step 6, else go to Step 9.

Step 6: Pop out the first node from the queue and store it inside the temporary node.

Step 7: Check, for the current pooped out node, in the binary tree, inside the
while loop, if its left child(in binary tree) is null then call the memory
allocation method for the new node, with its left and right child set as null
and then insert the given node to its new position else push its left child in
the queue data structure.

Step 8: Similarly repeat Step 7 for the right child of the current node in the
binary tree.

Step 9: End of while loop.

Step 10: End of the function.

time is O(log n)
space is O(1)
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined) ? 0 : val;
    this.left = (left === undefined) ? null : left;
    this.right = (right === undefined) ? null : right;
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

    // Do level order traversal until we find
    // an empty place.
    while (queue.length) {
      let node = queue[0];
      queue.shift();

      if (node.left === null) {
        node.left = newNode;
        break;
      } else {
        queue.push(node.left);
      }

      if (node.right === null) {
        node.right = newNode;
        break;
      } else {
        queue.push(node.right)
      }

    }
  }

  // recursion approach
  // insertNode(val, node = this.root) {
  // ...
  // }
}

// todo
// BT recursive approach
// https://www.netjstech.com/2019/03/binary-tree-implementation-in-java-insertion-traversal.html#BinarytreeInsertItr

// tests
// todo doesn't work, case with null
// input [1,null,2,3]
// let tree = new BT(1);
// tree.insert(null);
// tree.insert(2);
// tree.insert(3);
// tree = JSON.parse(JSON.stringify(tree)).root;
// console.log('BT tree', tree);

export {
  BT
}
