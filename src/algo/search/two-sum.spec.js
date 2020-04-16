import { twoSum } from './two-sum';

describe('two sum test case', () => {
  xit('empty array', () => {

  });

  it('array with target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([2, 7, 11, 15], 13)).toEqual([0, 2]);
  });

  // todo test throw soluiton
  xit('', () => {
    expect(twoSum([2, 7, 11, 15], 8)).toEqual();

  });
});

