import {
  isPowerOfFour,
  //isPowerOfFourIterative as isPowerOfFour,
  //isPowerOfFourVariant2 as isPowerOfFour
} from './342-power-of-four';

describe('power of two test case', () => {
  it('n is negative ', () => {
    expect(isPowerOfFour(-15)).toBeFalsy();
  });

  it('n is 0', () => {
    expect(isPowerOfFour(0)).toBeFalsy();
  });

  it('n is 1', () => {
    expect(isPowerOfFour(1)).toBeTruthy();
  });

  it('return true', () => {
    expect(isPowerOfFour(4)).toBeTruthy();
    expect(isPowerOfFour(64)).toBeTruthy();
    expect(isPowerOfFour(16)).toBeTruthy();
  });

  it('return false', () => {
    expect(isPowerOfFour(2)).toBeFalsy();
    expect(isPowerOfFour(3)).toBeFalsy();
    expect(isPowerOfFour(8)).toBeFalsy();
    expect(isPowerOfFour(10)).toBeFalsy();
    expect(isPowerOfFour(60)).toBeFalsy();
  });

});
