import {
  //numJewelsInStones,
  numJewelsInStonesBruteForce as numJewelsInStones
} from './771-number-jewels-in-stones';

describe('numJewelsInStones test case', () => {
  it('empty strings', () => {
    expect(numJewelsInStones('', '')).toEqual(0);
    expect(numJewelsInStones('a', '')).toEqual(0);
  });

  it('brute force solution', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toEqual(3);
    expect(numJewelsInStones('a', 'abbbb')).toEqual(1);
    expect(numJewelsInStones('z', 'ZZZZ')).toEqual(0);
  });
});
