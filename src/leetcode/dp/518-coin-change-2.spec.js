import { change } from './518-coin-change-2';

describe('change test case', () => {
  it('if amount is 0', () => {
    expect(change(0, [1, 2, 5])).toEqual(1);
  });

  it('array consist 3 coins', () => {
    expect(change(12, [1, 2, 5])).toEqual(13);
    expect(change(5, [1, 2, 5])).toEqual(4);
  });

  it('array consist 1 coin', () => {
    expect(change(10, [10])).toEqual(1);
    expect(change(5, [1, 2, 5])).toEqual(4);
  });

  it('combinations does not exist', () => {
    expect(change(3, [2])).toEqual(0);
  });
});
