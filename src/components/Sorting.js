import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { bubbleSort } from './../algo/sorting/bubble-sort';

function Sorting() {
  return (
    <div className="main">
      <h2>Sorting</h2>

      <ul>
        <li>
          <details
            className="details"
            id="bubble-sort"
            aria-expanded="false"
            aria-labelledby="label">
            <summary role="button" aria-controls="content">
              <span className="question">
                Question:&nbsp;
                <strong>bubble sort</strong>
              </span>
            </summary>

            <div aria-hidden="true">
              <h3 className="title">Solution:</h3>
              <p>is a method for sorting arrays by comparing each array element to the element behind it</p>

              <SyntaxHighlighter
                language="javascript"
                style={docco}
              >
                {bubbleSort.toString()}
              </SyntaxHighlighter>
              <p>
              Unfortunately bubble sort is pretty slow
              worst scenario a run time is O(n^2),
              space is O(1)
              </p>
            </div>
          </details>
        </li>
      </ul>
  </div>
  );
}

export default Sorting;
