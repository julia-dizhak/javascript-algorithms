import {
  angleClock
}  from './1344-angle-between-hands-of-clock';

describe('define an angle between hands of clock test case', () => {
  it('angle edge cases', () => {
    expect(angleClock(12, 0)).toEqual(0);
    expect(angleClock(0, 0)).toEqual(0);
    expect(angleClock(1, 0)).toEqual(30);
    expect(angleClock(0, 1)).toEqual(5.5);
  });

  it('return smaller angle', () => {
    expect(angleClock(12, 30)).toEqual(165);
    expect(angleClock(5, 15)).toEqual(67.5);
    expect(angleClock(8, 15)).toEqual(157.5);
    expect(angleClock(3, 30)).toEqual(75);
    expect(angleClock(3, 15)).toEqual(7.5);
    expect(angleClock(4, 50)).toEqual(155);
  });
});
