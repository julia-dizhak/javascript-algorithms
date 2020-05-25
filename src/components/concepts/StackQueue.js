import React from 'react';
import Details from '../Details';

import { Stack } from '../../algorithms/stack-queue/stack/stack-using-string';
import { Stack as StackArr } from '../../algorithms/stack-queue/stack/stack-use-array';
import { StackObj } from '../../algorithms/stack-queue/stack/stack-using-objects';
import { Queue } from '../../algorithms/stack-queue/queue/queue-using-object';

import { MinStack, MinStackMinPairs } from '../../leetcode/stack/155-min-stack';

export default function StackQueue() {
  return (
    <div className="number">
      <h2>Stack and Queue</h2>

      <h3>Stack</h3>
      <ul>
        <li>
          <Details
            id="stack-use-array"
            question="Stack implementation using array as a storage"
            code={StackArr.toString()}
          />
        </li>
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

      <h3>Queue</h3>
      <ul>
        <li>
          <Details
            id="queue-using-object"
            question="Queue implementation using object"
            code={Queue.toString()}
          />
        </li>
      </ul>

      <h3>Problems</h3>
      <ul>
        <li>
          <details
            className="details"
            id="stack-different-tasks"
            aria-expanded="false"
            aria-labelledby="label">
              <summary role="button" aria-controls="content">
                Different problems related to Stacks
              </summary>

              <Details
                id="min-stack"
                question="Min Stack: approach 2 Stacks, approach minimum pairs"
                time="O(1) for all operation"
                space="O(n)"
                code={MinStack.toString()}
                secondCode={MinStackMinPairs.toString()}
              />
          </details>
        </li>
      </ul>
  </div>
  );
}
