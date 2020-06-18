import {
  twoSumSorted,
} from './two-sum-sorted';

describe('two sum test case', () => {
  it('empty array', () => {
    // todo
    // expect(() => twoSum([], 9)).toThrowError(TypeError);
    expect(twoSumSorted([], 9)).toEqual([]);
  });

  // it('there are indexes', () => {
  //   expect(twoSumSorted([2, 7, 11, 15], 9)).toEqual([0, 1]);
  //   expect(twoSumSorted([2, 7, 11, 15], 13)).toEqual([0, 2]);
  //   expect(twoSumSorted([2, 3, 4], 6)).toEqual([0, 1]);
  //   expect(twoSumSorted([1, 3, 4, 5], 8)).toEqual([1, 3]);
  // });

  // it('there is no such indexes', () => {
  //   expect(twoSumSorted([1, 2, 3, 9], 8)).toEqual([]);
  //   expect(twoSumSorted([1, 2, 11, 15], 8)).toEqual([]);
  // });
});
