import {
  //lengthOfLastWord,
  //lengthOfLastWord1 as lengthOfLastWord,
  //lengthOfLastWord2 as lengthOfLastWord,
  lengthOfLastWordUseRegex as lengthOfLastWord
} from './58-length-of-last-word';

describe('length of last word', () => {
  it('length equals to 0', () => {
    expect(lengthOfLastWord('')).toEqual(0);
    expect(lengthOfLastWord(' ')).toEqual(0);
    expect(lengthOfLastWord('    ')).toEqual(0);
  });

  it('length equals to 1', () => {
    expect(lengthOfLastWord(' a')).toEqual(1);
    expect(lengthOfLastWord(' a ')).toEqual(1);
    expect(lengthOfLastWord('a')).toEqual(1);
    expect(lengthOfLastWord('a ')).toEqual(1);
  });

  it('length is greater than 1', () => {
    expect(lengthOfLastWord(' a test  ')).toEqual(4);
    expect(lengthOfLastWord(' a test  ab ')).toEqual(2);
    expect(lengthOfLastWord('Hello World')).toEqual(5);
    expect(lengthOfLastWord('Hello World test1 test 1 234')).toEqual(3);
  });

});
