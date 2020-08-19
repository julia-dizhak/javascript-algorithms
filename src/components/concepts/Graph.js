import React from 'react';
import Details from '../Details';

// problems
// dfs
import { floodFill, floodFillUseHelper } from '../../leetcode/graph/dfs/733-flood-fill';
import { numsSameConsecDiff } from '../../leetcode/graph/dfs/967-numbers-with-same-consecutive-difference';

// bfs
// import { rottingOranges } from '../../leetcode/graph/bfs/994-rotting-oranges';
// import { allPathsSourceTarget } from '../../leetcode/graph/bfs/797-all-paths-from-source-target';
// import { exist } from '../../leetcode/backtracking/79-word-search';
// import { solve } from '../../leetcode/graph/dfs/130-surrounded-regions';

export default function Graph() {
  return (
    <div className="graph">
      <h2>Graph</h2>

      <ul id="graph">
        <li>
          <Details
            id="test"
            question="test"
            code={numsSameConsecDiff.toString()}
            //code={findMin.toString()}
            //secondCode={exist.toString()}
            //thirdSolution={solve.toString()}
          />
        </li>
        <li>
          <Details
            id="graph-dfs-flood-fill"
            question="Flood fill image bitmap algorithm using dfs (Depth-First Search)"
            solution="We can use a function dfs to perform a flood-fill on a target pixel."
            time="O(N), where N is the number of pixels in the image. We might process every pixel"
            space="O(N), the size of the implicit call stack when calling dfs."
            code={floodFill.toString()}
            secondCode={floodFillUseHelper.toString()}
          />
        </li>
      </ul>

  </div>
  );
}
