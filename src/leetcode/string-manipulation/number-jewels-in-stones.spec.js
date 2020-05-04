import { numJewelsInStones, numJewelsInStonesBruteForce } from './number-jewels-in-stones';

describe('numJewelsInStones test case', () => {
  it('empty strings', () => {
    expect(numJewelsInStones('', '')).toEqual(0);
    expect(numJewelsInStones('a', '')).toEqual(0);
  });

  it('brute force solution', () => {
    expect(numJewelsInStonesBruteForce('aA', 'aAAbbbb')).toEqual(3);
    expect(numJewelsInStonesBruteForce('a', 'abbbb')).toEqual(1);
    expect(numJewelsInStones('z', 'ZZZZ')).toEqual(0);
  });

  it('two strings are not empty', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toEqual(3);
    expect(numJewelsInStones('z', 'ZZZZ')).toEqual(0);
  });
});
