import {
  // findKthLargestSort as findKthLargest,
  findKthLargest
} from './215-k-th-largest-element';

describe('kth largest element test case', () => {
  it('kth exist', () => {
    expect(findKthLargest([3,2,1,5,6,4], 2)).toEqual(5);
    expect(findKthLargest([3,2,1], 1)).toEqual(3);
    expect(findKthLargest([3,2,1], 2)).toEqual(2);
    expect(findKthLargest([3,2,3,1,2,4,5,5,6], 4)).toEqual(4);
  });
});
