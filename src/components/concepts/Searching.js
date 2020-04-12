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

            {binarySearchRecursive([1, 3, 5, 7, 8, 9], 7)}
            <div aria-hidden="true">
              <h3 className="title">Solution:</h3>
              <div className="complexity">
                Runtime is next.
                We know that linear search on an array of n elements might have to make as many as n guesses.
                You probably already have an intuitive idea that binary search makes fewer guesses than linear search.
                The key idea is that when binary search makes an incorrect guess,
                the portion of the array that contains reasonable guesses is reduced by at least half.
                Every time we double the size of the array, we need at most one more guess.
              </div>
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
