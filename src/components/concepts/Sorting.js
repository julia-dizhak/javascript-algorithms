import React from 'react';
import Details from './../Details';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { bubbleSort } from '../../algo/sorting/bubble-sort';
import { quickSort } from '../../algo/sorting/quick-sort';
import { findMedian } from '../../algo/sorting/tasks/find-median';

function Sorting() {
  return (
    <div className="sorting">
      <h2>Sorting</h2>

      <ul>
        <li>
          <Details
            id="bubble-sort"
            question="Bubble sort"
            solutionDesc="is a method for sorting arrays by comparing each array element to the element behind it"
            comlexityDesc="Unfortunately bubble sort is pretty slow"
            runTime="O(n^2)"
            spaceTime="O(1)"
            code={bubbleSort.toString()}
          />
        </li>

        <li>
          <Details
            id="quick-sort"
            question="Quick sort"
            solutionDesc="first pick a random number - pivot"
            comlexityDesc={"<p>test</p><p>test</p>"}
            runTime="O(log n), worst case O(n^2)"
            spaceTime="O(log n)"
            code={quickSort.toString()}
          />
        </li>
        {/* "Quick sort’s worst case is O(n2) but that can be avoided
                if we pick random pivot point (choose middle one), so that way it’s big O is O(nlogn).
                It’s space complexity is O(log n)." */}

        {/* other tasks */}
        <li>
          <Details
            id="quick-sort"
            question="Quick sort"
            solutionDesc="first pick a random number - pivot"
            comlexityDesc={"<p>test</p><p>test</p>"}
            runTime="O(log n), worst case O(n^2)"
            spaceTime="O(log n)"
            code={quickSort.toString()}
          />
          <details
            className="details"
            id="find-median"
            aria-expanded="false"
            aria-labelledby="label">
            <summary role="button" aria-controls="content">
              <span className="question">
                Question:&nbsp;
                <strong>Find a median</strong>
              </span>
            </summary>

            <div aria-hidden="true">
              <h3 className="title">Solution:</h3>
              <p>
                The median of a list of numbers is essentially it's middle element after sorting.
                The same number of elements occur after it as before.
              </p>
              <SyntaxHighlighter
                language="javascript"
                style={docco}
              >
                {findMedian.toString()}
              </SyntaxHighlighter>

            </div>
          </details>
        </li>
      </ul>
  </div>
  );
}

export default Sorting;
