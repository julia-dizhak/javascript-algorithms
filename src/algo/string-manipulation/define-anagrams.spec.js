import { defineAnagrams } from './define-anagrams';

describe('makingAnagrams  test case', () => {
  xit('should throw Error with message if arguments are not strings', () => {
    // try {
    //     throwError();
    //     // Fail test if above expression doesn't throw anything.
    //     expect(makingAnagrams([], undefined)).toBe(false);
    // } catch (e) {
    //     expect(e.message).toBe("");
    // }
    expect(defineAnagrams([], undefined)).toThrowError(TypeError);
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
