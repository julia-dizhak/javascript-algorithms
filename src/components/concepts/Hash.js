import React from 'react';
import Details from './../Details';

import { twoSum } from "../../algorithms/hash/two-sum";
// problems
// import { prisonAfterNDays } from '../../leetcode/hash/957-prison-cells-after-N-days'

export default function Hash() {
  return (
    <div className="hash">
      <h2>Hash / Hash Table</h2>

        <ul>
          {/* <Details
            id="test"
            question=""
            code={prisonAfterNDays.toString()}
          /> */}
        <li>
          <Details
            id="search-two-sum"
            question="Two sum using hash"
            solution={`
              Given an array of integers, return indices of the two numbers such that they add up to a specific target.
              You may assume that each input has exactly one solution.
              And you may not use the same element twice.
            `}
            time="O(n)"
            space="O(n). The extra space required depends on the number of items stored in the hash table, which stores exactly nn elements"
            code={twoSum.toString()}
          />
        </li>
      </ul>

  </div>
  );
}
