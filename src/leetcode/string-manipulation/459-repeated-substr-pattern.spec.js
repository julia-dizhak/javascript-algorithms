import {
  repeatedSubstringPattern,
  //repeatedSubstringPattern1 as repeatedSubstringPattern
} from './459-repeated-substr-pattern';

describe('repeatedSubstringPattern test case', () => {
  it('if str.length is 1', () => {
    expect(repeatedSubstringPattern('a')).toBeFalsy();
  });

  it('repeated substr pattern exists', () => {
    expect(repeatedSubstringPattern('abcabc')).toBeTruthy();
    expect(repeatedSubstringPattern('abcabcabcabc')).toBeTruthy();
    expect(repeatedSubstringPattern('abab')).toBeTruthy();
    expect(repeatedSubstringPattern('aaaaaa')).toBeTruthy();
    expect(repeatedSubstringPattern('aaa')).toBeTruthy();
  });

  it('repeated substr pattern does not exist', () => {
    expect(repeatedSubstringPattern('abck')).toBeFalsy();
    expect(repeatedSubstringPattern('aba')).toBeFalsy();
    expect(repeatedSubstringPattern('abb')).toBeFalsy();
  });

});
