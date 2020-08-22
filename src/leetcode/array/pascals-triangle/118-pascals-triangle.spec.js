import {
  //generate,
  generate1 as generate,
  //generateUseRecursion as generate,
} from './118-pascals-triangle';
import {
  getRow
} from './119-pascals-triangle-ii';

describe('pascals triangle test case', () => {
  it('corner cases', () => {
    expect(generate(0)).toEqual([]);
    expect(generate(1)).toEqual([[1]]);
  });

  it('numsRows > 1', () => {
    expect(generate(2)).toEqual([[1], [1,1]]);
    expect(generate(3)).toEqual([[1], [1,1], [1,2,1]]);
    expect(generate(4)).toEqual([[1], [1,1], [1,2,1], [1,3,3,1]]);
    expect(generate(5)).toEqual([[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]);
  });

  it('numsRows > 1', () => {
    expect(getRow(0)).toEqual([1]);
    expect(getRow(1)).toEqual([1,1]);
    expect(getRow(2)).toEqual([1,2,1]);
    expect(getRow(3)).toEqual([1,3,3,1]);
    expect(getRow(4)).toEqual([1,4,6,4,1]);
  });
});
