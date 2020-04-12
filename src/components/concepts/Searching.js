import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { findIndex } from '../../algo/search/find-index';
import { binarySearchRecursive, binarySearch } from '../../algo/search/binary-search';

export default function Searching() {
  return (
    <div className="number">
      <h2>Search</h2>

      <ul>

        <li>
          <details
            className="details"
            id="is-find-index"
            aria-expanded="false"
            aria-labelledby="label">
            <summary role="button" aria-controls="content">
              <span className="question">
                Question:&nbsp;
                <strong>find an index of element in array</strong>
              </span>
            </summary>

            <div aria-hidden="true">
              <h3 className="title">Solution:</h3>
              <SyntaxHighlighter
                language="javascript"
                style={docco}
              >
                {findIndex.toString()}
              </SyntaxHighlighter>
              runtime is O(n)
            </div>
          </details>
        </li>

        <li>
          <details
            className="details"
            id="binary-search"
            aria-expanded="false"
            aria-labelledby="label">
            <summary role="button" aria-controls="content">
              <span className="question">
                Question:&nbsp;
                <strong>Binary search an element in array</strong>
              </span>
            </summary>

            <div aria-hidden="true">
              <h3 className="title">Solution:</h3>
              {/* {binarySearchRecursive([1,2,3,4,5], 2)} */}
              <SyntaxHighlighter
                language="javascript"
                style={docco}
              >
                {binarySearch.toString()}
              </SyntaxHighlighter>
            </div>
          </details>
        </li>
      </ul>

  </div>
  );
}
