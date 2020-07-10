import React from 'react';
import Details from './../Details';

import { findIndex } from '../../algorithms/search/linear/find-index';
import { binarySearchRecursive, binarySearch } from '../../algorithms/search/binary/binary-search';

// problems
import { balancedSum } from '../../algorithms/search/problems/balanced-sum';
import { solutionBinarySearch } from '../../leetcode/search/binary-search/278-first-bad-version';
//import { arrangeCoins } from '../../leetcode/search/binarySearch/441-arrangeCoins';
import { twoSumSorted } from '../../leetcode/array/sum-problems/two-sum-sorted';
import { threeSum } from '../../leetcode/array/sum-problems/15-3sum-problem';

export default function Searching() {
  return (
    <div className="number">
      <h2>Search / Binary search</h2>

        <ul>
          test
          <Details
            id="test"
            question=""
            code={twoSumSorted.toString()}
            secondCode={threeSum.toString()}
          />
        <li>
          <Details
            id="is-find-index"
            question="Linear search: find an index of element in array"
            solution=""
            complexity="The worst case performance scenario for a linear search is that it needs to loop through the entire collection."
            time="O(n)"
            spaceComplexity="O(1)"
            code={findIndex.toString()}
          />
        </li>

        <li>
          <Details
            id="binary-search"
            question="Binary search with loop while and recursion"
            solution="left + right could overflow, correct mid = left + (right - left)/2"
            complexity="For iterative and recursive approach: time is O(log n), but for recursive space is O(log n)"
            time="O(log n)"
            space="O(1)"
            code={binarySearch.toString()}
            secondCode={binarySearchRecursive.toString()}
          />
        </li>

        <li>
          <details
            className="details"
            id="searching-tasks"
            aria-expanded="false"
            aria-labelledby="label">
              <summary role="button" aria-controls="content">
                Different tasks related to Binary search
              </summary>
              <Details
                id="search-balanced-sum"
                question="Balanced sum"
                solution="challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right"
                complexity=""
                time="O(n)"
                code={balancedSum.toString()}
              />

              <Details
                id="first-bad-version"
                question="First Bad version"
                solution={`
                  Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
                  which causes all the following ones to be bad.
                `}
                time="O(log n)"
                space="O(1)"
                code={solutionBinarySearch.toString()}
              />
          </details>
        </li>
      </ul>

  </div>
  );
}
