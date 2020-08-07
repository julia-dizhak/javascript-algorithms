import React from 'react';
import Details from './../Details';

// sorting
import { bubbleSort } from '../../ds/sorting/bubble-sort';
import { quickSort } from '../../ds/sorting/quick-sort';
import { selectionSort } from '../../ds/sorting/selection-sort';
import { mergeSort, merger } from '../../ds/sorting/merge-sort';
import { insertionSort } from '../../ds/sorting/insertion-sort';
// import { shellSort } from '../../algorithms/sorting/shell-sort';
import { heapSort } from '../../ds/sorting/heap-sort';

// problems
import { findMedian } from '../../ds/sorting/problems/find-median';

function Sorting() {
  return (
    <div className="sorting">
      <h2>Sorting</h2>

      <ul>
        {/* <Details
          id="sort-test"
          code={heapSort.toString()}
        /> */}

        <li>
          <Details
            id="bubble-sort"
            question="Bubble sort: bubble up the biggest element to the right most position"
            solution="is a method for sorting arrays by comparing each array element to the element behind it"
            complexity="Unfortunately bubble sort is pretty slow"
            time={`
              (n-1) * (n-1) ... = n2 - 2n + 1 = O(n^2).
              The worst case situation is reverse ordered array.
              `
            }
            omega={`
              Ω(n) when array is sorted.
              As the complete array is sorted, your number of swaps will be zero.
              If you do not swaps just quit.
            `}
            space="O(1)"
            code={bubbleSort.toString()}
          />
        </li>

        <li>
          <Details
            id="selection-sort"
            question="Selection sort: move the smallest element to the very left position"
            solution=""
            complexity="n + (n-1) + (n-2) + ... + 1 = n*(n+1)/2 = (n^2 + n)/2 = O(n^2)"
            time="O(n^2) quadratic in all cases, Ω(n^2)"
            space=""
            code={selectionSort.toString()}
          />
        </li>

        <li>
          <Details
            id="insertion-sort"
            question="Insertion sort: compare items on its left and shift if needed"
            solution={`
              Insertion sort is used when number of elements is small.
              It can also be useful when input array is almost sorted,
              only few elements are misplaced in complete big array.
            `}
            complexity="in worst cases number of shifts over that number to the beginning of the array = 1 + 2 + ... + (n-1) = n(n-1)/2 = n^2/2 = n^2"
            time="O(n^2)"
            space="O(1)"
            code={insertionSort.toString()}
          />
        </li>

        <li>
          <Details
            id="merge-sort"
            question="Merge sort"
            solution="we could magically sort the left half and sort the right half and repeat it again"
            complexity="It always give us O(n log n) runtime. There is no case than array looks really funky."
            time="O(n log n)"
            space="The downside is merging 2 arrays together requires extra space - O(n) space"
            code={mergeSort.toString()}
            secondCode={merger.toString()}
          />
        </li>

        <li>
          <Details
            id="quick-sort"
            question="Quick sort: pick a pivot"
            solution="first pick a random number - pivot"
            complexity="Quick sort’s worst case is O(n^2) (for example, if list was already sorted) but that can be avoided if we pick random pivot point (choose middle one)"
            time="O(n log n)"
            space="O(log n)"
            code={quickSort.toString()}
          />
        </li>

        <li>
          <Details
            id="heap-sort"
            question="Heapsort"
            solution=""
            complexity=""
            time="O(nlogn)"
            space="O(1)"
            code={heapSort.toString()}
          />
        </li>

        {/* other tasks */}
        <li>
          <Details
            id="find-median"
            question="Find a median"
            solution="The median of a list of numbers is essentially it's middle element after sorting. The same number of elements occur after it as before."
            time=""
            space=""
            code={findMedian.toString()}
          />
        </li>
      </ul>
  </div>
  );
}

export default Sorting;
