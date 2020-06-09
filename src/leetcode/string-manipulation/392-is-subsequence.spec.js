import {
  isSubsequence
} from './392-is-subsequence';

describe('find all anagrams', () => {
  it('if s is empty', () => {
    expect(isSubsequence('', 'ace')).toBeTruthy();
  });

  it('subsequence exist', () => {
    expect(isSubsequence('ace', 'abcde')).toBeTruthy();
    expect(isSubsequence('abc', 'ahbgdc')).toBeTruthy();
  });

  it('subsequence do not exist', () => {
    expect(isSubsequence('aec', 'abcde')).toBeFalsy();
    expect(isSubsequence('axc', 'ahbgdc')).toBeFalsy();
  });

});
