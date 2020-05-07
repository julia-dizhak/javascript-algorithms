import React from 'react';
import Details from './../Details';
import { power } from '../../algorithms/number/power';
import { swap, swapUseTemp } from '../../algorithms/number/swap';
import { flipBitByBit, findComplement } from '../../leetcode/bitwise/476-number-complement';

export default function Number() {
  return (
    <div className="number">
      <h2>Number</h2>

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

          <Details
            id="number-complement"
            question="Complement of Base 10 Integer"
            solution="The complement strategy is to flip the bits of its binary representation"
            time="O(1)"
            space="O(1)"
            code={flipBitByBit.toString()}
            secondCode={findComplement.toString()}
          />
        </li>
      </ul>
  </div>
  );
}
