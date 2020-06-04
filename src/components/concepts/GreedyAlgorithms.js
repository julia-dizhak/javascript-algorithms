import React from 'react';
import Details from '../Details';

// problems
import { minimumAbsoluteDifference } from '../../algorithms/greedy/min-abs-difference';
import { luckBalance } from '../../algorithms/greedy/luck-balance';
import { twoCitySchedCost } from '../../leetcode/greedy/1029-two-city-scheduling';

export default function GreedyAlgorithms() {
  return (
    <div className="greedy">
      <h2 id="greedy">Greedy Algorithms</h2>

      <ul>
        <li>
          <Details
            id="greedy-two-city-scheduling"
            question="Two city Scheduling"
            solution=""
            complexity=""
            time=""
            space=""
            code={twoCitySchedCost.toString()}
          />
        </li>

        <li>
          <Details
            id="greedy-min-absolute-difference"
            question="Minimum absolute difference in an array"
            solution="We define the absolute difference between two elements a[i] and a[j] (where i!=j), to be the absolute value of a[i] - a[j]."
            code={minimumAbsoluteDifference.toString()}
          />
        </li>

        <li>
          <Details
            id="greedy-luck-balance"
            question="Luck Balance"
            code={luckBalance.toString()}
          />
        </li>
      </ul>

  </div>
  );
}
