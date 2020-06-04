import React from 'react';
import Details from './../Details';

import { factorial } from '../../algorithms/recursion/factorial';
import { fib, fibIterative } from '../../algorithms/recursion/fibonacci';

export default function Recursion() {
  return (
    <div className="number">
      <h2 id="recursion">Recursion</h2>

      <ul>
        <li>
          <Details
            id="factorial"
            question="Factorial using recursion"
            time="The time complexity of recursive factorial is O(n)"
            space="As there is no extra space taken during the recursive calls, the space complexity is O(n)"
            code={factorial.toString()}
          />
        </li>

        <li>
          <Details
            id="fibonacci"
            question="Fibonacci Number: approach recursion, iterative solution"
            complexity={
              `
              Recursion is the slowest way to solve the Fibonacci Sequence because it takes exponential time.
              We need space proportionate to N to account for the max size of the stack, in memory.
              This stack keeps track of the function calls to fib(N).
              This has the potential to be bad in cases
              hat there isn't enough physical memory to handle the increasingly growing stack,
              leading to a StackOverflowError.
              `
            }
            time="with recursion O(2^n)"
            space="with recursion O(N)"
            code={fib.toString()}
            secondCode={fibIterative.toString()}
          />
        </li>
      </ul>
  </div>
  );
}
