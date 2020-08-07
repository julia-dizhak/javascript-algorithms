import React from 'react';
import Details from './../Details';

import { mergeSortedArrays } from '../../ds/arrays/merge-sorted-arrays';
import { clone, cloneIterative, cloneUseLoopFixedSize } from '../../ds/arrays/clone';

// problems
import { jumpOnClouds } from '../../ds/arrays/tasks/jump-on-clouds';
import { majorityElement, majorityMooreVoting } from '../../leetcode/array/majority/169-majority-element';
import { findJudge, findJudgeTwoArrays } from '../../leetcode/array/997-find-judge';
import { maxSubArrayBruteForceCubicTime, maxSubArrayBruteForce } from '../../leetcode/array/53-max-contiguous-subarray-sum';
import { singleNonDuplicateBruteForce, singleNonDuplicateBinarySearch, singleNonDuplicateBinarySearchOnEvenIndexes } from '../../leetcode/array/540-single-element-in-sorted-array';

//import { plusOne } from '../../leetcode/array/66-plus-one';

// duplicates
import { removeDuplicates } from '../../leetcode/array/duplicates/26-remove-duplicates-from-sorted-array';
import { findDuplicate } from '../../leetcode/array/duplicates/287-find-duplicate-number';
import { findAllDuplicates } from '../../leetcode/array/duplicates/find-all-duplicates';

// todo import { QuickUnion } from '../../algorithms/union-find/quick-union';
// todo import { RandomizedSet } from '../../leetcode/hash/380-insert-delete-getrandom-constant-time';

export default function ArrayAlgorithms() {
  return (
    <div className="sorting">
      <h2>Array</h2>

      <Details
        id="test-array"
        code={findDuplicate.toString()}
        secondCode={findAllDuplicates.toString()}
      />

      <ul id="array">
        <li>
          <Details
            id="remove-duplicates-in-sorted-array"
            question="Remove duplicates from sorted array: approach 2 pointers, slow and fast runner"
            time="O(n)"
            space="O(1)"
            code={removeDuplicates.toString()}
          />
        </li>

        <li>
          <Details
            id="array-clone"
            question="Clone arrays"
            code={clone.toString()}
            secondCode={cloneIterative.toString()}
            thirdSolution={cloneUseLoopFixedSize.toString()}
          />
        </li>

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
            id="sinlgle-element-in-sorted-array"
            question="Single element in sorted array: approach brute force, binary search, BS only on even indexes"
            solution="for brute force time is O(n), space is O(1)"
            time="binary search approach O(log n)"
            space="binary search approachO(1)"
            code={singleNonDuplicateBruteForce.toString()}
            secondCode={singleNonDuplicateBinarySearch.toString()}
            thirdSolution={singleNonDuplicateBinarySearchOnEvenIndexes.toString()}
          />
        </li>

        <li>
          <Details
            id="majority-element"
            question="Majority elements: using hash, sort, Voting Moore algorithm"
            solution=""
            time="Moore O(n)"
            space="Moore O(1)"
            code={majorityElement.toString()}
            secondCode={majorityMooreVoting.toString()}
          />
        </li>

        <li>
          <Details
            id="find-judge"
            question="Find judge in the town, approach with one and two arrays"
            solution={
              `
                In a town, there are N people labelled from 1 to N.
                There is a rumor that one of these people is secretly the town judge.
                If the town judge exists, then:
                1 The town judge trusts nobody.
                2 Everybody (except for the town judge) trusts the town judge.
                3 There is exactly one person that satisfies properties 1 and 2.

                You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.
                If the town judge exists and can be identified, return the label of the town judge.
                Otherwise, return -1.
              `
            }
            complexity={`
              Recall that N is number of people, and E is the number of edges (trusts relationships)
              Time complexity is O(E). We need to loop through the E edges in trust,
              and the argument about relationship between N and E still applies.
              Space complexity: O(N) - allocating an array of length N
            `}
            time="O(max(N, E) = O(N+E), because is E >= N-1 => O(E) number of trusts relationship"
            space="O(N) allocating an array of length N"
            code={findJudge.toString()}
            secondCode={findJudgeTwoArrays.toString()}
          />
        </li>

        <li>
          <Details
            id="max-contiguous-subarray-sum"
            question="Max contiguous subarray sum: brute force cubic and quadratic time"
            solution={
              `
                test
              `
            }
            complexity={`
              test
            `}
            time=""
            space=""
            code={maxSubArrayBruteForceCubicTime.toString()}
            secondCode={maxSubArrayBruteForce.toString()}
          />
        </li>

      </ul>
  </div>
  );
}
