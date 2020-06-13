import {
  majorityElement,
  majorityElementBruteForce,
  majorityMooreVoting,
  majorityElementSorting,
} from './169-majority-element';

describe('majority element ', () => {
  it('empty array', () => {
    expect(majorityElementBruteForce([])).toEqual(-1);
  });

  it('one element array', () => {
    expect(majorityElementBruteForce([1])).toEqual(1);
  });

  it('brute force', () => {
    expect(majorityElementBruteForce([2, 2, 2, 4, 7, 9, 6, 5, 66])).toEqual(-1);
    expect(majorityElementBruteForce([3,2,3])).toEqual(3);
    expect(majorityElementBruteForce([8,8,7,7,7])).toEqual(7);
  });

  it('use hash', () => {
    expect(majorityElement([3,2,3])).toEqual(3);
    expect(majorityElement([8,8,7,7,7])).toEqual(7);
  });

  it('voting algorithm', () => {
    expect(majorityMooreVoting([3,2,3])).toEqual(3);
    expect(majorityMooreVoting([8,8,7,7,7])).toEqual(7);
  });

  it('sort number in array', () => {
    expect(majorityElementSorting([3,2,3])).toEqual(3);
    expect(majorityElementSorting([8,8,7,7,7])).toEqual(7);
  });

});
