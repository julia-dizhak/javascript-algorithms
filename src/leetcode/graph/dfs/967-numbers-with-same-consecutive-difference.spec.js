import {
  numsSameConsecDiff
} from './967-numbers-with-same-consecutive-difference';

describe('display numbers with same consesutive differences test case', () => {
  it('edge cases', () => {
    expect(numsSameConsecDiff(1,0)).toEqual([1,2,3,4,5,6,7,8,9]);
    expect(numsSameConsecDiff(0,1)).toEqual([0,1,2,3,4,5,6,7,8,9]);
  });

  it('n >= 1, k>=1', () => {
    expect(numsSameConsecDiff(3,7)).toEqual([181,292,707,818,929]);
    expect(numsSameConsecDiff(4,7)).toEqual([1818,2929,7070,8181,9292]);

    expect(numsSameConsecDiff(2,2)).toEqual([13,20,24,31,35,42,46,53,57,64,68,75,79,86,97]);
    expect(numsSameConsecDiff(2,1)).toEqual([10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]);
  });

});
