import { isEven, countBs, countChar } from './is-even';

describe('isEven test case', () => {
  it('odd and even positive', () => {
    expect(isEven(50)).toBeTruthy();
    expect(isEven(75)).toBeFalsy();
  })

  it('odd and even negative', () => {
    expect(isEven(-50)).toBeTruthy();
    expect(isEven(-75)).toBeFalsy();
  })
});

describe('beans counting', () => {
  it('countBs', () => {
    expect(countBs("abcd")).toEqual(0);
    expect(countBs("BBC")).toEqual(2);
    expect(countBs("Bbcdb")).toEqual(1);
  })

  it('countChar', () => {
    expect(countChar("kakkerlak", "k")).toEqual(4);
    expect(countChar("kakkerlak", "b")).toEqual(0);
  })
});
