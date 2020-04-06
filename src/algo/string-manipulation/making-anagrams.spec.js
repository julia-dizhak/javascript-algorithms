import { makingAnagrams } from './making-anagrams';

describe('makingAnagrams  test case', () => {
  xit('should throw Error with message if arguments are not strings', () => {
    // try {
    //     throwError();
    //     // Fail test if above expression doesn't throw anything.
    //     expect(makingAnagrams([], undefined)).toBe(false);
    // } catch (e) {
    //     expect(e.message).toBe("");
    // }
    expect(makingAnagrams([], undefined)).toThrowError(TypeError);
  });

  it('empty strings', () => {
    expect(makingAnagrams('', '')).toEqual('empty strings');
  });

  it('strings with different length are not anagrams', () => {
    expect(makingAnagrams('abba', 'bbaaa')).toBeFalsy();
  });

  it('strings are anagrams', () => {
    expect(makingAnagrams('earth', 'heart')).toBeTruthy();
    expect(makingAnagrams('silent', 'listen')).toBeTruthy();
  });

  it('strings are not anagrams', () => {
    expect(makingAnagrams('foo', 'bar')).toBeFalsy();
  });
});

