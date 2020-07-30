import React from 'react';
import Details from '../Details';

// problems
import { minimumAbsoluteDifference } from '../../algorithms/greedy/min-abs-difference';
import { luckBalance } from '../../algorithms/greedy/luck-balance';
import { twoCitySchedCost, twoCitySchedCostSortAbs } from '../../leetcode/greedy/1029-two-city-scheduling';
import { leastInterval } from '../../leetcode/greedy/621-task-scheduler';


export default function GreedyAlgorithms() {
  return (
    <div className="greedy">
      <h2 id="greedy">Greedy Algorithms</h2>

      <Details
        id="test"
        code={leastInterval.toString()}
      />
      <ul>
        <li>
          <Details
            id="greedy-two-city-scheduling"
            question="Two city Scheduling"
            solution={`
            There are 2N people a company is planning to interview.
            The cost of flying the i-th person to city A is costs[i][0],
            and the cost of flying the i-th person to city B is costs[i][1].

            Return the minimum cost to fly every person to a city such
            that exactly N people arrive in each city.
            `}
            time="O(NlogN) because of sorting of input data"
            space="O(1) since it's a constant space solution"
            code={twoCitySchedCost.toString()}
            secondCode={twoCitySchedCostSortAbs.toString()}
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
