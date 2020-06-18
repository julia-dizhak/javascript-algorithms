import React from 'react';
import Details from '../Details';

import { floodFill } from '../../leetcode/graph/dfs/733-flood-fill';
import { solve } from '../../leetcode/graph/dfs/733-flood-fill';

export default function Graph() {
  return (
    <div className="graph">
      <h2>Graph</h2>

      <ul id="graph">
        <li>
          <Details
            id="graph-dfs-flood-fill"
            question="Flood fill image bitmap algorithm using dfs (Depth-First Search)"
            solution="We can use a function dfs to perform a flood-fill on a target pixel."
            time="O(N), where N is the number of pixels in the image. We might process every pixel"
            space="O(N), the size of the implicit call stack when calling dfs."
            code={floodFill.toString()}
            secondCode={solve.toString()}
          />
        </li>
      </ul>

  </div>
  );
}
