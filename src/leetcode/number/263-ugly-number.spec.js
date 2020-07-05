import {
  //isUgly,
  isUglyGreatestDivide as isUgly
}  from './263-ugly-number';

describe('ugly number test case ', () => {
  it('number is ugly', () => {
    expect(isUgly(1)).toBeTruthy();
    expect(isUgly(6)).toBeTruthy();
    expect(isUgly(8)).toBeTruthy();
  });

  it('number is not ugly', () => {
    expect(isUgly(14)).toBeFalsy();
    expect(isUgly(21)).toBeFalsy();
    expect(isUgly(-2147483648)).toBeFalsy();
    expect(isUgly(0)).toBeFalsy();
  });
});
