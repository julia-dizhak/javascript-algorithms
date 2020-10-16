import { 
  //findSumBruteForce as findSum,
  //findSumUseSort as findSum,
  findSum
} from './find-2-numbers-that-add-up-value';

describe('Find Two Numbers that Add up to test case', () => {
  it('an empty array', ()=> {
    expect(findSum([], 0)).toBeFalsy();
  });

  it('length of arr > 2, value is not empty', () => {
    expect(findSum([1,21,3,14,5,60,7,6], 81)).toEqual([21, 60]);
    expect(findSum([1,2,3,4], 5)).toEqual([1, 4]);
    expect(findSum([1,2,3,4], 10)).toBeFalsy();
  });

});
