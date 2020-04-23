import React from 'react';
import Details from './../Details';
import { power } from '../../algorithms/number/power';

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
        </li>
      </ul>
  </div>
  );
}
