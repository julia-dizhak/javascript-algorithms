import {
  //isPowerOfThree,
  //isPowerOfThreeIterative as isPowerOfThree,
  //isPowerOfThreeVariant1 as isPowerOfThree
  isPowerOfThreeVariant2 as isPowerOfThree
} from './326-power-of-three';

describe('power of 3 test case', () => {
  it('n is negative ', () => {
    expect(isPowerOfThree(-15)).toBeFalsy();
  });

  it('n is 0', () => {
    expect(isPowerOfThree(0)).toBeFalsy();
  });

  it('n is 1', () => {
    expect(isPowerOfThree(1)).toBeTruthy();
  });

  it('return true', () => {
    expect(isPowerOfThree(3)).toBeTruthy();
    expect(isPowerOfThree(9)).toBeTruthy();
    expect(isPowerOfThree(27)).toBeTruthy();
  });

  it('return false', () => {
    expect(isPowerOfThree(2)).toBeFalsy();
    expect(isPowerOfThree(4)).toBeFalsy();
    expect(isPowerOfThree(8)).toBeFalsy();
    expect(isPowerOfThree(45)).toBeFalsy();
    expect(isPowerOfThree(99)).toBeFalsy();
  });

});
