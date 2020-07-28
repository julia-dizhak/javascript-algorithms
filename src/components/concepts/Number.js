import React from 'react';
import Details from './../Details';
import { power } from '../../algorithms/number/power';
import { swap, swapUseTemp } from '../../algorithms/number/swap';

// problems
// import { countPrimes } from '../../leetcode/number/204-count-primes';
// import { isUgly } from '../../leetcode/number/263-ugly-number'
// import { nthUglyNumber } from '../../leetcode/number/264-ugly-number-2'
// import { addDigits } from '../../leetcode/math/258-add-digits'


export default function Number() {
  return (
    <div className="number">
      <h2>Numbers / Math</h2>

      {/* <Details
        id=""
        question="test"
        code={addDigits.toString()}
      /> */}

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
