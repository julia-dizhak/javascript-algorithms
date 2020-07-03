import {
  prisonAfterNDays
} from './957-prison-cells-after-N-days';

describe('prisonAfterNDays test case', () => {
  it('cells is [], N is 0', () => {
    expect(prisonAfterNDays([], 7)).toEqual([]);
    expect(prisonAfterNDays([1,0,0,1,0,0,1,0], 0)).toEqual([1,0,0,1,0,0,1,0]);
  });

  it('input exist', () => {
    expect(prisonAfterNDays([0,1,0,1,1,0,0,1], 7)).toEqual([0,0,1,1,0,0,0,0]);
    expect(prisonAfterNDays([0,1,0,1,1,0,0,1], 15)).toEqual([0,1,1,0,0,0,0,0]);
    expect(prisonAfterNDays([1,0,0,1,0,0,1,0], 1000000000)).toEqual([0,0,1,1,1,1,1,0]);
  });

});
