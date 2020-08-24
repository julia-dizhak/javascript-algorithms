import {
  //longestPalindrome,
  longestPalindromeUseHash as longestPalindrome,

  //longestPalindromeUseGreedy as longestPalindrome,
  //longestPalindromeUseGreedyVariant1 as longestPalindrome
} from './406-longest-palindrome';

describe('longest palindrome test case', () => {
  it('edge case', () => {
    expect(longestPalindrome('a')).toEqual(1);
    expect(longestPalindrome(undefined)).toEqual(0);
  });

  it('longest palindrome', () => {
    expect(longestPalindrome('aA')).toEqual(1);
    expect(longestPalindrome('bb')).toEqual(2);
    expect(longestPalindrome('abccccdd')).toEqual(7);
    expect(longestPalindrome('aAAAAAbccccdd')).toEqual(11);
    expect(longestPalindrome('aAbb')).toEqual(3);
  });
});
