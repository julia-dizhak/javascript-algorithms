import React from 'react';
import Details from './../Details';
import { factorial } from "../../algorithms/recursion/factorial";

export default function Recursion() {
  return (
    <div className="number">
      <h2>Recursion</h2>

      <ul id="recursion">
        <li>
          <Details
            id="factorial"
            question="Factorial using recursion"
            time="The time complexity of recursive factorial is O(n)"
            space="As there is no extra space taken during the recursive calls, the space complexity is O(n)"
            code={factorial.toString()}
          />
        </li>
      </ul>
  </div>
  );
}
