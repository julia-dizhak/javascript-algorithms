import React from 'react';

function Main() {
  return (
    // <CodeArrays />
    // <CodeSoting />
    <div className="main">
      <ul>

        <li>
          <details
            id="is-sorted"
            aria-expanded="false"
            aria-labelledby="label">
            <summary role="button" aria-controls="content">
              <span>Question: <strong>merge two sorted arrays.</strong></span>
            </summary>

            <div aria-hidden="true">
              Algorithm:
              <pre>
                <code id="merge-sorted">
                  lkl;er
                </code>
              </pre>
              <script>$('#merge-sorted').load('static/js/algorithm/array/merge-sorted-arrays.js')</script>
              {/* <pre>Test: <br> <code id="merge-sorted-test"></code></pre>
              <script>$('#merge-sorted-test').load('static/js/algorithm/array/merge-sorted-arrays.test.js')</script> */}
            </div>
          </details>
        </li>

        <li >
          <details
            id="is-find-index"
            aria-expanded="false"
            aria-labelledby="label"
            >
            <summary role="button" aria-controls="content">
              <span> Question:
                <strong>Linear search (find an index in array).</strong>
                In this type of search, a sequential search is made over all items one by one.
                Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection
              </span>
              {/* <span class="complexity">O(n)</span>. */}
            </summary>
            test test
            test
            test
            {/* <div aria-hidden="true">
              <pre><code id="linear-search"></code></pre>
              <script>$('#linear-search').load('static/js/algorithm/array/linear-search.js')</script>
            </div> */}
          </details>
        </li>

      </ul>
    </div>
  );
}

export default Main;
