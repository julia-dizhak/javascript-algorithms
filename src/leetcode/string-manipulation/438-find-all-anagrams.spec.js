import {
  compareDict,

  findAnagramsUseTwoHash,
  findAnagrams,
  findAnagramsUseWhileLoop
} from './438-find-all-anagrams';

describe('find all anagrams', () => {
  it('s is empty', () => {
    expect(findAnagramsUseTwoHash('', 'ab')).toEqual([]);
    expect(findAnagrams('', 'ab')).toEqual([]);
  });

  it('s is null, undefined', () => {
    expect(findAnagramsUseTwoHash(null, 'ab')).toEqual([]);
    expect(findAnagrams(null, 'ab')).toEqual([]);
  });

  it('strings are equal', () => {
    expect(findAnagramsUseTwoHash('ab', 'ab')).toEqual([0]);
    expect(findAnagrams('ab', 'ab')).toEqual([0]);
  });

  it('there is no anagrams', () => {
    expect(findAnagramsUseTwoHash('abab', 'kf')).toEqual([]);
    expect(findAnagrams('abab', 'kf')).toEqual([]);
  });

  it('there is 1 anagram in string', () => {
    expect(findAnagramsUseTwoHash('jback', 'ab')).toEqual([1]);
    expect(findAnagrams('jback', 'ab')).toEqual([1]);
    expect(findAnagramsUseWhileLoop('jback', 'ab')).toEqual([1]);
  });

  it('there are 2 anagrams in string', () => {
    expect(findAnagramsUseTwoHash('cbaebabacd', 'abc')).toEqual([0,6]);
    expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0,6]);
    expect(findAnagramsUseWhileLoop('cbaebabacd', 'abc')).toEqual([0,6]);
  });

  it('there are 3 anagrams in string', () => {
    expect(findAnagramsUseTwoHash('abab', 'ab')).toEqual([0,1,2]);
    expect(findAnagrams('abab', 'ab')).toEqual([0,1,2]);
  });
});

describe('compare 2 hashes', () => {
  it('hashes are equal', () => {
    const a = {
      a: 1,
      b: 1
    };
    const b = {
      b: 1,
      a: 1
    };

    expect(compareDict(a,b)).toBeTruthy();
  });

  it('hashes are not equal', () => {
    expect(compareDict({a: 1, b: 1}, {b: 1, a: 1, c: 2})).toBeFalsy();
  });
});
