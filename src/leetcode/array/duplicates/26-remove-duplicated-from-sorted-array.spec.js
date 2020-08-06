import {
  removeDuplicatesTwoPointers,
  removeDuplicates
} from './26-remove-duplicates-from-sorted-array';

describe('single in sorted array test case', () => {
  it('array is undefined or array is empty', () => {
    expect(removeDuplicatesTwoPointers(undefined)).toEqual(-1);
    expect(removeDuplicatesTwoPointers([])).toEqual(-1);
  });

  it('array length is 1', () => {
    expect(removeDuplicatesTwoPointers([0])).toEqual(1);
  });

  it('2 pointers: slow and fast', () => {
    expect(removeDuplicatesTwoPointers([1,1,2])).toEqual(2);
    expect(removeDuplicatesTwoPointers([0,0,1,1,1,2,2,3,3,4])).toEqual(5);
    expect(removeDuplicatesTwoPointers([1,1,2,2,3,3,4])).toEqual(4);
  });

  it('loop', () => {
    expect(removeDuplicates([1,1,2])).toEqual(2);
    expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toEqual(5);
  });

});
