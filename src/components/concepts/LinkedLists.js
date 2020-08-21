import React from 'react';
import Details from '../Details';

import { LinkedList } from '../../ds/linked-list/singly/singly-linked-list';
import { LinkedList as List1 } from '../../leetcode/linked-list/singly/143-reorder-linked-list';

export default function LinkedLists() {
  return (
    <div className="number">
      <h2>Linked Lists</h2>

      <h4>Singly-linked List</h4>
      <ul>
        <li>
          <Details
            id="singly-linked-list"
            question="Singly linked list implementation"
            code={LinkedList.toString()}
          />
        </li>
        <li>
          problems
          <Details
            id="singly-linked-list-test"
            question="test"
            code={List1.toString()}
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
