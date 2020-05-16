import { findMedian, findMedianVariant1 } from './find-median';

describe('findMedian  test case', () => {
  it('middle element in sorted array', () => {
    expect(findMedian([1, 2, 3, 4, 5])).toEqual(3);
    expect(findMedianVariant1([1, 2, 3, 4, 5])).toEqual(3);
  });

  it('unsorted array', () => {
    expect(findMedian([0, 1, 2, 4, 6, 5, 3])).toEqual(3);
    expect(findMedianVariant1([0, 1, 2, 4, 6, 5, 3])).toEqual(3);
    expect(findMedian([6,5,4,3,2,1])).toEqual(3);
  });
});
