import {
  lengthOfLongestSubstring,
  // lengthOfLongestSubstringBruteForce as lengthOfLongestSubstring
} from './3-longest-substring-without-repeating-characters';

describe('lengthOfLongestSubstring test case', () => {
  it('str is null', () => {
    expect(lengthOfLongestSubstring('')).toEqual(0);
  });

  it('str consist longest substring', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
    expect(lengthOfLongestSubstring('abckbkbabcbb')).toEqual(4);
    expect(lengthOfLongestSubstring('aaaaabbbbb')).toEqual(2);
  });

  it('substr from 1 element', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
    expect(lengthOfLongestSubstring('aaaaa')).toEqual(1);
  });

  it('substr length equals 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
  });

});
