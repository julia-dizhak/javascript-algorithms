import { balancedSum, balancedSumVariant1 } from './balanced-sum';

describe('balancedSums solution', () => {

  it('empty array', () => {
    expect(balancedSum([])).toEqual('YES');
  });

  it('one element in array', () => {
    expect(balancedSum([1])).toEqual('YES');
  });

  it('balancedSum while ', () => {
    const a = [5, 6, 8, 11];

    expect(balancedSum(a)).toEqual('YES');
    expect(balancedSum([1,2,3])).toEqual('NO');
    expect(balancedSum([1,2,3,3])).toEqual('YES');
    expect(balancedSum([0,0,2,0])).toEqual('NO');

    expect(balancedSum([2,0,0,0])).toEqual('YES');
  });

  it('balancedSum reduce ', () => {
    const a = [5, 6, 8, 11];

    expect(balancedSumVariant1(a)).toEqual('YES');
    expect(balancedSumVariant1([1,2,3])).toEqual('NO');
    expect(balancedSumVariant1([1,2,3,3])).toEqual('YES');
    expect(balancedSum([2,0,0,0])).toEqual('YES');
  });

});
