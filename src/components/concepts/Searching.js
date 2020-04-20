import React from 'react';
import Details from './../Details';
import { findIndex } from '../../algo/search/find-index';
import { binarySearchRecursive, binarySearch } from '../../algo/search/binary-search';
import { balancedSum } from '../../algo/search/balanced-sum';
import { twoSum } from "../../algo/search/two-sum";

export default function Searching() {
  return (
    <div className="number">
      <h2>Search</h2>

      <ul>
        <li>
          <Details
            id="is-find-index"
            question="Linear search: find an index of element in array"
            solutionDesc=""
            complexityDesc="The worst case performance scenario for a linear search is that it needs to loop through the entire collection."
            runTime="O(n)"
            spaceComplexity="O(1)"
            code={findIndex.toString()}
          />
        </li>

        <li>
          <Details
            id="binary-search"
            question="Binary search with while and recursion"
            solutionDesc=""
            complexityDesc=""
            runTime="O(log n)"
            spaceComplexity=""
            code={binarySearch.toString()}
            secondCode={binarySearchRecursive.toString()}
          />
        </li>

        <li>
          <Details
            id="search-balanced-sum"
            question="Balanced sum"
            solutionDesc="challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right"
            complexityDesc=""
            runTime="O(n)"
            code={balancedSum.toString()}
          />
        </li>

        <li>
          <Details
            id="search-two-sum"
            question="Two sum using hash"
            solutionDesc="Given an array of integers, return indices of the two numbers such that they add up to a specific target."
            complexityDesc=""
            runTime="O(n)"
            spaceComplexity="O(n). The extra space required depends on the number of items stored in the hash table, which stores exactly nn elements"
            code={twoSum.toString()}
          />
        </li>

      </ul>

  </div>
  );
}
