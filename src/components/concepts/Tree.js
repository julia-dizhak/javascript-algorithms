import React from 'react';
import Details from '../Details';
import { BinarySearchTree } from '../../algorithms/tree/binary-search-tree';
import { myWeeklyMenu } from '../../algorithms/stack/stack-implementation';

export default function Tree() {
  console.log(myWeeklyMenu.storage)
  return (
    <div className="number">
      <h2>Trees</h2>

      {myWeeklyMenu.storage}

      <ul>
        <li>
          <Details
            id="binary-search-tree"
            question="Binary Search Tree"
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
