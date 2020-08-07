import { bubbleSort , bubbleSortDisplayCount, bubbleSortTwoForLoops, bubbleSortModified } from './bubble-sort';
import { selectionSort } from './selection-sort';
import { mergeSort, bottomUpMergeSort } from './merge-sort';
import {
  quickSort, quickSortUseRandomPivot,
  quickSortHoare, quickSortHoare1
} from './quick-sort';
import {
  // insertionSort,
  insertionSortVariant2 as insertionSort
} from './insertion-sort';
import { shellSort } from './shell-sort';
import { heapSort } from './heap-sort';

describe('sorting array test case', () => {
  let arr;
  let sortedArr;
  let a;
  let sorted;

  beforeEach(() => {
    arr = [1, 10, 90, 23, 91, 81];
    sortedArr = [1, 10, 23, 81, 90, 91];
    a = [
      1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92
    ];
    sorted = [
      1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643
    ]
  });

  it('empty array', () => {
    expect(bubbleSort([])).toEqual([]);
    expect(selectionSort([])).toEqual([]);
    expect(quickSort([])).toEqual([]);
    expect(mergeSort([])).toEqual([]);
    expect(insertionSort([])).toEqual([]);
  });

  it('array with on element', () => {
    expect(bubbleSort([1])).toEqual([1]);
    expect(selectionSort([1])).toEqual([1]);
    expect(quickSort([1])).toEqual([1]);
    expect(mergeSort([1])).toEqual([1]);
    expect(insertionSort([1])).toEqual([1]);
  });

  it('array with 2 elements', ()=> {
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
    expect(selectionSort([2,1])).toEqual([1,2]);
    expect(quickSort([2, 1])).toEqual([1, 2]);
    expect(mergeSort([2, 1])).toEqual([1, 2]);
    expect(insertionSort([2, 1])).toEqual([1, 2]);

    // shell sort
    let shellA = [2, 1];
    shellSort(shellA);
    expect(shellA).toEqual([1, 2]);
  });

  it('bubble sort unsorted array variant 1', () => {
    expect(bubbleSort(arr)).toEqual(sortedArr);
    expect(bubbleSortTwoForLoops([1, 10, 90, 23, 91, 81])).toEqual([1, 10, 23, 81, 90, 91]);
    expect(bubbleSortTwoForLoops([1, 10, 20, 30, 41, 81])).toEqual([1, 10, 20, 30, 41, 81]);
  });

  it('bubble sort modified omega time', () => {
    expect(bubbleSortModified([1, 10, 20, 30, 41, 81])).toEqual([1, 10, 20, 30, 41, 81]);
  });

  it('bubble sort display count', () => {
    expect(bubbleSortDisplayCount([4,3,1,2])).toEqual(5);
    expect(bubbleSortDisplayCount([1,2,3,4])).toEqual(0);
  });

  it('merge sort unsorted array variant 1', () => {
    expect(mergeSort(arr)).toEqual(sortedArr);
    expect(mergeSort(a)).toEqual(sorted);
    expect(mergeSort([5, 2, 1, 3, 6, 4])).toEqual([1, 2, 3, 4, 5, 6]);

    // todo stack exceed
    // expect(mergeSortImprove([5, 2, 1, 3, 6, 4])).toEqual([1, 2, 3, 4, 5, 6]);

    expect(bottomUpMergeSort([5, 2, 1, 3, 6, 4])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('selection sort for unsorted arrays', ()=> {
    expect(selectionSort(arr)).toEqual(sortedArr);
    expect(selectionSort(a)).toEqual(sorted);
  });

  it('quick sort for unsorted arrays', ()=> {
    expect(quickSort(arr)).toEqual(sortedArr);
    expect(quickSort(a)).toEqual(sorted);

    expect(quickSortUseRandomPivot([5, 2, 1, 3, 6, 4])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(quickSortHoare([5, 2, 1, 3, 6, 4])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(quickSortHoare1([5, 2, 1, 3, 6, 4])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('insertion sort for unsorted arrays', ()=> {
    expect(insertionSort(arr)).toEqual(sortedArr);
    expect(insertionSort(a)).toEqual(sorted);
  });

  it('shell sort for unsorted arrays', () => {
    shellSort(arr);
    expect(arr).toEqual(sortedArr);
  });

  it('heapSort for unsorted arrays', () => {
    let arr = [6,5,3,1,8,7,2,4];
    arr = heapSort(arr);
    expect(arr).toEqual([1,2,3,4,5,6,7,8]);
  });
});
