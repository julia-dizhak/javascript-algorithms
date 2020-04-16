import React from 'react';
import Details from './../Details';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { findIndex } from '../../algo/search/find-index';
import { binarySearchRecursive, binarySearch } from '../../algo/search/binary-search';
import { balancedSum } from '../../algo/search/balanced-sum';

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
                <strong> Linear search: find an index of element in array</strong>
              </span>
            </summary>

            <div aria-hidden="true">
              <h3 className="title">Solution:</h3>
              <div className="complexity">runtime is O(n)</div>
              <SyntaxHighlighter
                language="javascript"
                style={docco}
              >
                {findIndex.toString()}
              </SyntaxHighlighter>

            </div>
          </details>
        </li>

        <li>
          <Details
            id="binary-search"
            question="Binary search with while and recursion"
            solutionDesc=""
            comlexityDesc=""
            runTime="O(log n)"
            spaceTime=""
            code={binarySearch.toString()}
            secondCode={binarySearchRecursive.toString()}
          />
        </li>

        <li>
          <Details
            id="search-balanced-sum"
            question="Balanced sum"
            solutionDesc=""
            comlexityDesc=""
            runTime="O(n)"
            code={balancedSum.toString()}
          />
        </li>
      </ul>

  </div>
  );
}
