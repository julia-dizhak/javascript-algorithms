import {
  isEven,
  isOdd
} from './check-if-number-even-or-odd';

describe('isEven test case', () => {
  it('is even', () => {
    expect(isEven(10)).toBeTruthy();
    expect(isEven(2)).toBeTruthy();
    expect(isEven(0)).toBeTruthy();

    expect(isOdd(10)).toBeFalsy();
    expect(isOdd(2)).toBeFalsy();
    expect(isOdd(0)).toBeFalsy();
  });

  it('is odd', () => {
    expect(isEven(1)).toBeFalsy();
    expect(isEven(13)).toBeFalsy();
    expect(isEven(11)).toBeFalsy();

    expect(isOdd(1)).toBeTruthy();
    expect(isOdd(13)).toBeTruthy();
    expect(isOdd(11)).toBeTruthy();
  });
});
