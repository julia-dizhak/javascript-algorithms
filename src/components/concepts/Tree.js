import React from 'react';
import Details from '../Details';
import { BinarySearchTree } from '../../algorithms/tree/binary-search-tree';

export default function Tree() {
  return (
    <div className="number">
      <h2>Trees</h2>

      <ul>
        <li>
          <Details
            id="binary-search-tree"
            question="Binary Search Tree: insert"
            solutionDesc=""
            complexityDesc=""
            runTime=""
            spaceComplexity=""
            code={BinarySearchTree.toString()}
          />
        </li>
      </ul>

  </div>
  );
}
