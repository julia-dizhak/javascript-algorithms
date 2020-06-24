import {
  singleNumber
}  from './136-single-number';

describe('single number test case ', () => {
  it('only one element distinct in the array', () => {
    expect(singleNumber([2,2,3,2])).toEqual(3);
    expect(singleNumber([0,1,0,1,0,1,99])).toEqual(99);
    expect(singleNumber([5,1,0,1,1,0,0,2,2,2])).toEqual(5);
  });
});
