import {
  maxSubArrayBruteForceCubicTime,
  maxSubArrayBruteForce
} from './53-max-contiguous-subarray-sum';

describe('max contiguous subarray sum', () => {
  let arr;
  let maxSum;

  beforeEach(() => {
    arr = [-2,1,-3,4,-1,2,1,-5,4];
    maxSum = 6;
  });

  it('one element', () => {
    expect(maxSubArrayBruteForce([10])).toEqual(10);
  });

  it('brute force cubic solution', () => {
    expect(maxSubArrayBruteForceCubicTime(arr)).toEqual(maxSum);
  });

  it('brute force quadratic time solution', () => {
    expect(maxSubArrayBruteForce(arr)).toEqual(maxSum);
  });

});
