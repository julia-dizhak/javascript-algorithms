import {
  singleNonDuplicateBruteForce, singleNonDuplicateBruteForceVariant2,
  singleNonDuplicateBinarySearch
} from './540-single-element-in-sorted-array';

describe('single in sorted array test case', () => {

  it('brute force', () => {
    expect(singleNonDuplicateBruteForce([1,1,2,3,3,4,4,8,8])).toEqual(2);
    expect(singleNonDuplicateBruteForce([3,3,7,7,10,11,11])).toEqual(10);
    expect(singleNonDuplicateBruteForce([1,1,2,2,3,3,4,4,5])).toEqual(5);
  });

  it('brute force', () => {
    expect(singleNonDuplicateBruteForceVariant2([1,1,2,3,3,4,4,8,8])).toEqual(2);
    expect(singleNonDuplicateBruteForceVariant2([3,3,7,7,10,11,11])).toEqual(10);
    expect(singleNonDuplicateBruteForceVariant2([1,1,2,2,3,3,4,4,5])).toEqual(5);
  });

  it('binary search solution', () => {
    expect(singleNonDuplicateBinarySearch([1,1,2,3,3,4,4,8,8])).toEqual(2);
    expect(singleNonDuplicateBinarySearch([3,3,7,7,10,11,11])).toEqual(10);
    expect(singleNonDuplicateBinarySearch([1,1,2,2,3,3,4,4,5])).toEqual(5);
  });

});
