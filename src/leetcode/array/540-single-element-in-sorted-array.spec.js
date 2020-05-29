import {
  singleNonDuplicateBruteForce,
  singleNonDuplicate
} from './540-single-element-in-sorted-array';

describe('single in sorted array test case', () => {

  it('brute force', () => {
    expect(singleNonDuplicateBruteForce([1,1,2,3,3,4,4,8,8])).toEqual(2);
    expect(singleNonDuplicateBruteForce([3,3,7,7,10,11,11])).toEqual(10);
  });

  // it('test', () => {
  //   expect(singleNonDuplicate([1,1,2,3,3,4,4,8,8])).toEqual(2);
  //   expect(singleNonDuplicate([3,3,7,7,10,11,11])).toEqual(10);
  // });

});
