import {
  // singleNumber2,
  // singleNumberUseHash as singleNumber2,
  // singleNumberUseSort as singleNumber2,
  // singleNumberUseSortVariant2 as singleNumber2,
  singleNumber2TimeOccurrence as singleNumber2
}  from './137-single-number-2';

describe('single number test case ', () => {
  it('only one element distinct in the array', () => {
    expect(singleNumber2([2,2,3,2])).toEqual(3);
    expect(singleNumber2([0,1,0,1,0,1,99])).toEqual(99);
    expect(singleNumber2([5,1,0,1,1,0,0,2,2,2])).toEqual(5);
    expect(singleNumber2([5,5,5,8])).toEqual(8);
    expect(singleNumber2([12,1,12,3,12,1,1,2,3,2,2,3,7])).toEqual(7);
  });
});
