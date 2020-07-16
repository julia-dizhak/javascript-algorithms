import {
  //reverseWords,
  // reverseWords1 as reverseWords,
  reverseWords2 as reverseWords
} from './151-reverse-words';

describe('reverse words in a string', () => {
  it('string is null', () => {
    expect(reverseWords(null)).toEqual(null);
    expect(reverseWords('')).toEqual('');
  })

  it('string length is 1', () => {
    expect(reverseWords('t')).toEqual('t');
  });

  it('string is not empty', () => {
    expect(reverseWords('the sky is blue')).toEqual('blue is sky the');
    expect(reverseWords('is sky')).toEqual('sky is');
  });

  it('string with leading or trailing spaces', () => {
    expect(reverseWords('  hello world!  ')).toEqual('world! hello');
    expect(reverseWords('a good   example')).toEqual('example good a');
  });
});
