import { defineAnagrams } from './define-anagrams';

describe('makingAnagrams test case', () => {
  it('should error if arguments are not strings', () => {
    expect(() => defineAnagrams(undefined, undefined)).toThrow()
  });

  it('empty strings', () => {
    expect(defineAnagrams('', '')).toEqual('empty strings');
  });

  it('strings with different length are not anagrams', () => {
    expect(defineAnagrams('abba', 'bbaaa')).toBeFalsy();
  });

  it('strings are anagrams', () => {
    expect(defineAnagrams('earth', 'heart')).toBeTruthy();
    expect(defineAnagrams('silent', 'listen')).toBeTruthy();
  });

  it('strings are not anagrams', () => {
    expect(defineAnagrams('foo', 'bar')).toBeFalsy();
  });
});
