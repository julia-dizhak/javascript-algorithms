import React from 'react';
import Details from '../Details';

import { MaxBinaryHeap } from '../../algorithms/heap/max-binary-heap';
// problems

export default function Heap() {
  return (
    <div className="heap" id="heap">
      <h2>Heap</h2>

        <Details
          id=""
          question="test"
          //code={isUgly.toString()}
        />
      <ul>
        <li>
          <Details
            id="max-binary-heap"
            question="Max Binary Heap"
            code={MaxBinaryHeap.toString()}
          />
        </li>

      </ul>

      {/* <ul>
        <li>
          <details
            className="details"
            id="queue-problems"
            aria-expanded="false"
            aria-labelledby="label">
              <summary role="button" aria-controls="content">
                Different problems related to
              </summary>

              <Details
                id=""
                question=""
                time=""
                space=""
                code={.toString()}
              />
          </details>
        </li>
      </ul> */}
  </div>
  );
}
