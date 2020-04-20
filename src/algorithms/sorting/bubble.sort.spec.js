import { bubbleSort } from './bubble-sort';

describe('bubbleSort test case', () => {
  it('empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('unsorted array 1', () => {
    expect(bubbleSort([1, 10, 90, 23, 91, 81])).toEqual([1, 10, 23, 81, 90, 91]);
  });

  it('unsorted array 2', ()=> {
    // count should be 3
    expect(bubbleSort([4,3,1,2])).toEqual([1,2,3,4]);
  });

  it('unsorted array 2', ()=> {
    // count should be 3
    expect(bubbleSort([3,7, 6, 9, 1, 8, 10, 4, 2, 5])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
