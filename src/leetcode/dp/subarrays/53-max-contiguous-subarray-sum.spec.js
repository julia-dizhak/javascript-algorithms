import {
  maxSubArrayBruteForceCubicTime as maxSubArray,
  maxSubArrayBruteForce
} from './53-max-contiguous-subarray-sum';

describe('max contiguous subarray sum', () => {
  it('one positive element', () => {
    expect(maxSubArray([1])).toEqual(1);
  });

  it('only 0', () => {
    expect(maxSubArray([0])).toEqual(0);
  });

  it('one negative element', () => {
    expect(maxSubArray([-1])).toEqual(-1);
    expect(maxSubArray([-2147483647])).toEqual(-2147483647);
  });

  it('arr with positive and negatives', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
  });
});
