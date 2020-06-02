import React from 'react';
import Details from '../Details';

import { LinkedList } from '../../algorithms/linked-lists/singly-linked-list';

export default function LinkedLists() {
  return (
    <div className="number">
      <h2>Linked Lists</h2>

      <h3>Singly-linked List</h3>
      <ul>
        <li>
          <Details
            id="singly-linked-list"
            question="Singly linked list implementation"
            code={LinkedList.toString()}
          />
        </li>
      </ul>

      <h3>Doubly-linked List</h3>
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
      </ul>
  </div>
  );
}
