import {
  //findMin2,
  //findMin2Linear as findMin2,
  // findMin2Version1 as findMin2,
  findMin2Variant2 as findMin2
} from './154-find-min-in-rotated-sorted-arr-2';

describe('findMin in rotated arr test case', () => {

  it('array with duplicates', () => {
    expect(findMin2([1,3,5])).toEqual(1);
    expect(findMin2([1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1])).toEqual(1);
    expect(findMin2([3,3,3,1])).toEqual(1);
    expect(findMin2([3,4,4,4,4,5,1,2])).toEqual(1);
    expect(findMin2([2,1,1])).toEqual(1);
    expect(findMin2([1,2,2])).toEqual(1);
    expect(findMin2([2,3,4,5,1,1,1])).toEqual(1);
    expect(findMin2([2,3,3,4,5,0,0,1,1])).toEqual(0);
    expect(findMin2([0,0,0,0,0])).toEqual(0);
  });
});
