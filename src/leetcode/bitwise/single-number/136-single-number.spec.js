import {
  singleNumber
} from './136-single-number';

describe('single number test case ', () => {
  it('only one element distinct in the array', () => {
    expect(singleNumber([2,2,1])).toEqual(1);
    expect(singleNumber([4,1,2,1,2])).toEqual(4);
    expect(singleNumber([0,1,1,2,0,2,3])).toEqual(3);
  });
});
