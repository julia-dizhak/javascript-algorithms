import {
  // detectCapitalUse,
  //detectCapitalUseSubstr as detectCapitalUse,
  //detectCapitalUseCharacterByCharacter as detectCapitalUse,
  detectCapitalUseCharacterByCharacterImprove as detectCapitalUse
}  from './520-detect-capital';

describe('detect capital test case ', () => {
  it('edge case, length is 1', () => {
    expect(detectCapitalUse('a')).toBeTruthy();
  });

  it('string consist only capital', () => {
    expect(detectCapitalUse('USA')).toBeTruthy();
  });

  it('string consist only lowercase', () => {
    expect(detectCapitalUse('aaaa')).toBeTruthy();
  });

  it('string is valid', () => {
    expect(detectCapitalUse('Leetcode')).toBeTruthy();
    expect(detectCapitalUse('Aeetcode')).toBeTruthy();
  });

  it('string is not valid', () => {
    expect(detectCapitalUse('USAaaaa')).toBeFalsy();
    expect(detectCapitalUse('FLaG')).toBeFalsy();
    expect(detectCapitalUse('aLaGfrt')).toBeFalsy();
    expect(detectCapitalUse('aLTTTTTT')).toBeFalsy();
  });
});
