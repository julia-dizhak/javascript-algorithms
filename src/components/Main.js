import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { mergeSortedArrays } from './../algo/arrays/merge-sorted-arrays';

import './main.css';

function Main() {
  return (
    <div className="main">
      <h2>Arrays</h2>
      
      <ul>
        <li>
          <details
            className="details"
            id="is-sorted"
            aria-expanded="false"
            aria-labelledby="label">
            <summary role="button" aria-controls="content">
              <span className="question">
                Question:
                <strong>merge two sorted arrays.</strong>
              </span>
            </summary>

            <div aria-hidden="true">
              <h3 className="title">Solution:</h3>

              <SyntaxHighlighter
                language="javascript"
                // style={dark}
                style={docco}
              >
                {mergeSortedArrays.toString()}
              </SyntaxHighlighter>
            </div>
          </details>
        </li>

      </ul>
  </div>
  );
}

export default Main;
