import React from 'react';
import Details from '../Details';
import { Stack } from '../../algorithms/stack/stack-using-string';
import { StackObj } from '../../algorithms/stack/stack-using-objects';

export default function StackQueue() {
  return (
    <div className="number">
      <h2>Stack and Queue</h2>

      <ul>
        <li>
          <Details
            id="stack-using-string"
            question="Stack implementation using string"
            code={Stack.toString()}
          />
        </li>

        <li>
          <Details
            id="stack-using-object"
            question="Stack implementation using object"
            code={StackObj.toString()}
          />
        </li>
      </ul>

  </div>
  );
}
