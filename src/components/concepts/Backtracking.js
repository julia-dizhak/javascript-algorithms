import React from 'react';
import Details from '../Details';

// problems
//import { getPermutation } from '../../leetcode/backtracking/60-permutation-sequence';
import { permutations } from '../../leetcode/backtracking/46-print-all-permutations';
import { combinationSum3 } from '../../leetcode/backtracking/combination/216-combination-sum-3';


export default function Backtracking() {
  return (
    <div className="backtrack">
      <h2 id="backtrack">Backtracking</h2>

      <Details
        id="test"
        //code={permutations.toString()}
        secondCode={combinationSum3.toString()}
      />
      <ul>
        test
        to add find all permutations
      </ul>

  </div>
  );
}
