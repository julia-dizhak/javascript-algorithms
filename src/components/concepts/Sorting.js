import React from 'react';
import Details from './../Details';
import { bubbleSort } from '../../algorithms/sorting/bubble-sort';
import { quickSort } from '../../algorithms/sorting/quick-sort';
import { selectionSort } from '../../algorithms/sorting/selection-sort';
import { mergeSort, merger } from '../../algorithms/sorting/merge-sort';
import { insertionSort } from '../../algorithms/sorting/insertion-sort';
import { findMedian } from '../../algorithms/sorting/tasks/find-median';

// test factorial

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
            complexityDesc="Unfortunately bubble sort is pretty slow"
            runTime="(n-1) * (n-1) ... = n2 - 2n + 1 = O(n^2), Ω(n^2)"
            spaceComplexity="O(1)"
            code={bubbleSort.toString()}
          />
        </li>

        <li>
          <Details
            id="selection-sort"
            question="Selection sort: get the next smallest element"
            solutionDesc=""
            complexityDesc="Time complexity is n + (n-1) + (n-2) + ... + 1 = n*(n+1)/2 = (n^2 + n)/2 = O(n^2)"
            runTime="O(n^2) quadratic time complexity in all cases, Ω(n^2)"
            spaceComplexity=""
            code={selectionSort.toString()}
          />
        </li>

        <li>
          <Details
            id="insertion-sort"
            question="Insertion sort"
            solutionDesc="Insertion sort is used when number of elements is small. It can also be useful when input array is almost sorted, only few elements are misplaced in complete big array."
            complexityDesc=""
            runTime="O(n^2)"
            spaceComplexity="O(1)"
            code={insertionSort.toString()}
          />
        </li>

        <li>
          <Details
            id="merge-sort"
            question="Merge sort"
            solutionDesc="we could magically sort the left half and sort the right half and repeat it again"
            complexityDesc="It always give us O(n log n) runtime. There is no case than array looks really funky."
            runTime="O(n log n)"
            spaceComplexity="The downside is merging 2 arrays together requires extra space - O(n) space"
            code={mergeSort.toString()}
            secondCode={merger.toString()}
          />
        </li>

        <li>
          <Details
            id="quick-sort"
            question="Quick sort: pick a pivot"
            solutionDesc="first pick a random number - pivot"
            complexityDesc="Quick sort’s worst case is O(n^2) (for example, if list was already sorted) but that can be avoided if we pick random pivot point (choose middle one)"
            runTime="O(n log(n))"
            spaceComplexity="O(log (n))"
            code={quickSort.toString()}
          />
        </li>

        {/* other tasks */}
        <li>
          <Details
            id="find-median"
            question="Find a median"
            solutionDesc="The median of a list of numbers is essentially it's middle element after sorting. The same number of elements occur after it as before."
            runTime=""
            spaceComplexity=""
            code={findMedian.toString()}
          />
        </li>
      </ul>
  </div>
  );
}

export default Sorting;
