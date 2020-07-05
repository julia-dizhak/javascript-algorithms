import {
  hammingWeight,
  //hammingWeightLoopFlip as hammingWeight
}  from './191-number-of-bits';

describe('given an integer, count its set bits test case ', () => {
  it('integer exists', () => {
    expect(hammingWeight(-1)).toEqual(32);
    expect(hammingWeight(16)).toEqual(1);
    expect(hammingWeight(5)).toEqual(2);
  });
});
