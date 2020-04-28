import { power, powerUsingRecursion } from './power';

describe('power test case', () => {
  it('if second argument is undefined', () => {
    expect(power(4)).toEqual(16);
    expect(power(4,3)).toEqual(64);
  })

  it('case with base equals 0 and 1', () => {
    expect(power(2,0)).toEqual(1);
    expect(power(2,1)).toEqual(2);
  })

  it('power with loop', () => {
    expect(power(2,10)).toEqual(1024);
    expect(power(2,2)).toEqual(4);
    expect(power(3,3)).toEqual(27);
  })

  it('power with recursion', () => {
    expect(powerUsingRecursion(2,10)).toEqual(1024);
    expect(powerUsingRecursion(2,2)).toEqual(4);
    expect(powerUsingRecursion(3,3)).toEqual(27);
  })
});
