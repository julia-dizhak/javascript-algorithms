import { binarySearchRecursive, binarySearch, balancedSums } from './binary-search';

describe('binary search using while loop test case', () => {

  it('find a target in array', () => {
    const arr = [1, 3, 5, 7, 8, 9];
    expect(binarySearch(arr, 5)).toEqual(true);
    expect(binarySearch(arr, 6)).toEqual(false);
  });

  it('find a target in array of first 25 primes', () => {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    expect(binarySearch(primes, 73)).toEqual(true);
    expect(binarySearch(primes, 6)).toEqual(false);
  });
});

describe('binary search recursive solution', () => {

  it('find a target in array', () => {
    const a = [1, 3, 5, 7, 8, 9];
    expect(binarySearchRecursive(a, 5)).toEqual(true);
    expect(binarySearchRecursive(a, 6)).toEqual(false);
  })

  it('find a target in array of first 25 primes', () => {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    expect(binarySearchRecursive(primes, 73)).toEqual(true);
    expect(binarySearchRecursive(primes, 6)).toEqual(false);
  });
});

// todo move
describe('balancedSums solution', () => {

  it('', () => {
    const a = [5, 6, 8, 11];
    expect(balancedSums(a)).toEqual('YES');
    expect(balancedSums([1])).toEqual('YES'); // separate test
    expect(balancedSums([1,2,3])).toEqual('NO');
    expect(balancedSums([1,2,3,3])).toEqual('YES');
    expect(balancedSums([0,0,2,0])).toEqual('YES');

    expect(balancedSums([2,0,0,0])).toEqual('YES');
  })

});
