import {
  //maxProfitUseBruteForce as maxProfit,
  //maxProfit1 as maxProfit,
  //maxProfit,
  //maxProfitFindMinPrice as maxProfit,
  //maxProfitDP as maxProfit,
  //maxProfitOnePass as maxProfit,
  maxProfitOnePass1 as maxProfit
}  from './121-best-time-to-buy-sell-stock';

describe('best buy and sell stock test case ', () => {
  it('edge cases', () => {
    expect(maxProfit([])).toEqual(0);
    expect(maxProfit([1])).toEqual(0);
  });

  it('profit exist', () => {
    expect(maxProfit([7,1,5,3,6,4])).toEqual(5);
  });

  it('profit does not exist', () => {
    expect(maxProfit([7,6,4,3,1])).toEqual(0);
  });
});
