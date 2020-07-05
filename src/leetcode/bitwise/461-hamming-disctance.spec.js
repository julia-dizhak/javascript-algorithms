import {
  //hammingDistance1 as hammingDistance,
  hammingDistance2 as hammingDistance,

}  from './461-hamming-distance';

describe('hamming distance test case ', () => {
  it('2 integers', () => {
    expect(hammingDistance(1,4)).toEqual(2);
    expect(hammingDistance(1,5)).toEqual(1);
    expect(hammingDistance(5,1)).toEqual(1);
    expect(hammingDistance(6,1)).toEqual(3);
    expect(hammingDistance(0,1)).toEqual(1);
  });
});
