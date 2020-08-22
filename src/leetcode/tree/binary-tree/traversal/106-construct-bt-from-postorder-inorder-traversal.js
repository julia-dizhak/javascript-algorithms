/*
Leetcode
106 Given inorder and postorder traversal of a tree, construct the binary tree.
medium

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]

Return the following binary tree:
    3
   / \
  9  20
    /  \
   15   7
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/*
Approach Recursion

Example [2,1,3], [2,3,1]
Intuition
1) We first find the last node in postOrder. The last node is '1', we know this value
is root as root always appear in the end of postorder traversal.

2) We search “1” in inOrder to find left and right subtrees of root. Everything on
left of “1” in inOrder is in left subtree and everything on right is in right subtree.

3) We recur the above process for following two.
Make the created tree leftInorder, leftPostorder as left child of root.
Make the created tree rightInorder, rightPostorder as right child of root.

Algorithm
The root is at the end of postorder
inorder is of the form [...leftinorder, root, ...rightinorder]
postorder is of the form [...leftpostorder, ...rightpostorder, root]
leftinorder.length === leftpostorder.length
rightinorder.length === rightpostorder.length

The code is clean and short. However, if you give this implementation during an
interview, there is a good chance you will be asked, "can you improve/optimize
your solution?"

Why? Take a look at Line A, Line B and Line C.
Line A takes O(N) time.
Line B and C takes O(N) time and extra space.

Thus, the overall running time and extra space is O(N^2).
So this implementation has a very bad performance, and you can avoid it.

time is O(N^2)
space is O(N^2)
*/
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function buildTreeUseRecursion(inorder, postorder) {
  if (inorder.length === 0) return null;
  const rootNode = new TreeNode(postorder[postorder.length-1]);
  const rootNodeIndex = inorder.indexOf(rootNode.val); // line A

  const leftInorder = inorder.slice(0, rootNodeIndex);
  const rightInorder = inorder.slice(rootNodeIndex + 1);
  const leftPostorder = postorder.slice(0, leftInorder.length);
  const rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1);

  if (leftInorder.length === 0) {
    rootNode.left = null
  } else {
    rootNode.left = buildTreeUseRecursion(leftInorder, leftPostorder); // line B
  }

  if (rightInorder.length === 0) {
    rootNode.right = null
  } else {
    rootNode.right = buildTreeUseRecursion(rightInorder, rightPostorder); // line C
  }
  return rootNode;
};

/*
Approach Recursion (other variant)

Example
[9,3,15,20,7]
[9,15,7,20,3]

inorder: left root right [9,3,15,20,7]
postorder: left right root [9,15,7,20,3]

root is 3
      3
    /   \
  9   15 20 7
we can find out root element form postorder, it will be 20
find 20 in inorder traversal from left side is 15, from right side is 7
          20
        /   \
       15    7

The idea
1) Inorder: <LEFT><ROOT><RIGHT>, postorder: <LEFT><RIGHT><ROOT>

2) The last element of postorder will always be the root of a subtree.

3) We can further determine its left and right subtree by finding its position
in the inorder array.
*/
function buildTreeUseRecursion1(inorder, postorder) {
  if (inorder.length === 0) return null;
  const root = postorder.pop();
  const rootIndex = inorder.indexOf(root)
  const rootNode = new TreeNode(root);

  // todo why it's right and then left?
  rootNode.right = buildTreeUseRecursion1(inorder.slice(rootIndex + 1), postorder);
  rootNode.left = buildTreeUseRecursion1(inorder.slice(0, rootIndex), postorder);
  return rootNode;
}

/*
Approach Hash indexes of inorder traversal + Recursion

Optimized approach: We can optimize the above solution using hashing (HashMap).
We store indexes of inorder traversal in a hash table. So that search can be done
O(1) time.

To further clarify, if you look at the way the nodes are ordered at the end of
the postorder array you'll see that we encounter the root, then the right subtrees
before encountering the left nodes.
This is because postorder is left -> right -> root, thus when we pop the root from
the back of the postorder array the next available node is a right node therefore
we construct the right subtree first before the left. :)

The solution constantly pops from the end of the postorder traversal and relies
of the fact that postorder is left-right-center. While doing the left first,
you are getting elements from the right side when you are still trying to build
the left tree.

Time is O(n)
Space is O(n) create additional DS hash
*/

var buildTreeUseHash = function(inorder, postorder) {
  let hash = {};
  for (let i = 0; i < inorder.length; i++) {
    hash[inorder[i]] = i
  }
  //console.log('hash', hash)

  function recur(start, end) {
    if (start > end) return null;
    const root = new TreeNode(postorder.pop()); // modifying postorder, is not optimal
    const index = hash[root.val];

    // I first traversal right because of modifying postorder
    root.right = recur(index + 1, end);
    root.left = recur(start, index - 1);
    return root;
  }
  return recur(0, inorder.length - 1)
}

/*
Approach Hash indexes of inorder traversal without pop

Previous solution destroys the postorder list unnecessarily. If I used this
library function, I'd be surprised by the behavior if I noticed the mutation and
might wind up with a difficult to track down bug if I didn't. The updated version
doesn't offer any improvement in this regard. Use an index instead of popping.
*/

var buildTree = function(inorder, postorder) {
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  function recur(inorder, inStart, inEnd, postorder, posStart, posEnd) {
    if (inStart > inEnd || posStart > posEnd) return null;
    const root = new TreeNode(postorder[posEnd]);
    const index = map.get(root.val);

    // example [9,3,15,20,7], [9,15,7,20,3]
    // 3 is root, left is 9, 15,20,7 is right
    // todo
    root.left = recur(inorder, inStart, index - 1, postorder, posStart, posStart + index - inStart - 1);
    root.right = recur(inorder, index + 1, inEnd, postorder, posStart + index - inStart, posEnd - 1)
    return root;
  }

  return recur(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
}

// tests
// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
//const build = buildTreeUseHash([9,3,15,20,7], [9,15,7,20,3])
const build = buildTree([2,1,3], [2,3,1])
//console.log('build tree', build)


/*
check preorder
check the same tree
Also, try build tree from inorder and preorder traversal https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/discuss/758681/java-2-solution-detailed-explanation-with-code

preorder and postorder https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/discuss/759122/Java-2-Solutions-DFS-Linear-Time-or-Easy-to-Understand

BST from Preorder https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/discuss/758443/detailed-explanation-with-code

If you like solution upvote.

*/

export {
  TreeNode,
  buildTreeUseRecursion,
  buildTreeUseRecursion1,
  buildTreeUseHash,
  buildTree
}
