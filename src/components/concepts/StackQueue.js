import React from 'react';
import Details from '../Details';
import { Stack } from '../../algorithms/stack-queue/stack/stack-using-string';
import { StackObj } from '../../algorithms/stack-queue/stack/stack-using-objects';
import { Queue } from '../../algorithms/stack-queue/queue/queue-using-object';

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

        <li>
          <Details
            id="queue-using-object"
            question="Queue implementation using object"
            code={Queue.toString()}
          />
        </li>
      </ul>

  </div>
  );
}
