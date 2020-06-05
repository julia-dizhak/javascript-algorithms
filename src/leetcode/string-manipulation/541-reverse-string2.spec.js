import { reverseStr } from './541-reverse-string2';

describe('reverse str 2 test case', () => {
  it('length is 1', () => {
    expect(reverseStr('a',1)).toEqual('a');
  });

  it('long string, k=2', () => {
    expect(reverseStr('abcdefg',2)).toEqual('bacdfeg');
  });

  it('long string, k=1', () => {
    expect(reverseStr('abcdefg',1)).toEqual('abcdefg');
  });

});
