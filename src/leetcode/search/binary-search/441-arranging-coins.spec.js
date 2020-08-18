import {
  //arrangeCoins,
  // arrangeCoinsMath as arrangeCoins,
  // arrangeCoins2 as arrangeCoins,
  //arrangeCoins1 as arrangeCoins,
  arrangeCoinsMath1 as arrangeCoins
} from './441-arranging-coins';

describe('arranging coins test case', () => {
  it('n === 1', () => {
    expect(arrangeCoins(1)).toEqual(1);
  });

  it('n > 1', () => {
    expect(arrangeCoins(2)).toEqual(1);
    expect(arrangeCoins(3)).toEqual(2);
    expect(arrangeCoins(4)).toEqual(2);
    expect(arrangeCoins(5)).toEqual(2);
    expect(arrangeCoins(6)).toEqual(3);
    expect(arrangeCoins(8)).toEqual(3);
  });
});
