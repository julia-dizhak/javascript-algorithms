import { binarySearchRecursive, binarySearch } from './binary-search';

describe('binary search test case', () => {

  it('find a target in array', () => {
    const arr = [1, 3, 5, 7, 8, 9]
    expect(binarySearchRecursive(arr, 5)).toEqual(true);
    expect(binarySearchRecursive(arr, 6)).toEqual(false);
  })

});

describe('binary search recursive solution', () => {

  // it('find a target in array', () => {
  //   const a = [1, 3, 5, 7, 8, 9]
  //   expect(binarySearchRecursive(a, 5)).toEqual(true);
  //   expect(binarySearchRecursive(a, 6)).toEqual(false);
  // })

});
