import { multiplier } from './multiplier';

describe('multiplier test case', () => {
  it('multiplier as twice', () => {
    var twice = multiplier(2);
    expect(twice(5)).toEqual(10);
  })

  it('multiplier as three times', () => {
    var threeTime = multiplier(3);
    expect(threeTime(5)).toEqual(15);
  })
});
