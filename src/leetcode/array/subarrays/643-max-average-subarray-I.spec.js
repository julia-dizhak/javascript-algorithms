import {
  //findMaxAverageBruteForce as findMaxAverage,
  //findMaxAverage,
  //findMaxAverageUseSlidingWindow as findMaxAverage,
  findMaxAverageCumulativeSum as findMaxAverage
} from './643-max-average-subarray-I';

describe('max average of subarray', () => {
  it('empty array', () => {
    expect(findMaxAverage([], 1)).toEqual(0);
  });

  it('array is not empty', () => {
    expect(findMaxAverage([1,12,-5,-6,50,3], 4)).toEqual(12.75);
    expect(findMaxAverage([1, 12, -5, -6, 50, 3, -30, 25], 4)).toEqual(12.75);
    expect(findMaxAverage([1,2,3,4], 4)).toEqual(2.5);
    expect(findMaxAverage([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)).toEqual(3.6);
  });
});
