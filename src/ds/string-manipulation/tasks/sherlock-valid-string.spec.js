import { isValid, count } from './sherlock-valid-string';

describe('sherlock valid string test case', () => {

  it('valid strings with 1 count symbol', () => {
    expect(isValid('abc')).toEqual('Yes');
  });

  it('valid strings', () => {
    expect(isValid('abcc')).toEqual('Yes');
    expect(isValid('abcdefghhgfedecba')).toEqual('Yes');
  });

  it('unvalid strings', () => {
    expect(isValid('aabbcd')).toEqual('No');
    expect(isValid('abccc')).toEqual('No');
  });

  it('string is equal to aabbc', () => {
    expect(isValid('aabbc')).toEqual('Yes')
  })
});

describe('count values test case', () => {

  it('value is present in array', () => {
    expect(count([2,2,3,2,2,3,2,2,1,0], 2)).toEqual(6);
  });

  it('value is not present in array', () => {
    expect(count([2,2,3,2,1,10], 0)).toEqual(0);
  });
});
