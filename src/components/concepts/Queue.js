import React from 'react';
import Details from '../Details';

import { Queue as QueueArray } from '../../ds/queue/queue-use-array';
import { Queue as QueueLinkedList, QueueUse2Pointers } from '../../ds/queue/queue-use-linked-list';

// problems related to Queue
//import { CircularQueue } from '../../algorithms/queue/circular-queue';

import { Queue as QueueUse2Stacks } from '../../leetcode/queue/232-queue-with-2-stacks';

export default function Queue() {
  return (
    <div className="queue" id="queue">
      <h2>Queue</h2>

        {/* <Details
          id=""
          question="test"
          code={CircularQueue.toString()}
        /> */}
      <ul>
        <li>
          <Details
            id="queue-use-array"
            question="Queue via array"
            code={QueueArray.toString()}
          />
        </li>
        <li>
          <Details
            id="queue-use-linked-list"
            question="Queue via linked list (1 pointer and 2 pointers)"
            code={QueueLinkedList.toString()}
            secondCode={QueueUse2Pointers.toString()}
          />
        </li>
      </ul>

      <ul>
        <li>
          <details
            className="details"
            id="queue-problems"
            aria-expanded="false"
            aria-labelledby="label">
              <summary role="button" aria-controls="content">
                Different problems related to Queues
              </summary>

              <Details
                id="queue-use-2-stacks"
                question=""
                time=""
                space=""
                code={QueueUse2Stacks.toString()}
              />
          </details>
        </li>
      </ul>
  </div>
  );
}
