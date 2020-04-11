import { getMinimumCost } from './get-minimum-cost';

describe('getMinimumCost test case', () => {

  it('getMinimumCost', () => {
    expect(getMinimumCost(3, [2,5,6])).toEqual(13);
  })
});

