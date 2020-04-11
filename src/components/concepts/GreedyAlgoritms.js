import React from 'react';
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
          <details
            className="details"
            id="greedy-min-absolute-difference"
            aria-expanded="false"
            aria-labelledby="label">
            <summary role="button" aria-controls="content">
              <span className="question">
                Question:&nbsp;
                <strong>Minimum Absolute Difference in an Array</strong>
                <p>
                Consider an array of integers, arr = [arr[0], ... , arr[n-1]].
                We define the absolute difference between two elements a[i] and a[j] (where i!=j),
                to be the absolute value of a[i] - a[j].
                Given an array of integers,
                find and print the minimum absolute difference between any two elements in the array.
                </p>
                <ul className="unorderedList">
                  <li>sort</li>
                  <li>consider diff between the first pair as min</li>
                  <li>compare all "consecutive pair min" with the one in step2 to get the least min.</li>
                </ul>
              </span>
            </summary>

            <div aria-hidden="true">
              <h3 className="title">Solution:</h3>
              <SyntaxHighlighter
                language="javascript"
                style={docco}
              >
                {minimumAbsoluteDifference.toString()}
              </SyntaxHighlighter>
            </div>
          </details>
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
