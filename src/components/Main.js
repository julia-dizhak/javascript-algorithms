import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { mergeSortedArrays } from './../algo/arrays/merge-sorted-arrays';
import Sorting from './concepts/Sorting';
import StringManipulation from './concepts/StringManipulation';

import './main.css';

function Main() {
  return (
    <div className="main">
      <div className="wrapper">
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
                runtime is O(n)
              </div>
            </details>
          </li>
        </ul>

        <Sorting />
        <StringManipulation />
      </div>
  </div>
  );
}

export default Main;
