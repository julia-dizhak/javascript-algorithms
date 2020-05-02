import { binarySearchRecursive, binarySearch } from './binary-search';

describe('binary search using while loop test case', () => {
  const arr = [1, 3, 5, 7, 8, 9];
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

  it('binary search with while', () => {
    expect(binarySearch(arr, 5)).toEqual(2);
    expect(binarySearch(arr, 6)).toEqual(-1);
  });

  it('binary search with while loop of first 25 primes', () => {
    expect(binarySearch(primes, 73)).toEqual(20);
    expect(binarySearch(primes, 6)).toEqual(-1);
  });

  it('binary search recursive solution', () => {
    expect(binarySearchRecursive(arr, 5)).toEqual(2);
    expect(binarySearchRecursive(arr, 1)).toEqual(0);
    expect(binarySearchRecursive(arr, 6)).toEqual(-1);
  })

  it('binary search recursive solution for first 25 primes', () => {
    expect(binarySearchRecursive(primes, 73)).toEqual(20);
    expect(binarySearchRecursive(primes, 6)).toEqual(-1);
    expect(binarySearchRecursive(primes, 19)).toEqual(7);
  });

  it('test left+right overflow for arr of 2 elements', () => {
    expect(binarySearch([1,2], 1)).toEqual(0);
    expect(binarySearch([1,2], 2)).toEqual(1);
    expect(binarySearch([1,2], 3)).toEqual(-1)

    expect(binarySearchRecursive([1,2], 1)).toEqual(0)
    expect(binarySearchRecursive([1,2], 2)).toEqual(1);

  });

  it('test left+right overflow for arr of 1 element', () => {
    expect(binarySearch([1], 1)).toEqual(0);
    expect(binarySearch([1], 2)).toEqual(-1);
    expect(binarySearchRecursive([1], 1)).toEqual(0);
    expect(binarySearchRecursive([1], 2)).toEqual(-1);
  });
});
