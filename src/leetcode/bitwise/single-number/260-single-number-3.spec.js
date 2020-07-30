import {
  singleNumber3,
  //singleNumber as singleNumber3
  // singleNumberUseHash as singleNumber2,
  // singleNumberUseSort as singleNumber2,
  // singleNumberUseSortVariant2 as singleNumber2,
}  from './260-single-number-3';

describe('single number test case ', () => {
  it('only one element distinct in the array', () => {
    let a = [5, 3] || [3, 5]
    expect(singleNumber3([1,2,1,3,2,5])).toEqual(a);
  });
});
