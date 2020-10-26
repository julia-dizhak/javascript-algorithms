import {
  //removeDuplicatesTwoPointers as removeDuplicates,
  removeDuplicates,
  removeDupesUseSplice as removeDupes
} from './26-remove-duplicates-from-sorted-array';

describe('single in sorted array test case', () => {

  it('array is undefined or array is empty', () => {
    expect(removeDuplicates(undefined)).toEqual(-1);
    expect(removeDuplicates([])).toEqual(-1);
  });

  it('array length is 1', () => {
    expect(removeDuplicates([0])).toEqual(1);
  });

  it('2 pointers: slow and fast', () => {
    expect(removeDuplicates([1,1,2])).toEqual(2);
    expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toEqual(5);
    expect(removeDuplicates([1,1,2,2,3,3,4])).toEqual(4);
  });

});

describe('remove duplicates from array in-place', () => {
  it('2 pointers: slow and fast', () => {
    expect(removeDupes([1,1,2])).toEqual([1,2]);
    expect(removeDupes([0,0,1,1,1,2,2,3,3,4])).toEqual([0,1,2,3,4]);
    expect(removeDupes([1,1,2,2,3,3,4])).toEqual([1,2,3,4]);
  });

});

