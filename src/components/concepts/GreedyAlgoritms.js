import React from 'react';
import Details from './../Details';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { minimumAbsoluteDifference } from '../../algo/greedy/min-abs-difference';
import { luckBalance } from '../../algo/greedy/luck-balance';


export default function GreedyAlgorithms() {
  return (
    <div className="sorting">
      <h2>Greedy Algorithms</h2>

      <ul>
        <li>
          <Details
            id="greedy-min-absolute-difference"
            question="Minimum absolute difference in an array"
            solutionDesc="We define the absolute difference between two elements a[i] and a[j] (where i!=j), to be the absolute value of a[i] - a[j]."
            code={minimumAbsoluteDifference.toString()}
          />
        </li>

        <li>
          <details
            className="details"
            id="greedy-luck-balance"
            aria-expanded="false"
            aria-labelledby="label">
            <summary role="button" aria-controls="content">
              <span className="question">
                Question:&nbsp;
                <strong>Luck Balance</strong>
              </span>
            </summary>

            <div aria-hidden="true">
              <h3 className="title">Solution:</h3>
              <SyntaxHighlighter
                language="javascript"
                style={docco}
              >
                {luckBalance.toString()}
              </SyntaxHighlighter>
            </div>
          </details>
        </li>
      </ul>

  </div>
  );
}
