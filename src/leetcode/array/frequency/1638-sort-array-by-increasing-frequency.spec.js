import {
  //frequencySort,
  sortByFrequencyUseArr as frequencySort
} from './1638-sort-array-by-increasing-frequency';

describe('frequencySort test case', () => {
  it('all elements have distinct frequency', () => {
    expect(frequencySort([1,1,2,2,2,3])).toEqual([3, 1, 1, 2, 2, 2]);
  });

  it('some elements have the same frequency', () => {
    expect(frequencySort([2,3,1,3,2])).toEqual([1,3,3,2,2]);
    expect(frequencySort([-1,1,-6,4,5,-6,1,4,1])).toEqual([5,-1,4,4,-6,-6,1,1,1]);
  });
});
