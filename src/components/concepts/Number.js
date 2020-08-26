import React from 'react';
import Details from './../Details';
import { power } from '../../ds/number/power';
import { swap, swapUseTemp } from '../../ds/number/swap';

// problems
// import { countPrimes } from '../../leetcode/number/204-count-primes';
// import { isUgly } from '../../leetcode/number/263-ugly-number'
// import { nthUglyNumber } from '../../leetcode/number/264-ugly-number-2'
// import { addDigits, addDigitsUseRecursion } from '../../leetcode/math/258-add-digits'
// import { titleToNumber } from '../../leetcode/math/171-excel-sheet-column-number';
// import { distributeCandies } from '../../leetcode/math/1103-distribute-candies-to-people';

export default function Number() {
  return (
    <div className="number">
      <h2>Numbers / Math</h2>

      <p className="desc">
        Below you can find problems related to Math
      </p>
      <br />

      <a
        className="link"
        href="https://github.com/julia-dizhak/javascript-algorithms#math--number">
          List of Math problems related with solutions and time complexity explain
      </a>

      <ul id="number">
        <li>
          <Details
            id="number-test"
            question="test"
            //code={addDigits.toString()}
            //code={addDigits.toString()}
          />

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
