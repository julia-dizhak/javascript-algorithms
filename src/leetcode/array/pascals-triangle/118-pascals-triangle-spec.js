import {
  generate
} from './118-pascals-triangle';

describe('pascals triangle test case', () => {
  it('corner cases', () => {
    expect(generate(0)).toEqual(0);
    expect(generate([1])).toEqual([1]);
  });

  it('numsRows > 1', () => {
    expect(generate(2)).toEqual([[1], [1,1]]);
    expect(generate(3)).toEqual([[1], [1,1], [1,2,1]]);
    expect(generate(4)).toEqual([[1], [1,1], [1,2,1], [1,3,3,1]]);
    expect(generate(5)).toEqual([[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]);
  });
});
