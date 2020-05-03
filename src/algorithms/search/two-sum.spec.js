import { twoSum, twoSumBruteForce, twoSumUsingMap } from './two-sum';

describe('two sum test case', () => {
  it('empty array', () => {
    expect(twoSum([], 9)).toEqual([]);
  });

  it('two sum brute force solution', () => {
    expect(twoSumBruteForce([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSumBruteForce([2, 7, 11, 15], 13)).toEqual([0, 2]);
    expect(twoSumBruteForce([3 ,2, 4], 6)).toEqual([1, 2]);
  });

  it('two sum with hash', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([2, 7, 11, 15], 13)).toEqual([0, 2]);
    expect(twoSum([3 ,2, 4], 6)).toEqual([1, 2]);
  });

  it('array with equal values target', () => {
    expect(twoSum([2, 7, 13, 5, 4, 13, 5], 10)).toEqual([3, 6]);
  });

  it('there is no target', () => {
    expect(twoSum([2, 7, 11, 15], 8)).toEqual([]);
  });

  it('two sum using Map', () => {
    expect(twoSumUsingMap([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([2, 7, 13, 5, 4, 13, 5], 10)).toEqual([3, 6]);
  });
});
