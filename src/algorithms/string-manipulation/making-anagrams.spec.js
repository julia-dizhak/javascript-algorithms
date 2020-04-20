import { makingAnagrams } from './making-anagrams';

describe('makingAnagrams test case', () => {

  it('strings with equal length', () => {
    expect(makingAnagrams('cde', 'dcf')).toEqual(2);
    expect(makingAnagrams('cde', 'abc')).toEqual(4);
  });

  it('strings with different length', () => {
    expect(makingAnagrams('showman', 'woman')).toEqual(2);
    expect(makingAnagrams('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')).toEqual(30);
  });
});

