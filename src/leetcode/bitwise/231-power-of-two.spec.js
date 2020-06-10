import {
  //isPowerOfTwo,
  isPowerOfTwoIterative,
  isPowerOfTwoBitManipulation as isPowerOfTwo,
  //isPowerOfTwoShiftBit as isPowerOfTwo
} from './231-power-of-two';

describe('power of two test case', () => {
  it('n is negative ', () => {
    expect(isPowerOfTwo(-15)).toBeFalsy();
    expect(isPowerOfTwoIterative(-15)).toBeFalsy();
  });

  it('n is 0', () => {
    expect(isPowerOfTwo(0)).toBeFalsy();
    expect(isPowerOfTwoIterative(0)).toBeFalsy();
  });

  it('return true', () => {
    expect(isPowerOfTwo(2)).toBeTruthy();
    expect(isPowerOfTwo(4)).toBeTruthy();
    expect(isPowerOfTwo(8)).toBeTruthy();
    expect(isPowerOfTwo(16)).toBeTruthy();

    expect(isPowerOfTwoIterative(2)).toBeTruthy();
  });

  it('return false', () => {
    expect(isPowerOfTwo(3)).toBeFalsy();
    expect(isPowerOfTwo(6)).toBeFalsy();
    expect(isPowerOfTwo(10)).toBeFalsy();

    expect(isPowerOfTwoIterative(10)).toBeFalsy();
  });

});
