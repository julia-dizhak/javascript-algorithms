import React from 'react';
import Details from './../Details';
import { power } from '../../ds/number/power';
import { swap, swapUseTemp } from '../../ds/number/swap';

// problems
// import { countPrimes } from '../../leetcode/number/204-count-primes';
// import { isUgly } from '../../leetcode/number/263-ugly-number'
// import { nthUglyNumber } from '../../leetcode/number/264-ugly-number-2'
// import { addDigits } from '../../leetcode/math/258-add-digits'
// import { titleToNumber } from '../../leetcode/math/171-excel-sheet-column-number';
import { distributeCandiesUseLoop } from '../../leetcode/math/1103-distribute-candies-to-people';

export default function Number() {
  return (
    <div className="number">
      <h2>Numbers / Math</h2>

      <Details
        id="number-test"
        question="test"
        code={distributeCandiesUseLoop.toString()}
        //code={addDigits.toString()}
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
