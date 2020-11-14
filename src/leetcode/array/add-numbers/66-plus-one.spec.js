import {
  //addOne,
  plusOne,
  //plusOne1 as plusOne
}  from './66-plus-one';

describe('plus one test case ', () => {
  it('plus one at the end', () => {
    expect(plusOne([1,2,3])).toEqual([1,2,4]);
    expect(plusOne([1,9,3])).toEqual([1,9,4]);
    expect(plusOne([4,3,2,1])).toEqual([4,3,2,2]);
    expect(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])).toEqual([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]);
  });

  it('if element is 9', () => {
    expect(plusOne([1,2,9])).toEqual([1,3,0]);
  });

  it('need to increase an array', () => {
    expect(plusOne([9,9,9])).toEqual([1,0,0,0]);
  });
});
