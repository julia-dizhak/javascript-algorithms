import React from 'react';
import Details from './../Details';
import { mergeSortedArrays } from '../../algorithms/array/merge-sorted-arrays';
import { jumpOnClouds } from '../../algorithms/array/tasks/jump-on-clouds';
import { majorityElement, majorityMooreVoting } from '../../leetcode/array/169-majority-element';
import { findJudge } from '../../leetcode/array/997-find-judge';

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
            question="Find judge in the town"
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
            time="O(n) ?"
            space="O(n)"
            code={findJudge.toString()}
            //secondCode={}
          />
        </li>

      </ul>
  </div>
  );
}
