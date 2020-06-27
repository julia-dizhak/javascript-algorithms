import React from 'react';
import Details from '../Details';

import { BinarySearchTree } from '../../algorithms/tree/bst/binary-search-tree';
import { invertTree } from '../../leetcode/tree/binary-tree/226-invert-binary-tree';

import { Trie } from '../../algorithms/trie/trie';

// traversal
import { preorderTraversal } from '../../algorithms/tree/bt/traversal/preorder';
// problems
// import { countNodes } from '../../leetcode/tree/binary-tree/222-count-complete-tree-nodes';
import { sumNumbers, BT } from '../../leetcode/tree/binary-tree/0-sum-root-to-leaf-numbers';

export default function Tree() {
  return (
    <div className="tree">
      <h2>Trees</h2>

      <ul id="binary-search-tree">
        <li>
          <Details
            id="test-bt"
            question=""
            code={BT.toString()}
            secondCode={sumNumbers.toString()}
            // secondCode={Trie.toString()}
          />
        </li>
        <li>
          <Details
            id="binary-search-tree-operations"
            question="Binary Search Tree: .insert, .contains, height, lowest common ancestor"
            solution=""
            complexity={
              `
                Binary search trees provide logarithmic time for the common operations of lookup, insertion, and deletion in the average case,
                and linear time in the worst case.
                Why is this? Each of those basic operations requires us to find an item in the tree
                and because of the tree structure at each parent node we are branching left or right
                and effectively excluding half the size of the remaining tree.
                This makes the search proportional to the logarithm of the number of nodes in the tree,
                which creates logarithmic time for these operations in the average case.
              `
            }
            time="O(log(n)) in the average case, linear - in worst cases"
            space=""
            code={BinarySearchTree.toString()}
          />
        </li>

        <li>
          <Details
            id="bst-preorder-traversal"
            question="Preorder traversal BST"
            time="recursion: O(log n)"
            space="recursion: O(n)"
            code={preorderTraversal.toString()}
          />
        </li>

        <li>
          <Details
            id="invert-binary-tree"
            question="Invert Binary Tree: approach recursion"
            time="is O(n), since each node in the tree is visited only once"
            space="is O(h) because of recursion, O(h) function calls will be placed on the stack
            in the worst case, where h is the height of the tree"
            code={invertTree.toString()}
          />
        </li>
      </ul>

  </div>
  );
}
