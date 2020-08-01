import {
  //maxProfitUseBruteForce as maxProfit,
  //maxProfit1 as maxProfit,
  maxProfit
}  from './121-best-time-to-buy-sell-stock';

describe('best buy and sell stock test case ', () => {
  it('profit exist', () => {
    expect(maxProfit([7,1,5,3,6,4])).toEqual(5);
  });

  it('profit does not exist', () => {
    expect(maxProfit([7,6,4,3,1])).toEqual(0);
  });
});
