import React from 'react';
import Details from '../Details';

// problems
import { change } from '../../leetcode/dp/518-coin-change-2';

export default function DP() {
  return (
    <div className="dp">
      <h2 id="dp">Dynamic Programming</h2>

      <ul>
        <li>
          <Details
            id=""
            question="test"
            time=""
            space=""
            code={change.toString()}
          />
        </li>

      </ul>

  </div>
  );
}
