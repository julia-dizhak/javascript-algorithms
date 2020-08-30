import {
  pancakeSort,
  //pancakeSortBruteForce as pancakeSort
} from './969-pancake-sorting';

describe('pancake sorting test case', () => {

  it('do not need flips', () => {
    expect(pancakeSort([1,2,3])).toEqual([]);
    expect(pancakeSort([1])).toEqual([]);
  });

  it('flips needed', () => {
    expect(pancakeSort([3,2,1,4])).toEqual([3]);
    expect(pancakeSort([3,2,4,1])).toEqual([3,4,2,3,2]);
  });

  // different solutions
});
