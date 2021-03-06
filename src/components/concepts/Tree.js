import React from 'react';
import Details from '../Details';

// bt
import { BT } from '../../ds/tree/bt/bt';
// bst
import { BinarySearchTree } from '../../ds/tree/bst/api';
//import { BST } from '../../ds/tree/bst/insert-node-in-bst';
import { invertTree } from '../../leetcode/tree/binary-tree/226-invert-binary-tree';
import { BST as BST1 } from '../../ds/tree/bst/delete-node-in-bst';
import { largestTimeFromDigits, containsNearbyAlmostDuplicate, partitionLabels, wordPattern } from '../../leetcode/move';

// traversal
import { preorderTraversal } from '../../ds/tree/bt/traversal/preorder';
import { levelOrder } from '../../ds/tree/bt/traversal/level-order-traversal';
// import { zigzagLevelOrder } from '../../algorithms/tree/bt/traversal/103-level-order-zigzag-traversal';
import { verticalTraversal } from '../../leetcode/tree/binary-tree/traversal/987-vertical-order-traversal';

// problems
// depth
// import { maxDepthRecursion } from '../../leetcode/tree/binary-tree/depth/104-maximum-depth-of-binary-tree';
// import { minDepth } from '../../leetcode/tree/binary-tree/depth/111-min-depth-of-bt';
// import { countNodes } from '../../leetcode/tree/binary-tree/222-count-complete-tree-nodes';
// import { sumNumbers, BT } from '../../leetcode/tree/binary-tree/129-sum-root-to-leaf-numbers';
// import { isSameTree, TreeNode } from '../../leetcode/tree/binary-tree/100-same-tree';

// path sum
import { hasPathSum } from '../../leetcode/tree/binary-tree/path-sum/112-path-sum';

import { buildTreeUseRecursion } from '../../leetcode/tree/binary-tree/traversal/106-construct-bt-from-postorder-inorder-traversal';
import { BT as BT1 , widthOfBinaryTree } from '../../leetcode/tree/binary-tree/max-width-bt';

// contest move
// import { average, kthFactor, longestSubarray } from '../../leetcode/contest/biweekly/29/contest'
// contest
//import { reformatDate, rangeSum, minDifference, subsets } from '../../leetcode/contest/biweekly/30/index';
//import { countOdds, numOfSubarrays } from '../../leetcode/contest/biweekly/31/index';

// contest 32
//import {findKthPositive, minInsertions} from '../../leetcode/contest/biweekly/32/index';

// contest 32
//import { test } from '../../leetcode/contest/biweekly/33/index';

// contest 34
//import { test1 } from '../../leetcode/contest/biweekly/34/index';
// contest 35
//import { test } from '../../leetcode/contest/biweekly/35/index';

// contest 36
//import { test } from '../../leetcode/contest/biweekly/36/index';
// contest 39
import { test } from '../../leetcode/contest/biweekly/39/index';

// codewars
//import { basketWithoutDuplicatesUseReduce } from '../../codewars/arrays/filter-out-duplicates';

// 
//import { setup } from '../../practice-react/life-game/index';


export default function Tree() {
  return (
    <div className="tree">
      <h2>Trees</h2>
      {/* setup(); */}
      <ul id="binary-search-tree">
        <li>
          <Details
            id="test-bt"
            question=""
            //code={test.toString()}
            //code={findKthPositive.toString()}
            //secondCode={minInsertions.toString()}
            //code={buildTreeUseRecursion.toString()}
            //code={verticalTraversal.toString()}
            //secondCode={widthOfBinaryTree.toString()}
            // secondCode={Trie.toString()}
          />
        </li>
        <li>
          <Details
            id="bt-implementation"
            question="BT implementation: .insert(node)"
            solution="insert(node): iterative + Queue"
            complexity=''
            time=""
            space=""
            code={BT.toString()}
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
            id="bt-levelorder"
            question="Level order (bottom level) traversal BT"
            time="O(n)"
            space="O(n)"
            code={levelOrder.toString()}
          />
        </li>

        <li>
          <Details
            id="bt-preorder-traversal"
            question="Preorder traversal BT"
            time=""
            space=""
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
