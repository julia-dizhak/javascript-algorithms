import { alternatingCharacters } from './alternating-characters';

describe('alternatingCharacters test case', () => {

  it('strings with equal letters', () => {
    expect(alternatingCharacters('AAAA')).toEqual(3);
    expect(alternatingCharacters('aaaaa')).toEqual(4);
    expect(alternatingCharacters('BBBBB')).toEqual(4);
    expect(alternatingCharacters('AAABBB')).toEqual(4);
  });

  it('strings with no deletions', () => {
    expect(alternatingCharacters('ABABABAB')).toEqual(0);
    expect(alternatingCharacters('BABABA')).toEqual(0);
  });
});

