import {
  maxProfit,
} from './122-best-time-to-buy-sell-stock-ii';

describe('best buy and sell stock 2 test case ', () => {
  it('edge cases', () => {
    expect(maxProfit([])).toEqual(0);
    expect(maxProfit([1])).toEqual(0);
  });

  it('profit exist', () => {
    expect(maxProfit([7,1,5,3,6,4])).toEqual(7);
    expect(maxProfit([1,2,3,4,5])).toEqual(4);
  });

  it('no transaction is done', () => {
    expect(maxProfit([7,6,4,3,1])).toEqual(0);
  });
});
