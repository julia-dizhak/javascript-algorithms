import React from 'react';
import Details from '../Details';

// problems
import { maxSubArrayBruteForceCubicTime, maxSubArrayBruteForce } from '../../leetcode/array/53-max-contiguous-subarray-sum';
import { maxProduct } from '../../leetcode/dp/subarrays/152-max-product-subarray';

import { change } from '../../leetcode/dp/518-coin-change-2';
import { numTrees } from '../../leetcode/dp/96-unique-binary-search-trees';
import { uniquePaths } from '../../leetcode/dp/62-unique-paths';
//import { maxProfit } from '../../leetcode/dp/best-time-to-buy-sell/121-best-time-to-buy-sell-stock';
//import { maxProfit } from '../../leetcode/dp/best-time-to-buy-sell/122-best-time-to-buy-sell-stock-ii';
import { climbStairsBruteForce } from '../../leetcode/dp/70-climbing-stairs';
import { mincostTickets } from '../../leetcode/dp/983-min-cost-tickets';

export default function DP() {
  return (
    <div className="dp">
      <h2 id="dp">Dynamic Programming</h2>

      <Details
        id="test"
        code={maxSubArrayBruteForceCubicTime.toString()}
        //code={mincostTickets.toString()}
        //secondCode={climbStairsBruteForce.toString()}
      />
      <ul>
        <li>
          <Details
            id="db-coin-change-2"
            question="Coin change 2: DP and use as outer loop coins array"
            solution={`
            Any DP problem should start from explanation of sub problems.
            The idea is in order to know how many combinations there were for 5,
            we needed to know how many combinations the previous numbers had.
            `}
            time="O(n*m), where n - coins, m - amount(combinations)"
            space="Create an arr of O(amount+1)"
            code={change.toString()}
            secondCode={uniquePaths.toString()}
          />
        </li>

        <li>
          <Details
            id="db-num-trees"
            question="Unique Binary Search Trees"
            time="O(n^2)"
            space="O(n)"
            code={numTrees.toString()}
          />
        </li>

      </ul>

  </div>
  );
}
