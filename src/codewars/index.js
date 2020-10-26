import React from 'react';
import Details from '../components/Details';

import { flatten } from './arrays/flatten-array';

export default function Codewars() {
  return (
    <div className="sorting">
      <h2>
        Codewars <br />
      </h2>

      <ul>
        <li>
          <Details
            id="codewars"
            question="Challenge"
            solution=""
            code={flatten.toString()}
          />
        </li>

      </ul>

  </div>
  );
}
