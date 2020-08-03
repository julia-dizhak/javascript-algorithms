import {
  //isPalindrome,
  //isPalindromeTwoPointers as isPalindrome,
  isPalindromeFixedString as isPalindrome
} from './125-valid-palindrome';

describe('valid palindrome test case ', () => {
  it('edge cases', () => {
    expect(isPalindrome('')).toBeTruthy();
    expect(isPalindrome('1')).toBeTruthy();
    expect(isPalindrome('a')).toBeTruthy();
    expect(isPalindrome(':')).toBeTruthy();
  });

  it('string is valid palindrome', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
    expect(isPalindrome(' cac:')).toBeTruthy();
    expect(isPalindrome('ab@a')).toBeTruthy();
    expect(isPalindrome('c#dc')).toBeTruthy();
    expect(isPalindrome('cac')).toBeTruthy();
  });

  it('string is not valid palindrome', () => {
    expect(isPalindrome('race a car')).toBeFalsy();
    expect(isPalindrome('i love code!')).toBeFalsy();
  });
});
