import { luckBalance, exp } from './luck-balance';

describe('greedy algo: luckBalance test case', () => {

  it('luckBalance count', () => {
    const a = [
      [5, 1],
      [2, 1],
      [1, 1],
      [8, 1],
      [10, 0],
      [5, 0]
    ];

    const b = [
      [13, 1],
      [10, 1],
      [9, 1],
      [8, 1],
      [13, 1],
      [12, 1],
      [18, 1],
      [13, 1]
    ];

    expect(luckBalance(2, [[5, 1], [1, 1], [4,0]])).toEqual(10);
    expect(luckBalance(1, [[5, 1], [1, 1], [4,0]])).toEqual(8);

    expect(luckBalance(3, a)).toEqual(29);
    expect(luckBalance(5, b)).toEqual(42);
  });

});
