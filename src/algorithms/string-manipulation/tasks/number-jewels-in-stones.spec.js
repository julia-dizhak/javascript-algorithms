import { numJewelsInStones } from './number-jewels-in-stones';

describe('numJewelsInStones test case', () => {
  it('two strings are not empty', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toEqual(3);
  })
});
