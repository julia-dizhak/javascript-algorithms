import {
  //findMin,
  findMin1 as findMin
  //findMinBruteForce as findMin
} from './153-find-min-in-rotated-sorted-arr';

describe('findMin in rotated arr test case', () => {

  it('min exists', () => {
    expect(findMin([4,5,6,7,0,1,2])).toEqual(0);
    expect(findMin([3,4,5,1,2])).toEqual(1);
    expect(findMin([2,1])).toEqual(1);
    expect(findMin([1,2])).toEqual(1);
    expect(findMin([2,3,4,5,1])).toEqual(1);
  });
});
