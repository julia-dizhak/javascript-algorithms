import React from 'react';
import Details from '../Details';

// problems
import { flipBitByBit, decimalToBinary } from '../../leetcode/bitwise/476-number-complement';
//import { isPowerOfTwoIterative, isPowerOfTwoBitManipulation, isPowerOfTwo } from '../../leetcode/bitwise/power/231-power-of-two';
// import { isPowerOfFour } from '../../leetcode/bitwise/power/342-power-of-four';
// import { isPowerOfThree } from '../../leetcode/bitwise/power/326-power-of-three';
// import { hammingWeight } from '../../leetcode/bitwise/191-number-of-bits';
// import { reverseBits } from '../../leetcode/bitwise/190-reverse-bits';
// import { hasAlternatingBits } from '../../leetcode/bitwise/693-alternating-bits';
// import { singleNumber2 } from '../../leetcode/bitwise/single-number/137-single-number-2';
// import { singleNumber3 } from '../../leetcode/bitwise/single-number/260-single-number-3';
import { getBit, setBit, clearBit } from '../../ds/bitwise/common-bit-tasks';
import { findMaximumXOR } from '../../leetcode/bitwise/421-max-xor-of-2-numbers-in-array';

export default function BitManipulation() {
  return (
    <div className="bit">
      <h2 id="bit">Bitwise operators and bit manipulation</h2>

      <p className="desc">
        Under the hood, numbers are just bits set to 0 or 1.
        Bitwise operators treat their operands as a sequence of 32 bits (zeroes
        and ones), rather than as decimal, hexadecimal, or octal numbers.
        For example, the 9 has a binary representation of 1001.
        Bitwise operators perform their operations on such binary representations,
        but they return standard JavaScript numerical values.
      </p>
      <br />

      <a
        className="link"
        href="https://github.com/julia-dizhak/javascript-algorithms/blob/master/README.md#bitwise-operators">
          List of problems related to Bit manipulations with solutions and time complexity explanation
      </a>

      <ul>
        {/* <Details
          id="test"
          question="test"
          code={isPowerOfThree.toString()}
          //secondCode={singleNumber3.toString()}
        /> */}
        <li>

        </li>
        <li>
          <Details
            id="common-bit-tasks"
            question="Common bit tasks"
            solution="Tasks: getBit(n,i), setBit(n,i), clearBit(n,i)"
            time=""
            space=""
            code={getBit.toString()}
            secondCode={setBit.toString()}
            thirdSolution={clearBit.toString()}
          />
        </li>
        <li>
          <Details
            id="number-complement"
            question="Complement of Base 10 Integer"
            solution="The complement strategy is to flip the bits of its binary representation"
            time="O(1)"
            space="O(1)"
            code={flipBitByBit.toString()}
            secondCode={decimalToBinary.toString()}
          />
        </li>
      </ul>

  </div>
  );
}
