import {
  permutations,
} from './46-print-all-permutations';

describe('print all permutations test case', () => {
  const permutations2 = [
    [1,2],
    [2,1]
  ];
  const permutations1 = [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,2,1],
    [3,1,2],
  ];

  it('edge cases', () => {
    expect(permutations([1])).toEqual([1]);
  });

  it('arr length more than 1', () => {
    expect(permutations([1,2])).toEqual(permutations2);
    expect(permutations([1,2,3])).toEqual(permutations1);
  });

});
