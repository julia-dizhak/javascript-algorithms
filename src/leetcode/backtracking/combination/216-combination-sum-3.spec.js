import {
  //combinationSum3,
  combinationSum3Backtracking as combinationSum3
} from './216-combination-sum-3';

describe('combination sum 3 test case', () => {
  it('k and n given', () => {
    expect(combinationSum3(3,7)).toEqual([[1,2,4]]);
    expect(combinationSum3(3,9)).toEqual([[1,2,6], [1,3,5], [2,3,4]]);
  });

});
