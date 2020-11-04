import {
  //maxPower,
  maxPowerUseArr as maxPower
} from './1446-consecutive-characters';

describe('define Consecutive Characters test case', () => {
  it('', () => {
    expect(maxPower('leetcode')).toEqual(2);
    expect(maxPower('abbcccddddeeeeedcba')).toEqual(5);
    expect(maxPower('triplepillooooow')).toEqual(5);
    expect(maxPower('hooraaaaaaaaaaay')).toEqual(11);
  });

  it('all characters are unique', () => {
    expect(maxPower('tourist')).toEqual(1);
  });
});
