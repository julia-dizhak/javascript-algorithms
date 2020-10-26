import {
  // getRow, 
  getRowUseArr as getRow
} from './119-pascals-triangle-ii';

describe('pascals triangle return a row test case', () => {
  it('corner cases', () => {
    expect(getRow(0)).toEqual([1]);
  });

  it('rowIndex >= 1', () => {
    expect(getRow(1)).toEqual([1,1]);
    expect(getRow(2)).toEqual([1,2,1]);
    expect(getRow(3)).toEqual([1,3,3,1]);
  });
});
