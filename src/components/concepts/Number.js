import React from 'react';
import Details from './../Details';
import { power } from '../../algorithms/number/power';
import { swap, swapUseTemp } from '../../algorithms/number/swap';

// problems
// import { countPrimes } from '../../leetcode/number/204-count-primes';
import { isUgly } from '../../leetcode/number/263-ugly-number'

export default function Number() {
  return (
    <div className="number">
      <h2>Number / Math</h2>

      <Details
        id=""
        question="test"
        code={isUgly.toString()}
      />
      <ul id="number">
        <li>
          <Details
            id="number-power"
            question="Write a power function"
            code={power.toString()}
          />

          <Details
            id="number-swap"
            question="Swap: 2 variables"
            time="O(1)"
            code={swap.toString()}
            secondCode={swapUseTemp.toString()}
          />
        </li>
      </ul>
  </div>
  );
}
