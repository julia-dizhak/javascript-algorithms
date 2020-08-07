import {
  twoSumSorted,
} from './two-sum-sorted';

describe('two sum test case', () => {
  it('empty array', () => {
    expect(twoSumSorted([], 9)).toEqual(-1);
  });

  it('there are indexes', () => {
    expect(twoSumSorted([2, 7, 11, 15], 9)).toEqual([1, 2]);
    expect(twoSumSorted([2, 7, 11, 15], 13)).toEqual([1, 3]);
    expect(twoSumSorted([1, 3, 3, 4], 6)).toEqual([2, 3]);
    expect(twoSumSorted([1, 3, 4, 5], 8)).toEqual([2, 4]);
  });

  it('there is no such indexes', () => {
    expect(twoSumSorted([1, 2, 3, 9], 8)).toEqual(-1);
    expect(twoSumSorted([1, 2, 11, 15], 8)).toEqual(-1);
  });
});
