import { Solution } from './528-random-pick-with-weight';

describe('random pick with weight test case', () => {
  let obj;

  it('pickIndex for arr consist of 5 elements', () => {
    obj = new Solution([1]);
    expect(obj.pickIndex()).toEqual(0);
  });

  it('pickIndex for arr consist of 2 elements', () => {
    obj = new Solution([1, 3]);
    expect(obj.pickIndex(1)).toEqual(0);
    expect(obj.pickIndex(2)).toEqual(1);
    expect(obj.pickIndex(3)).toEqual(1);
    expect(obj.pickIndex(4)).toEqual(1);
  });

  it('pickIndex for arr consist of 5 elements', () => {
    obj = new Solution([2,4,1,5,3]);
    expect(obj.newWeights.length).toEqual(5);
    expect(obj.pickIndex(6)).toEqual(1);
    expect(obj.pickIndex(9)).toEqual(3);
  });

});
