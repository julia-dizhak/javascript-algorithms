import { quickSort } from './quick-sort';

describe('quickSort test case', () => {
  it('empty array', () => {
    expect(quickSort([])).toEqual([]);
  });

  it('one element in array', () => {
    expect(quickSort([1])).toEqual([1]);
  });

  it('array with 2 items', () => {
    expect(quickSort([2, 1])).toEqual([1, 2]);
  });

  it('sorted array', () => {
    expect(quickSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('unsorted array variant 1', () => {
    expect(quickSort([1, 10, 90, 23, 91, 81])).toEqual([1, 10, 23, 81, 90, 91]);
  });

  it('unsorted array variant 2', () => {
    expect(quickSort([7,8,7,4,10,3,5])).toEqual([3, 4, 5, 7, 7, 8, 10]);
  });
});
