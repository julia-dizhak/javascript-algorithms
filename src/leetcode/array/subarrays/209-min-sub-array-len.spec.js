import {
  minSubArrayLen,
  //minSubArrayLen1 as minSubArrayLen
} from './209-min-sub-array-len';

describe('minSubArrayLen test case', () => {
  it('min sub arr does not exist', () => {
    expect(minSubArrayLen(7, [1,2,3])).toEqual(0);
  });

  it('min sub arr exists', () => {
    expect(minSubArrayLen(6, [1,2,3])).toEqual(3);
    expect(minSubArrayLen(7, [2, 1, 5, 2, 3, 2])).toEqual(2);
    expect(minSubArrayLen(7, [2, 1, 5, 2, 8])).toEqual(1);
    expect(minSubArrayLen(8, [3, 4, 1, 1, 6])).toEqual(3);
  });
});
