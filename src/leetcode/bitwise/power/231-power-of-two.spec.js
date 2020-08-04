import {
  //isPowerOfTwo,
  isPowerOfTwoIterative as isPowerOfTwo,
  // isPowerOfTwoBitManipulation,
  // isPowerOfTwoShiftBit,
  // isPowerOfTwoMath
} from './231-power-of-two';

describe('power of two test case', () => {
  it('n is negative ', () => {
    expect(isPowerOfTwo(-15)).toBeFalsy();
  });

  it('n is 0, n is 1', () => {
    expect(isPowerOfTwo(0)).toBeFalsy();
    expect(isPowerOfTwo(1)).toBeTruthy();
  });

  it('return true', () => {
    expect(isPowerOfTwo(2)).toBeTruthy();
    expect(isPowerOfTwo(4)).toBeTruthy();
    expect(isPowerOfTwo(8)).toBeTruthy();
    expect(isPowerOfTwo(16)).toBeTruthy();
  });

  it('return false', () => {
    expect(isPowerOfTwo(3)).toBeFalsy();
    expect(isPowerOfTwo(6)).toBeFalsy();
    expect(isPowerOfTwo(10)).toBeFalsy();
  });

});
