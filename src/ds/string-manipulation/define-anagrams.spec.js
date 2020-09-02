import { defineAnagrams } from './define-anagrams';

describe('makingAnagrams test case', () => {
  it('should error if arguments are not strings', () => {
    expect(() => defineAnagrams(undefined, undefined)).toThrow();
  });

  it('empty strings', () => {
    expect(defineAnagrams('', '')).toEqual('empty strings');
  });

  it('strings with different length are not anagrams', () => {
    expect(defineAnagrams('abba', 'bbaaa')).toBeFalsy();
  });

  it('strings are anagrams', () => {
    expect(defineAnagrams('eartH', 'heart')).toBeTruthy();
    expect(defineAnagrams('silent', 'Listen')).toBeTruthy();
    expect(defineAnagrams('silent', ' lis ten')).toBeTruthy();
  });

  it('strings are not anagrams', () => {
    expect(defineAnagrams('foo', 'bar')).toBeFalsy();
    expect(defineAnagrams('foo  K', 'barfig')).toBeFalsy();
  });
});
