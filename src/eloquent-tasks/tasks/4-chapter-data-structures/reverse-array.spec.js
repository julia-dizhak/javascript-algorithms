import {
  reverseArray,
  reverseArrayUsePop,
  reverseArrayInPlace
} from './reverse-array';

describe('reverse an array', () => {
  it('present array', () => {
    expect(reverseArray([0,1,2,3])).toEqual([3,2,1,0]);
    expect(reverseArrayInPlace([1,2,3,4,5])).toEqual([5,4,3,2,1]);
    expect(reverseArrayUsePop(['A','B', 'C'])).toEqual(['C','B','A']);
  })
});
