import {
  reverseArray,
  reverseArrayUsePop,
  reverseArrayInPlace,

  reverseUseRecursion,

  multiplierUseRecursion
} from './reverse-array';

describe('reverse an array', () => {
  it('array is not empty', () => {
    expect(reverseArray([0,1,2,3])).toEqual([3,2,1,0]);
    expect(reverseArrayInPlace([1,2,3,4,5])).toEqual([5,4,3,2,1]);
    expect(reverseArrayUsePop(['A','B', 'C'])).toEqual(['C','B','A']);
  })

  it('solution using recursion', () => {
    expect(reverseUseRecursion([0,1,2,3])).toEqual([3,2,1,0]);
    expect(reverseUseRecursion([1,2,3,4,5])).toEqual([5,4,3,2,1]);
    expect(reverseUseRecursion(['A','B', 'C'])).toEqual(['C','B','A']);
  })
});

describe('multiplier use recursion', () => {
  it('array is not empty', () => {
    expect(multiplierUseRecursion([1,2,3], 1)).toEqual([1,2,3]);
    expect(multiplierUseRecursion([1,2,3], 2)).toEqual([2,4,6]);
  })

});
