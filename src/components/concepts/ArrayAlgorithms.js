import React from 'react';
import Details from './../Details';
import { mergeSortedArrays } from '../../algorithms/array/merge-sorted-arrays';
import { jumpOnClouds } from '../../algorithms/array/tasks/jump-on-clouds';
import { majorityElementVariant2 } from '../../leetcode/array/169-majority-element';

export default function ArrayAlgorithms() {
  return (
    <div className="sorting">
      <h2>Array</h2>

      <ul id="array">
        {/* different task */}
        <li>
          <Details
            id="array-jump-on-clouds"
            question="Jump on clouds"
            solution=""
            code={jumpOnClouds.toString()}
          />
        </li>

        <li>
          <Details
            id="merge-two-arrays"
            question="merge two sorted arrays (mergeSort algorithm)"
            solution="Below is just an implementation of mergeSort algorithm"
            time="runtime is O(n log n)"
            space=""
            code={mergeSortedArrays.toString()}
          />
        </li>

        <li>
          <Details
            id="majority-element"
            question="Majority elements"
            solution=""
            time=""
            space=""
            code={majorityElementVariant2.toString()}
          />
        </li>

      </ul>
  </div>
  );
}
