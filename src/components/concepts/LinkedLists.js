import React from 'react';
import Details from '../Details';

import { LinkedList } from '../../ds/linked-list/singly/singly-linked-list';
import { LinkedList as List1 } from '../../leetcode/linked-list/singly/143-reorder-linked-list';
import { reverse } from '../../leetcode/linked-list/singly/206-reverse-linked-list';

export default function LinkedLists() {
  return (
    <div className="number">
      <h2>Linked Lists</h2>

      <h4>Singly-linked List</h4>

      <p className="desc">
        Linked List is an ordered collection of data elements. Linked List can be
        visualized as a chain of nodes, where every nodes points to the next node.
        There are singly linked list, doubly and circular.
      </p>
      <br />

      <ul>
        <li>
          <Details
            id="singly-linked-list"
            question="Singly linked list implementation"
            code={LinkedList.toString()}
          />
        </li>
        <li>
          <p>
            In Singly Linked List each node consists of 2 parts: data and pointer
            (reference) to the next node.
          </p>
          <a
            className="link"
            href="https://github.com/julia-dizhak/javascript-algorithms/blob/master/README.md#singly-linked-list">
              List of problems related to Linked List DS with solutions and time complexity explanation
          </a>

          <Details
            id="singly-linked-list-test"
            question="test"
            //code={List1.toString()}
            secondCode={reverse.toString()}
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
