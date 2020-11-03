import React from 'react';
import Details from '../Details';

import { LinkedList } from '../../ds/linked-list/singly/singly-linked-list';
//import { LinkedList as List1 } from '../../leetcode/linked-list/singly/143-reorder-linked-list';
// problems
//import { reverse, sumOfLeftLeaves } from '../../leetcode/linked-list/singly/206-reverse-linked-list';
//import { getDecimalValueBinary } from '../../leetcode/linked-list/singly/1290-convert-binary-number-in-linked-list-to-integer';
import { insertionSortList } from '../../leetcode/linked-list/singly/sort/147-insertion-sort-list';

export default function LinkedLists() {
  return (
    <div className="number">
      <h2>Linked Lists</h2>

      <p className="desc">
        Linked List is an ordered collection of data elements. Linked List can be
        visualized as a chain of nodes, where every nodes points to the next node.
        There are singly linked list, doubly and circular.
      </p>
      <br />

      <h4>Singly-linked List</h4>
      <p className="desc">
        In Singly Linked List each node consists of 2 parts: data and pointer
        (reference) to the next node.
      </p>
      <br />

      <a
        className="link"
        href="https://github.com/julia-dizhak/javascript-algorithms/blob/master/README.md#singly-linked-list">
        List of problems related to Linked Lists with solutions and time complexity explanation
      </a>
      <ul>
        <li>
          <Details
            id="singly-linked-list"
            question="Singly linked list implementation"
            code={LinkedList.toString()}
          />
        </li>
        <li>
          <Details
            id="singly-linked-list-test"
            question="test"
            code={insertionSortList.toString()}
            //secondCode={reverse.toString()}
            //thirdSolution={sumOfLeftLeaves.toString()}
          />
        </li>
      </ul>

      {/* <h4>Doubly-linked List</h4>
      <ul>
        <li>
          ...
        </li>
      </ul>

      <h6>Problems</h6>
      <ul>
        <li>
          ...
        </li>
      </ul> */}
  </div>
  );
}
