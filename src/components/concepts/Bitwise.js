import React from 'react';
import Details from '../Details';

// problems
import { flipBitByBit, findComplement } from '../../leetcode/bitwise/476-number-complement';
import { isPowerOfTwoIterative } from '../../leetcode/bitwise/231-power-of-two';

export default function BitManipulation() {
  return (
    <div className="bit">
      <h2 id="bit">Bit Manipulation</h2>

      <ul id="bit">
        <li>
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
        <li>
          <Details
            id=""
            question="Given an integer, write a function to determine if it is a power of two"
            solution=""
            time=""
            space=""
            code={isPowerOfTwoIterative.toString()}
          />
        </li>

      </ul>

  </div>
  );
}
